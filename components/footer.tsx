import Image from 'next/image'
import styles from './footer.module.scss'

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div>
        <a href="https://github.com/develijahlee" target="_blank" rel="noreferrer">
          <Image src={"/images/components/footer/github.svg"} alt="Github logo" layout="fill" />
        </a>
        <a href="https://stackoverflow.com/users/12146388/dev-el" target="_blank" rel="noreferrer">
          <Image src={"/images/components/footer/stackoverflow.svg"} alt="Stackoverflow logo" layout="fill" />
        </a>
        <a href="https://www.linkedin.com/in/elijah-lee-9397a2188/" target="_blank" rel="noreferrer">
          <Image src={"/images/components/footer/linkedin.svg"} alt="Linkedin logo" layout="fill" />
        </a>
      </div>
    </footer >
  )
}

export default Footer