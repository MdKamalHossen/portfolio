import Head from 'next/head'
import styles from './about.module.scss'
import { getLayout } from '../components/layout'
import { useLayoutContext } from '../contexts/LayoutContext'

const About = () => {
  const { theme } = useLayoutContext()
  return (
    <>
      <Head>
        <title> Kamal Hossen | Frontend Developer</title>
        <meta name="description" content="About Kamal Hossen Frontend Developer" />
        <link rel="icon" href="/images/logos/logo32x32.png" />
      </Head>
      <div className={styles.container}>
        <div className={styles.sidebarLeft} style={{ background: theme.sidebarLeftBg }}></div>
        <main className={`${styles.main} ${theme?.borders ? `noBorder` : ''}`} style={{ background: theme.mainBg }}>
          <p>I am Kamal &ldquo; Fresher Graduate&rdquo; My University Bangladesh University of Business and Technology. I like coding Like Javascript and Others</p>
          <p>As a hobby, I made React websites for different student clubs and soon transitioned into making websites with HTML, CSS, and Javascript. I have a fond memory of prioritizing finishing a website for a personal project rather than completing a paper for a film class during finals week.</p>
          <p></p>
          <p>During I have my 3 year Experience in military Project, I coded an hour every night to remake my <a href="https://develijahlee.github.io/uic/" target="_blank" rel="noreferrer">college website</a>. I then started exploring React and upon returning to school, immediately began another project to remake a student <a href="https://yonseiuicscribe.netlify.app/" target="_blank" rel="noreferrer">newsmagazine website</a> using React and Gatsby.</p>
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
