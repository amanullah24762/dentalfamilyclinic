import './globals.css';

export const metadata = {
  title: 'Family Dental Clinic Mirpur | Website Concept',
  description: 'A family-focused dental website concept for Family Dental Clinic Mirpur, AJK. Explore care categories and contact the clinic.',
  robots: { index: false, follow: false },
};

export default function RootLayout({ children }) {
  return <html lang="en"><body>{children}</body></html>;
}
