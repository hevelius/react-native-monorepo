const path = require('path');
const {getDefaultConfig, mergeConfig} = require('@react-native/metro-config');

/**
 * Metro configuration
 * https://reactnative.dev/docs/metro
 *
 * @type {import('metro-config').MetroConfig}
 */

// Add the root of the monorepo to the watch folders
const config = {
  watchFolders: [path.resolve(__dirname, '../../')],
};

module.exports = mergeConfig(getDefaultConfig(__dirname), config);
