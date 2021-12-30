import Head from 'next/head'
import styles from './about.module.scss'
import { getLayout } from '../components/layout'
import { useLayoutContext } from '../contexts/LayoutContext'

const About = () => {
  const { theme } = useLayoutContext()
  return (
    <>
      <Head>
        <title>About Elijah Lee | Frontend Developer</title>
        <meta name="description" content="About Elijah Lee Frontend Developer" />
        <link rel="icon" href="/images/logos/logo32x32.png" />
      </Head>
      <div className={styles.container}>
        <div className={styles.sidebarLeft} style={{ background: theme.sidebarLeftBg }}></div>
        <main className={`${styles.main} ${theme?.borders ? `noBorder` : ''}`} style={{ background: theme.mainBg }}>
          <p>Out of curiosity I googled &ldquo;What is HTML?&rdquo; in my freshman year of college. I started reading an online book on introductory HTML and CSS and somehow found myself watching 2 hour youtube tutorials on WordPress website development in the library for fun.</p>
          <p>As a hobby, I made WordPress websites for different student clubs and soon transitioned into making websites with HTML, CSS, and Javascript. I have a fond memory of prioritizing finishing a website for a personal project rather than completing a paper for a film class during finals week.</p>
          <p></p>
          <p>During my 2 year mandatory military service, I coded an hour every night to remake my <a href="https://develijahlee.github.io/uic/" target="_blank" rel="noreferrer">college website</a>. I then started exploring React and upon returning to school, immediately began another project to remake a student <a href="https://yonseiuicscribe.netlify.app/" target="_blank" rel="noreferrer">newsmagazine website</a> using React and Gatsby.</p>
          <p>After graduation, I worked full-time at a logistics startup company as a frontend developer and gained valuable experience collaborating with developers, desginers, and product owners to create the best user experience.</p>
          <p>I am excited for the next step in my career!</p>
        </main>
        <div className={`${styles.sidebarRight} ${theme?.borders ? `noBorder` : ''}`} style={{ background: theme.sidebarRightBg }}></div>
      </div>
      <div className={`${styles.bottombar} ${theme?.borders ? `noBorder` : ''}`} style={{ background: theme.bottombarBg }}></div>
    </>
  )
}

About.getLayout = getLayout

export default About
