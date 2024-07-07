import { connectDB } from "@/lib/config/db"
import Blog from "@/lib/models/blog"
const { NextResponse } = require("next/server")
import { writeFile } from "fs/promises"

const LoadDB = async () => {
    await connectDB()
}

LoadDB()

// API endpoint for getting blog posts
export async function GET(request) {

    const blogs = await Blog.find({})

    return NextResponse.json({ blogs })
}


// API endpoint for uploading blogs
export async function POST(request) {
    const formData = await request.formData()
    const timestamp = Date.now()

    const image = formData.get('image')
    const imageByteData = await image.arrayBuffer()
    const buffer = Buffer.from(imageByteData)
    const path = `./public/${timestamp}_${image.name}`

    await writeFile(path, buffer)
    const imageUrl = `/${timestamp}_${image.name}`

    const blogData = {
        title: `${formData.get('title')}`,
        description: `${formData.get('description')}`,
        category: `${formData.get('category')}`,
        author: `${formData.get('author')}`,
        image: `${imageUrl}`,
        authorImg: `${formData.get('authorImg')}`,
    }

    const newBlog = await Blog.create(blogData)
    console.log("Blog created successfully", newBlog)

    return NextResponse.json({
        success: true,
        msg: "Blog added successfully",
        data: newBlog
    })


}
