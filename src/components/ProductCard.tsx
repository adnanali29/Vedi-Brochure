'use client';

import React, { useState, useEffect } from 'react';
import { Product, CATEGORIES } from '../data/products';
import { ShieldAlert } from 'lucide-react';

interface ProductCardProps {
  product: Product;
  onSelect: (product: Product) => void;
}

// Helper to automatically render botanical names in parentheses with italics
export const renderWithItalicBotanicals = (text: string) => {
  if (!text) return null;
  const parts = text.split(/(\([^)]+\))/g);
  return parts.map((part, idx) => {
    if (part.startsWith('(') && part.endsWith(')')) {
      return (
        <em key={idx} style={{ fontStyle: 'italic', fontWeight: 'inherit' }}>
          {part}
        </em>
      );
    }
    return part;
  });
};

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

  const categoryObj = CATEGORIES.find((c) => c.id === product.categoryId);

  return (
    <article className="product-card">
      {/* Print-Only Top Header Ribbon for PDF Download */}
      <div className="print-product-header">
        <div className="print-header-brand">
          <img
            src="/assets/LOGO_header.png"
            alt="Vedi Herbals"
            className="print-logo-img"
            onError={(e) => {
              (e.target as HTMLImageElement).src = '/assets/LOGO.png';
            }}
          />
          <span className="print-catalog-title">VEDI HERBALS — PRODUCT CATALOGUE</span>
        </div>
        <div className="print-header-category">
          {categoryObj?.name || 'PRODUCT CATALOGUE'}
          {product.subCategory ? ` • ${product.subCategory}` : ''}
        </div>
      </div>

      {/* Print-Only Top Images Row for PDF Download (up to 3 images side-by-side) */}
      <div className="print-images-row">
        {(product.images && product.images.length > 0 ? product.images : ['/assets/LOGO.png'])
          .slice(0, 3)
          .map((imgSrc, idx) => (
            <div key={idx} className="print-image-frame">
              {idx === 0 && product.isRx && (
                <span className="card-rx-badge" style={{ position: 'absolute', top: '6px', left: '6px', fontSize: '0.6rem', padding: '0.15rem 0.4rem' }}>
                  Rx ONLY
                </span>
              )}
              <img
                src={imgSrc}
                alt={`${product.title} variant ${idx + 1}`}
                onError={(e) => {
                  (e.target as HTMLImageElement).src = '/assets/LOGO.png';
                }}
              />
              {product.images && product.images.length > 1 && (
                <span className="print-image-label">Format {idx + 1}</span>
              )}
            </div>
          ))}
      </div>

      {/* Top Column: Square Image Box with Auto-Slide Carousel (Screen Only) */}
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

          {/* Product Title with Italic Botanical Name */}
          <h3 className="card-product-title">{renderWithItalicBotanicals(product.title)}</h3>
          {product.botanicalName && (
            <div className="card-botanical-name">
              Botanical: <em>{product.botanicalName}</em>
            </div>
          )}
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
            <span className="inset-val">{renderWithItalicBotanicals(product.keyIngredients)}</span>
          </div>
        </div>
      </div>

      {/* Print-Only Bottom Footer Ribbon for PDF Download */}
      <div className="print-product-footer">
        <span>www.vediherbals.com • Authentic Ayurvedic & Physician-Guided Formulations</span>
        <span>Contact: namaste@vediherbals.com | +91 022 48931316</span>
      </div>
    </article>
  );
};
