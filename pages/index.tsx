import Head from 'next/head'
import Image from 'next/image'
import styles from './index.module.scss'
import { getLayout } from '../components/layout'
import { useLayoutContext } from '../contexts/LayoutContext'

const Home = () => {
  const { theme } = useLayoutContext()
  return (
    <>
      <Head>
        <title>KAMAL | Frontend Developer</title>
        <meta name="description" content="Kamal Hossen Frontend Developer Portfolio" />
        <link rel="icon" href="/images/logos/logo32x32.png" />
      </Head>
      <div className={styles.container}>
        <div className={styles.sidebarLeft} style={{ background: theme.sidebarLeftBg }}></div>
        <main className={`${styles.main} ${theme?.borders ? `noBorder` : ''}`} style={{ background: theme.mainBg }}>
          <div className={styles.blackBg}>
            <code className={styles.code}>
              {/* <p>{"{"}</p>
              <p className={styles.indent}>name: &ldquo;Md Kamal Hossen&rdquo;,</p>
              <p className={styles.indent}>occupation: &ldquo;Frontend Developer&rdquo;,</p>
              <p className={styles.indent}>languages: [&ldquo;English&rdquo;, &ldquo;Bangla&rdquo;],</p>
              <p className={styles.indent}>for_hire: true</p>
              <p>{"}"}</p> */
                <p className='p-3 .index_code__ETUOL>p'>
                  I am Kamal Hossen, I am a web Design and Developer, I have Complete Diploma in Engineering From Jhenaidah Polytechnic Institute, Now I have Running Bsc in Engineering in CSE at Bangladesh University of Business and Technology, I worked at Aman Knitting Ltd as a Store Officer, Now I Working Trust Technical Training Institute
                   as an Assistant Coordinator and Database Operator, I have around 3 Years Experience in Garments and Institute sector.
                </p>
              }

            </code>
          </div>
          <a href="/pdf/Resume.pdf" target="_blank" className={styles.cvBtn}>Download CV</a>
          <div className={`${styles.skillsWrapper} ${theme?.borders ? `noBorder` : ''}`}>
            <figure>
              <div>
                <Image src={"/images/pages/portfolio/skills/react.svg"} alt="React logo" layout='fill' />
              </div>
              <figcaption>React</figcaption>
            </figure>
            <figure>
              <div>
                <Image src={"/images/pages/portfolio/skills/nextjs.svg"} alt="Nextjs logo" layout='fill' />
              </div>
              <figcaption>Nextjs</figcaption>
            </figure>
            <figure>
              <div>
                <Image src={"/images/pages/portfolio/skills/js.svg"} alt="JS logo" layout='fill' />
              </div>
              <figcaption>Javascript</figcaption>
            </figure>
            <figure>
              <div>
                <Image src={"/images/pages/portfolio/skills/ts.svg"} alt="TS logo" layout='fill' />
              </div>
              <figcaption>Typescript</figcaption>
            </figure>
            <figure>
              <div>
                <Image src={"/images/pages/portfolio/skills/html.svg"} alt="HTML logo" layout='fill' />
              </div>
              <figcaption>HTML</figcaption>
            </figure>
            <figure>
              <div>
                <Image src={"/images/pages/portfolio/skills/css.svg"} alt="CSS logo" layout='fill' />
              </div>
              <figcaption>CSS</figcaption>
            </figure>

            <figure>
              <div>
                <Image src={"/images/pages/portfolio/skills/sass.svg"} alt="Sass logo" layout='fill' />
              </div>
              <figcaption>SASS</figcaption>
            </figure>
          </div>
        </main>
        <div className={`${styles.sidebarRight} ${theme?.borders ? `noBorder` : ''}`} style={{ background: theme.sidebarRightBg }}></div>
      </div>
      <div className={`${styles.experienceWrapper} ${theme?.borders ? `noBorder` : ''}`}>
        <article className={theme?.borders ? `noBorder` : ''} >
          <a href="www.tttiawt.net" target="_blank" rel="noreferrer">
            <div>
              <Image src={"/images/pages/portfolio/poomgoWhite.svg"} alt="Kamal Developer" layout='fill' />
            </div>
          </a>
          <div>
            Kamal
          </div>
        </article>
        <article style={{ background: theme.dohandsBg }}>
          <a href="https://www.dohands.com/" target="_blank" rel="noreferrer">
            <div>
              <Image src={"/images/pages/portfolio/dohands.svg"} alt="dohands logo" layout='fill' />
            </div>
          </a>
          <div>
            React Designer
          </div>
        </article>
      </div>
    </>
  )
}

Home.getLayout = getLayout

export default Home
