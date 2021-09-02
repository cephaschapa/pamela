import Image from "next/image"
import  {AtSymbolIcon, BriefcaseIcon, GlobeAltIcon, HomeIcon, InformationCircleIcon, MenuIcon, SearchIcon, UserIcon} from '@heroicons/react/outline'
import Link from "next/link"

function Header() {
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
                    <Link href="#home">
                        <div className="flex flex-col items-center cursor-pointer md:space-y-1 transiton duration-150 hover:bg-pink-500 hover:text-white p-2 rounded-2xl">
                            <HomeIcon className="h-7 w-7"/>
                            <p  className="hidden md:inline text-sm">Home</p>
                        </div>
                    </Link>
                    <Link href="#about">
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
                        <button className="hidden md:inline text-white bg-pink-500 p-3 rounded-xl">Donate</button>
                    </Link>
                    
                </div>
            </div>
        </header>
    )
}

export default Header
