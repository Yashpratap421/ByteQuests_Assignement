'use client'
import React, { useState } from 'react'
import { IoIosSearch } from "react-icons/io";
import { CiUser, CiBookmark } from "react-icons/ci";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { RxHamburgerMenu } from "react-icons/rx";
import { RxCross2 } from "react-icons/rx";
import Image from "next/image";
import Link from 'next/link';
import logo from "../../../public/Images/logo.svg";

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <>
            <div className={`slider ${menuOpen ? "open" : ""}`}>
                <RxCross2 className="close-icon" onClick={() => setMenuOpen(false)} />
                <Link href={""} className='nav-links'>Bags</Link>
                <Link href={""} className='nav-links'>Travel</Link>
                <Link href={""} className='nav-links'>Accesories</Link>
                <Link href={""} className='nav-links'>Gifting</Link>
                <Link href={""} className='nav-links'>Jewelery</Link>
            </div>

            <div className='nav-bar'>
                <div className='nav-top'>
                    <RxHamburgerMenu className="menu-icon" onClick={() => setMenuOpen(true)} />

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
        </>
    )
}

export default Navbar
