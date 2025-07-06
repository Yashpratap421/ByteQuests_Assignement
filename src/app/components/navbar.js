import React from 'react'
import { IoIosSearch } from "react-icons/io";
import { CiUser } from "react-icons/ci";
import { CiBookmark } from "react-icons/ci";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import Image from "next/image";
import Link from 'next/link';
import logo from "../../../public/Images/logo.svg";


const Navbar = () => {
    return (
        <div className='nav-bar'>
            <div className='nav-top'>
                <div className='nav-logo'>
                    <Image src={logo} alt="logo" className='logo' />
                </div>
                <div className='nav-icons'>
                    <IoIosSearch className='icon'/>
                    <CiUser className='icon'/>
                    <CiBookmark className='icon'/>
                    <HiOutlineShoppingBag className='icon'/>
                </div>
            </div>
            <div className='nav-bottom'>
                <Link href={""} className='nav-links'>Bags</Link>
                <Link href={""} className='nav-links'>Travel</Link>
                <Link href={""} className='nav-links'>Accesories</Link>
                <Link href={""} className='nav-links'>Gifting</Link>
                <Link href={""} className='nav-links'>Jewelery</Link>
            </div>
        </div>
  )
}

export default Navbar