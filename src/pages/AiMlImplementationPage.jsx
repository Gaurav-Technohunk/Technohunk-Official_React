import React from 'react'
import PageHeader from '../components/PageHeader';
import serviceDetailsVid1 from '../assets/images/services/AI_Robotics_and_Gen_AI_Video.mp4'
import serviceDetailsImg2 from '../assets/images/services/service-details-img3_resized.png'
import { Link } from 'react-router-dom';
import Categories from '../components/Categories';

const AiMlImplementationPage = () => {
  const breadcrumbs = [
    { label: 'Home', link: '/' },
    { label: 'Services', link: '/services' },
    { label: 'AI-ML Implementation', link: null }
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
                <h2 className="title">Transforming Information into Strategic Intelligence</h2>
                <p>In today’s data-driven world, success depends on the ability to extract meaningful 
                  insights from vast amounts of information. <b> Through advanced AI and Machine Learning 
                  implementation, we empower businesses to move beyond raw data and unlock its true 
                  potential.</b> Our solutions transform scattered information into actionable intelligence, 
                  enabling organizations to predict trends, optimize operations, and make smarter, faster 
                  decisions. By turning complex data into a strategic asset, we help businesses gain a 
                  competitive edge, drive innovation, and achieve sustainable growth in an increasingly 
                  digital future.</p>
                <h4 className="sub-title">AI-Powered Innovation for Business Growth</h4>
                <p>AI-powered innovation transforms businesses by unlocking smarter solutions, faster decisions, 
                  and scalable growth.<b> By harnessing machine learning and intelligent automation, companies can 
                  streamline processes, predict trends, and enhance customer experiences.</b> This fusion of technology 
                  and creativity drives a future-ready ecosystem built on efficiency and intelligence</p>
                <ul className="list-unstyled options">
                  <li><i className="fa-solid fa-circle-check"></i> <b>Smart Algorithms for Smarter Decisions</b></li>
                  <li><i className="fa-solid fa-circle-check"></i> <b>Unlocking Hidden Insights from Data</b></li>
                  <li><i className="fa-solid fa-circle-check"></i> <b>Automation That Learns and Evolves </b></li>
                  <li><i className="fa-solid fa-circle-check"></i> <b>Redefining Innovation with Artificial Intelligence </b></li>
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
                        <h4 className="sub-title mt-0">Secure Your Future with AI-Powered Intelligence</h4>
                        <p>AI-powered intelligence equips businesses with the foresight to anticipate challenges, 
                          adapt quickly, and stay ahead in a competitive landscape. By transforming data into actionable 
                          insights, it strengthens decision-making and builds resilience for the future. Harnessing AI 
                          today means securing long-term growth, innovation, and sustainability tomorrow.</p>
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
                <h4 className="sub-title">Crafting Tomorrow’s Intelligent World with AI & ML</h4>
                <p>Artificial Intelligence and Machine Learning are reshaping industries by driving 
                  smarter automation, predictive insights, and innovative solutions. From streamlining 
                  operations to unlocking new opportunities, AI & ML empower businesses to stay future-ready. 
                  Together, they craft a world where technology learns, adapts, and evolves to create lasting impact
                </p>
                <p>Ttechnology continuously drives innovation within the IT sector, making it a dynamic and evolving
                  field in Artificial intelligence & Machine Learning</p>
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

export default AiMlImplementationPage;
