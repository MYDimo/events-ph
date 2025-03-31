// src/components/react/Gallery.jsx
import React, { useState, useEffect } from 'react';
import PhotoSwipeLightbox from 'photoswipe/lightbox';
import 'photoswipe/style.css';

export default function Gallery() {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);
  const galleryID = "my-photo-gallery"; // Use a simple string ID instead of useId()
  
  // Load images using import.meta.glob
  useEffect(() => {
    const loadImages = async () => {
      try {
        const imageModules = import.meta.glob('../../images/gallery/*.{jpg,jpeg,png,webp,gif}', { 
          eager: true,
          query: '?url',
          import: 'default'
        });
        
        const galleryImages = Object.entries(imageModules).map(([path, url]) => {
          const filename = path.split('/').pop().split('.')[0].replace(/-/g, ' ');
          
          return {
            largeURL: url,
            thumbnailURL: url,
            alt: filename,
            width: 1200,
            height: 800
          };
        });
        
        setImages(galleryImages);
      } catch (error) {
        console.error("Error loading gallery images:", error);
      } finally {
        setLoading(false);
      }
    };

    loadImages();
  }, []);

  // Initialize PhotoSwipe lightbox
  useEffect(() => {
    if (images.length === 0) return;
    
    let lightbox = new PhotoSwipeLightbox({
      gallery: '#' + galleryID,
      children: 'a',
      showHideAnimationType: 'none',
      pswpModule: () => import('photoswipe'),
    });
    
    lightbox.init();

    return () => {
      lightbox.destroy();
      lightbox = null;
    };
  }, [images]);

  return (
    <div className="w-full py-4">
      {loading ? (
        <div className="flex flex-col items-center justify-center h-52 text-gray-600">
          <div className="w-10 h-10 border-3 border-gray-200 border-t-blue-500 rounded-full animate-spin mb-4"></div>
          <p>Loading gallery...</p>
        </div>
      ) : (
        <div className="pswp-gallery sm:columns-2 md:columns-3 lg:columns-4 gap-4" id={galleryID}>
          {images.map((image, index) => (
            <a
              href={image.largeURL}
              data-pswp-width={image.width}
              data-pswp-height={image.height}
              key={`gallery-item-${index}`}
              className="block mb-4 break-inside-avoid cursor-pointer rounded-md overflow-hidden"
            >
              <img 
                src={image.thumbnailURL} 
                alt={image.alt}
                className="w-full h-auto object-contain" 
                loading="lazy"
              />
            </a>
          ))}
        </div>
      )}
    </div>
  );
}