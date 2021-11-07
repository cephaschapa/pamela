import { LockClosedIcon, PlusIcon } from "@heroicons/react/outline"
import Header from "./components/Header"
import SideNav from "./components/SideNav"
import Cookies from 'cookies'
import {useRouter} from 'next/router'
import { getCookie } from 'cookies-next';
import {useState} from 'react'
import axios from 'axios'
import cookieCutter from 'cookie-cutter'

const blogs = (props) => {
    const [openModal, setOpenModal] = useState(false)
    const [title, setTitle] = useState('Title')
    const [description, setDescription] = useState('Description')
    const [url, setUrl] = useState('Url')
    const [author, setAuthor] = useState('Author')
    console.log(props)
    const blogs = props.d.data
    console.log(blogs)  
    
    const submitHander = async (e) => {
        const token = cookieCutter.get('token')
        console.log(token)
        e.preventDefault()
        console.log(title, description, url, author)
        await axios.post('http://localhost:5000/api/v1/blogs',{
            title: title,
            description: description,
            imageUrl: url,
            user: author  
  
          },{
            headers: {
                'Content-Type': 'application/json',
                accept: '*/*',
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
        }}
        ).then(response => {
            if(response.status === 200){
                console.log(response)
                cookieCutter.set('token', response.data.token)
                const token = cookieCutter.get('token')
                console.log(token)
                router.push('admin/dashboard')
            }
        }).catch(error => {
            alert("Invalid Credentials")
        })
    }
    return (
        <div className="flex h-screen">
            <SideNav />
            <div className="w-full ml-96 relative z-0">
                <Header title="Mailing List"/>
                <div className="mt-24 z-0 relative">
                    <div className="flex flex-col bg-gray-50 w-full h-screen p-4">
                        <div className="flex shadow overflow-hidden justify-end border-b border-gray-200 sm:rounded-lg mb-10 p-5">
                            <button onClick={() =>{
                                setOpenModal(true);
                            }} className="flex items-center justify-center space-x-3 h-12 w-72 bg-pink-500 rounded-2xl">
                                <p className="text-white text-5xl"><PlusIcon className="h-6 w-6"/></p>
                                <p className="text-white">Add a blog</p>
                            </button>
                           
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
                                    Image Link
                                </th>
                                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    created At
                                </th>
                                
                                <th scope="col" className="relative px-6 py-3">
                                    <span className="sr-only">Action</span>
                                </th>
                                </tr>
                            </thead>
                            <tbody className="bg-white divide-y divide-gray-200">
                                {
                                    blogs.map((blog,i)=>{
                                        return(
                                            <tr key={i}>
                                                <td className="px-6 py-4 whitespace-nowrap">
                                                    <div className="flex items-center">
                                                    
                                                    <div className="ml-4">
                                                        <div className="text-sm font-medium text-gray-900">
                                                        {blog.title}
                                                        </div>
                                                        
                                                    </div>
                                                    </div>
                                                </td>
                                                <td className="px-6 py-4 whitespace-nowrap">
                                                    {blog.description}
                                                </td>
                                                <td className="px-6 py-4 whitespace-pre-wrap truncate">
                                                {blog.imageUrl}
                                                </td>
                                                <td className="px-6 py-4 whitespace-nowrap">
                                                {blog.createdAt}
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
                                Add blog post
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
                            <form className="space-y-3">
                                <input onChange={(e)=>{
                                    setTitle(e.target.value)
                                }} value={title} type="text" className="w-full p-4 outline-none border border-pink-600 rounded-2xl" placeholder="Email"/>
                                <textarea  onChange={(e)=>{
                                    setDescription(e.target.value)
                                }} value={description} type="text" className="w-full p-4 outline-none border border-pink-600 rounded-2xl" placeholder="Type your story"></textarea>
                                <input  onChange={(e)=>{
                                    setUrl(e.target.value)
                                }} value={url} type="url" className="w-full truncate p-4 outline-none border border-pink-600 rounded-2xl" placeholder="Password"/>
                                <input  onChange={(e)=>{
                                    setAuthor(e.target.value)
                                }} value={author} type="text" className="w-full p-4 outline-none border border-pink-600 rounded-2xl" placeholder="Password"/>

                                <button onClick={submitHander} className="w-full bg-pink-500 text-white rounded-2xl p-4">Login</button>
                            </form>
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

export default blogs

export async function getServerSideProps(context){
    const cookies = new Cookies(context.req, context.res)
    const token = cookies.get('token')

    const data = await axios.get('http://localhost:5000/api/v1/blogs', {
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















