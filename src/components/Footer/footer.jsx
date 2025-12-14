import React, { useState } from 'react'
import styles from './footer.module.css'

const SOCIAL = [
  { id: 'linkedin', label: 'LinkedIn', href: 'https://www.linkedin.com/in/shivam-chauhan-86067a209/', svg: /* svg */ (
    <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true" focusable="false">
      <path fill="currentColor" d="M4.98 3.5C4.98 4.88 3.86 6 2.48 6S0 4.88 0 3.5 1.12 1 2.5 1 4.98 2.12 4.98 3.5zM.2 8h4.54V24H.2V8zm7.9 0h4.36v2.18h.06c.61-1.16 2.1-2.38 4.32-2.38 4.62 0 5.47 3.04 5.47 6.99V24h-4.53v-7.7c0-1.84-.03-4.21-2.57-4.21-2.57 0-2.96 2.01-2.96 4.08V24H8.1V8z"/>
    </svg>
  )},
  { id: 'github', label: 'GitHub', href: 'https://github.com/Shivam34-oss', svg: (
    <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true" focusable="false">
      <path fill="currentColor" d="M12 .5C5.73.5.9 5.33.9 11.6c0 4.76 3.08 8.8 7.36 10.23.54.1.73-.24.73-.53 0-.26-.01-1.13-.02-2.05-2.99.65-3.62-1.44-3.62-1.44-.49-1.24-1.2-1.57-1.2-1.57-.98-.67.07-.66.07-.66 1.08.08 1.65 1.11 1.65 1.11.96 1.63 2.52 1.16 3.14.89.1-.69.38-1.16.69-1.43-2.39-.27-4.9-1.2-4.9-5.33 0-1.18.42-2.15 1.11-2.91-.11-.27-.48-1.36.11-2.83 0 0 .92-.29 3.02 1.11a10.4 10.4 0 0 1 2.75-.37c.93 0 1.87.12 2.75.37 2.1-1.4 3.02-1.11 3.02-1.11.6 1.47.23 2.56.12 2.83.69.76 1.11 1.73 1.11 2.91 0 4.14-2.52 5.05-4.92 5.32.39.34.73 1.02.73 2.06 0 1.49-.01 2.69-.01 3.05 0 .29.19.64.74.53C20.02 20.4 23.1 16.36 23.1 11.6 23.1 5.33 18.27.5 12 .5z"/>
    </svg>
  )},
  { id: 'twitter', label: 'Twitter', href: 'https://twitter.com/your-username', svg: (
    <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true" focusable="false">
      <path fill="currentColor" d="M23 4.56c-.8.35-1.66.58-2.56.69a4.6 4.6 0 0 0 2.02-2.53 9.17 9.17 0 0 1-2.92 1.12 4.58 4.58 0 0 0-7.8 4.18A13 13 0 0 1 1.64 3.15a4.58 4.58 0 0 0 1.42 6.11 4.52 4.52 0 0 1-2.07-.57v.06a4.58 4.58 0 0 0 3.67 4.49 4.6 4.6 0 0 1-2.06.08 4.58 4.58 0 0 0 4.28 3.18 9.2 9.2 0 0 1-5.7 1.97c-.37 0-.73-.02-1.09-.06A13 13 0 0 0 7.29 21c8.28 0 12.81-6.86 12.81-12.8 0-.2 0-.4-.02-.6A9.1 9.1 0 0 0 23 4.56z"/>
    </svg>
  )},
  { id: 'email', label: 'Email', href: 'youremail@example.com', svg: (
    <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true" focusable="false">
      <path fill="currentColor" d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4-8 5L4 8V6l8 5 8-5v2z"/>
    </svg>
  )}
]

export default function Footer() {
  const [copied, setCopied] = useState(false)
  const email = 'youremail@example.com' 

  async function handleClick(id, href) {
    // tracking placeholder
    try {
      console.log(`[Footer] click ${id}`)
    } catch {
      // ignore
    }

    if (id === 'email') {
      try {
        await navigator.clipboard.writeText(href)
        setCopied(true)
        setTimeout(() => setCopied(false), 1600)
      } catch {
        // fallback open mailto
        window.open(`mailto:${href}`, '_blank', 'noopener,noreferrer')
      }
      return
    }

    // open social in new tab  
    window.open(href, '_blank', 'noopener,noreferrer')
  }

  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.social} role="navigation" aria-label="Social links">
          {SOCIAL.map(s => (
            <button
              key={s.id}
              className={styles.iconBtn}
              onClick={() => handleClick(s.id, s.id === 'email' ? email : s.href)}
              aria-label={s.label}
              title={s.id === 'email' ? `Copy email (${email})` : s.label}
            >
              <span className={styles.icon} aria-hidden="true">{s.svg}</span>
            </button>
          ))}
          <div className={styles.copied} aria-hidden={!copied} style={{opacity: copied ? 1 : 0}}>
            Email copied!
          </div>
        </div>

        <div className={styles.copy}>
          © {new Date().getFullYear()} Shivam Chauhan — Full-Stack Developer
        </div>
      </div>
    </footer>
  )
}
