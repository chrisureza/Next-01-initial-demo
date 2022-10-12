import Link from 'next/link'
import { ColorLayout } from '../../layouts/ColorLayout'
import { MainLayout } from '../../layouts/MainLayout'

export default function PricingPage() {
	return (
		<>
			<h1>Pricing Page</h1>
			<h1 className="title">
				Go to <Link href="/">Home</Link>
			</h1>

			<p className="description">
				Get started by editing{' '}
				<code className="code">pages/pricing/index.jsx</code>
			</p>
		</>
	)
}

PricingPage.getLayout = function getLayout(page: JSX.Element) {
	return (
		<MainLayout>
			<ColorLayout color="rgba(123, 200, 85, 0.7)">
				{page}
			</ColorLayout>
		</MainLayout>
	)
}
