import { h } from 'vue';
import type { EnhanceAppContext } from 'vitepress';
import DefaultTheme from 'vitepress/theme';
import vitepressNprogress from 'vitepress-plugin-nprogress';
import 'vitepress-plugin-nprogress/lib/css/index.css';
import { enhanceAppWithTabs } from 'vitepress-plugin-tabs/client';
import { registerSW } from 'virtual:pwa-register';
import InstallPrompt from './InstallPrompt.vue';

export default {
  ...DefaultTheme,
  Layout: () =>
    h(DefaultTheme.Layout, null, {
      'layout-bottom': () => h(InstallPrompt),
    }),
  enhanceApp(ctx: EnhanceAppContext) {
    DefaultTheme.enhanceApp?.(ctx);
    vitepressNprogress(ctx);
    enhanceAppWithTabs(ctx.app);
    if (typeof window !== 'undefined') {
      registerSW({ immediate: true });
    }
  },
};
