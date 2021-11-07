import Header from "./components/Header"
import SideNav from "./components/SideNav"
import {cookieCutter} from 'cookie-cutter'
import Cookies from 'cookies'
import {useRouter} from 'next/router'
import { getCookie } from 'cookies-next';
import axios from 'axios'

const index = (props) => {
    console.log(props)
    const lists = props.d.data
    console.log(lists)
    
    const list = lists.map(d=>{
        console.log(d.name)
    })
    
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
                <Header title="Stats"/>
                <div className="mt-24">
                    <div className="flex flex-col bg-gray-50 w-full h-screen p-4">
                        <div className="flex justify-between items-center shadow overflow-hidden border-b border-gray-200 sm:rounded-lg mb-10 p-4">
                            <div className="flex flex-col justify-center items-center h-32 w-72 bg-pink-500 rounded-2xl">
                                <p className="text-white text-5xl">50</p>
                                <p className="text-white">Blog Posts</p>
                            </div>      
                            <div className="flex flex-col justify-center items-center h-32 w-72 bg-pink-500 rounded-2xl">
                                <p className="text-white text-5xl">500</p>
                                <p className="text-white">Members</p>
                            </div>  
                            <div className="flex flex-col justify-center items-center h-32 w-72 bg-pink-500 rounded-2xl">
                                <p className="text-white text-5xl">500K</p>
                                <p className="text-white">Site Visits</p>
                            </div>
                            <div className="flex flex-col justify-center items-center h-32 w-72 bg-pink-500 rounded-2xl">
                                <p className="text-white text-5xl">ZMK 50K</p>
                                <p className="text-white">Donations</p>
                            </div>                
                        </div>
                        <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                            <table className="min-w-full divide-y divide-gray-200">
                            <thead className="bg-gray-50">
                                <tr>
                                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    First Name
                                </th>
                                
                                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Email
                                </th>
                                
                                <th scope="col" className="relative px-6 py-3">
                                    <span className="sr-only">Edit</span>
                                </th>
                                </tr>
                            </thead>
                            <tbody className="bg-white divide-y divide-gray-200">
                                {
                                    lists.map((list, i)=>{
                                        return(
                                            <tr key={i}>
                                                <td className="px-6 py-4 whitespace-nowrap">
                                                    <div className="flex items-center">
                                                    
                                                    <div className="ml-4">
                                                        <div className="text-sm font-medium text-gray-900">
                                                        {list.name}
                                                        </div>
                                                        
                                                    </div>
                                                    </div>
                                                </td>
                                                
                                                <td className="px-6 py-4 whitespace-nowrap">
                                                {list.email}
                                                </td>
                                                
                                                {/* <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium space-x-3">
                                                    <a href="#" className="text-indigo-600 hover:text-indigo-900 bg-yellow-200 p-2 rounded-full px-10">Edit</a>
                                                    <a href="#" className="hover:text-indigo-900 bg-red-500 p-2 rounded-full text-white px-10">Delete</a>
                                                </td> */}
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

export default index 

export async function getServerSideProps(context){
    const cookies = new Cookies(context.req, context.res)
    const token = cookies.get('token')

    const data = await axios.get('https://wingedgirls.herokuapp.com/api/v1/lists', {
        headers: {
            'Content-Type': 'application/json',
            accept: '*/*',
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
          }
    })
    const d = data.data
    console.log(d)
    return {
        props: {
            d
        }
    }
}
