'use client';

import React from 'react';

export const FoundersNote: React.FC = () => {
  return (
    <div className="catalog-container" style={{ marginTop: '3rem', marginBottom: '4rem' }}>
      <div className="founders-note-card">
        <span className="founders-quote-icon">“</span>
        
        {/* Founder Image: Sourab Agarwal */}
        <div className="founder-img-box">
          <img
            src="/assets/sourab_agarwal.jpg"
            alt="Sourab Agarwal - Founder of Vedi Herbals"
            onError={(e) => {
              (e.target as HTMLImageElement).src = '/assets/1679735194882.jpeg';
            }}
          />
        </div>

        {/* Content */}
        <div>
          <div className="section-tag" style={{ marginBottom: '0.5rem' }}>LEADERSHIP & VISION</div>
          <h3 className="story-heading" style={{ fontSize: '2rem', marginBottom: '1.25rem' }}>
            A NOTE FROM THE FOUNDER
          </h3>
          <div style={{ color: '#4A5852', fontSize: '0.96rem', lineHeight: '1.8' }}>
            <p style={{ marginBottom: '1rem' }}>
              Vedi Herbals began with a simple belief: nature has so much to offer when we use it with care and respect.
            </p>
            <p style={{ marginBottom: '1rem' }}>
              My connection with herbs and natural ingredients has always been personal. With Vedi, I wanted to bring the wisdom of Ayurveda and indigenous traditions into products that feel simple, honest and relevant to modern life.
            </p>
            <p style={{ marginBottom: '1rem' }}>
              Every product is made with the hope of making everyday wellness a little more natural and conscious.
            </p>
            <p style={{ marginBottom: '1.5rem', fontWeight: '700', color: 'var(--color-forest)' }}>
              If Vedi becomes a small part of your daily ritual, it means the world to us.
            </p>
            <div>
              <div style={{ fontStyle: 'italic', color: '#5B6B63', fontFamily: 'var(--font-body)', fontWeight: 500 }}>
                With warmth,
              </div>
              <div style={{ fontFamily: 'var(--font-heading)', fontSize: '1.5rem', fontWeight: '700', color: 'var(--color-forest)', marginTop: '0.2rem' }}>
                Sourab Agarwal
              </div>
              <div style={{ fontFamily: 'var(--font-subtext)', fontSize: '0.8rem', fontWeight: '700', color: 'var(--color-gold-muted)' }}>
                FOUNDER, VEDI HERBALS
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
