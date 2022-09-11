import React from "react";
import "./gallery.css";
import GalleryGrid from "./galleryGrid";
import { galleryData } from "../../helpers/data/galleryData.js";

const Gallery = () => {
  return (
    <div className="gallery-wrapper text-center" id="gallery">
      <h3 className="title">Our Gallery</h3>
      <div className="gallery-grid grid">
        {galleryData.map((item, index) => (
          <GalleryGrid image={item} key={index} />
        ))}
      </div>
    </div>
  );
};

export default Gallery;
