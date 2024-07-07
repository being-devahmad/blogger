import { assets } from '@/assets/assets'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Sidebar = () => {
    return (
        <div className='flex flex-col bg-slate-100'>
            <div className='px-2 sm:pl-14 py-3 border border-black'>
                <Image src={assets.logo} alt='' className='' width={120} />
            </div>

            <div className='w-28 sm:w-80 h-[100vh] relative py-12 border border-black'>
                <div className='w-[50%] sm:w-[80%] absolute right-0'>
                    <Link href={'/admin/add-blogs'}>
                        <div className='flex items-center border border-black gap-3 font-medium
                 bg-white px-3 py-2 shadow-[-5px_5px_0px_#000]'>
                            <Image src={assets.add_icon} width={28} alt='' />
                            <p>Add Blogs</p>
                        </div>
                    </Link>

                    <Link href={'/admin/blog-list'}>
                        <div className='mt-5 flex items-center border border-black gap-3 font-medium
                 bg-white px-3 py-2 shadow-[-5px_5px_0px_#000]'>
                            <Image src={assets.blog_icon} width={28} alt='' />
                            <p>Blog Lists</p>
                        </div>
                    </Link>

                    <Link href={'/admin/subscriptions'}>
                        <div className='mt-5 flex items-center border border-black gap-3 font-medium
                 bg-white px-3 py-2 shadow-[-5px_5px_0px_#000]'>
                            <Image src={assets.email_icon} width={28} alt='' />
                            <p>Subscriptions</p>
                        </div>
                    </Link>
                </div>

            </div>
        </div>
    )
}

export default Sidebar
