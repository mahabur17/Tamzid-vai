import React from 'react';

// আপনার হোম পেজের সবগুলো সেকশন ইম্পোর্ট করা হলো
import Hero from '../components/Hero';
import FoundersMessage from '../components/FoundersMessage';
import Courses from '../components/Courses';
import StudyMaterials from '../components/StudyMaterials';
import CollegeReviews from '../components/CollegeReviews';
import FAQ from '../components/FAQ';
import SuccessStories from '../components/SuccessStories';

export default function Home() {
  return (
    <main className="no-scrollbar">
      {/* আপনার দেওয়া অরিজিনাল সিরিয়াল অনুযায়ী সেকশনগুলো সাজানো হলো */}
      <Hero />
      <FoundersMessage />
      <Courses />
      <StudyMaterials />
      <CollegeReviews />
      <FAQ />
      <SuccessStories />
    </main>
  );
}