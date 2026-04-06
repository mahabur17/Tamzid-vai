// src/components/Hero.jsx
import React from "react";

export default function Hero() {
  const heroImageUrl =
    "https://scontent.fdac151-1.fna.fbcdn.net/v/t39.30808-6/557711084_2083962479023741_7258371192955033680_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=109&ccb=1-7&_nc_sid=7b2446&_nc_eui2=AeFdpyZI5j73MvP7YK2hQyCevdbwvgAIiNG91vC-AAiI0TOqxIDvHLg1q98Ufyg9XrxfGdVYT5Wjsz2k7RdQ6T0k&_nc_ohc=mhHR5AJA7ccQ7kNvwHarvou&_nc_oc=AdrUxbuk39XMFVxEOhHZEUVTmvANJWi_G8R9nKXmVWXSbREZI0k6S3-wS3ZydyF-tXM&_nc_zt=23&_nc_ht=scontent.fdac151-1.fna&_nc_gid=pqw-d1hB7qyrRes4lZd5Pw&_nc_ss=7a3a8&oh=00_Af3WD0fygxBcCuyFIXYh-mIj6vUUII6G-PHF0yDNtgy0BQ&oe=69D4077B";

  return (
    // মোবাইলে হাইট ঠিক রাখার জন্য আগের দেওয়া পারফেক্ট প্যাডিং: pt-28 pb-16
    <header className="relative pt-28 pb-16 md:pt-48 md:pb-32 overflow-hidden bg-primary">
      <div className="absolute inset-0 opacity-20">
        {/* ইনলাইন স্টাইলের মাধ্যমে পজিশন কন্ট্রোল করা হয়েছে, যাতে এটি ১০০% কাজ করে */}
        <img
          className="w-full h-full object-cover md:object-center"
          style={{ objectPosition: "85% center" }} 
          alt="Modern classroom setting"
          src={heroImageUrl}
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-r from-primary to-transparent"></div>
      
      <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10 grid md:grid-cols-2 gap-12 items-center">
        
        <div className="text-white space-y-6 md:space-y-8">
          {/* tracking-tight পরিবর্তন করে tracking-normal দেওয়া হয়েছে */}
          <h1 className="text-4xl md:text-7xl font-extrabold leading-tight tracking-normal">
            শিক্ষায় অনন্য <span className="text-tertiary-fixed">উৎকর্ষের</span>{" "}
            নতুন দিগন্ত
          </h1>
          <p className="text-base md:text-xl text-on-primary-container leading-relaxed max-w-xl">
            আমরা বিশ্বাস করি প্রতিটি শিক্ষার্থীর মাঝে লুকায়িত আছে এক অসীম
            সম্ভাবনা। সেই সম্ভাবনাকে জাগ্রত করতেই আমাদের এই পথচলা।
          </p>
          
          <div className="flex flex-wrap gap-4 pt-2 md:pt-4">
            <a
              href="#courses"
              className="inline-block bg-surface-container-lowest text-primary px-6 py-3 md:px-8 md:py-4 rounded-xl font-bold text-base md:text-lg hover:shadow-xl transition-all"
            >
              আজই ভর্তি হন
            </a>
            <a
              href="#materials"
              className="inline-block border-2 border-white/30 text-white px-6 py-3 md:px-8 md:py-4 rounded-xl font-bold text-base md:text-lg hover:bg-white/10 transition-all"
            >
              আরও জানুন
            </a>
          </div>
        </div>
        
        {/* ডানদিকের ডেস্কটপ কার্ড (অপরিবর্তিত) */}
        <div className="hidden md:block">
          <div className="bg-white/10 backdrop-blur-xl p-8 rounded-3xl border border-white/20 shadow-2xl">
            <div className="aspect-video bg-black/20 rounded-2xl flex items-center justify-center overflow-hidden">
              <img
                className="w-full h-full object-cover opacity-80"
                alt="Professional studio"
                src={heroImageUrl}
              />
            </div>
            <div className="mt-6 flex items-center justify-between">
              <div className="flex -space-x-3">
                <div className="w-12 h-12 rounded-full border-2 border-white bg-secondary flex items-center justify-center text-white font-bold">
                  A+
                </div>
                <div className="w-12 h-12 rounded-full border-2 border-white bg-primary flex items-center justify-center text-white font-bold">
                  B
                </div>
                <div className="w-12 h-12 rounded-full border-2 border-white bg-tertiary flex items-center justify-center text-white font-bold">
                  C
                </div>
              </div>
              <div className="text-white/80 text-sm">
                আমাদের ৫০০+ শিক্ষার্থী গোল্ডেন A+ প্রাপ্ত
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}