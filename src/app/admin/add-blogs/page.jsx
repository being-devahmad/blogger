'use client';

import { assets } from '@/assets/assets';
import axios from 'axios';
import Image from 'next/image';
import React, { useState } from 'react';
import { toast } from 'react-toastify';

const AddBlogs = () => {
  const [image, setImage] = useState(null);
  const [data, setData] = useState({
    title: "",
    description: "",
    category: "Startup",
    author: "John Doe",
    authorImg: "/author_img.png"
  });

  const onChangeHandler = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setData(data => ({ ...data, [name]: value }));
  };

  const onSubmitHandler = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('title', data.title);
    formData.append('description', data.description);
    formData.append('category', data.category);
    formData.append('author', data.author);
    formData.append('authorImg', data.authorImg);
    formData.append('image', image);

    try {
      const response = await axios.post('/api/blog', formData);
      if (response.data.success) {
        toast.success(response.data.msg);
        setImage(false)
        setData({
          title: "",
          description: "",
          category: "Startup",
          author: "John Doe",
          authorImg: "/author_img.png"
        })
      } else {
        toast.error("Error: " + response.data.msg);
      }
    } catch (error) {
      toast.error("Error: " + error.message);
    }
  };

  return (
    <form onSubmit={onSubmitHandler} className='pt-5 px-5 sm:pt-12 sm:pl-16'>
      <p className='text-xl'>Upload thumbnail</p>
      <label htmlFor='image'>
        <Image
          className='mt-4'
          src={!image ? assets.upload_area : URL.createObjectURL(image)}
          width={140}
          height={70}
          alt='Thumbnail'
        />
      </label>

      <input
        type="file"
        id='image'
        hidden
        required
        onChange={(e) => setImage(e.target.files[0])}
      />

      <p className='text-xl mt-4'>Blog Title</p>
      <input
        type="text"
        name='title'
        value={data.title}
        onChange={onChangeHandler}
        placeholder='Enter blog title ...'
        required
        className='w-full sm:w-[500px] mt-4 px-4 py-3 border'
      />

      <p className='text-xl mt-4'>Blog Description</p>
      <textarea
        name='description'
        value={data.description}
        onChange={onChangeHandler}
        rows={6}
        required
        placeholder='Write content here ...'
        className='w-full sm:w-[500px] mt-4 px-4 py-3 border'
      />

      <p className='text-xl mt-4'>Blog Category</p>
      <select
        name="category"
        onChange={onChangeHandler}
        value={data.category}
        className='w-40 mt-4 px-4 py-3 border text-gray-500'
      >
        <option value="Startup">Startup</option>
        <option value="Technology">Technology</option>
        <option value="Lifestyle">Lifestyle</option>
      </select>
      <br />
      <button type='submit' className='mt-4 w-40 h-12 bg-black text-white'>
        ADD
      </button>
    </form>
  );
};

export default AddBlogs;
