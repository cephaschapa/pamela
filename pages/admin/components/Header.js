import { LogoutIcon } from "@heroicons/react/outline"

const Header = ({title}) => {
    return (
        <div className="flex items-center p-4 w-full h-24 bg-gray-100 fixed justify-start space-x-10">
            <p className="text-2xl font-bold text-left">Dashboard | <span className="font-normal">{title}</span></p>
            <div className="flex space-x-4 items-center  bg-pink-500 p-4 text-white rounded-2xl font-bold cursor-pointer">
                <p className="">Logout</p>
                <LogoutIcon className="h-6 w-6"/>
            </div>
        </div>
    )
}

export default Header
