import { assets } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'

const Footer = () => {
    return (
        <div className='flex flex-col justify-around gap-2 sm:flex-row bg-black py-5 items-center'>
            <Image src={assets.logo_light} alt='' width={120} />
            <p className='text-white text-sm'>
                All rights reserved. Copyright @blogger
            </p>
            <div className='flex'>
                <Image src={assets.facebook_icon} width={40} />
                <Image src={assets.twitter_icon} width={40} />
                <Image src={assets.googleplus_icon} width={40} />
            </div>
        </div>
    )
}

export default Footer
