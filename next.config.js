/** @type {import('next').NextConfig} */
const nextConfig = {
	webpack: (config, { isServer }) => {
		if (!isServer) {
			config.module.rules.push({
				test: /\.(gltf)$/,
				use: [
					{
						loader: "url-loader",
						options: {
							limit: 10000, // Adjust file size limit as needed
						},
					},
				],
			})
		}
		return config
	},
}

module.exports = nextConfig
