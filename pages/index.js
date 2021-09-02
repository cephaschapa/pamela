import Head from 'next/head'
import Image from 'next/image'
import Banner from '../components/Banner'
import Header from '../components/Header'
import MedCard from '../components/MedCard'
import Footer from '../components/Footer'

export default function Home({data,data2}) {
  
  return (
    <div className="">
      <Head>
        <title>WingEd Girls | Welcome</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon (1).ico" />
      </Head>

      
        {/* Header Start*/}
        <Header/>
        {/* Header End */}

        {/* Banner Start */}
        <Banner/>
        {/* Banner End */}
      <main className="text-gray-500 max-w-7xl mx-auto px-8 sm:px-16">
        <section className="pt-12 " id="about">
          <h2 className="text-4xl mb-6 text-center">About Us</h2>
          <div className="grid grid-cols-1 text-center">
            {/* Pull data from server */}
            <p>Our focus is on menstral health management, we distribute and teach girls in rural areas how make reusable pads. Our organisation also carries out talks to encourace girls to stay in school and choose career paths.</p>
            {/* {data?.map(place=>{
              return (
                <PlacesCard key={place.img} image={place.img} distance={place.distance} location={place.location}/>
              )
            })} */}
          </div>
          <h2 className="text-4xl mb-6 mt-16 text-center">Our Team</h2>
          <div className="justify-center items-center grid grid-cols-1 md:grid-cols-3 space-x-2">
            <div className="flex flex-col bg-gray-100 p-2 rounded-2xl items-center mt-2">
                <Image src="/pamela.jpeg" className="h-24 w-24 border-4 border-pink-500 rounded-2xl" height={135} width={80}/>
                <p className="mt-4 font-bold">Pamela</p>
                <p className="text-sm">Co-Founder</p>
            </div>
            <div className="flex h-52 flex-col bg-gray-100 p-2 rounded-2xl items-center mt-2">
                <Image src="/mwape.jpeg" className="h-32 w-24 border-4 border-pink-500 rounded-2xl" height={200} width={80}/>
                <p className="mt-4 font-bold">Mwape Kapepula</p>
                <p className="text-sm">Co-Founder</p>
            </div>
            
          </div>
        </section>
        <section className="pt-16" id="contact">
          <h2 className="text-4xl text-center">Our Pages</h2>
          {/* <p className="text-2xl mt-4">Our Social</p> */}
          <div className="grid grid-cols-1 md:grid-cols-4 space-x-2 mt-8">
            
            <div className="flex flex-col p-2 rounded-2xl items-center mt-2">
                <a href="https://www.facebook.com/wingedgirlszm/?ref=page_internal" className="">
                <div className="h-24 w-24 bg-pink-500 rounded-full flex items-center justify-center">
                  <Image src="/fb.png" height={60} width={60}/>
                </div>
                </a>
                <p className="mt-4 font-bold">Facebook</p>
                <p className="text-sm">Co-Founder</p>
            </div>
            <div className="flex flex-col p-2 rounded-2xl items-center mt-2">
              <a href="https://www.instagram.com/wingedgirlszm/?utm_medium=copy_link&fbclid=IwAR1M5xbC5cmwkY2XTLCgyAnSr5_RpFn9WWqIys5KJWOElaTuizpBIQqyRAc" className="">
                <div className="h-24 w-24 bg-pink-500 rounded-full flex items-center justify-center">
                <Image src="/insta.png" height={60} width={60}/>
                </div>
              </a>
                <p className="mt-4 font-bold">Instagram</p>
                <p className="text-sm">Co-Founder</p>
            </div>
            <div className="flex flex-col p-2 rounded-2xl items-center mt-2">
            <div className="h-24 w-24 bg-pink-500 rounded-full flex items-center justify-center">
                  <Image src="/email.png" height={60} width={60}/>
                </div>
                <p className="mt-4 font-bold">Email</p>
                <p className="text-sm">wingedgirlszm.@gmail.com</p>
            </div>
            <div className="flex flex-col p-2 rounded-2xl items-center mt-2">
            <div className="h-24 w-24 bg-pink-500 rounded-full flex items-center justify-center">
                <Image src="/phone.png" height={60} width={60}/>
                </div>
                <p className="mt-4 font-bold">Mobile</p>
                <p className="text-sm">+260973757535</p>
            </div>
          </div>
          {/* <h1 className="text-4xl mt-1 text-center" id="ourwork">Our Work</h1> */}
          <div className="">
         
                {/* <Mailchimp
              action='https://gmail.us20.list-manage.com/subscribe/post?u=ac601dc4870e4def22bbd33e3&amp;id=72b52cf1bb'
              fields={[
                {
                  name: 'EMAIL',
                  placeholder: 'Email',
                  type: 'email',
                  required: true
                }
              ]}
              /> */}
          </div>
          {/* <div className="flex p-3 overflow-auto space-x-3 py-3 scrollbar-hide w-full mt-10" id="donate">
            {
              data2?.map(data=>{
                return (
                  <MedCard key={data.img} image={data.img} title={data.title}/>
                )
              })
            }
          </div> */}
        </section>
        <section className="p-3 mt-20 mb-20 relative h-[300px] space-y-3">
            <Image src="/girls.jpg" layout="fill" objectFit="cover" className="rounded-xl"/>
          <div className="relative top-16 space-y-3">
            <h1 className="text-3xl text-white font-bold">Support Our Cause</h1>
            
            <button className="bg-pink-500 text-white rounded-2xl p-3">Donate</button>
          </div>
        </section>
      </main>
      <Footer />
      
    </div>
  )
}

export async function getStaticProps(){
  const data = await fetch(`https://links.papareact.com/pyp`).then(res=>{
    return res.json()
  })

  const data2 = await fetch(`https://links.papareact.com/zp1`).then(res=>{
    return res.json()
  })

  return {
    props: {
      data,
      data2
    }
  }
}
