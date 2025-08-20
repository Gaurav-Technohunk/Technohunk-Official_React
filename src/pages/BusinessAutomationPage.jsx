import React from 'react'
import PageHeader from '../components/PageHeader';
import serviceDetailsVid1 from '../assets/images/services/Business_Automation_Video_for_Growth.mp4'
import serviceDetailsImg2 from '../assets/images/services/business-growth-img.png'
import { Link } from 'react-router-dom';
import Categories from '../components/Categories';

const BusinessAutomationPage = () => {
  const breadcrumbs = [
    { label: 'Home', link: '/' },
    { label: 'Services', link: '/services' },
    { label: 'Business-Automation', link: null }
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
                <h2 className="title">Driving Growth Through Intelligent Business Automation</h2>
                <p>Business automation is no longer just about efficiency—it’s about transforming 
                  the way organizations operate.<b> By leveraging intelligent systems, companies can 
                  streamline processes, reduce manual effort and eliminate costly errors.</b> Automation 
                  empowers businesses to make smarter decisions, accelerate workflows, and stay ahead 
                  of the competition, enabling sustainable growth and innovation in an increasingly 
                  digital-first world. With automation at the core, businesses unlock new opportunities 
                  for innovation, empower employees to focus on strategic goals, and build a future-ready 
                  enterprise.</p>
                <h4 className="sub-title">Smart Automation for Smarter Businesses</h4>
                <p>Leverage intelligent automation to streamline operations, reduce errors, and maximize 
                  productivity. By automating repetitive tasks, your business can focus on innovation, agility, and delivering greater value to customers.</p>
                <ul className="list-unstyled options">
                  <li><i className="fa-solid fa-circle-check"></i> <b>Intelligent Automation for Seamless Growth</b></li>
                  <li><i className="fa-solid fa-circle-check"></i> <b>Boosting Efficiency with Smarter Workflows</b></li>
                  <li><i className="fa-solid fa-circle-check"></i> <b>Adaptive Automation for Future-Ready Businesses</b></li>
                  <li><i className="fa-solid fa-circle-check"></i> <b>Driving Business Excellence through Smart Automation</b></li>
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
                        <h4 className="sub-title mt-0">Automation That Transforms the Way You Work</h4>
                        <p>Business automation streamlines complex processes, reducing manual effort and minimizing errors.
                           With <b>intelligent automation, businesses achieve faster operations, higher efficiency, and improved decision-making.</b>
                           Ultimately, it transforms the way organizations work, unlocking new opportunities for growth and success.</p>
                        <ul className="list-unstyled m-0 inner-options">
                          <li><i className="fa-solid fa-angles-right"></i><b> Intelligence for Smarter Business Growth </b></li>
                          <li><i className="fa-solid fa-angles-right"></i><b> AI & ML Driving the Future of Innovation </b></li>
                          <li><i className="fa-solid fa-angles-right"></i><b> Transforming Data into Powerful Insights </b></li>
                          <li><i className="fa-solid fa-angles-right"></i><b> Redefining Digital Success with AI </b></li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <h4 className="sub-title">Shaping the Future of Business with Smart Automation</h4>
                <p>Smart automation is revolutionizing the way organizations operate by eliminating 
                  inefficiencies, reducing errors, and driving consistency across workflows. It empowers 
                  businesses to focus on strategy and innovation while routine tasks are handled seamlessly 
                  by intelligent systems. By integrating automation into core processes, companies can achieve 
                  faster decision-making, improved scalability, and long-term growth. This transformation is 
                  not just about efficiency—it’s about shaping a smarter, more competitive future for businesses.
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

export default BusinessAutomationPage;
