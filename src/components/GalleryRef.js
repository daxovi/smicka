import React from 'react'
import { useState } from 'react';
import "./GalleryRef.css";

const GalleryRef = ( {images} ) => {
    const [activeImage, setActiveImage] = useState(null);

    const handleClick = (index) => {
            setActiveImage(index);
    };

  return (
    <div className="gallery-ref">
            {activeImage !== null && (<img src={images[activeImage]} alt="" className='activeImg' onClick={() => setActiveImage(null)} />) }
            {images.map((src, index) => (
                <img
                    key={index}
                    src={src}
                    alt=""
                    onClick={() => handleClick(index)}
                />
            ))}
        </div>
  )
}

export default GalleryRef