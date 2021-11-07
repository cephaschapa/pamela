import { DatabaseIcon, MailIcon, NewspaperIcon, UserCircleIcon, UsersIcon } from "@heroicons/react/outline"
import Link from 'next/link'

const SideNav = () => {
    return (
        <div className="w-96 p-4 bg-pink-500 fixed h-full z-50">
                <div className="text-2xl pt-10 text-white  space-y-3">
                    <div className="bg-white h-24 w-24 rounded-full flex items-center justify-center">
                    <UserCircleIcon className="h-16 w-16 text-pink-500"/>
                    </div>
                    <div className="">
                        <p className="font-bold">Mary Doe</p>
                        <p className="text-sm">Administrator</p>
                    </div>
                    <div className="divider w-24 h-0.5 bg-gray-200 "></div>
                </div>
                <div className="py-4">
                    <ul className="space-y-4">
                        <Link href="/admin/dashboard">
                            <li className="cursor-pointer">
                                <div className="flex space-x-1 items-center bg-pink-100 p-4 rounded-2xl text-pink-500"><DatabaseIcon className="h-6 w-7"/><p>Stats</p></div>
                            </li>
                        </Link>
                        <Link href="/admin/blogs">
                            <li className="cursor-pointer">
                                <div className="flex  space-x-1 bg-pink-100 p-4 rounded-2xl text-pink-500"><NewspaperIcon className="h-6 w-7"/><p>Manage Blogs</p></div>
                            </li>
                        </Link>
                        <Link href="/admin/mailinglist">
                            <li className="cursor-pointer">
                                <div className="flex  space-x-1 bg-pink-100 p-4 rounded-2xl text-pink-500"><MailIcon className="h-6 w-7"/><p>Mailing List</p></div>
                            </li>
                        </Link>
                    </ul>
                </div>
            </div>
    )
}

export default SideNav
