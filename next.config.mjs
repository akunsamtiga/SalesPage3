/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      domains: [
        'images.unsplash.com',    // Untuk gambar dari Unsplash
        'randomuser.me',          // Untuk avatar dari RandomUser
        'source.unsplash.com',    // Alternatif URL Unsplash
        'img.freepik.com'         // Untuk gambar dari Freepik (jika diperlukan)
      ],
    },
  };
  
  export default nextConfig;