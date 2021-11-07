import Head from 'next/head'
import {useState, useEffect} from 'react'
import axios from 'axios'
import cookieCutter from 'cookie-cutter'
import {useRouter} from 'next/router'

const Index = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const router = useRouter()

    
    const submitHander = (e) => {
        e.preventDefault()
        console.log(email, password)
        axios.post('https://wingedgirls.herokuapp.com/api/v1/auth/login', {
            email: email,
            password: password,   
        }).then(response => {
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
        <div>
            <Head>
                <title>Login</title>
            </Head>
            <main className="w-full h-screen main flex justify-center items-center">
                <div className="bg-white w-1/5 p-4 h-auto rounded-2xl space-y-3">
                    <p className="text-3xl">Login</p>
                    <div className="">
                        <form className="space-y-3">
                            <input onChange={(e)=>{
                                setEmail(e.target.value)
                            }} value={email} type="text" className="w-full p-4 outline-none border border-pink-600 rounded-2xl" placeholder="Email"/>
                            <input  onChange={(e)=>{
                                setPassword(e.target.value)
                            }} value={password} type="text" className="w-full p-4 outline-none border border-pink-600 rounded-2xl" placeholder="Password"/>
                            <button onClick={submitHander} className="w-full bg-pink-500 text-white rounded-2xl p-4">Login</button>
                        </form>
                    </div>
                </div>
            </main>
        </div>

    )
}

export default Index
