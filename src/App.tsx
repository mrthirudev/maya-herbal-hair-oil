import React from 'react'
import Hero from './components/Hero'
import ProductInfo from './components/ProductInfo'
import ContactBar from './components/ContactBar'

export default function App() {
  return (
    <div className="app-root">
      <header className="site-header">
        <picture>
          <source srcSet={`${import.meta.env.BASE_URL}assets/logo.png`} type="image/png" />
          <img src={`${import.meta.env.BASE_URL}assets/logo.svg`} alt="MAYA logo" className="logo" />
        </picture>
      </header>
      <main>
        <Hero />
        <ProductInfo />
      </main>
      <ContactBar />
      <footer className="site-footer">© {new Date().getFullYear()} MAYA Herbal Hair Oil</footer>
    </div>
  )
}
