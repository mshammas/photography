// Dynamically load images into the gallery
const imagePaths = [
  'images/photo1.webp',
  'images/photo2.webp',
  'images/photo3.webp',
  'images/photo4.webp',
];
const gallerySection = document.querySelector('.gallery');
gallerySection.innerHTML = imagePaths
  .map((src, index) => `
    <div class="image-wrapper" style="animation-delay: ${index * 100}ms">
      <img src="${src}" alt="Shammas Photography ${index + 1}" loading="lazy" onclick="openLightbox('${src}')" />
    </div>
  `)
  .join('');
const lightbox = document.createElement('div');
lightbox.id = 'lightbox';
lightbox.style.position = 'fixed';
lightbox.style.top = 0;
lightbox.style.left = 0;
lightbox.style.width = '100%';
lightbox.style.height = '100%';
lightbox.style.background = 'rgba(0, 0, 0, 0.8)';
lightbox.style.display = 'flex';
lightbox.style.justifyContent = 'center';
lightbox.style.alignItems = 'center';
lightbox.style.zIndex = '9999';
lightbox.style.display = 'none';
document.body.appendChild(lightbox);
function openLightbox(src) {
  lightbox.innerHTML = `<img src="${src}" style="max-width: 90%; max-height: 90%; border-radius: 10px; box-shadow: 0 0 20px #fff;" />`;
  lightbox.style.display = 'flex';
}
lightbox.addEventListener('click', () => {
  lightbox.style.display = 'none';
});
const style = document.createElement('style');
style.innerHTML = `
  .image-wrapper {
    opacity: 0;
    transform: translateY(30px);
    animation: fadeInUp 0.8s forwards;
  }
  @keyframes fadeInUp {
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;
document.head.appendChild(style);