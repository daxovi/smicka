import React from 'react'
import { useState } from 'react';
import "./Gallery.css";


const Gallery = ({ images }) => {
    const [activeImage, setActiveImage] = useState(null);

    const handleClick = (index) => {
            setActiveImage(index);
    };

    return (
        <div className="gallery">
            {activeImage !== null && (<img src={images[activeImage]} alt="Reference Elektroinstalace Smička" className='activeImg' onClick={() => setActiveImage(null)} />) }
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

export default Gallery