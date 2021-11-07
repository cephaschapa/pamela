import { LockClosedIcon, LoginIcon, MailIcon, PaperAirplaneIcon, PhoneIcon } from '@heroicons/react/outline'
import Head from 'next/head'
import Image from 'next/image'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { useState } from 'react'
import Link from 'next/link'
import axios from 'axios'
import cookieCutter from 'cookie-cutter'



function Contact() {
    const [openModal, setOpenModal] = useState(false)
    const [email, setEmail] = useState()
    const [listname, setlistname] = useState()

    const subscribe = (e) => {
        e.preventDefault()
        // console.log(email, password)
       
        const token = cookieCutter.get('token')
        console.log(token)
        axios.post('https://wingedgirls.herokuapp.com/api/v1/lists', {
            name: listname,
            email: email,   
        },{
            headers: {
                'Content-Type': 'application/json',
                accept: '*/*',
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
        }}).then(response => {
            if(response.status === 201){
                console.log(response)
                alert("Subscription was successfull")}
                setEmail('')
                setlistname('')
        }).catch(error => {
            alert("Invalid Credentials")
        })
    }

    
    const open = (e) =>{
        e.preventDefault()
        setOpenModal(true)
    }
    const [input, setInput] = useState('')
    
    return (
        <div>
             <Head>
                <title>WingEd Girls | About</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/favicon (1).ico" />
            </Head>
            <Header />
            <section className="relative h-[300px] md:h-[500px] xl:h-[800px]">
                    <Image src="/img (2).jpg" layout="fill" objectFit="cover"/>
                    <div className="absolute top-1/3 w-full text-center">
                        <p className="text-4xl md:text-3xl font-bold text-white">Reach Out To Us</p>
                        
                    </div>
            </section>
            <main className="text-gray-500 max-w-7xl mx-auto px-5 sm:px-5">
                <section className="py-5">
                    <p className="text-3xl text-center p-2">Contacts and Details</p>
                    <div className="grid grid-cols-1 md:grid-cols-2">
                        <div className="p-2 m-4 flex flex-col items-center justify-center h-62 shadow-md rounded-2xl border border-gray-100">
                            <div className="relative h-24 w-24 border-4 border-pink-500 rounded-full">
                             <Image src="/pamela.jpeg" className=" rounded-full" layout="fill" objectFit="cover"/>
                            </div>
                            <div className="flex flex-col items-center p-2">
                                <p className="font-bold">Pamela</p>
                                <p className="text-sm">Co-Founder</p>
                            </div>
                            <div className="flex space-x-3">
                                <a className="p-3 bg-pink-500 rounded-full text-white" href="tel:260973757535"><PhoneIcon className="h-6 w-6"/></a>
                                <a className="p-3 bg-pink-500 rounded-full text-white" href="mailto:wingedgirlszm@gmail.com"><MailIcon className="h-6 w-6"/></a>
                            </div>
                        </div>
                        <div className="p-2 m-4 flex flex-col items-center justify-center h-62 shadow-md rounded-2xl border border-gray-100">
                            <div className="relative h-24 w-24 border-4 border-pink-500 rounded-full">
                             <Image src="/mwape.jpeg" className=" rounded-full" layout="fill" objectFit="cover"/>
                            </div>
                            <div className="flex flex-col items-center p-2">
                                <p className="font-bold">Mwape Kapepula</p>
                                <p className="text-sm">Co-Founder</p>
                            </div>
                            <div className="flex space-x-3">
                                <a className="p-3 bg-pink-500 rounded-full text-white" href="tel:260966245070"><PhoneIcon className="h-6 w-6"/></a>
                                <a className="p-3 bg-pink-500 rounded-full text-white" href="mailto:wingedgirlszm@gmail.com"><MailIcon className="h-6 w-6"/></a>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="">
                    <p className="text-3xl text-center p-2">Be on our mailing list</p>
                    <div className='p-8 justify-center items-center flex w-full'>
                        <form className='flex flex-col p-2 w-1/2 space-y-4'>
                            <input  value={listname} onChange={e => setlistname(e.target.value)} className='p-4 border flex-1 outline-none border-pink-500 rounded-full' id='email' type='email' aria-label='email address' placeholder='Enter your name' />
                            <input  value={email} onChange={e => setEmail(e.target.value)} className='p-4 border flex-1 outline-none border-pink-500 rounded-full' id='email' type='email' aria-label='email address' placeholder='Enter your email address' />
                            <button onClick={subscribe} className='bg-pink-500 rounded-full hover:bg-blue-700 duration-300 text-white shadow p-2' type='submit'>
                                Subscribe
                            </button>
                        </form>
                    </div>

                </section>
            
                <section className="p-3 mt-10 mb-20 relative h-[300px] space-y-3">
                    <Image src="/girls.jpg" layout="fill" objectFit="cover" className="rounded-xl"/>
                    <div className="relative top-16 space-y-3">
                        <h1 className="text-3xl text-white font-bold">Support Our Cause</h1>
                        <button onClick={open} className="bg-pink-500 text-white rounded-2xl p-3">Donate</button>
                    </div>  
                </section>
            </main>
            <Footer />
            {openModal ? (
                    <>
                    <div
                    className="justify-center  items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none ease-linear transition-all duration-150 text-gray-500"
                    >
                    <div className="relative my-6 mx-auto w-96">
                        {/*content*/}
                        <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none h-auto overflow-auto text-sm">
                        {/*header*/}
                        <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
                            <h3 className="text-xl font-semibold text-pink-500">
                                Support this cause
                            </h3>
                            <button
                            className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                            onClick={() => setShowModal1(false)}
                            >
                            <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                                <LockClosedIcon className="text-pink-500 h-8" />
                            </span>
                            </button>
                        </div>
                        {/*body*/}
                        <div className="relative p-6 flex-auto">
                            <p>Kindly Send your donations to the numbers below. Or you can contact us at wingedgirlszm@gmail.com</p>
                            <br></br>
                            <p>+260 96 6245070</p>
                            <p>+260 97 3757535</p>

                        </div>
                        {/*footer*/}
                        <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                            <button
                            className="bg-pink-500 font-bold uppercase px-6 py-3 rounded-2xl text-white text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                            type="button"
                            onClick={() => setOpenModal(false)}
                            >
                            Close
                            </button>
                            
                        </div>
                        </div>
                    </div>
                    </div>
                    <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
                </>
                ) : null
            }
            
        </div>
    )
}

export default Contact
