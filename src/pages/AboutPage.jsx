import React from 'react'
import PageHeader from '../components/PageHeader';
import About from '../components/About';
import TextSlider from '../components/TextSlider';
import WhoWeAre from '../components/WhoWeAre';
import Team from '../components/Team';
import Cta from '../components/Cta';
import Pricing from '../components/Pricing';

const AboutPage = () => {
  const breadcrumbs = [
    { label: 'Home', link: '/' },
    { label: 'About Us', link: null }
  ];
  return (
    <>
      <PageHeader title="About Us" breadcrumbs={breadcrumbs} />
      <About />
      <TextSlider/>
      <WhoWeAre/>
      <Team />
      {/* <Cta/> */}
      {/* <TextSlider /> */}
      {/* <Pricing extraClassName="style2"/> */}
    </>
  )
}

export default AboutPage
