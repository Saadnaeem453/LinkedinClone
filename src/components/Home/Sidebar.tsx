import React from 'react'
import Image from "next/image"
import ProfilePhoto from '../shared/profilePhoto/ProfilePhoto'
const Sidebar = ({ user }: { user: any }) => {
    console.log("user", user);
    return (
        <>
            <div className='hidden md:block w-[20%] h-fit border border-gray-300 bg-white dark:bg-black rounded'>
                <div className='flex relative flex-col items-center'>
                    <div className='w-full h-16 overflow-hidden'>
                        {
                            user && (
                                <Image src={"/assets/images/Banner.png"} alt="banner.img" width={200} height={200} className='w-full h-full rounded-t' />
                            )
                        }
                    </div>

                    <div className='my-1 absolute top-10 left-[40%] '>
                        <ProfilePhoto src={user ? user?.imageUrl : "Login"} />
                    </div>

                    <div className='border-b border-b-gray-300'>
                        <div className="pt-2 mt-5 text-center">
                            <h1 className='font-bold over:underline cursor-pointer'>{user ? `${user?.firstName} ${user.lastName}` : "User"}</h1>
                            <p className='text-xs'>@{user ? `${user?.username}` : "username"}</p>
                        </div>
                    </div>
                </div>
                <div className=''>
                    <div>
                        <p>Post Impression</p>
                        <p>213</p>
                    </div>
                    <div>
                        <p>Posts</p>
                        <p>11</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Sidebar
