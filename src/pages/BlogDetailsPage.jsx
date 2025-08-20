import React from 'react';
import PageHeader from '../components/PageHeader';
import BlogSidebar from '../components/BlogSidebar';
import blogBanner from '../assets/images/blog/blog-details-banner.png';
// inner images are sourced from data per post
import quoteIcon from '../assets/images/icons/quote-icon-2.svg';


import { Link, useParams, Navigate } from 'react-router-dom';
import { blogSingle, posts } from '../data/blog';

const BlogDetailsPage = () => {
  const { slug } = useParams();
  const currentIndex = posts.findIndex((p) => p.slug === slug);
  const bySlug = currentIndex >= 0 ? posts[currentIndex] : null;
  const activePost = bySlug ? blogSingle.find((b) => b.id === bySlug.id) || null : null;
  const prevSlug = currentIndex > 0 ? posts[currentIndex - 1].slug : null;
  const nextSlug = currentIndex >= 0 && currentIndex < posts.length - 1 ? posts[currentIndex + 1].slug : null;
  if (!activePost) return <Navigate to="/404" replace />;
  const breadcrumbs = [
    { label: 'Home', link: '/' },
    { label: 'Blog', link: '/blog' },
    { label: activePost ? activePost.title : 'Blog Details', link: null }
  ];

  return (
    <>
      <PageHeader title={activePost.title} breadcrumbs={breadcrumbs} />
      <section className="ep-blog-details-section pt-120">
        <div className="container">
          <div className="row">
            <div className="col-xl-8 col-lg-10 mx-auto">
              <div className="blog-details-wrapper">
                <div className="blog-details-banner position-relative">
                  <img loading="lazy" src={activePost.img || blogBanner} alt="blog-details-banner" className="img-fluid w-100" />
                  <div className="blog-meta position-absolute d-inline-flex rounded-20 align-items-center gap-4">
                    <Link to="#" className="d-flex align-items-center">
                      <i className="fa-regular fa-user"></i>
                      {activePost.author}
                    </Link>
                    <Link to={`/blog?category=${encodeURIComponent(activePost.category)}`} className="d-flex align-items-center">
                      <i className="fa-regular fa-folder-open"></i>
                      {activePost.category}
                    </Link>
                    <Link to="#" className="d-flex align-items-center">
                      <i className="fa-regular fa-comments"></i>
                      Comments (04)
                    </Link>
                  </div>
                </div>
                <div className="blog-description">
                  <h3 className="title split-text right mb-30">{activePost.title}</h3>
                  <p>{activePost.description}</p>
                  {activePost.content?.map((paragraph, idx) => (
                    <p key={idx}>{paragraph}</p>
                  ))}
                  {activePost.innerImagesTop?.length ? (
                    <div className="inner-images my-30">
                      <div className="row">
                        {activePost.innerImagesTop.map((src, i) => (
                          <div key={i} className="col-lg-6">
                            <div className="image rounded-20 reveal right">
                              <img
                                loading="lazy"
                                src={src}
                                alt={`blog-details-inner-img-${i+1}`}
                                className="img-fluid w-100"
                                style={{ width: '300px', height: '200px', objectFit: 'cover', borderRadius: '12px' }}
                              />
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  ) : null}
                  <p>IT solutions streamline processes, enhance communication, and improve decision-making by providing real-time data and analytics. Cybersecurity is a crucial aspect of IT.</p>
                  <ul className="list-unstyled list-info">
                    <li className="d-flex align-items-center">
                      <i className="fa-solid fa-circle-check"></i>
                      <h5 className="list-title">Stay ahead with cutting-edge technology your business with IT Solutions</h5>
                    </li>
                    <li className="d-flex align-items-center">
                      <i className="fa-solid fa-circle-check"></i>
                      <h5 className="list-title">Enhance your business performance with technology</h5>
                    </li>
                    <li className="d-flex align-items-center">
                      <i className="fa-solid fa-circle-check"></i>
                      <h5 className="list-title">Empower your business with IT Solutions Unlock the potential of technology
                      </h5>
                    </li>
                  </ul>
                  {activePost.highlights?.length ? (
                    <ul className="list-unstyled list-info">
                      {activePost.highlights.map((h, i) => (
                        <li key={i} className="d-flex align-items-center">
                          <i className="fa-solid fa-circle-check"></i>
                          <h5 className="list-title">{h}</h5>
                        </li>
                      ))}
                    </ul>
                  ) : null}

                  {activePost.quote ? (
                    <blockquote className="rounded-20 section-bg">
                      <div className="icon mb-20">
                        <img src={quoteIcon} alt="quote-icon" />
                      </div>
                      <p>{activePost.quote}</p>
                      <h5 className="name mt-20 position-relative">{activePost.quoteAuthor || 'Author'}</h5>
                    </blockquote>
                  ) : null}

                  {activePost.subheading ? (
                    <>
                      <h3 className="title mb-20 split-text right">{activePost.subheading}</h3>
                      {activePost.subcontent?.map((t, i) => (
                        <p key={i}>{t}</p>
                      ))}
                    </>
                  ) : null}
                  {activePost.innerImagesBottom?.length ? (
                    <div className="inner-images my-30">
                      <div className="row">
                        {activePost.innerImagesBottom.map((src, i) => (
                          <div key={i} className="col-lg-6">
                            <div className="image rounded-20 reveal right">
                              <img
                                loading="lazy"
                                src={src}
                                alt={`blog-details-inner-img-bottom-${i+1}`}
                                className="img-fluid w-100"
                                style={{ width: '300px', height: '200px', objectFit: 'cover', borderRadius: '12px' }}
                              />
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  ) : null}
                  {activePost.conclusion ? (
                    <p>{activePost.conclusion}</p>
                  ) : null}
                  <div className="tags-and-social-icon">
                    <div className="row">
                      <div className="col-lg-8">
                        <div className="tags d-md-flex align-items-center">
                          <h4 className="title mb-2 mb-md-0">Tags:</h4>
                          <ul className="list-unstyled">
                            {activePost.tags?.map((t) => (
                              <li key={t} className="d-inline-block"><Link to={`/blog?tag=${encodeURIComponent(t)}`}>{t}</Link></li>
                            ))}
                          </ul>
                        </div>
                      </div>
                      <div className="col-lg-4">
                        <div className="social-icon-box text-start text-lg-end">
                          <ul className="list-unstyled">
                            <li>
                              <Link target='_blank' to="https://www.facebook.com/" className="d-inline-flex justify-content-center align-items-center">
                                <i className="fab fa-facebook-f"></i>
                              </Link>
                            </li>
                            <li>
                              <Link target='_blank' to="https://www.pinterest.com/" className="d-inline-flex justify-content-center align-items-center">
                                <i className="fab fa-pinterest-p"></i>
                              </Link>
                            </li>
                            <li>
                              <Link target='_blank' to="https://bd.linkedin.com/" className="d-inline-flex justify-content-center align-items-center">
                                <i className="fab fa-linkedin"></i>
                              </Link>
                            </li>
                            <li>
                              <Link target='_blank' to="https://www.instagram.com/" className="d-inline-flex justify-content-center align-items-center">
                                <i className="fab fa-instagram"></i>
                              </Link>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="blog-details-pagination rounded-20 section-bg">
                  <ul className="list-unstyled d-flex justify-content-between align-items-center gap-4">
                    <li>
                      <Link to={prevSlug ? `/blog/${prevSlug}` : '/blog'} className="d-flex align-items-center gap-3">
                        <span className="icon d-flex align-items-center justify-content-center rounded-pill"><i
                          className="fa-solid fa-arrow-left"></i></span> Previous
                      </Link>
                    </li>
                    <li>
                      <Link to={nextSlug ? `/blog/${nextSlug}` : '/blog'} className="active d-flex align-items-center gap-3">
                        Next <span className="icon d-flex align-items-center justify-content-center rounded-pill"><i
                          className="fa-solid fa-arrow-right"></i></span>
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className="comment-box mt-120">
                  <h3 className="title mb-30">Leave A Comment</h3>
                  <form action="#" className="comment-form">
                    <div className="row g-4">
                      <div className="col-lg-6">
                        <div className="input-group">
                          <input type="text" className="form-control form-field shadow-none" placeholder="Your Name" />
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="input-group">
                          <input type="text" className="form-control form-field shadow-none" placeholder="Your Email" />
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="input-group">
                          <input type="text" className="form-control form-field shadow-none" placeholder="Your Number" />
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="input-group">
                          <select className="form-select form-field shadow-none">
                            <option>Choose a Option</option>
                            <option>Los Angeles</option>
                            <option>Chicago</option>
                            <option>Houston</option>
                          </select>
                        </div>
                      </div>
                      <div className="col-lg-12">
                        <div className="input-group">
                          <textarea className="form-field textarea-control" placeholder="Message here.."></textarea>
                        </div>
                      </div>
                      <div className="col-lg-12">
                        <button type="submit" className="theme-btn position-relative">Submit Now</button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-10 mx-auto">
              <BlogSidebar />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default BlogDetailsPage;
