import Image from "next/image"
import  {AtSymbolIcon, BriefcaseIcon, GlobeAltIcon, HomeIcon, InformationCircleIcon, LockClosedIcon, MenuIcon, SearchIcon, UserIcon} from '@heroicons/react/outline'
import Link from "next/link"
import {useState} from "react"

function Header() {
    const [openModal, setOpenModal] = useState(false)
    const open = (e) =>{
        e.preventDefault()
        setOpenModal(true)
    }
    return (
        <header className="w-full sticky top-0 z-50 shadow-md bg-white" id="home">
            <div className="px-5 lg:px-52 flex justify-between items-center h-20">
                {/* Logo */}
                <div className="relative flex h-10 cursor-pointer w-24 flex-grow items-center">
                    {/* <p className="font-semibold text-xl md:text-2xl lg:text-3xl text-purple-800">Appvisor</p> */}
                    <Image className="rounded-xl" src="/logos/144.png"  height={72} width={72}/>
                </div>
                {/* Search */}
                
                {/* Left items */}
                <div className="flex flex-grow justify-end space-x-4 items-center text-pink-500 lg:space-x-10">
                    <Link href="/">
                        <div className="flex flex-col items-center cursor-pointer md:space-y-1 transiton duration-150 hover:bg-pink-500 hover:text-white p-2 rounded-2xl">
                            <HomeIcon className="h-7 w-7"/>
                            <p  className="hidden md:inline text-sm">Home</p>
                        </div>
                    </Link>
                    <Link href="/about">
                    <div className="flex flex-col items-center cursor-pointer md:space-y-1 transiton duration-150 hover:bg-pink-500 hover:text-white p-2 rounded-2xl">
                            <InformationCircleIcon className="h-7 w-7"/>
                            <p  className="hidden md:inline text-sm">About</p>
                        </div>
                    </Link>
                    <Link href="/contact">
                    <div className="flex flex-col items-center cursor-pointer md:space-y-1 transiton duration-150 hover:bg-pink-500 hover:text-white p-2 rounded-2xl">
                            <AtSymbolIcon className="h-7 w-7"/>
                            <p  className="hidden md:inline text-sm">Contacts</p>
                        </div>
                    </Link>
                    <Link href="#ourwork">
                        <div className="flex flex-col items-center cursor-pointer md:space-y-1 transiton duration-150 hover:bg-pink-500 hover:text-white p-2 rounded-2xl">
                            <BriefcaseIcon className="h-7 w-7"/>
                            <p  className="hidden md:inline  text-sm">Our Work</p>
                        </div>
                    </Link>
                    <Link href="#donate">
                        <button onClick={open} className="hidden md:inline text-white bg-pink-500 p-3 rounded-xl">Donate</button>
                    </Link>
                    
                </div>
            </div>
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
        </header>
        
    )
}

export default Header
