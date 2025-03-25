// Dynamically load images into the gallery
const imagePaths = [
  'images/1-1-1-img_1831.jpg',
  'images/1-1-1-img_1848.jpg',
  'images/1-1-1-img_1863.jpg',
  'images/1-1-1-img_1876.jpg',
  'images/1-1-img_0281.jpg',
  'images/1-1-img_0352-001.jpg',
  'images/1-1-img_0371.jpg',
  'images/1-1-img_0817.jpg',
  'images/1-1-img_1141.jpg',
  'images/1-1-img_1188.jpg',
  'images/1-1-img_1204.jpg',
  'images/1-1-img_4074.jpg',
  'images/1-1-img_4200.jpg',
  'images/1-1-img_4289.jpg',
  'images/1-1-img_8986.jpg',
  'images/1-1-img_9188.jpg',
  'images/1-1-img_9350.jpg',
  'images/1-1-img_9525.jpg',
  'images/1-1-img_9686.jpg',
  'images/1-1-img_9944.jpg',
  'images/1-1-oliyath-hall.jpg',
  'images/1-10150648159088388.jpg',
  'images/1-10150896471548388.jpg',
  'images/1-10150896471693388.jpg',
  'images/1-10150909793723388.jpg',
  'images/1-10151381035908388.jpg',
  'images/1-10151742484823388.jpg',
  'images/1-10151742485663388.jpg',
  'images/1-10151742488418388.jpg',
  'images/1-2-img_4369.jpg',
  'images/1-381425823387.jpg',
  'images/1-_mg_1450.jpg',
  'images/1-aalim3.jpg',
  'images/1-dsc01256.jpg',
  'images/1-img_0983.jpg',
  'images/1-img_1171.jpg',
  'images/1-img_1260.jpg',
  'images/1-img_1288.jpg',
  'images/1-img_1305.jpg',
  'images/1-img_1646.jpg',
  'images/1-img_1649.jpg',
  'images/1-img_1712.jpg',
  'images/1-img_1717.jpg',
  'images/1-img_1746.jpg',
  'images/1-img_1913.jpg',
  'images/1-img_1914.jpg',
  'images/1-img_1945.jpg',
  'images/1-img_1953.jpg',
  'images/1-img_2010.jpg',
  'images/1-img_2094.jpg',
  'images/1-img_2407.jpg',
  'images/1-img_2428-1.jpg',
  'images/1-img_2523.jpg',
  'images/1-img_2633.jpg',
  'images/1-img_2908.jpg',
  'images/1-img_2973.jpg',
  'images/1-img_2980.jpg',
  'images/1-img_3010.jpg',
  'images/1-img_3614.jpg',
  'images/1-img_4139.jpg',
  'images/1-img_4224.jpg',
  'images/1-img_4225.jpg',
  'images/1-img_4357.jpg',
  'images/1-img_4806.jpg',
  'images/1-img_5032.jpg',
  'images/1-img_5328.jpg',
  'images/1-img_5332.jpg',
  'images/1-img_5368.jpg',
  'images/1-img_5387.jpg',
  'images/1-img_5388.jpg',
  'images/1-img_5401.jpg',
  'images/1-img_5608.jpg',
  'images/1-img_5799.jpg',
  'images/1-img_5906.jpg',
  'images/1-img_5936.jpg',
  'images/1-img_5937.jpg',
  'images/1-img_6054.jpg',
  'images/1-img_6617.jpg',
  'images/1-img_6692.jpg',
  'images/1-img_7002-001.jpg',
  'images/1-img_7002.jpg',
  'images/1-img_7151.jpg',
  'images/1-img_7385.jpg',
  'images/1-img_7480.jpg',
  'images/1-img_7506.jpg',
  'images/1-img_7514.jpg',
  'images/1-img_7829.jpg',
  'images/1-img_8155.jpg',
  'images/1-img_8173.jpg',
  'images/1-img_8605.jpg',
  'images/1-img_9369.jpg',
  'images/1-img_9781.jpg',
  'images/1-img_9883.jpg',
  'images/1-picture21.jpg',
  'images/suncity-602-pigeons.jpg'
];
const gallerySection = document.querySelector('.gallery');
gallerySection.innerHTML = imagePaths
  .map((src, index) => `
    <div class="image-wrapper" data-aos="fade-up" data-aos-delay="${index * 50}">
      <img src="${src}" alt="Shammas Photography ${index + 1}" loading="lazy" onclick="openLightbox('${src}')" />
    </div>
  `)
  .join('');
if (typeof AOS !== 'undefined') {
  AOS.refresh();
}
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
