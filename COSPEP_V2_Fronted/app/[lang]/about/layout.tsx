import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "About COSPEP | Trusted Chinese Peptide Suppliers & Manufacturers",
    description: "Learn about our GMP-standard facilities and R&D team. As one of the most reliable chinese peptide suppliers, we specialize in manufacturing premium peptides and plant extracts for export.",
    keywords: "about COSPEP, chinese peptide suppliers, reliable peptide manufacturer, plant extract factory, B2B chemical supplier",
};

export default function AboutLayout({ children }: { children: React.ReactNode }) {
    return children;
}
