import React from 'react'
import PageHeader from '../components/PageHeader';
import serviceDetailsImg1 from '../assets/images/services/service-details-img1.png'
import serviceDetailsImg2 from '../assets/images/services/service-details-img2.png'
import { Link } from 'react-router-dom';
import Categories from '../components/Categories';

const ServiceDetailsPage = () => {
  const breadcrumbs = [
    { label: 'Home', link: '/' },
    { label: 'Services', link: '/services' },
    { label: 'Service Details', link: null }
  ];

  return (
    <div>
      <PageHeader title="Service Details" breadcrumbs={breadcrumbs} />
      <section className="ep-service-details-section mt-120">
      <div className="container">
        <div className="row">
          <div className="col-lg-8 service-content">
            <div className="service-details">
              <div className="service-banner rounded-20 overflow-hidden">
                <img loading="lazy" src={serviceDetailsImg1} alt="service-details-img"
                  className="img-fluid w-100"/>
              </div>
              <div className="service-text mt-30">
                <h2 className="title">Software solutions for a smarter future</h2>
                <p>Software solutions focus on building intelligent,scalable, and efficient systems that 
                  simplify daily tasks, enhance decision-making,and drive innovation. By leveraging modern 
                  technologies such as artificial intelligence,cloud computing, and automation, these 
                  solutions empower businesses and individuals to achieve higher productivity, reduce costs, 
                  and create sustainable growth. They not only solve today’s challenges but also prepare us 
                  for a more connected and technologically advanced tomorrow.</p>
                <h4 className="sub-title">Innovative IT for business growth</h4>
                <p>IT solutions streamline processes, enhance communication, an improve decision-making by providing
                  real-time data protecting sensitive information from t and breaches. IT services also include
                  technical support and maintenance, ensuring that systems run smoothly and efficiently</p>
                <ul className="list-unstyled options">
                  <li><i className="fa-solid fa-circle-check"></i> Tech Solutions for a Connected World</li>
                  <li><i className="fa-solid fa-circle-check"></i> Your Vision, Our Innovation</li>
                  <li><i className="fa-solid fa-circle-check"></i> Technology That Drives Success</li>
                  <li><i className="fa-solid fa-circle-check"></i> Connecting the Dots of Digital Innovation</li>
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
                        <h4 className="sub-title mt-0">Secure your future with IT</h4>
                        <p>It encompasses the use of computers, net, and other digital technologies to store, retrieve,
                          transmit, and manipulate data. IT professionals develop maintain the infrastructure that
                          support</p>
                        <ul className="list-unstyled m-0 inner-options">
                          <li><i className="fa-solid fa-angles-right"></i> angles-right
                            Your IT Success Partner</li>
                          <li><i className="fa-solid fa-angles-right"></i> Technology That Powers the Future</li>
                          <li><i className="fa-solid fa-angles-right"></i> Accelerate with Cutting-Edge Tech</li>
                          <li><i className="fa-solid fa-angles-right"></i> Revolutionizing Digital Experiences</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <h4 className="sub-title">Crafting Tomorrow’s Digital World</h4>
                <p>It encompasses the use of computers, net, and other digital technologies to store, retrieve,
                  transmit, and manipulate data. IT professionals develop maintain the infrastructure that supports
                  a company's operations, including hardware, software, and security systems. The rapid advancement
                </p>
                <p>Ttechnology continuously drives innovation within the IT sector, making it a dynamic and evolving
                  field. Cloud computing, artificial intelligence</p>
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

export default ServiceDetailsPage;
