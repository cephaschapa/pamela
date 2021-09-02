import Image from 'next/image'


function Banner() {
    return (
        <div className="relative h-[300px] md:h-[500px] xl:h-[800px]">
            <Image src="/img (2).jpg" layout="fill" objectFit="cover"/>
            <div className="absolute top-1/3 w-full text-center">
                <p className="text-sm md:text-3xl font-bold text-white">We equipe girls to soar to greater heights one pad at a time.</p>
                <button className="text-white bg-pink-500 p-5 rounded-xl mt-10 shadow-lg transition duration-150 hover:shadow-2xl active:scale-95">Support Us</button>
            </div>
        </div>
    )
}

export default Banner
