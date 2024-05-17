'use client'
import data from '../Data.json';
import React from 'react'
import Hero from '../ui/Hero/Hero'
import About from '../ui/About/About';
import Iconbox from '../ui/Iconbox/Iconbox';
import Skill from '../ui/Skill/Skill';
import Resume from '../ui/Resume/ResumeSection';
import PortfolioSection from '../ui/Protfolio/PortfolioSection';
import ReviewSection from '../ui/Review/ReviewSection';
import BlogSection from '../ui/Blog/BlogSection';
import Contact from '../ui/Contact/Contact';


export default function page() {
  const { heroData, aboutData, serviceData, skillData, portfolioData, blogData, resumeData, reviewData, contactData, socialData } = data;
  return (
    <>
      <div className="st-height-b80 st-height-lg-b80"></div>
      <Hero data={heroData.homeOneHero} socialData={socialData} />
      <About data={aboutData} data-aos="fade-right" />
      <Iconbox data={serviceData} data-aos="fade-right" />
      <Skill data={skillData} data-aos="fade-right" />
      <Resume data={resumeData} />
      <PortfolioSection data={portfolioData} data-aos="fade-right" />
      <ReviewSection data={reviewData} data-aos="fade-right" />
      <BlogSection data={blogData} data-aos="fade-right" />
      <Contact data={contactData} socialData={socialData} data-aos="fade-right" />
    </>
  )
}
