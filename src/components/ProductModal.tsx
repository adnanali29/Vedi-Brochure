'use client';

import React, { useState } from 'react';
import { Product } from '../data/products';
import { X, ShieldAlert, Phone, Mail } from 'lucide-react';

interface ProductModalProps {
  product: Product | null;
  onClose: () => void;
}

export const ProductModal: React.FC<ProductModalProps> = ({ product, onClose }) => {
  const [modalImgIndex, setModalImgIndex] = useState(0);

  if (!product) return null;

  const currentImg =
    product.images && product.images.length > 0
      ? product.images[modalImgIndex]
      : '/assets/JATIPHALADI CHRNA.webp';

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose} aria-label="Close modal">
          <X size={20} />
        </button>

        {/* Modal Top Gallery */}
        <div style={{ background: '#F4F2EA', borderRadius: '14px', overflow: 'hidden', height: '240px', marginBottom: '1.5rem', position: 'relative' }}>
          <img
            src={currentImg}
            alt={product.title}
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
          {product.images && product.images.length > 1 && (
            <div style={{ position: 'absolute', bottom: '10px', left: 0, right: 0, display: 'flex', justifyContent: 'center', gap: '8px' }}>
              {product.images.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setModalImgIndex(idx)}
                  style={{
                    border: 'none',
                    borderRadius: '4px',
                    padding: '3px 8px',
                    fontSize: '0.7rem',
                    fontWeight: 700,
                    background: idx === modalImgIndex ? 'var(--color-gold)' : 'rgba(0,0,0,0.6)',
                    color: '#FFF',
                    cursor: 'pointer'
                  }}
                >
                  Variant {idx + 1}
                </button>
              ))}
            </div>
          )}
        </div>

        <div className="card-badges-row" style={{ marginBottom: '0.75rem' }}>
          {product.badges.map((badge, idx) => (
            <span key={idx} className={`badge-pill ${idx % 2 === 0 ? 'green' : 'sand'}`}>
              {badge}
            </span>
          ))}
        </div>

        <h2 className="card-product-title" style={{ fontSize: '2.4rem', marginBottom: '0.25rem' }}>
          {product.title}
        </h2>
        {product.botanicalName && (
          <div style={{ fontStyle: 'italic', color: '#5B6B63', marginBottom: '0.5rem', fontFamily: 'var(--font-body)' }}>
            Botanical: {product.botanicalName}
          </div>
        )}
        <p style={{ color: '#4A5852', fontSize: '1rem', fontFamily: 'var(--font-body)', fontWeight: 500, marginBottom: '1.5rem' }}>
          {product.tagline}
        </p>

        {product.isRx && (
          <div className="rx-notice-banner" style={{ marginBottom: '1.5rem' }}>
            <ShieldAlert className="rx-notice-icon" />
            <div>
              <strong>Physician Supervision Required:</strong> {product.rxWarning}
            </div>
          </div>
        )}

        <div style={{ marginBottom: '1.5rem' }}>
          <div className="indications-heading" style={{ fontSize: '0.85rem' }}>
            CLINICAL & SUPPORTIVE INDICATIONS:
          </div>
          <ul className="indications-list">
            {product.indications.map((ind, i) => (
              <li key={i} className="indication-item">
                {ind}
              </li>
            ))}
          </ul>
        </div>

        <div className="card-inset-box" style={{ padding: '1.25rem', marginBottom: '1.5rem' }}>
          <div className="inset-line">
            <span className="inset-label">Available Variants:</span>
            <span className="inset-val">{product.variant}</span>
          </div>
          <div className="inset-line">
            <span className="inset-label">Key Ingredients:</span>
            <span className="inset-val">{product.keyIngredients}</span>
          </div>
        </div>

        <div style={{ background: '#F8F7F2', borderRadius: '12px', padding: '1.25rem', border: '1px solid #EBE5D8' }}>
          <div style={{ fontFamily: 'var(--font-heading)', fontSize: '1.2rem', fontWeight: '700', color: 'var(--color-forest)', marginBottom: '0.5rem' }}>
            Professional Inquiry & Orders
          </div>
          <p style={{ fontSize: '0.85rem', color: '#5B6B63', marginBottom: '0.75rem', fontFamily: 'var(--font-body)' }}>
            For healthcare practitioners, pharmacies, or patient guidance regarding this formulation, contact Vedi Herbals support:
          </p>
          <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap', fontSize: '0.88rem', fontWeight: 700, fontFamily: 'var(--font-subtext)' }}>
            <a href="tel:+9102248931316" style={{ color: 'var(--color-forest)', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
              <Phone size={16} /> +91 022 48931316
            </a>
            <a href="mailto:namaste@vediherbals.com" style={{ color: 'var(--color-forest)', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
              <Mail size={16} /> namaste@vediherbals.com
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
