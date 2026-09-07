'use client';

import React, { useState, useEffect } from 'react';
import { Product } from '../data/products';
import { ShieldAlert } from 'lucide-react';

interface ProductCardProps {
  product: Product;
  onSelect: (product: Product) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product, onSelect }) => {
  const [currentImgIndex, setCurrentImgIndex] = useState(0);

  // Auto-slide carousel effect if there are multiple images
  useEffect(() => {
    if (!product.images || product.images.length <= 1) return;

    const interval = setInterval(() => {
      setCurrentImgIndex((prev) => (prev + 1) % product.images.length);
    }, 3500);

    return () => clearInterval(interval);
  }, [product.images]);

  const activeImgSrc =
    product.images && product.images.length > 0
      ? product.images[currentImgIndex]
      : '/assets/LOGO.png';

  return (
    <article className="product-card">
      {/* Top Column: Square Image Box with Auto-Slide Carousel */}
      <div className="card-image-box" onClick={() => onSelect(product)} style={{ cursor: 'pointer' }}>
        {product.isRx && (
          <span className="card-rx-badge" title="Physician Supervised Formulation">
            Rx ONLY
          </span>
        )}

        <img
          src={activeImgSrc}
          alt={product.title}
          loading="lazy"
          onError={(e) => {
            (e.target as HTMLImageElement).src = '/assets/LOGO.png';
          }}
        />

        {/* Carousel Navigation Dots & Overlay Badge */}
        {product.images && product.images.length > 1 && (
          <>
            <div className="carousel-dots">
              {product.images.map((_, idx) => (
                <span
                  key={idx}
                  className={`carousel-dot ${idx === currentImgIndex ? 'active' : ''}`}
                  onClick={(e) => {
                    e.stopPropagation();
                    setCurrentImgIndex(idx);
                  }}
                  title={`View Format ${idx + 1}`}
                />
              ))}
            </div>
            <div className="carousel-variant-badge">
              Format {currentImgIndex + 1} of {product.images.length}
            </div>
          </>
        )}
      </div>

      {/* Bottom Column: Content Box */}
      <div className="card-content-box">
        <div>
          {/* Badge Pills */}
          <div className="card-badges-row">
            {product.badges.map((badge, idx) => (
              <span
                key={idx}
                className={`badge-pill ${idx % 2 === 0 ? 'green' : 'sand'}`}
              >
                {badge}
              </span>
            ))}
          </div>

          {/* Product Title */}
          <h3 className="card-product-title">{product.title}</h3>
          {product.tagline && <div className="card-tagline">{product.tagline}</div>}

          {/* Rx Warning notice if applicable */}
          {product.isRx && product.rxWarning && (
            <div className="rx-notice-banner" style={{ margin: '0.6rem 0' }}>
              <ShieldAlert className="rx-notice-icon" />
              <span>{product.rxWarning}</span>
            </div>
          )}

          {/* Indications List */}
          <div className="indications-heading">CLINICAL & SUPPORTIVE INDICATIONS:</div>
          <ul className="indications-list">
            {product.indications.map((indication, index) => (
              <li key={index} className="indication-item">
                {indication}
              </li>
            ))}
          </ul>
        </div>

        {/* Bottom Inset Rounded Box */}
        <div className="card-inset-box" onClick={() => onSelect(product)} style={{ cursor: 'pointer' }}>
          <div className="inset-line">
            <span className="inset-label">Available Variant:</span>
            <span className="inset-val">{product.variant}</span>
          </div>
          <div className="inset-line">
            <span className="inset-label">Key Ingredients:</span>
            <span className="inset-val">{product.keyIngredients}</span>
          </div>
        </div>
      </div>
    </article>
  );
};
