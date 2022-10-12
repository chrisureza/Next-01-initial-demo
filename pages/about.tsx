import Link from 'next/link'
import { ColorLayout } from '../layouts/ColorLayout'
import { MainLayout } from '../layouts/MainLayout'

export default function AboutPage() {
  return (
    <>
      <h1>About Page</h1>
      <h1 className="title">
        {/* Go to <a href="/">Home</a> */}
        Go to <Link href="/">Home</Link>
      </h1>

      <p className="description">
        Get started by editing{' '}
        <code className="code">pages/about.jsx</code>
      </p>
    </>
  )
}

AboutPage.getLayout = function getLayout(page: JSX.Element) {
  return (
    <MainLayout>
      <ColorLayout color="rgba(255, 70, 0, 0.7)">
        {page}
      </ColorLayout>
    </MainLayout>
  )
}