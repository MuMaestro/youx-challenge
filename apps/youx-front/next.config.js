//@ts-check

// eslint-disable-next-line @typescript-eslint/no-var-requires
const { composePlugins, withNx } = require('@nx/next');

/**
 * @type {import('@nx/next/plugins/with-nx').WithNxOptions}
 **/
const nextConfig = {
	async rewrites() {
		return [
			{
				source: '/api/auth/:path*',
				destination: 'http://localhost:3001/api/auth/:path*',
			},
			{
				source: '/api/profile/:path*',
				destination: 'http://localhost:3001/api/profile/:path*',
			}
		]
	},
	nx: {
		svgr: true,
	},
};

const plugins = [
	withNx,
];

module.exports = composePlugins(...plugins)(nextConfig);
