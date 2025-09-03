import './globals.css'
import Header from '../components/Header'
import Footer from '@/components/Footer';
import { CartProvider } from '@/context/CartContext';
export const metadata = {
  title: 'Ionix Drones',
  description: 'Výkon a sloboda v tvojich rukách',
}

export default function RootLayout({ children }) {
  return (
    <html lang="sk">
      <body className="bg-[#0d0d0d] text-white">
       <CartProvider>
      <Header></Header>
      <main>{children}</main>
      <Footer /> 
      </CartProvider>
    </body>
    </html>
  )
}