import Header from '@/components/Header'
import Card from '@/components/Card'
import FilterBox from '@/components/Filter'
import Head from 'next/head'


export default function Home() {
  return <>
    <Head>
      <title>Job Listing Challenge</title>
    </Head>
    <div className='body bg-[#f0fafb]'>
      <Header />
      <FilterBox />
      <Card />
    </div>

  </>

}
