#!/usr/bin/env node
'use strict';

const fs = require('fs');
const path = require('path');

const targets = process.argv.slice(2);
const roots = targets.length > 0 ? targets : ['docs'];

function isMarkdownFile(filePath) {
  return filePath.toLowerCase().endsWith('.md');
}

function listMarkdownFiles(targetPath) {
  const files = [];
  if (!fs.existsSync(targetPath)) {
    return files;
  }

  const stat = fs.statSync(targetPath);
  if (stat.isFile()) {
    if (isMarkdownFile(targetPath)) {
      files.push(targetPath);
    }
    return files;
  }

  if (!stat.isDirectory()) {
    return files;
  }

  const entries = fs.readdirSync(targetPath, { withFileTypes: true });
  for (const entry of entries) {
    const fullPath = path.join(targetPath, entry.name);
    if (entry.isDirectory()) {
      files.push(...listMarkdownFiles(fullPath));
    } else if (entry.isFile() && isMarkdownFile(fullPath)) {
      files.push(fullPath);
    }
  }

  return files;
}

function getFenceInfo(trimmedLine) {
  if (!trimmedLine) return null;
  const fenceChar = trimmedLine[0];
  if (fenceChar !== '`' && fenceChar !== '~') return null;
  let count = 0;
  while (trimmedLine[count] === fenceChar) count += 1;
  if (count < 3) return null;
  return { fenceChar, fenceLen: count };
}

function processFile(filePath) {
  const content = fs.readFileSync(filePath, 'utf8');
  const newline = content.includes('\r\n') ? '\r\n' : '\n';
  const lines = content.split(/\r?\n/);

  let frontmatterChecked = false;
  let inFrontmatter = false;
  let inCodeFence = false;
  let fenceChar = '';
  let fenceLen = 0;

  let removed = 0;
  const output = [];

  for (const line of lines) {
    const trimmed = line.trim();

    if (!frontmatterChecked) {
      if (trimmed === '') {
        output.push(line);
        continue;
      }
      if (trimmed === '---') {
        frontmatterChecked = true;
        inFrontmatter = true;
        output.push(line);
        continue;
      }
      frontmatterChecked = true;
    }

    if (inFrontmatter) {
      output.push(line);
      if (trimmed === '---') {
        inFrontmatter = false;
      }
      continue;
    }

    const fence = getFenceInfo(trimmed);
    if (fence) {
      if (!inCodeFence) {
        inCodeFence = true;
        fenceChar = fence.fenceChar;
        fenceLen = fence.fenceLen;
      } else if (fence.fenceChar === fenceChar && fence.fenceLen >= fenceLen) {
        inCodeFence = false;
        fenceChar = '';
        fenceLen = 0;
      }
      output.push(line);
      continue;
    }

    if (!inCodeFence && trimmed === '---') {
      removed += 1;
      continue;
    }

    output.push(line);
  }

  const nextContent = output.join(newline);
  if (nextContent !== content) {
    fs.writeFileSync(filePath, nextContent, 'utf8');
  }

  return removed;
}

let totalFiles = 0;
let changedFiles = 0;
let removedLines = 0;

for (const root of roots) {
  const files = listMarkdownFiles(root);
  for (const file of files) {
    totalFiles += 1;
    const removed = processFile(file);
    if (removed > 0) {
      changedFiles += 1;
      removedLines += removed;
    }
  }
}

if (totalFiles === 0) {
  console.log('No markdown files found.');
  process.exit(0);
}

console.log(`Processed ${totalFiles} file(s). Updated ${changedFiles}. Removed ${removedLines} line(s).`);
