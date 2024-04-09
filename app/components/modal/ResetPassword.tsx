import React from 'react'
import Image from 'next/image';
import { IoMdClose } from "react-icons/io";


interface ResetPasswordProps {
    closeModal: () => void;
    isResetPasswordModalOpen: boolean;
    openSuccessModal: () => void
}
const img2 = '/images/Vector (Stroke).svg'


const ResetPassword: React.FC<ResetPasswordProps> = ({ closeModal, isResetPasswordModalOpen, openSuccessModal }) => {

    const handleClick = () => {
        closeModal();
        openSuccessModal();

    }

    return (
        <>
            <div className={`fixed inset-0 flex items-center justify-center ${isResetPasswordModalOpen ? 'bg-[#1D3045] bg-opacity-100' : ''}`}>
                <div className={`rounded-[6px] w-[90%] h-[325px]  bg-white lg:w-[30%] lg:px-[30px] ${isResetPasswordModalOpen ? 'bg-blue-200' : ''}`}>
                    <div className='flex items-center justify-between m-[16px] '>
                        <p className='font-inter font-normal'> Reset password</p>
                        < IoMdClose width={16} height={16} onClick={closeModal} className='cursor-pointer' />
                    </div>
                    <p className='font-inter font-normal text-left ml-[16px] '>Please , input your password</p>

                    <div className='flex items-center relative'>
                        <input name='password' placeholder='password' className='border h-[50px] mx-[16px]  w-[90%] pl-[12px] rounded-[6px] mt-[8px] outline-none relative ' />
                        <Image src={img2} alt='password-lock' width={16} height={16} className='absolute right-[30px] mt-[15px] mr-[12px] ' />
                    </div>

                    <div className='flex items-center relative'>
                        <input name='password' placeholder='password' className='border h-[50px] mx-[16px]  w-[90%] pl-[12px] rounded-[6px] mt-[8px] outline-none relative ' />
                        <Image src={img2} alt='password-lock' width={16} height={16} className='absolute right-[30px] mt-[15px] mr-[12px] ' />
                    </div>






                    <button className='bg-[#3366FF] font-inter text-[16px] w-[90%] h-[50px] mx-[20px] text-white rounded-[6px] mt-[16px]' onClick={handleClick}>RESET PASSWORD</button>
                </div>
            </div>
        </>
    )
}

export default ResetPassword