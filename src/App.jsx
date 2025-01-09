import React, { useState, useEffect } from 'react'
import { ThemeToggle } from './components/ThemeToggle'
import { getInitialTheme } from './lib/theme'

function App() {
  const [url, setUrl] = useState('https://fujifilm-x.com/en-us/products/cameras/')
  const [theme, setTheme] = useState(getInitialTheme)

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark')
    }
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault()
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center relative">
      <ThemeToggle theme={theme} setTheme={setTheme} />
      
      <div className="w-full max-w-2xl px-4">
        <h1 className="text-5xl font-bold text-center mb-4">
          Camera Scraper
        </h1>
        <p className="text-[hsl(var(--text-secondary))] text-xl text-center mb-12">
          Enter a camera manufacturer's website URL to scrape product information.
        </p>

        <div className="card p-8">
          <h2 className="text-2xl font-semibold mb-2">
            Scrape Camera Information
          </h2>
          <p className="text-[hsl(var(--text-secondary))] mb-8">
            Enter the URL of a camera manufacturer's website to begin scraping.
          </p>

          <form onSubmit={handleSubmit}>
            <label className="block mb-2">Website URL</label>
            <input
              type="url"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              className="w-full p-4 rounded-lg mb-6 input-themed"
              placeholder="Enter website URL"
            />

            <button
              type="submit"
              className="scrape-button w-full py-4 rounded-lg text-white font-medium"
            >
              Scrape
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default App
