import Link from 'next/link'
import { MainLayout } from '../layouts/MainLayout'

export default function ContactPage() {
  return (
    <>
      <h1>Contact Page</h1>
      <h1 className="title">
        Go to <Link href="/">Home</Link>
      </h1>

      <p className="description">
        Get started by editing{' '}
        <code className="code">pages/contact.jsx</code>
      </p>
    </>
  )
}

ContactPage.getLayout = function getLayout(page: JSX.Element) {
  return (
    <MainLayout>
      {page}
    </MainLayout>
  )
}