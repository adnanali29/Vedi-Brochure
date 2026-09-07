'use client';

import React from 'react';
import { Phone, Mail, Globe, ShieldCheck } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="site-footer">
      <div className="footer-inner">
        {/* Brand Column */}
        <div>
          <img
            src="/assets/LOGO.png"
            alt="Vedi Herbals Logo"
            className="footer-brand-logo"
            onError={(e) => {
              (e.target as HTMLImageElement).src = '/assets/LOGO_text.png';
            }}
          />
          <p className="footer-text">
            Rooted in Ayurveda. Made for modern life. Vedi Herbals brings together physician-guided Cannabis leaf medicines, classical formulations, dietary supplements, hemp foods, and natural personal care.
          </p>
          <div className="certifications-row">
            <span className="cert-badge">
              <ShieldCheck size={12} style={{ display: 'inline', marginRight: '4px' }} /> GMP Certified
            </span>
            <span className="cert-badge">100% Vegetarian</span>
            <span className="cert-badge">Physician Formulated</span>
            <span className="cert-badge">Cruelty Free</span>
            <span className="cert-badge">ISO Standard</span>
          </div>
        </div>

        {/* Categories Column */}
        <div>
          <h4 className="footer-heading">PRODUCT RANGES</h4>
          <ul className="footer-links">
            <li><a href="#01-ayurvedic" className="footer-link">01. Ayurvedic Medicines (Rx Cannabis)</a></li>
            <li><a href="#classical-ayurveda" className="footer-link">Classical Ayurvedic Formulations</a></li>
            <li><a href="#02-supplements" className="footer-link">02. Dietary Supplements</a></li>
            <li><a href="#03-hempfood" className="footer-link">03. Hemp Food & Nutrition</a></li>
            <li><a href="#04-personalcare" className="footer-link">04. Skin Care & Personal Care</a></li>
            <li><a href="#05-wellness" className="footer-link">05. Professional Wellness Guidance</a></li>
          </ul>
        </div>

        {/* Contact Column */}
        <div>
          <h4 className="footer-heading">CONTACT & SUPPORT</h4>
          <ul className="footer-links">
            <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <Globe size={16} style={{ color: 'var(--color-gold)' }} />
              <a href="https://www.vediherbals.com" target="_blank" rel="noopener noreferrer" className="footer-link">
                www.vediherbals.com
              </a>
            </li>
            <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <Phone size={16} style={{ color: 'var(--color-gold)' }} />
              <a href="tel:+9102248931316" className="footer-link">
                +91 022 48931316
              </a>
            </li>
            <li style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem' }}>
              <Mail size={16} style={{ color: 'var(--color-gold)', marginTop: '3px' }} />
              <div>
                <a href="mailto:namaste@vediherbals.com" className="footer-link">
                  namaste@vediherbals.com
                </a>
                <br />
                <a href="mailto:info@hempcann.in" className="footer-link">
                  info@hempcann.in
                </a>
              </div>
            </li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <div>© {new Date().getFullYear()} Vedi Herbals / Hempcann Solutions. All Rights Reserved.</div>
        <div>Designed for Healthcare Professionals & Conscious Consumers</div>
      </div>
    </footer>
  );
};
