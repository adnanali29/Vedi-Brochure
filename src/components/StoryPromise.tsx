'use client';

import React from 'react';
import { CheckCircle2 } from 'lucide-react';

export const StoryPromise: React.FC = () => {
  return (
    <section id="story-section" className="story-promise-container">
      <div className="story-promise-card">
        {/* Left Column: Our Story */}
        <div>
          <div className="section-tag">HERITAGE & PHILOSOPHY</div>
          <h2 className="story-heading">OUR STORY</h2>
          <p className="story-text">
            Vedi Herbals brings together the depth of Ayurveda, respect for indigenous knowledge and a modern approach to everyday wellness. Our portfolio spans physician-guided Cannabis leaf medicines, classical and contemporary herbal formulations, dietary supplements, hempseed-led nutrition, natural bath and body care, and professional wellness consultations.
          </p>
          <p className="story-text">
            We believe nature works best when it is understood, sourced responsibly and translated with care. That belief guides the journey from ingredient selection and formulation to manufacturing, packaging, guidance and long-term partnerships.
          </p>
          <p className="story-text">
            For consumers, Vedi offers clear pathways into Ayurveda. For practitioners, retailers, distributors and international partners, it offers a broad platform for building credible, locally relevant wellness portfolios.
          </p>
        </div>

        {/* Right Column: Our Promise */}
        <div>
          <div className="section-tag">STANDARDS OF EXCELLENCE</div>
          <h2 className="promise-heading">OUR PROMISE</h2>
          <div className="promise-tagline">
            Rooted in Ayurveda. Made for modern life.
          </div>
          <ul className="promise-list">
            <li className="promise-item">
              <CheckCircle2 className="promise-icon" />
              <span>Ayurveda-led formulations across multiple wellness needs and formats.</span>
            </li>
            <li className="promise-item">
              <CheckCircle2 className="promise-icon" />
              <span>A portfolio that connects guided care, daily wellness and natural personal care.</span>
            </li>
            <li className="promise-item">
              <CheckCircle2 className="promise-icon" />
              <span>Plant-led product stories that are easy for consumers and partners to understand.</span>
            </li>
            <li className="promise-item">
              <CheckCircle2 className="promise-icon" />
              <span>A commitment to responsible communication and market-appropriate compliance.</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};
