import { LockClosedIcon } from '@heroicons/react/outline'
import Image from 'next/image'
import {useState} from 'react'


function Banner() {
    const [openModal, setOpenModal] = useState(false)
    const open = (e) =>{
        e.preventDefault()
        setOpenModal(true)
    }
    return (
        <div className="relative h-[300px] md:h-[500px] xl:h-[800px]">
            <Image src="/img (2).jpg" layout="fill" objectFit="cover"/>
            <div className="absolute top-52 w-full text-center">
                <p className="text-2xl md:text-3xl font-bold text-white">We equipe girls to soar to greater heights one pad at a time.</p>
                <button onClick={open} className="text-white bg-pink-500 p-5 rounded-xl mt-10 shadow-lg transition duration-150 hover:shadow-2xl active:scale-95">Support Us</button>
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
        </div>
    )
}

export default Banner
