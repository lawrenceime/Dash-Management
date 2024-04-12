import React,{useEffect, useRef} from 'react'


interface SearchProps { 
    searchInput : string
    searchSuggestions : string[]
    closeModal : () => void
}

const SearchModal:React.FC<SearchProps> = ({searchInput, searchSuggestions , closeModal }) => {

  const filteredSuggestions = searchSuggestions.filter(suggestion => suggestion.toLowerCase().includes(searchInput.toLowerCase()))




    // Ref for the modal element
    const modalRef = useRef<HTMLDivElement>(null);

    // Effect to add click event listener to the document
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
                // Click occurred outside the modal, close it
                closeModal();
            }
        };

        document.addEventListener('mousedown', handleClickOutside);

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [closeModal]);

  return (
    <div className='fixed inset-0  bg-white rounded-[6px] flex mt-[510px] ml-[16px] border w-[30%] h-[70px]'>
      <ul>
        {filteredSuggestions.map((item , index) => (
          <li className='font-light text-[12px] ml-[5px]' key={index}></li>
        ))}
      </ul>
     
     
    </div>
  )
}

export default SearchModal