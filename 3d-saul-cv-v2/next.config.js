/** @type {import('next').NextConfig} */
const nextConfig = {
    webpack: (config) => {
      config.module.rules.push({
        test: /\.(mp3)$/,
        use: {
          loader: 'file-loader',
          options: {
            name: '[name].[ext]',
            outputPath: 'static/sounds/', // Directorio de salida para los archivos de audio
            publicPath: '/_next/static/sounds/', // URL pública para acceder a los archivos de audio
          },
        },
      });
  
      return config;
    },
  };
  
  module.exports = nextConfig;
