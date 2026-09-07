import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Vedi Herbals | Cannabis Leaf Medicines & Ayurvedic Wellness',
  description:
    'Vedi Herbals brings together physician-guided Cannabis leaf medicines, classical and contemporary Ayurvedic formulations, dietary supplements, hempseed nutrition, natural personal care, and professional Panchakarma wellness guidance.',
  keywords: [
    'Vedi Herbals',
    'Ayurveda',
    'Cannabis sativa medicine',
    'Bhaang medicine',
    'Dietary Supplements',
    'Hemp Nutrition',
    'Panchakarma Therapies',
    'Jatiphaladi Churna',
    'Cannaflam',
    'Cannapain',
    'Cannaron',
    'Castile Soap'
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body>{children}</body>
    </html>
  );
}
