import React from 'react'
import Image from "next/image"
import NavItems from './NavItems'
import SearchInput from '../shared/searchInput/SearchInput'
const Navbar = () => {
    return (
        <nav className="fixed w-full  bg-white z-50">
            <div className='flex items-center max-w-6xl justify-between h-14 mx-auto px-3'>
                <div className='flex items-center gap-2'>
                    <Image src={"/assets/images/linkedin.png"} alt='logo' width={35} height={35} />

                    <div>
                        <SearchInput />
                    </div>
                </div>
                <div className='flex  items-center gap-5'>
                    <div>
                        <NavItems />
                    </div>

                </div>

            </div>
            navbar
        </nav>
    )
}

export default Navbar
