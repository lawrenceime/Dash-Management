import React from 'react'
import Image from 'next/image';

interface VerifyEmailProps {
    openResendModal: () => void;
    closeModal: () => void;
    isModalOpen: boolean;
}

const img6 = '/images/email.svg'
const VerifyEmail:React.FC<VerifyEmailProps> = ({closeModal, isModalOpen , openResendModal}) => {

    const handleClick = () => {
        closeModal();
        openResendModal();
        
    }
        
    return (
    <>
    <div className={`fixed inset-0 flex items-center justify-center ${isModalOpen?'bg-[#1D3045] bg-opacity-100':''}`}>
        <div className={`rounded-[6px] w-[90%] h-[363px]  bg-white lg:w-[30%] lg:px-[30px] ${isModalOpen?'bg-blue-200' : '' }`}>
            <div className='flex flex-col mt-[18px]'>
            <Image src={img6} width={108} height={108} alt='email-notification' className='mx-auto'/>
            <p className='font-inter text-[16px] text-[#3366FF] mx-auto mt-[16px]'>Verify E-mail Address </p>
            <p className='text-[14px] font-medium text-center mt-[16px]'>Thank you for signing up on AreaFinder. In order to keep your account safe and secure, we’ll need you to verify your e-mail address by clicking the verification link sent to your mail box. Thank you!</p>
            </div>
            <button className='bg-[#3366FF] font-inter text-[16px] w-[90%] h-[50px] mx-[20px] text-white rounded-[6px] mt-[16px]' onClick={handleClick}>GO TO YOUR MAILBOX</button>
        </div>
    </div>
    </>
  )
}

export default VerifyEmail