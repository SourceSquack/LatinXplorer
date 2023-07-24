import { Urbanist } from "next/font/google";
import type { Metadata } from "next";
import { ClerkProvider } from "@clerk/nextjs";

import "./globals.css";

const urbanist = Urbanist({ subsets: ["latin"] });

export const metadata: Metadata = {
  title:
    "LatinXplorer - Discover and Explore Tropical Destinations in Latin America",
  description:
    "LatinXplorer is your comprehensive guide to discovering and exploring the most fascinating tropical destinations in Latin America, including Medellín, Mexico City, Buenos Aires, and many more. Plan your trip with detailed information, personalized itineraries, and securely book tour services. Embark on a unique adventure in the lush nature and rich culture of Latin America with LatinXplorer!",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={urbanist.className}>{children}</body>
      </html>
    </ClerkProvider>
  );
}
