import React from 'react'
import Image from "next/image"
import NavItems from './NavItems'
import SearchInput from '../shared/searchInput/SearchInput'
import { SignInButton, SignedIn, SignedOut, UserButton } from '@clerk/nextjs'
import { Button } from '../ui/button'
const Navbar = () => {
    return (
        <nav className="fixed w-full  bg-white z-50 shadow-sm">
            <div className='flex items-center max-w-6xl justify-between h-14 mx-auto px-3'>
                <div className='flex items-center gap-2'>
                    <Image src={"/assets/images/linkedin.png"} alt='logo' width={35} height={35} />

                    <div className='md:block hidden'>
                        <SearchInput />
                    </div>
                </div>
                <div className='flex  items-center gap-5'>
                    <div className='md:block hidden'>
                        <NavItems />
                    </div>
                    <div>
                        <SignedIn>
                            <UserButton />
                        </SignedIn>
                        <SignedOut>
                            <Button className='rounded-full' variant={'secondary'}>
                                <SignInButton />
                            </Button>
                        </SignedOut>
                    </div>
                </div>

            </div>
            navbar
        </nav>
    )
}

export default Navbar
