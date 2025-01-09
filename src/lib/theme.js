export function getInitialTheme() {
  if (typeof window !== 'undefined') {
    const savedTheme = window.localStorage.getItem('theme')
    if (savedTheme) return savedTheme
    
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
    return prefersDark ? 'dark' : 'light'
  }
  return 'dark'
}
