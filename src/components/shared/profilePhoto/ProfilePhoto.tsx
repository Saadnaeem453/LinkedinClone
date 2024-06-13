import Image from 'next/image'
import React from 'react'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

const ProfilePhoto = ({ src }: { src: string }) => {
    return (
        <div>
            <Avatar>
                <AvatarImage src={src} />
            </Avatar>
        </div>
    )
}

export default ProfilePhoto
