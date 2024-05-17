'use client'
import data from '../../Data.json';
import Hero4 from '@/app/ui/Hero/Hero4';
import React from 'react'
import About from '../../ui/About/About';
import Iconbox from '../../ui/Iconbox/Iconbox';
import Skill from '../../ui/Skill/Skill';
import Resume from '../../ui/Resume/ResumeSection';
import PortfolioSection from '../../ui/Protfolio/PortfolioSection';
import ReviewSection from '../../ui/Review/ReviewSection';
import BlogSection from '../../ui/Blog/BlogSection';
import Contact from '../../ui/Contact/Contact';




const page = () => {
  const { heroData, aboutData, serviceData, skillData, portfolioData, blogData, resumeData, reviewData, contactData, socialData, socialData2 } = data;
  return (
    <>
      <Hero4 data={heroData.homeFourHero} socialData={socialData2} />
      <About data={aboutData} data-aos="fade-right" />
      <Iconbox data={serviceData} data-aos="fade-right" />
      <Skill data={skillData} data-aos="fade-right" />
      <Resume data={resumeData} />
      <PortfolioSection data={portfolioData} data-aos="fade-right" />
      <ReviewSection data={reviewData} data-aos="fade-right" />
      <BlogSection data={blogData} data-aos="fade-right" />
      <Contact data={contactData} socialData={socialData} data-aos="fade-right" />
    </ >
  )
}

export default page;