import React from 'react'
import GalleryRef from '../components/GalleryRef'

import ref_0 from "../img/reference/ref_0.jpg";
import ref_1 from "../img/reference/ref_1.jpg";
import ref_2 from "../img/reference/ref_2.jpg";
import ref_3 from "../img/reference/ref_3.jpg";
import ref_4 from "../img/reference/ref_4.jpg";
import ref_5 from "../img/reference/ref_5.jpg";
import ref_6 from "../img/reference/ref_6.jpg";
import ref_7 from "../img/reference/ref_7.jpg";
import ref_8 from "../img/reference/ref_8.jpg";
import ref_9 from "../img/reference/ref_9.jpg";
import ref_10 from "../img/reference/ref_10.jpg";
import ref_11 from "../img/reference/ref_11.jpg";
import ref_12 from "../img/reference/ref_12.jpg";
import ref_13 from "../img/reference/ref_13.jpg";

const Reference = () => {
  const ref = [
    ref_0, ref_1, ref_2, ref_3, ref_4, ref_5, ref_6, ref_7, ref_8, ref_9, ref_10, ref_11, ref_12, ref_13
  ]

  return (
    <div className="services--content">
      <div className="services--content-white">
        <h2>Reference</h2>
        <p>Prohlédněte si naši fotogalerii, kde najdete ukázky našich realizovaných projektů a získáte představu o vysoké kvalitě a profesionalitě naší práce.</p>
      </div>
      <GalleryRef images={ref} />
    </div>
  )
}

export default Reference