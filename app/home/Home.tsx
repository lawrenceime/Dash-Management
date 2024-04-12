import React,{useState , ChangeEvent} from 'react'
import Image from 'next/image'
import { BiSearch } from "react-icons/bi";
import SearchModal from '../components/modal/searchModal';

const Home = () => {
  const img1 = '/images/ic_logo.svg'
  const personImg = '/images/person.svg'


   // State to keep track of search history and user input
  const sampleSearchSuggestions = ['Mile 2' , 'Okota' , 'Ebute Meta']

  const [searchInput, setSearchInput] = useState<string>('');
  const [isSearchModalOpen , setIsSearchModalOpen] = useState(false)

    // Function to handle changes in the input field
    const handleChange = (event:ChangeEvent<HTMLInputElement>) => {
      setSearchInput(event.target.value);
    }

    const handleSearchModalOpen = () => {
      setIsSearchModalOpen(true)
     }
       

   const handleSearchModalClose = () => {
    setIsSearchModalOpen(false)
   }
     


  return (
    <div>
      
      <div className='fixed top-0 left-0 right-0 bg-white flex justify-between p-[16px] lg:px-[100px] '>
        <Image src={img1} alt='logo' width={80} height={80} />
        <Image src={personImg} alt='person' width={32} height={32} />
      </div>

      <div className='mt-[245px] ml-[16px]   '>
        <p className='text-left text-[40px] font-inter font-bold  '>Find a place you
          will love to live!</p>
        <p className='font-inter font-normal text-[16px] mt-[16px]'>See through the lenses of people who have
          lived or visited the neighbourhood you might
          have in mind.</p>
      </div>

      <div className='flex justify-center items-center  mt-[24px] relative '>

        <input type="text" name='address' placeholder='Enter address' className='w-[95%] h-[50px] border rounded-[6px] pl-[38px] relative'  value={searchInput} onChange={handleChange} />

        <BiSearch width={3} height={3} className='absolute left-[30px]'/> 

       

      </div>

      {isSearchModalOpen && <SearchModal closeModal={handleSearchModalClose} searchInput={searchInput} searchSuggestions={sampleSearchSuggestions}/>}

      <button className='bg-[#3366FF] w-[30%] h-[50px] rounded-[6px] ml-[16px] mt-[8px] text-[#ffff] font-inter '>SEARCH</button>

    </div>
  )
}

export default Home