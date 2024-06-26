import React from 'react';
import Link from 'next/link';

import { urlFor } from '../lib/client';

const HeroBanner = ({ heroBanner }) => {

  const { discount, largeText1, largeText2, saleTime, smallText, midText, desc, product, buttonText, image } = heroBanner || {}

  return (
    <div className="hero-banner-container">
      <div>
        <p className="beats-solo">{smallText}</p>
        <h3>{midText}</h3>
        <h1>{largeText1}</h1>
        {image &&
            <img src={urlFor(image)} alt="headphones" className="hero-banner-image" />
        }

        <div>
          <Link href={`/product/${product}`}>
            <button type="button">{buttonText}</button>
          </Link>
          <div className="desc">
            <h5>Description</h5>
            <p>{desc}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeroBanner