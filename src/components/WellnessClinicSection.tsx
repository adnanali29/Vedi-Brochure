'use client';

import React from 'react';
import { MapPin, Phone, Mail, Sparkles, Stethoscope, HeartPulse } from 'lucide-react';

export const WellnessClinicSection: React.FC = () => {
  return (
    <section id="05-wellness" className="catalog-container" style={{ marginTop: '4rem' }}>
      <div className="category-header-block">
        <h2 className="category-header-title">05 — PROFESSIONAL GUIDANCE</h2>
        <div className="category-header-sub">Wellness with Context and Continuity</div>
      </div>

      <div className="wellness-section">
        <div>
          <div className="section-tag" style={{ color: 'var(--color-gold)' }}>AYURVEDIC CLINIC & CONSULTATIONS</div>
          <h3 className="wellness-title">VEDI WELLNESS BENGALURU</h3>
          <p className="wellness-desc">
            Vedi Wellness extends the brand beyond products through consultations and personalised guidance, available in person and by video. We offer Ayurveda-led consultations, Panchakarma Therapies, and custom treatment protocols for people seeking a more informed and holistic approach to health.
          </p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginTop: '1.5rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', color: '#E2ECE5' }}>
              <Stethoscope style={{ color: 'var(--color-gold)', width: '22px', height: '22px' }} />
              <span style={{ fontSize: '0.95rem', fontWeight: '600' }}>Physician-Guided Cannabis & Herbal Consultations</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', color: '#E2ECE5' }}>
              <Sparkles style={{ color: 'var(--color-gold)', width: '22px', height: '22px' }} />
              <span style={{ fontSize: '0.95rem', fontWeight: '600' }}>Authentic Panchakarma & Rejuvenation Therapies</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', color: '#E2ECE5' }}>
              <HeartPulse style={{ color: 'var(--color-gold)', width: '22px', height: '22px' }} />
              <span style={{ fontSize: '0.95rem', fontWeight: '600' }}>In-Person & Virtual Video Consultations</span>
            </div>
          </div>
        </div>

        <div className="clinic-info-card">
          <div style={{ fontFamily: 'var(--font-serif)', fontSize: '1.4rem', color: '#FFFFFF', fontWeight: '700' }}>
            Visit Our Bengaluru Center
          </div>

          <div className="clinic-info-item">
            <MapPin className="clinic-info-icon" />
            <div>
              <strong>Address:</strong><br />
              1st Floor, #833, 12th Main Road,<br />
              Koramangala 4th Block, Bengaluru,<br />
              Karnataka 560034, India.
            </div>
          </div>

          <div className="clinic-info-item">
            <Phone className="clinic-info-icon" />
            <div>
              <strong>Consultation Booking:</strong><br />
              <a href="tel:+918045683156" style={{ color: 'var(--color-gold)', textDecoration: 'none' }}>
                +91 80 4568 3156
              </a>
            </div>
          </div>

          <div className="clinic-info-item">
            <Mail className="clinic-info-icon" />
            <div>
              <strong>Clinic Email:</strong><br />
              <a href="mailto:bengaluru@vediwellness.com" style={{ color: 'var(--color-gold)', textDecoration: 'none' }}>
                bengaluru@vediwellness.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
