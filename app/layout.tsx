import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Noor Tahir - Graphic Designer & 3D Animator",
  description: "Portfolio of Noor Tahir - Professional Graphic Designer and 3D Animator specializing in branding, UI/UX design, illustration, and animation.",
  keywords: ["Graphic Design", "3D Animation", "Branding", "UI/UX Design", "Illustration", "Logo Design", "Portfolio"],
  authors: [{ name: "Noor Tahir" }],
  openGraph: {
    title: "Noor Tahir - Graphic Designer & 3D Animator",
    description: "Professional portfolio showcasing branding, design, and animation work",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
