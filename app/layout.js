import './globals.css'
import Header from '../components/Header'
import Benefits from "../components/Benefits"; 

export const metadata = {
  title: 'Ionix Drones',
  description: 'Výkon a sloboda v tvojich rukách',
}

export default function RootLayout({ children }) {
  return (
    <html lang="sk">
      {/* 
        Next.js sem automaticky pridá <body> a <head> tagy.
        Taktiež sem automaticky vloží obsah z 'metadata' objektu a viewport meta tag.
        Preto manuálny <head> tag nie je potrebný.
      */}
      <body className="bg-[#0d0d0d] text-white">
      <Header />
      <main>{children}</main>
    </body>
    </html>
  )
}