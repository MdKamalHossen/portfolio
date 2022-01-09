import Link from 'next/link'
import { useRouter } from 'next/router'
import { useState, useEffect } from 'react'
import styles from './header.module.scss'
import { useLayoutContext } from '../contexts/LayoutContext'

const Header = () => {
  const router = useRouter()
  const { theme, toggle } = useLayoutContext()
  const [isActive, setIsActive] = useState('portfolio')

  useEffect(() => {
    if (router.pathname === '/') {
      setIsActive('portfolio')
    } else if (router.pathname === '/about') {
      setIsActive('about')
    }
  }, [router.pathname])

  return (
    <header className={styles.header} style={{ background: theme.headerBg }}>
      <nav className={styles.nav}>
        <div className={styles.circleWrap} style={{ background: theme.sidebarLeftBg }}>
          <Link href="/">
            <a><img src=''</a>
          </Link>
        </div>
        <ul className={theme?.borders ? 'noBorder' : ''}>
          <li className={isActive === 'portfolio' ? styles.isActive : ''}>
            <Link href="/">
              <a>Portfolio</a>
            </Link>
          </li>
          <li className={isActive === 'about' ? styles.isActive : ''}>
            <Link href="/about">
              <a>About</a>
            </Link>
          </li>
        </ul>
        <div className={`${styles.switchWrap} ${theme?.borders ? `noBorder` : ''}`}>
          <label className={styles.switch}>
            <input onClick={toggle} type="checkbox" />
            <span className={styles.slider} style={{ background: theme.headerBg }}></span>
          </label>
        </div>
      </nav>
    </header>
  )
}

export default Header