import React from 'react'
import Image from 'next/image'

const Home = () => {
    const img1 = '/images/ic_logo.svg'
    const personImg = '/images/person.svg'
  return (
    <div>
        
        <div className='fixed top-0 left-0 right-0 bg-white flex justify-between p-[16px] lg:px-[100px] '>
        <Image src={img1} alt='logo' width={80} height={80} />
        <Image src={personImg} alt='person' width={32} height={32}/>
    </div>

    <div className='mt-[245px] '>
      <h1 className='text-center'>Find a place you
will love to live!</h1>
    </div>
    </div>
  )
}

export default Home