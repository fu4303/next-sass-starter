import styles from './Header.module.scss';

const Header = () => {
  return (
    <header className={styles.header}>
      <a
        href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
        target="_blank"
        rel="noopener noreferrer"
      >
        Powered by{' '}
        <img src="/vercel.svg" alt="Vercel Logo" className={styles.headerLogo} />
      </a>
    </header>
  )
}

export default Header;
