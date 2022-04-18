/**
 * @type {import('@remix-run/dev').AppConfig}
 */
const config = {
	serverBuildTarget: 'cloudflare-pages',
	server: './server.js',
	devServerBroadcastDelay: 1000,
	ignoredRouteFiles: ['.*'],
};

// eslint-disable-next-line unicorn/prefer-module
module.exports = config;
