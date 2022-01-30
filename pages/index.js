import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>First Day First Show Kannada</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Welcome to my First Day First Show Kannada Website" />
        <p className="description">
          Under Construction!!
        </p>
      </main>

      <Footer />
    </div>
  )
}
