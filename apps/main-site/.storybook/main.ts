import { rootMain } from '../../../.storybook/main';
import type { StorybookViteConfig } from '@storybook/builder-vite';
// import type { StorybookConfig, Options } from '@storybook/core-common'; 

const config: StorybookViteConfig = {
  ...rootMain,

  core: { ...rootMain.core, builder: '@storybook/builder-vite' },

  stories: [
    ...rootMain.stories,
    '../src/app/**/*.stories.mdx',
    '../src/app/**/*.stories.@(js|jsx|ts|tsx)',
  ],
  addons: [...(rootMain.addons || []), '@nrwl/react/plugins/storybook'],
  viteFinal: async (config: any, { configType }: any) => {
    if (configType === 'DEVELOPMENT') {
      // Your development configuration goes here
    }
    if (configType === 'PRODUCTION') {
      // Your production configuration goes here.
      // why add it? https://medium.com/@mcwinnerwebdeveloper/setting-up-vue-storybook-with-vite-to-build-a-fintech-ui-library-c10e51d0d530
      config.base = '/storybook/';
    }
    return config;
  },
};

module.exports = config;
