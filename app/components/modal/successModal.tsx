import React from 'react'
import Image from 'next/image';
import { IoMdClose } from "react-icons/io";

interface SuccessProps {
    closeModal: () => void;
    isSuccessModalOpen: boolean;
  
}

const img7 = '/images/Shape.svg'

const SuccessModal:React.FC<SuccessProps> = ({closeModal, isSuccessModalOpen }) => {

    const handleClick = () => {
        closeModal();
      
        
    }
        
    return (
    <>
    <div className={`fixed inset-0 flex items-center justify-center ${isSuccessModalOpen?'bg-[#1D3045] bg-opacity-100':''}`}>
        <div className={`rounded-[6px] w-[90%] h-[322px]  bg-white lg:w-[30%] lg:px-[30px] ${isSuccessModalOpen?'bg-blue-200' : '' }`}>
            <div className='flex items-center justify-center mt-[34.75px]'>
            <Image src={img7} alt='tick' width={87.5} height={62.5}/>
            </div>
            
            <p className='font-inter font-semibold text-center text-[20px] text-[#3366FF] mt-[24px]'>Congratulations</p>
           <p className='text-center font-inter font-normal mt-[24px] text-[18px] p-[5px]'>Your password has been reset successfully !</p>
           
            
            <button className='bg-[#3366FF] font-inter text-[16px] w-[90%] h-[50px] mx-[20px] text-white rounded-[6px] mt-[16px]' onClick={handleClick}>LOGIN</button>
        </div>
    </div>
    </>
  )
}

export default SuccessModal