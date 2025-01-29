import React from 'react'
import BlogDetails from '../../components/BlogPage/BlogDetails'
import PostAuthor from '../../components/BlogPage/PostAuthor'
import Blog from '../../components/HomePage/ConnectHearts/Blog'

const BlogContent = () => {
  return (
    <>
      <BlogDetails></BlogDetails>
      <PostAuthor></PostAuthor>
      <Blog title="More like this"></Blog>
    </>

  )
}

export default BlogContent