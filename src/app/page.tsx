'use client';

import React, { useState, useMemo } from 'react';
import { Header } from '@/components/Header';
import { HeroSection } from '@/components/HeroSection';
import { StoryPromise } from '@/components/StoryPromise';
import { ProductCard } from '@/components/ProductCard';
import { ProductModal } from '@/components/ProductModal';
import { WellnessClinicSection } from '@/components/WellnessClinicSection';
import { FoundersNote } from '@/components/FoundersNote';
import { Footer } from '@/components/Footer';
import { PRODUCTS, CATEGORIES, Product } from '@/data/products';
import { Filter, SearchX, ShieldAlert } from 'lucide-react';

export default function Home() {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  // Filter products based on active category and search query
  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter((product) => {
      // Category check
      const matchesCategory =
        activeCategory === 'all' || product.categoryId === activeCategory;

      // Search query check (title, tagline, indications, key ingredients, subcategory)
      const q = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !q ||
        product.title.toLowerCase().includes(q) ||
        (product.tagline && product.tagline.toLowerCase().includes(q)) ||
        product.keyIngredients.toLowerCase().includes(q) ||
        (product.subCategory && product.subCategory.toLowerCase().includes(q)) ||
        product.indications.some((ind) => ind.toLowerCase().includes(q));

      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  // Group filtered products by category for continuous catalogue rendering
  const groupedProducts = useMemo(() => {
    const groups: { [key: string]: Product[] } = {};
    filteredProducts.forEach((p) => {
      if (!groups[p.categoryId]) {
        groups[p.categoryId] = [];
      }
      groups[p.categoryId].push(p);
    });
    return groups;
  }, [filteredProducts]);

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="main-wrapper">
      {/* Header with VEDI Logo & Navigation */}
      <Header
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        activeCategory={activeCategory}
        setActiveCategory={setActiveCategory}
        onPrint={handlePrint}
      />

      {/* Hero Section matching Image 2 */}
      <HeroSection />

      {/* Story & Promise Section matching Image 2 */}
      <StoryPromise />

      {/* Sticky Category Selection Bar */}
      <div className="category-bar-wrapper">
        <div className="category-bar">
          {CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              className={`cat-btn ${activeCategory === cat.id ? 'active' : ''}`}
              onClick={() => setActiveCategory(cat.id)}
            >
              {cat.name}
            </button>
          ))}
        </div>
      </div>

      {/* Main Catalog Container */}
      <main className="catalog-container">
        {filteredProducts.length === 0 ? (
          <div style={{ textAlign: 'center', padding: '4rem 2rem', background: '#FFFFFF', borderRadius: '20px', border: '1px solid #EBE5D8' }}>
            <SearchX size={48} style={{ color: 'var(--color-gold)', marginBottom: '1rem' }} />
            <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.5rem', color: 'var(--color-forest)' }}>
              No products found matching "{searchQuery}"
            </h3>
            <p style={{ color: '#666', marginTop: '0.5rem', marginBottom: '1.5rem' }}>
              Try searching with another keyword like "Cannabis", "Churna", "Soap", "Pain", or "Ashwagandha".
            </p>
            <button
              className="cat-btn active"
              onClick={() => {
                setSearchQuery('');
                setActiveCategory('all');
              }}
            >
              Clear Filters
            </button>
          </div>
        ) : (
          <>
            {/* Category 01: Ayurvedic Medicines */}
            {(activeCategory === 'all' || activeCategory === '01-ayurvedic') &&
              groupedProducts['01-ayurvedic']?.length > 0 && (
                <section id="01-ayurvedic" style={{ marginBottom: '4rem' }}>
                  <div className="category-header-block">
                    <h2 className="category-header-title">01 — AYURVEDIC MEDICINES</h2>
                    <div className="category-header-sub">
                      Physician-Supervised Cannabis Leaf Medicines & Classical Formulations
                    </div>
                  </div>

                  {/* Section A: Physician Supervised Cannabis Leaf */}
                  {groupedProducts['01-ayurvedic'].filter(
                    (p) => p.subCategory?.includes('Physician-Supervised')
                  ).length > 0 && (
                    <div style={{ marginBottom: '3rem' }}>
                      <h3 className="sub-category-title">
                        Physician-Supervised Cannabis Leaf (Cannabis sativa) Medicines
                      </h3>
                      <div className="rx-notice-banner">
                        <ShieldAlert className="rx-notice-icon" />
                        <div>
                          <strong>Rx Prescribed Range:</strong> Formulations in this range require physician supervision. For use only under the supervision of a qualified healthcare professional. Not for self-medication.
                        </div>
                      </div>
                      <div className="product-grid">
                        {groupedProducts['01-ayurvedic']
                          .filter((p) => p.subCategory?.includes('Physician-Supervised'))
                          .map((product) => (
                            <ProductCard
                              key={product.id}
                              product={product}
                              onSelect={setSelectedProduct}
                            />
                          ))}
                      </div>
                    </div>
                  )}

                  {/* Section B: Classical Ayurveda */}
                  {groupedProducts['01-ayurvedic'].filter(
                    (p) => p.subCategory === 'CLASSICAL AYURVEDA'
                  ).length > 0 && (
                    <div id="classical-ayurveda">
                      <h3 className="sub-category-title">CLASSICAL AYURVEDA</h3>
                      <p style={{ color: '#5B6B63', fontSize: '0.92rem', marginBottom: '1.5rem', paddingLeft: '0.75rem' }}>
                        Time-tested Ayurvedic formulations inspired by classical texts, combining traditional wisdom with holistic wellness.
                      </p>
                      <div className="product-grid">
                        {groupedProducts['01-ayurvedic']
                          .filter((p) => p.subCategory === 'CLASSICAL AYURVEDA')
                          .map((product) => (
                            <ProductCard
                              key={product.id}
                              product={product}
                              onSelect={setSelectedProduct}
                            />
                          ))}
                      </div>
                    </div>
                  )}
                </section>
              )}

            {/* Category 02: Dietary Supplements */}
            {(activeCategory === 'all' || activeCategory === '02-supplements') &&
              groupedProducts['02-supplements']?.length > 0 && (
                <section id="02-supplements" style={{ marginBottom: '4rem' }}>
                  <div className="category-header-block">
                    <h2 className="category-header-title">02 — DIETARY SUPPLEMENTS</h2>
                    <div className="category-header-sub">
                      Single-herb powders, tablets, capsules & tonics for everyday wellness routines
                    </div>
                  </div>
                  <div className="product-grid">
                    {groupedProducts['02-supplements'].map((product) => (
                      <ProductCard
                        key={product.id}
                        product={product}
                        onSelect={setSelectedProduct}
                      />
                    ))}
                  </div>
                </section>
              )}

            {/* Category 03: Hemp Food & Nutrition */}
            {(activeCategory === 'all' || activeCategory === '03-hempfood') &&
              groupedProducts['03-hempfood']?.length > 0 && (
                <section id="03-hempfood" style={{ marginBottom: '4rem' }}>
                  <div className="category-header-block">
                    <h2 className="category-header-title">03 — HEMP FOOD & NUTRITION</h2>
                    <div className="category-header-sub">
                      Nutritional hempseed elixirs and cold-pressed oils rich in essential fatty acids
                    </div>
                  </div>
                  <div className="product-grid">
                    {groupedProducts['03-hempfood'].map((product) => (
                      <ProductCard
                        key={product.id}
                        product={product}
                        onSelect={setSelectedProduct}
                      />
                    ))}
                  </div>
                </section>
              )}

            {/* Category 04: Skin Care & Personal Care */}
            {(activeCategory === 'all' || activeCategory === '04-personalcare') &&
              groupedProducts['04-personalcare']?.length > 0 && (
                <section id="04-personalcare" style={{ marginBottom: '4rem' }}>
                  <div className="category-header-block">
                    <h2 className="category-header-title">04 — SKIN CARE & PERSONAL CARE</h2>
                    <div className="category-header-sub">
                      Sensory, uncomplicated and naturally modern botanical soaps, gels & hair care
                    </div>
                  </div>
                  <div className="product-grid">
                    {groupedProducts['04-personalcare'].map((product) => (
                      <ProductCard
                        key={product.id}
                        product={product}
                        onSelect={setSelectedProduct}
                      />
                    ))}
                  </div>
                </section>
              )}
          </>
        )}
      </main>

      {/* Category 05: Professional Guidance & Clinic */}
      <WellnessClinicSection />

      {/* Founder's Note */}
      <FoundersNote />

      {/* Site Footer */}
      <Footer />

      {/* Detail Modal */}
      <ProductModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
      />
    </div>
  );
}
