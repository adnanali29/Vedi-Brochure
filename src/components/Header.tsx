'use client';

import React from 'react';
import { Search, Printer } from 'lucide-react';

interface HeaderProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  activeCategory: string;
  setActiveCategory: (cat: string) => void;
  onPrint: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  searchQuery,
  setSearchQuery,
  activeCategory,
  setActiveCategory,
  onPrint
}) => {
  const handleNavClick = (catId: string, sectionId: string) => {
    setActiveCategory(catId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="navbar">
      <div className="nav-container">
        {/* Brand Logo Image matching user request */}
        <a href="#" className="brand-logo" onClick={() => setActiveCategory('all')}>
          <img
            src="/assets/LOGO_header.png"
            alt="Vedi Herbals Logo"
            className="brand-logo-img"
            onError={(e) => {
              (e.target as HTMLImageElement).src = '/assets/LOGO.png';
            }}
          />
        </a>

        {/* Navigation bar matching Image 2 */}
        <nav>
          <ul className="nav-links">
            <li>
              <a
                href="#story-section"
                className="nav-link"
                onClick={() => {
                  const el = document.getElementById('story-section');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                STORY
              </a>
            </li>
            <li>
              <a
                href="#01-ayurvedic"
                className={`nav-link ${activeCategory === '01-ayurvedic' ? 'active' : ''}`}
                onClick={() => handleNavClick('01-ayurvedic', '01-ayurvedic')}
              >
                01. RX CANNABIS
              </a>
            </li>
            <li>
              <a
                href="#classical-ayurveda"
                className="nav-link"
                onClick={() => handleNavClick('01-ayurvedic', 'classical-ayurveda')}
              >
                CLASSICAL AYURVEDA
              </a>
            </li>
            <li>
              <a
                href="#02-supplements"
                className={`nav-link ${activeCategory === '02-supplements' ? 'active' : ''}`}
                onClick={() => handleNavClick('02-supplements', '02-supplements')}
              >
                02. SUPPLEMENTS
              </a>
            </li>
            <li>
              <a
                href="#03-hempfood"
                className={`nav-link ${activeCategory === '03-hempfood' ? 'active' : ''}`}
                onClick={() => handleNavClick('03-hempfood', '03-hempfood')}
              >
                03. HEMP FOODS
              </a>
            </li>
            <li>
              <a
                href="#04-personalcare"
                className={`nav-link ${activeCategory === '04-personalcare' ? 'active' : ''}`}
                onClick={() => handleNavClick('04-personalcare', '04-personalcare')}
              >
                04. PERSONAL CARE
              </a>
            </li>
            <li>
              <a
                href="#05-wellness"
                className={`nav-link ${activeCategory === '05-wellness' ? 'active' : ''}`}
                onClick={() => handleNavClick('05-wellness', '05-wellness')}
              >
                05. WELLNESS
              </a>
            </li>
          </ul>
        </nav>

        {/* Search & PDF Print Button matching Image 2 */}
        <div className="header-actions">
          <div className="search-box">
            <Search className="search-icon" />
            <input
              type="text"
              placeholder="Search products..."
              className="search-input"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <button className="btn-pdf" onClick={onPrint} title="Print or Save PDF Brochure">
            <Printer style={{ width: '15px', height: '15px' }} />
            <span>PDF</span>
          </button>
        </div>
      </div>
    </header>
  );
};
