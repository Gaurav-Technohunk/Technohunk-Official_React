import React from 'react'
import PageHeader from '../components/PageHeader';
import serviceDetailsVid1 from '../assets/images/services/digital-transformation-vid.mp4'
import serviceDetailsImg2 from '../assets/images/services/digital-transformation.png'
import { Link } from 'react-router-dom';
import Categories from '../components/Categories';

const CyberSecurityPage = () => {
  const breadcrumbs = [
    { label: 'Home', link: '/' },
    { label: 'Services', link: '/services' },
    { label: 'Digital-Transformation', link: null }
  ];

  return (
    <div>
      <PageHeader title="What We Do" breadcrumbs={breadcrumbs} />
      <section className="ep-service-details-section mt-120">
      <div className="container">
        <div className="row">
          <div className="col-lg-8 service-content">
            <div className="service-details">
              <div className="service-banner rounded-20 overflow-hidden">
                {/* <img loading="lazy" src={serviceDetailsImg1} alt="service-details-img"
                  className="img-fluid w-100"/> */}
                 <video src={serviceDetailsVid1}
                 loop
                 muted
                 autoPlay
                 playsInline
                 className='img-fluid w-100 rounded shadow'
                 />
              </div>
              <div className="service-text mt-30">
               <h2 className="title">Reimagining Your Business for the Digital Age</h2>
                <p>In a rapidly evolving market, digital transformation is no longer a choice—it’s the 
                  engine of survival and growth. By integrating cutting-edge technologies, businesses 
                  can streamline operations, unlock data-driven insights, and create seamless customer 
                  experiences with precision. <b>Strategic digital initiatives drive operational agility, 
                  deepen customer engagement, and create sustainable competitive advantages.</b> With 
                  digital transformation at the core, organizations not only optimize their current 
                  processes but also build the resilience to thrive and lead in a dynamic future.</p>
                
                <h4 className="sub-title">Driving Innovation Through Digital Transformation</h4>
                  <p>Empower your business with cutting-edge digital transformation strategies that enhance efficiency, 
                     accelerate workflows, and unlock new opportunities for growth. By leveraging modern technologies, 
                     organizations can adapt quickly, deliver greater value to customers, and stay ahead in today’s 
                     competitive digital landscape.</p>
                  <ul className="list-unstyled options">
                    <li><i className="fa-solid fa-circle-check"></i> <b>Redefining Business with Smart Digital Solutions</b></li>
                    <li><i className="fa-solid fa-circle-check"></i> <b>Seamless Integration for Agile Operations</b></li>
                    <li><i className="fa-solid fa-circle-check"></i> <b>Empowering Innovation Through Transformation</b></li>
                    <li><i className="fa-solid fa-circle-check"></i> <b>Building a Future-Ready Digital Enterprise</b></li>
                  </ul>


                <div className="inner-details">
                  <div className="row">
                    <div className="col-xl-6">
                      <div className="innner-img overflow-hidden rounded-20">
                        <img loading="lazy" src={serviceDetailsImg2} alt="service-details-img"
                          className="img-fluid w-100 "/>
                      </div>
                    </div>
                    <div className="col-xl-6">
                      <div className="inner-text">
                       <h4 className="sub-title mt-0">Digital Transformation That Redefines the Way You Work</h4>
                        <p>Digital transformation empowers organizations to adapt, innovate, and thrive in a fast-evolving 
                           business environment. By leveraging modern technologies, process automation, and data-driven insights, 
                           it helps <b>businesses optimize operations, enhance customer experiences, and unlock new growth opportunities.</b>  
                           With the right transformation strategy, organizations can improve agility, foster innovation, and build 
                           a future-ready enterprise that stays competitive in the digital-first world.</p>
                        <ul className="list-unstyled m-0 inner-options">
                          <li><i className="fa-solid fa-angles-right"></i><b> Smart Digital Innovation </b></li>
                          <li><i className="fa-solid fa-angles-right"></i><b> Agility with Connected Systems </b></li>
                          <li><i className="fa-solid fa-angles-right"></i><b> Customer Value Through Digital </b></li>
                          <li><i className="fa-solid fa-angles-right"></i><b> Future-Ready Business </b></li>

                        </ul>


                      </div>
                    </div>
                  </div>
                </div>
                <h4 className="sub-title">Architecting Your Future with Intelligent Digital Transformation</h4>
                <p>Digital transformation is fundamentally reshaping how businesses create value, engage with 
                  customers, and operate in the modern economy, moving them from traditional models to dynamic, 
                  technology-driven ecosystems. It empowers organizations to become more agile and data-centric, 
                  enabling leaders to make smarter decisions and capitalize on new market opportunities with 
                  unprecedented speed. 
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <aside className="service-sidebar rounded-20">
              <h4 className="sidebar-title mb-30 position-relative d-inline-block">Category</h4>
              <Categories/>
            </aside>
          </div>
        </div>
      </div>
    </section>
    </div>
  );
}

export default CyberSecurityPage;
