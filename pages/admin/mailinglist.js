import Header from "./components/Header"
import SideNav from "./components/SideNav"

const mailinglist = () => {
    const data = [
        {
            "id": 1,
            "firstName": "Diana",
            "lastName": "Ross",
            "email": "dianaross@gmail.com"
        },
        {
            "id": 1,
            "firstName": "Fredrick",
            "lastName": "Mulenga",
            "email": "fm2019@gmail.com"
        },
        {
            "id": 1,
            "firstName": "Chola",
            "lastName": "Mulunda",
            "email": "cholam@gmail.com"
        },
        {
            "id": 1,
            "firstName": "Jean",
            "lastName": "McMbwala",
            "email": "jeanbwalya@gmail.com"
        },
        {
            "id": 1,
            "firstName": "Osmosis C",
            "lastName": "Monoxide",
            "email": "ocm@gmail.com"
        },
    ]
    return (
        <div className="flex h-screen">
            <SideNav />
            <div className="w-full ml-96 relative">
                <Header title="Mailing List"/>
                <div className="mt-24">
                    <div className="flex flex-col bg-gray-50 w-full h-screen p-4">
                    <div class="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                        <table class="min-w-full divide-y divide-gray-200">
                        <thead class="bg-gray-50">
                            <tr>
                            <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                First Name
                            </th>
                            <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Last Name
                            </th>
                            <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Email
                            </th>
                            
                            <th scope="col" class="relative px-6 py-3">
                                <span class="sr-only">Edit</span>
                            </th>
                            </tr>
                        </thead>
                        <tbody class="bg-white divide-y divide-gray-200">
                            {
                                data.map(blog=>{
                                    return(
                                        <tr>
                                            <td class="px-6 py-4 whitespace-nowrap">
                                                <div class="flex items-center">
                                                
                                                <div class="ml-4">
                                                    <div class="text-sm font-medium text-gray-900">
                                                    {blog.firstName}
                                                    </div>
                                                    
                                                </div>
                                                </div>
                                            </td>
                                            <td class="px-6 py-4 whitespace-nowrap">
                                                {blog.lastName}
                                            </td>
                                            <td class="px-6 py-4 whitespace-nowrap">
                                             {blog.email}
                                            </td>
                                            
                                            <td class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium space-x-3">
                                                <a href="#" class="text-indigo-600 hover:text-indigo-900 bg-yellow-200 p-2 rounded-full px-10">Edit</a>
                                                <a href="#" class="hover:text-indigo-900 bg-red-500 p-2 rounded-full text-white px-10">Delete</a>
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

export default mailinglist
