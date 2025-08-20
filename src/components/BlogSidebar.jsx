import React, { useState } from 'react'
import { Link, useNavigate, useLocation } from 'react-router-dom'
import Categories from './Categories'
import { blogTags } from '../data/blog'
import { blogSidebar } from '../data/blog'

const BlogSidebar = () => {
  const [query, setQuery] = useState('')
  const navigate = useNavigate()
  const location = useLocation()

  const onSearchSubmit = (e) => {
    e.preventDefault()
    const params = new URLSearchParams(location.search)
    if (query && query.trim()) {
      params.set('q', query.trim())
      params.set('page', '1')
    } else {
      params.delete('q')
    }
    navigate(`/blog?${params.toString()}`)
  }

  return (
    <aside className="blog-sidebar">
      <div className="blog-widget">
        <div className="section-title-block mb-20">
          <h6 className="section-sub-title position-relative d-inline-block mb-0">Search</h6>
        </div>
        <form onSubmit={onSearchSubmit}>
          <div className="input-group position-relative">
            <input type="search" className="form-control shadow-none" placeholder="Search posts..." value={query} onChange={(e) => setQuery(e.target.value)} />
            <button className="position-absolute top-0 end-0 z-3" type="submit"><i className="fa-solid fa-magnifying-glass"></i></button>
          </div>
        </form>
      </div>
      <div className="blog-widget">
        <div className="section-title-block mb-20">
          <h6 className="section-sub-title position-relative d-inline-block mb-0">Category</h6>
        </div>
        <Categories />
      </div>
      <div className="blog-widget">
        <div className="section-title-block mb-20">
          <h6 className="section-sub-title position-relative d-inline-block mb-0">Recent Post</h6>
        </div>
        <div className="recent-blog">
          {
            blogSidebar.map((blog) => (
              <div key={blog.id} className="blog-sm-item d-flex align-items-center">
                <div className="image flex-shrink-0 overflow-hidden">
                  <Link to={`/blog/${blog.slug}`} className="d-block w-100">
                      <img
                        loading="lazy"
                        src={blog.img}
                        alt="blog-sm-img"
                        className="img-fluid w-100"
                        style={{ width: '100px', height: '70px', objectFit: 'cover', borderRadius: '8px' }}
                      />
                  </Link>
                </div>
                <div className="text">
                  <ul className="blog-meta list-unstyled d-flex flex-wrap">
                    <li><Link to={`/blog?category=${encodeURIComponent(blog.category)}`}>{blog.category}</Link></li>
                    <li><Link to={`/blog/${blog.slug}`}>Comments ({blog.comments})</Link></li>
                  </ul>
                  <h5 className="blog-title">
                    <Link to={`/blog/${blog.slug}`}>{blog.title}</Link>
                  </h5>
                </div>
              </div>
            ))
          }
        </div>
      </div>
      <div className="blog-widget">
        <div className="section-title-block mb-20">
          <h6 className="section-sub-title position-relative d-inline-block mb-0">Tags</h6>
        </div>
        <ul className="list-unstyled tags d-flex align-items-center flex-wrap gap-3">
          {blogTags.map((tag) => (
            <li key={tag.id}><Link to={`/blog?tag=${encodeURIComponent(tag.name)}`}>{tag.name}</Link></li>
          ))}
        </ul>
      </div>
    </aside>
  )
}

export default BlogSidebar
