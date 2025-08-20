import React from 'react';
import PageHeader from '../components/PageHeader';
import Services from '../components/Services';
import Cta from '../components/Cta';
import Faq from '../components/Faq';
import MessagesTwo from '../components/MessagesTwo';

const ServicesPage = () => {
  const breadcrumbs = [
    { label: 'Home', link: '/' },
    { label: 'What We Do', link: null }
  ];

  return (
    <>
      <PageHeader title="What We Do" breadcrumbs={breadcrumbs} />
      <Services isSlider={false} showTitle={false} extraClassName="style2"/>
      {/* <Cta /> */}
      <Faq extraClassName="style2"/>
      <MessagesTwo extraClassName="style2" />
    </>
  );
};

export default ServicesPage;
