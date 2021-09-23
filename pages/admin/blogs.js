import { PlusIcon } from "@heroicons/react/outline"
import Header from "./components/Header"
import SideNav from "./components/SideNav"

const blogs = () => {
    const data = [
        {
            "id": 1,
            "firstName": "Girst in tech",
            "lastName": "Lorem Ipsum...",
            "email": "Pamela M"
        },
        {
            "id": 1,
            "firstName": "Impact of girlchild education on the economy",
            "lastName": "Lorem Ipsum...",
            "email": "Mary Doe"
        },
        {
            "id": 1,
            "firstName": "Girst in tech",
            "lastName": "Lorem Ipsum...",
            "email": "Pamela M"
        },
        {
            "id": 1,
            "firstName": "Impact of girlchild education on the economy",
            "lastName": "Lorem Ipsum...",
            "email": "Mary Doe"
        },
        {
            "id": 1,
            "firstName": "Girst in tech",
            "lastName": "Lorem Ipsum...",
            "email": "Pamela M"
        },
        {
            "id": 1,
            "firstName": "Impact of girlchild education on the economy",
            "lastName": "Lorem Ipsum...",
            "email": "Mary Doe"
        },
        {
            "id": 1,
            "firstName": "Girst in tech",
            "lastName": "Lorem Ipsum...",
            "email": "Pamela M"
        },
        {
            "id": 1,
            "firstName": "Impact of girlchild education on the economy",
            "lastName": "Lorem Ipsum...",
            "email": "Mary Doe"
        },
        {
            "id": 1,
            "firstName": "Girst in tech",
            "lastName": "Lorem Ipsum...",
            "email": "Pamela M"
        },
        {
            "id": 1,
            "firstName": "Impact of girlchild education on the economy",
            "lastName": "Lorem Ipsum...",
            "email": "Mary Doe"
        },
        {
            "id": 1,
            "firstName": "Girst in tech",
            "lastName": "Lorem Ipsum...",
            "email": "Pamela M"
        },
        {
            "id": 1,
            "firstName": "Impact of girlchild education on the economy",
            "lastName": "Lorem Ipsum...",
            "email": "Mary Doe"
        },
    ]
    return (
        <div className="flex h-screen">
            <SideNav />
            <div className="w-full ml-96 relative">
                <Header title="Mailing List"/>
                <div className="mt-24">

                    <div className="flex flex-col bg-gray-50 w-full h-screen p-4">
                        <div className="flex shadow overflow-hidden justify-end border-b border-gray-200 sm:rounded-lg mb-10 p-5">
                            <div className="flex items-center justify-center space-x-3 h-12 w-72 bg-pink-500 rounded-2xl">
                                <p className="text-white text-5xl"><PlusIcon className="h-6 w-6"/></p>
                                <p className="text-white">Add a blog</p>
                            </div>
                           
                        </div>
                        <div className="text-2xl py-2 font-bold">
                            New Members
                        </div>
                        <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                            <table className="min-w-full divide-y divide-gray-200">
                            <thead className="bg-gray-50">
                                <tr>
                                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Title
                                </th>
                                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Description
                                </th>
                                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Author
                                </th>
                                
                                <th scope="col" className="relative px-6 py-3">
                                    <span className="sr-only">Edit</span>
                                </th>
                                </tr>
                            </thead>
                            <tbody className="bg-white divide-y divide-gray-200">
                                {
                                    data.map((blog,i)=>{
                                        return(
                                            <tr key={i}>
                                                <td className="px-6 py-4 whitespace-nowrap">
                                                    <div className="flex items-center">
                                                    
                                                    <div className="ml-4">
                                                        <div className="text-sm font-medium text-gray-900">
                                                        {blog.firstName}
                                                        </div>
                                                        
                                                    </div>
                                                    </div>
                                                </td>
                                                <td className="px-6 py-4 whitespace-nowrap">
                                                    {blog.lastName}
                                                </td>
                                                <td className="px-6 py-4 whitespace-nowrap">
                                                {blog.email}
                                                </td>
                                                
                                                <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium space-x-3">
                                                    <a href="#" className="text-indigo-600 hover:text-indigo-900 bg-yellow-200 p-2 rounded-full px-10">Edit</a>
                                                    <a href="#" className="hover:text-indigo-900 bg-red-500 p-2 rounded-full text-white px-10">Delete</a>
                                                </td>
                                                </tr>
                                        )
                                    })
                                }
                            </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default blogs














