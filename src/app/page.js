'use client'

import BlogItem from "@/components/BlogItem";
import BlogList from "@/components/BlogList";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Image from "next/image";

export default function Home() {
  return <>
    <Header />
    <BlogList />
    <Footer />
  </>
}
