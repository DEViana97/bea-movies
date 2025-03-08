// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   compiler: {
//     styledComponents: true,
//   }
// };

// export default nextConfig;

const nextConfig = {  
  reactStrictMode: false, // Ativa o Strict Mode para ajudar na detecção de problemas
  compiler: {
    styledComponents: true, // Ativa suporte ao styled-components
  },
  // images: {
  //   domains: ['example.com', 'cdn.example.com'], // Permite carregar imagens de domínios externos
  // },
  // env: {
  //   API_URL: 'https://api.example.com', // Variáveis de ambiente acessíveis no lado cliente
  // },
  // async rewrites() {
  //   return [
  //     {
  //       source: '/api/:path*',
  //       destination: 'https://external-api.example.com/:path*', // Reescreve rotas da API para um endpoint externo
  //     },
  //   ];
  // },
};

export default nextConfig;