<template>
  <Teleport to="body">
    <div v-if="shouldShow" class="pwa-install">
      <button
        class="pwa-install__action"
        type="button"
        aria-label="添加到桌面"
        @click="handleInstall"
      >
        添加到桌面
      </button>
      <button
        class="pwa-install__close"
        type="button"
        aria-label="关闭安装提示"
        @click="dismissPrompt"
      >
        ×
      </button>
    </div>
  </Teleport>
</template>

<script setup lang="ts">
import { computed, onBeforeUnmount, onMounted, ref } from 'vue';

type BeforeInstallPromptEvent = Event & {
  prompt: () => Promise<void>;
  userChoice: Promise<{ outcome: 'accepted' | 'dismissed'; platform: string }>;
};

const deferredPrompt = ref<BeforeInstallPromptEvent | null>(null);
const canInstall = ref(false);
const hideUntil = ref(0);
const HIDE_KEY = 'pwa-install-hide-until';
const HIDE_DAYS = 7;
const shouldShow = computed(
  () => canInstall.value && hideUntil.value <= Date.now(),
);

const handleBeforeInstallPrompt = (event: Event) => {
  event.preventDefault();
  deferredPrompt.value = event as BeforeInstallPromptEvent;
  canInstall.value = true;
};

const handleAppInstalled = () => {
  deferredPrompt.value = null;
  canInstall.value = false;
  hideUntil.value = 0;
  try {
    window.localStorage.removeItem(HIDE_KEY);
  } catch {
    // ignore storage errors
  }
};

const handleInstall = async () => {
  if (!deferredPrompt.value) return;
  await deferredPrompt.value.prompt();
  await deferredPrompt.value.userChoice;
  deferredPrompt.value = null;
  canInstall.value = false;
};

const dismissPrompt = () => {
  const until = Date.now() + HIDE_DAYS * 24 * 60 * 60 * 1000;
  hideUntil.value = until;
  try {
    window.localStorage.setItem(HIDE_KEY, String(until));
  } catch {
    // ignore storage errors
  }
};

onMounted(() => {
  try {
    const savedUntil = Number(window.localStorage.getItem(HIDE_KEY));
    if (!Number.isNaN(savedUntil)) {
      hideUntil.value = savedUntil;
    }
  } catch {
    // ignore storage errors
  }
  window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
  window.addEventListener('appinstalled', handleAppInstalled);
});

onBeforeUnmount(() => {
  window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
  window.removeEventListener('appinstalled', handleAppInstalled);
});
</script>

<style scoped>
.pwa-install {
  position: fixed;
  right: 16px;
  bottom: 16px;
  z-index: 9999;
  display: inline-flex;
  align-items: center;
  gap: 8px;
}

.pwa-install__action {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 10px 14px;
  border-radius: 999px;
  border: 1px solid rgba(255, 255, 255, 0.12);
  background: var(--vp-c-brand-1, #3eaf7c);
  color: #fff;
  font-size: 14px;
  font-weight: 600;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.25);
  cursor: pointer;
}

.pwa-install__action:hover {
  background: var(--vp-c-brand-2, #2f9f72);
}

.pwa-install__action:active {
  transform: translateY(1px);
}

.pwa-install__close {
  width: 32px;
  height: 32px;
  border-radius: 999px;
  border: 1px solid rgba(148, 163, 184, 0.4);
  background: rgba(15, 23, 42, 0.85);
  color: #e2e8f0;
  font-size: 18px;
  line-height: 1;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
}

.pwa-install__close:hover {
  background: rgba(15, 23, 42, 0.95);
}

@media (max-width: 640px) {
  .pwa-install {
    right: 12px;
    bottom: 12px;
  }

  .pwa-install__action {
    padding: 9px 12px;
    font-size: 13px;
  }

  .pwa-install__close {
    width: 30px;
    height: 30px;
    font-size: 16px;
  }
}
</style>
