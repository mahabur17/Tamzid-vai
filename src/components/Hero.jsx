// src/components/Hero.jsx
import React, { useState, useEffect } from "react";

export default function Hero() {
  // নিশ্চিতভাবে এখানে ৪টি ছবির লিংক দেওয়া আছে
  const heroImages = [
    "/images/hero1.jpg",
    "/images/hero2.jpg",
    "/images/hero3.jpg",
    "/images/hero4.jpg"
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  // ২ সেকেন্ড পরপর স্লাইড করার লজিক
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % heroImages.length);
    }, 2000); 

    return () => clearInterval(interval);
  }, []);

  return (
    // মোবাইলে pb-16 থেকে pb-8 করে নিচের অতিরিক্ত গ্যাপ কমানো হয়েছে
    <header className="relative pt-28 pb-8 md:pt-48 md:pb-32 overflow-hidden bg-primary">
      
      {/* ডেস্কটপ ব্যাকগ্রাউন্ড (স্থির) */}
      <div className="hidden md:block absolute inset-0 opacity-20">
        <img
          className="w-full h-full object-cover object-center"
          style={{ objectPosition: "85% center" }} 
          alt="Desktop Background"
          src={heroImages[0]}
        />
      </div>

      {/* মোবাইল ব্যাকগ্রাউন্ড (স্লাইডার) */}
      <div className="md:hidden absolute inset-0 opacity-25 overflow-hidden">
        <div 
          className="flex w-full h-full transition-transform duration-1000 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {heroImages.map((img, index) => (
            <img
              key={index}
              className="w-full h-full flex-shrink-0 object-cover"
              style={{ objectPosition: "85% center" }} 
              alt={`Mobile Slide ${index + 1}`}
              src={img}
            />
          ))}
        </div>
      </div>

      {/* গ্র্যাডিয়েন্ট ওভারলে */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/80 md:via-primary/50 to-transparent"></div>
      
      <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10 grid md:grid-cols-2 gap-12 items-center">
        
        {/* টেক্সট কন্টেন্ট */}
        <div className="text-white space-y-6 md:space-y-8">
          <h1 className="text-4xl md:text-7xl font-extrabold leading-tight tracking-normal">
            শিক্ষায় অনন্য <span className="text-tertiary-fixed">উৎকর্ষের</span>{" "}
            নতুন দিগন্ত
          </h1>
          <p className="text-base md:text-xl text-on-primary-container leading-relaxed max-w-xl">
            আমরা বিশ্বাস করি প্রতিটি শিক্ষার্থীর মাঝে লুকায়িত আছে এক অসীম
            সম্ভাবনা। সেই সম্ভাবনাকে জাগ্রত করতেই আমাদের এই পথচলা।
          </p>
          
          <div>
            <div className="flex flex-wrap gap-4 pt-2 md:pt-4">
              <a
                href="#courses"
                className="inline-block bg-surface-container-lowest text-primary px-6 py-3 md:px-8 md:py-4 rounded-xl font-extrabold text-base md:text-lg hover:shadow-xl transition-all"
              >
              ব্যাচ সমূহ
              </a>
              <a
                href="#materials"
                className="inline-block border-2 border-white/30 text-white px-6 py-3 md:px-8 md:py-4 rounded-xl font-bold text-base md:text-lg hover:bg-white/10 transition-all"
              >
                আরও জানুন
              </a>
            </div>

            {/* মোবাইলের পেজিনেশন ডটস (mt-10 দিয়ে বাটনের নিচে সুন্দর গ্যাপ তৈরি করা হয়েছে) */}
            <div className="flex md:hidden items-center justify-center gap-2 mt-10">
              {heroImages.map((_, index) => (
                <div
                  key={index}
                  className={`transition-all duration-500 ease-in-out rounded-full ${
                    currentIndex === index 
                      ? "w-7 h-2 bg-[#023326]" // অ্যাক্টিভ ডট
                      : "w-2 h-2 bg-white/40"  // ইন-অ্যাক্টিভ ডট
                  }`}
                ></div>
              ))}
            </div>
          </div>

        </div>
        
        {/* ডানদিকের ডেস্কটপ কার্ড */}
        <div className="hidden md:block">
          <div className="bg-white/10 backdrop-blur-xl p-8 rounded-3xl border border-white/20 shadow-2xl">
            <div className="aspect-video bg-black/20 rounded-2xl flex items-center justify-center overflow-hidden relative">
              {heroImages.map((img, index) => (
                <img
                  key={index}
                  className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
                    currentIndex === index ? "opacity-90" : "opacity-0"
                  }`}
                  alt={`Card Slide ${index + 1}`}
                  src={img}
                />
              ))}
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
              <div className="text-white/80 text-sm font-medium">
                আমাদের ৫০০+ শিক্ষার্থী গোল্ডেন A+ প্রাপ্ত
              </div>
            </div>
          </div>
        </div>

      </div>
    </header>
  );
}