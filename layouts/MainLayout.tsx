import Head from 'next/head'
import { FC, ReactNode } from 'react'
import { Navbar } from '../components/Navbar'
import styles from './MainLayout.module.css'

interface Props {
  children?: ReactNode | undefined,
}

export const MainLayout:FC<Props> = ({ children }) => {
  return (
    <div className={styles.container}>
      <Head>
        <title>chrisureza</title>
        <meta name="description" content="This is my page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar/>

      <main className={styles.main}>
        { children }
      </main>
    </div>
  )
}
