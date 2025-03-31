import React from "react";
import Gallery from "react-grid-gallery";

// Dynamically import the images from the src/images/gallery directory
const importImages = () => {
  const images = import.meta.glob('/src/images/gallery/*.{jpg,jpeg,png,gif}');
  
  // Transform the output to the format required by react-grid-gallery
  return Object.entries(images).map(([path, resolver]) => ({
    src: path.replace('/src', ''), // Adjust the src path for use in the public folder
    thumbnail: path.replace('/src', ''), 
    thumbnailWidth: 300,          // Default thumbnail width
    thumbnailHeight: 200,         // Default thumbnail height
    caption: path.split('/').pop(), // Use the file name as a caption
  }));
};

const images = importImages();

const GalleryComponent = () => {
  return (
    <div style={{ padding: "20px" }}>
      <h2>My Gallery</h2>
      <Gallery images={images} enableLightbox={true} backdropClosesModal={true} />
    </div>
  );
};

export default GalleryComponent;