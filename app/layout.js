import './globals.css'
import Header from '../components/Header'
import Footer from '@/components/Footer';

export const metadata = {
  title: 'Ionix Drones',
  description: 'Výkon a sloboda v tvojich rukách',
}

export default function RootLayout({ children }) {
  return (
    <html lang="sk">
      <body className="bg-[#0d0d0d] text-white">
      <Header />
      <main>{children}</main>
      <Footer /> 
    </body>
    </html>
  )
}