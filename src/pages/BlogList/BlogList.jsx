/* eslint-disable no-unused-vars */
import React from 'react'
import BlogListBanner from '../../components/BlogListPage/BlogListBanner'
import LovedBySingles from '../../components/HomePage/LovedBySingles/LovedBySingles'
import AllBlogCardMain from '../../components/BlogListPage/AllBlogCardMain'

const BlogList = () => {
  return (
    <>
      <BlogListBanner/>
      <AllBlogCardMain/>
      <LovedBySingles/>
    </>
  )
}

export default BlogList