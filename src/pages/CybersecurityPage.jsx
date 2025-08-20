import React from 'react'
import PageHeader from '../components/PageHeader';
import serviceDetailsVid1 from '../assets/images/services/cybersecurity-video.mp4'
import serviceDetailsImg2 from '../assets/images/services/cybersecurity-advisory.png'
import { Link } from 'react-router-dom';
import Categories from '../components/Categories';

const CyberSecurityPage = () => {
  const breadcrumbs = [
    { label: 'Home', link: '/' },
    { label: 'Services', link: '/services' },
    { label: 'Cyber-Security', link: null }
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
               <h2 className="title">Securing the Future with Intelligent Cybersecurity</h2>
                <p>In an era of rising digital threats, cybersecurity is no longer optional—it’s mission critical. 
                By leveraging intelligent security solutions, businesses can detect vulnerabilities, prevent attacks, 
                and safeguard sensitive data with precision.<b> Proactive defense mechanisms ensure operational continuity, 
                build customer trust, and protect innovation from evolving cyber risks.</b> With intelligent cybersecurity at 
                the core, organizations not only secure their digital assets but also gain the confidence to grow and 
                innovate in a connected world.</p>

                <h4 className="sub-title">Intelligent Cybersecurity for a Safer Digital Future</h4>
                <p>Empower your business with advanced cybersecurity solutions designed to detect threats, 
                   protect sensitive data, and ensure operational resilience. With proactive defenses in place, 
                   your organization can focus on growth, innovation, and customer trust while staying secure 
                   in an increasingly connected world.</p>
                <ul className="list-unstyled options">
                  <li><i className="fa-solid fa-circle-check"></i> <b>Safeguarding Data with Intelligent Security</b></li>
                  <li><i className="fa-solid fa-circle-check"></i> <b>Proactive Defense for Business Continuity</b></li>
                  <li><i className="fa-solid fa-circle-check"></i> <b>Building Trust Through Robust Cybersecurity</b></li>
                   <li><i className="fa-solid fa-circle-check"></i> <b>Advanced Protection Against Evolving Threats</b></li>
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
                        <h4 className="sub-title mt-0">Cybersecurity That Protects the Way You Work</h4>
                        <p>Cybersecurity advisory empowers organizations to navigate today’s complex threat landscape with confidence.  
                          By providing expert guidance, risk assessments, and tailored security strategies, it helps <b> businesses safeguard 
                          critical assets, ensure compliance, and strengthen resilience against evolving cyber risks.</b>
                          With the right advisory support, organizations can anticipate vulnerabilities, implement proactive defenses.
                          By identifying hidden vulnerabilities,mitigating complex risks, and ensuring regulatory compliance, advisory services build a robust 
                          security framework tailored to specific business goals.
                        </p>
                       <ul className="list-unstyled m-0 inner-options">
                         <li><i className="fa-solid fa-angles-right"></i><b> Intelligent Protection for Digital Growth </b></li>
                         <li><i className="fa-solid fa-angles-right"></i><b> Safeguarding Data with Smart Defenses </b></li>
                         <li><i className="fa-solid fa-angles-right"></i><b> Building Trust Through Cyber Resilience </b></li>
                         <li><i className="fa-solid fa-angles-right"></i><b> Advanced Security Against Evolving Threats </b></li>
                       </ul>

                      </div>
                    </div>
                  </div>
                </div>
                <h4 className="sub-title">Fortifying Your Digital Future with Proactive Cyber Advisory</h4>
                <p>Cyber security advisory is fundamentally transforming how organizations confront the digital 
                  threat landscape, moving them from a reactive defense posture to a state of proactive resilience. 
                  It empowers leadership to pursue innovation and digital transformation securely, knowing their 
                  critical assets are protected by expert-led strategies. By identifying hidden vulnerabilities, 
                  mitigating complex risks, and ensuring regulatory compliance, advisory services build a robust 
                  security framework tailored to specific business goals. This partnership is not just about preventing 
                  breaches—it’s about building a fortified, agile, and competitive enterprise ready for the challenges 
                  of tomorrow.
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
