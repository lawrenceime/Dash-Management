import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Login = () => {

  const img1 = '/images/ic_logo.svg'
  const img2 = '/images/Vector (Stroke).svg'
  const img3 = '/images/google-icon.svg'
  const img4 = '/images/facebook-icon.svg'
  const img5 = '/images/apple-icon.svg'

  return (
    <>
   <div className='fixed top-0 left-0 right-0 bg-white flex justify-between p-[16px] lg:px-[100px] '>
        <Image src={img1} alt='logo' width={80} height={80} />
        <div className='font-inter text-[#557FF2]'>LOGIN</div>
    </div>

        <div className='lg:w-[498px]  lg:my-[70px] lg:border mx-auto'>

<form>
  <div className='flex justify-center font-medium  font-inter text-[20px]  text-[#1E1E1E] my-[24px]'> Log In </div>
  
  <div className='mx-[16px]'>
   
    <input className=' border rounded-[6px] bg-[#F3F7FE] w-[100%] h-[50px] outline-none mt-[18px] p-[12px]' type='email' name='emailAddress' placeholder='Email Address' />
    <div className='flex items-center relative'>
      <input className=' border rounded-[6px] bg-[#F3F7FE] w-[100%] h-[50px] outline-none mt-[18px] p-[12px] relative ' type='text' name='password' placeholder='password' />
      <Image src={img2} alt='password-lock' width={16} height={16} className='absolute right-[30px] mt-[15px]' />
    </div>
    

    <button className='w-[100%] h-[50px] rounded-[6px] bg-[#3366FF] font-inter text-[#ffff] font-medium text-[16px] mt-[24px] mb-[31.5px] '>SIGN UP</button>

    <div className='flex justify-center items-center gap-[5px] mb-[16px]'>
      <hr className='border w-[140px]' />
      <p>Or</p>
      <hr className='border w-[140px]' />
    </div>
    <div className='space-y-[8px] mb-[24px]'>
      <button className='flex items-center justify-center gap-[12px] border rounded-[8px] w-[100%] h-[44px]'>
        <Image src={img3} alt='google-icon' width={24} height={24} />
        <p className='font-inter '>Sign Up with Google</p>
      </button>
      <button className='flex items-center justify-center gap-[12px] border rounded-[8px] w-[100%] h-[44px]'>
        <Image src={img4} alt='google-icon' width={24} height={24} />
        <p className='font-inter '>Sign Up Facebook</p>
      </button>
      <button className='flex items-center justify-center gap-[12px] border rounded-[8px] w-[100%] h-[44px]'>
        <Image src={img5} alt='google-icon' width={24} height={24} />
        <p className='font-inter '>Sign Up with Apple</p>
      </button>
    </div>
    <div className='flex items-center justify-center lg:mb-[21px]'>
      <p className='font-inter'>Already have an account? </p>
      <Link className='text-[#3366FF]' href='#'>Log In</Link>
    </div>


  </div>


</form>
</div>

      
    </>
    
  )
}

export default Login