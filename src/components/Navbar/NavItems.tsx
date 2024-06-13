import { Bell, BriefcaseBusiness, Home, MessageCircleMore, Users } from 'lucide-react'
import Link from 'next/link'
import React from 'react'
const navItems = [
    {
        src: "/home",
        icon: <Home />,
        text: "Home"
    },
    {
        src: "/netwoks",
        icon: <Users />,
        text: "My Network"
    },
    {
        src: "/job",
        icon: <BriefcaseBusiness />,
        text: "Jobs"
    },
    {
        src: "/message",
        icon: <MessageCircleMore />,
        text: "Messaging"
    },
    {
        src: "/notification",
        icon: <Bell />,
        text: "Notification"
    },
]
const NavItems = () => {
    return (
        <div className='flex gap-8'>
            {navItems.map((navItem, index) => {
                return (
                    <div key={index} className='flex flex-col items-center cursor-pointer text-[#666666] hover:text-black'>
                        <span>{navItem.icon}</span>
                        <Link href={navItem.src}>{navItem.text}</Link>
                    </div>
                )
            })}

        </div>
    )
}

export default NavItems
