import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Veta | Prove What You Can Do",

  description:
    "Veta helps companies discover capable talent through realistic work simulations, giving professionals a way to prove what they can do beyond their CV.",

  keywords: [
    "Veta",
    "talent discovery",
    "work simulations",
    "skills assessment",
    "talent assessment",
    "professional talent",
    "hiring",
    "candidate assessment",
    "product management",
    "work samples",
  ],

  authors: [
    {
      name: "Veta",
    },
  ],

  openGraph: {
    title: "Veta | Prove What You Can Do",
    description:
      "Discover capable talent through realistic work simulations. Prove what you can do beyond your CV.",
    url: "https://veta.netlify.app",
    siteName: "Veta",
    images: [
      {
        url: "/assets/veta.png",
        width: 1200,
        height: 630,
        alt: "Veta — Prove What You Can Do",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Veta | Prove What You Can Do",
    description:
      "Discover capable talent through realistic work simulations. Prove what you can do beyond your CV.",
    images: ["/images/og-image.png"],
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}

// export default function RootLayout({
//   children,
// }: Readonly<{
//   children: React.ReactNode;
// }>) {
//   return (
//     <html lang="en">
//       <body>{children}</body>
//     </html>
//   );
// }
