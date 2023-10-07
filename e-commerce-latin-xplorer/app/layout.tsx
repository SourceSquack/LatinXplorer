import { Urbanist } from 'next/font/google'

import './globals.css'

import Footer from '@/components/footer'
import Navbar from '@/components/navbar'

const inter = Urbanist({ subsets: ['latin'] })

export const metadata = {
  title: 'Cardi Lingerie - Tienda de Lencería en Medellín',
  description: 'Encuentra la mejor selección de lencería para damas en Medellín. Cardi Lingerie ofrece una amplia gama de productos elegantes y cómodos para realzar tu estilo. ¡Descubre nuestra colección hoy!',
}


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
