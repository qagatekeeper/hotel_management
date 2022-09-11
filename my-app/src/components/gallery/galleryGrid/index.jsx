import React from "react";

const GalleryGrid = ({ image }) => {
  return (
    <>
      <div className="gallery-grid-item">
        <a href={image}>
          <img src={image} alt="g1" className="gallery-image" />
          <div className="gallery-pic-pecker">
            <h4 className="gallery-pic-pecker-title">SUN RISE</h4>
            <i className="uil uil-scenery gallery-pic-pecker-icon"></i>
          </div>
        </a>
      </div>
    </>
  );
};

export default GalleryGrid;
