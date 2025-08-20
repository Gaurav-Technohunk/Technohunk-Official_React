import React from 'react'
import PageHeader from '../components/PageHeader';
import serviceDetailsVid1 from '../assets/images/services/Data_Analytics_Video_Creation.mp4'
import serviceDetailsImg2 from '../assets/images/services/data-analytics-img.png'
import { Link } from 'react-router-dom';
import Categories from '../components/Categories';

const DataAnalyticsPage = () => {
  const breadcrumbs = [
    { label: 'Home', link: '/' },
    { label: 'Services', link: '/services' },
    { label: 'Data-Analytics & Insights', link: null }
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
                <h2 className="title">Unlocking Growth with Data-Driven Insights and Intelligent Analytics</h2>
                <p>In today’s competitive landscape, <b>businesses thrive on the power of data.</b> By transforming raw 
                  information into actionable insights, organizations can uncover hidden patterns, predict trends, 
                  and make smarter, faster decisions. Intelligent analytics empowers companies to <b> optimize operations, 
                  enhance customer experiences, and identify new opportunities for innovation.</b> Harnessing data-driven 
                  strategies not only fuels sustainable growth but also provides a decisive edge in shaping the future 
                  of business success.</p>
                <h4 className="sub-title">Transforming Decisions with Actionable Data and Intelligent Insights</h4>
                <p>In the digital era, data is only valuable when transformed into meaningful action. Intelligent insights 
                  empower businesses to make faster, more accurate, and future-ready decisions. By leveraging advanced analytics, 
                  organizations can minimize risks, capture new opportunities, and drive growth with confidence.</p>
                  
                <ul className="list-unstyled options">
                   <li><i className="fa-solid fa-circle-check"></i> <b>Unlocking Growth with Data-Driven Insights</b></li>
                   <li><i className="fa-solid fa-circle-check"></i> <b>Transforming Decisions with Intelligent Analytics</b></li>
                   <li><i className="fa-solid fa-circle-check"></i> <b>Harnessing Actionable Data for Smarter Strategies</b></li>
                   <li><i className="fa-solid fa-circle-check"></i> <b>Driving Business Success through Intelligent Insights</b></li>
                </ul>

                <div className="inner-details">
                  <div className="row">
                    <div className="col-xl-6">
                      <div className="innner-img overflow-hidden rounded-20">
                        <img loading="lazy" src={serviceDetailsImg2} alt="service-details-img"
                          className="img-fluid w-100"/>
                      </div>
                    </div>
                    <div className="col-xl-6">
                      <div className="inner-text">
                        <h4 className="sub-title mt-0">Revolutionizing Workflows with Actionable Data Insights</h4>

                        <p>Actionable data insights revolutionize workflows by turning raw information into meaningful strategies. 
                           They enable businesses to optimize processes, reduce inefficiencies, and make smarter decisions with confidence. 
                           With  <b>data-driven intelligence, organizations gain clarity, agility, and a competitive edge in every operation.</b> 
                           Ultimately, it reshapes the way businesses function, unlocking innovation, growth, and long-term success.
                           Embracing data-driven insights means empowering businesses to unlock growth, minimize risks, and shape a future 
                           built on smarter strategies.
                        </p>

                        <ul className="list-unstyled m-0 inner-options">
                          <li><i className="fa-solid fa-angles-right"></i><b> Data-Driven Intelligence Redefining Work </b></li>
                          <li><i className="fa-solid fa-angles-right"></i><b> Turning Insights into Growth </b></li>
                          <li><i className="fa-solid fa-angles-right"></i><b> Smarter Decisions with Intelligent Analytics </b></li>
                          <li><i className="fa-solid fa-angles-right"></i><b> Analytics That Transform the Way You Work </b></li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <h4 className="sub-title">Driving Business Growth with Data Analytics and Insights</h4>
                <p>Data analytics is redefining how businesses uncover opportunities, streamline decisions, 
                  and stay ahead in a competitive market. By transforming raw information into actionable 
                  insights, organizations can identify patterns, predict outcomes, and make smarter, faster 
                  choices. This intelligence not only enhances efficiency but also fuels innovation, customer 
                  satisfaction, and long-term scalability. Embracing data-driven insights means empowering 
                  businesses to unlock growth, minimize risks, and shape a future built on smarter strategies.
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

export default DataAnalyticsPage;
