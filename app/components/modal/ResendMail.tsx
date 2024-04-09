import React from 'react'
import Image from 'next/image';
import { IoMdClose } from "react-icons/io";

interface ResendMailProps {
    closeModal: () => void;
    isResendModalOpen: boolean;
    openRecoveryModal : () => void
}

const img6 = '/images/email.svg'
const ResendMail:React.FC<ResendMailProps> = ({closeModal, isResendModalOpen , openRecoveryModal}) => {

        const handleClick = () => {
            closeModal();
            openRecoveryModal();
        }
    return (
    <>
    <div className={`fixed inset-0 flex items-center justify-center ${isResendModalOpen?'bg-[#1D3045] bg-opacity-100':''}`}>
        <div className={`rounded-[6px] w-[90%] h-[225px]  bg-white lg:w-[30%] lg:px-[30px] ${isResendModalOpen?'bg-blue-200' : '' }`}>
            <div className='flex items-center justify-between m-[16px] '>
                <p className='font-inter font-normal'> Resend verification mail</p>
                < IoMdClose width={16} height={16} onClick={closeModal} className='cursor-pointer'/>
            </div>
            <p className='font-inter font-normal text-center'>Please enter a valid e-mail address</p>
            <input name='email-address' placeholder='E-mail address' className='border h-[50px] mx-[16px]  w-[90%] pl-[12px] rounded-[6px] mt-[16px] outline-none '/>
           
            
            <button className='bg-[#3366FF] font-inter text-[16px] w-[90%] h-[50px] mx-[20px] text-white rounded-[6px] mt-[16px]' onClick={handleClick}>RESEND VERIFICATION LINK</button>
        </div>
    </div>
    </>
  )
}

export default ResendMail