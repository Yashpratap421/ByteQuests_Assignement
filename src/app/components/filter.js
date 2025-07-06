import React from 'react'
import AllBags from "../../../public/Images/AllBags.svg"
import Duffle from "../../../public/Images/Duffle.svg"
import Handbags from "../../../public/Images/Handbags.svg"
import Laptop from "../../../public/Images/Laptop.svg"
import Slings from "../../../public/Images/Slings.svg"
import Tote from "../../../public/Images/Tote.svg"
import Vanity from "../../../public/Images/Vanity.svg"
import Messenger from "../../../public/Images/Messenger.svg"

import Image from 'next/image'

const Filter = () => {
  return (
    <div className='filter'>
        <Image src={AllBags} alt="All Bags" className='filter-img' />
        <Image src={Duffle} alt="Duffle Bags" className='filter-img' />
        <Image src={Tote} alt="Tote Bags" className='filter-img' />
        <Image src={Handbags} alt="Handbags" className='filter-img' />
        <Image src={Laptop} alt="Laptop Bags" className='filter-img' />
        <Image src={Slings} alt="Slings" className='filter-img' />
        <Image src={Vanity} alt="Vanity Bags" className='filter-img' />
        <Image src={Messenger} alt="Messenger Bags" className='filter-img' />
    </div>
  )
}

export default Filter