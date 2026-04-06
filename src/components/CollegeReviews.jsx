// src/components/CollegeReviews.jsx
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const colleges = [
  {
    id: 'drmc',
    name: 'ঢাকা রেসিডেনসিয়াল মডেল কলেজ',
    type: 'স্কুল ও কলেজ',
    location: 'মোহাম্মদপুর, ঢাকা',
    image: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&q=80&w=600',
  },
  {
    id: 'ndc',
    name: 'নটর ডেম কলেজ',
    type: 'কলেজ',
    location: 'মতিঝিল, ঢাকা',
    image: 'https://images.unsplash.com/photo-1592284950334-92797669b35b?auto=format&fit=crop&q=80&w=600',
  },
  {
    id: 'hcc',
    name: 'হলিক্রস কলেজ',
    type: 'কলেজ',
    location: 'তেজগাঁও, ঢাকা',
    image: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&q=80&w=600',
  },
  {
    id: 'sjc',
    name: 'সেন্ট জোসেফ কলেজ',
    type: 'স্কুল ও কলেজ',
    location: 'মোহাম্মদপুর, ঢাকা',
    image: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&q=80&w=600',
  },
  {
    id: 'ideal',
    name: 'আইডিয়াল স্কুল এন্ড কলেজ',
    type: 'স্কুল ও কলেজ',
    location: 'মতিঝিল, ঢাকা',
    image: 'https://images.unsplash.com/photo-1592284950334-92797669b35b?auto=format&fit=crop&q=80&w=600',
  },
  {
    id: 'vnsc',
    name: 'ভিকারুননিসা নূন স্কুল',
    type: 'স্কুল ও কলেজ',
    location: 'বেইলি রোড, ঢাকা',
    image: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&q=80&w=600',
  }
];

export default function CollegeReviews() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  
  // সোয়াইপ ট্র্যাক করার জন্য নতুন স্টেট
  const [touchStartX, setTouchStartX] = useState(0);
  
  useEffect(() => {
    if (isHovered) return; 
    
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => {
        return prevIndex === colleges.length - 1 ? 0 : prevIndex + 1;
      });
    }, 2000);

    return () => clearInterval(timer);
  }, [isHovered]);

  // Touch Start Handler
  const handleTouchStart = (e) => {
      setIsHovered(true); // অটো-স্লাইড বন্ধ করবে
      setTouchStartX(e.touches[0].clientX); // শুরুর পজিশন সেভ করবে
  };

  // Touch End Handler
  const handleTouchEnd = (e) => {
      setIsHovered(false); // অটো-স্লাইড আবার চালু করবে
      const touchEndX = e.changedTouches[0].clientX; // শেষের পজিশন
      const diff = touchStartX - touchEndX; // দূরত্বের পার্থক্য

      // যদি পার্থক্য 50px এর বেশি হয়, তার মানে ইউজার সত্যিই সোয়াইপ করেছে
      if (diff > 50) {
          // ডান থেকে বামে সোয়াইপ (Next Card)
          setCurrentIndex((prevIndex) => prevIndex === colleges.length - 1 ? 0 : prevIndex + 1);
      } else if (diff < -50) {
          // বাম থেকে ডানে সোয়াইপ (Previous Card)
          setCurrentIndex((prevIndex) => prevIndex === 0 ? colleges.length - 1 : prevIndex - 1);
      }
  };

  return (
    <section className="py-12 md:py-24 bg-surface px-4 md:px-8" id="college-info">
        <div className="max-w-7xl mx-auto">
            
            {/* Header */}
            <div className="mb-8 md:mb-16 space-y-3 md:space-y-4 text-center md:text-left">
                <span className="px-3 py-1 md:px-4 md:py-1.5 bg-secondary-container text-on-secondary-container rounded-full text-xs md:text-sm font-bold tracking-wide inline-block">প্রতিষ্ঠান রিভিউ</span>
                <h2 className="text-2xl md:text-4xl font-black text-primary">শীর্ষ স্কুল ও কলেজসমূহ</h2>
                <p className="text-on-surface-variant max-w-2xl text-sm md:text-lg mx-auto md:mx-0">দেশের সেরা শিক্ষাপ্রতিষ্ঠানগুলোর বিস্তারিত তথ্য, ভর্তি প্রক্রিয়া এবং তামজিদ ভাইয়ের স্পেশাল রিভিউ।</p>
            </div>

            {/* Carousel Container */}
            <div 
                className="w-[350px] md:w-[732px] lg:w-[1114px] mx-auto overflow-hidden py-2 md:py-4 cursor-grab active:cursor-grabbing"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                // এখানে নতুন টাচ ইভেন্টগুলো কল করা হয়েছে
                onTouchStart={handleTouchStart}
                onTouchEnd={handleTouchEnd}
            >
                <div
                    className="flex gap-8 transition-transform duration-700 ease-in-out"
                    style={{ transform: `translateX(-${currentIndex * 382}px)` }}
                >
                    {[...colleges, ...colleges].map((college, index) => (
                        <div key={index} className="w-[350px] flex-shrink-0 pointer-events-none md:pointer-events-auto">
                            {/* pointer-events-none মোবাইলে দেওয়া হয়েছে যাতে সোয়াইপ করার সময় কার্ডের ভিতরের টেক্সট বা লিংকে ভুলে চাপ না লেগে যায় */}
                            <div className="bg-surface-container-lowest rounded-[1.5rem] shadow-sm hover:shadow-xl transition-all group border border-outline-variant/20 overflow-hidden flex flex-col h-full pointer-events-auto">
                                
                                <div className="h-40 md:h-48 relative overflow-hidden">
                                    <img 
                                      src={college.image} 
                                      alt={college.name} 
                                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" 
                                    />
                                    <div className="absolute top-3 left-3 md:top-4 md:left-4 bg-surface-bright/90 backdrop-blur text-primary text-[10px] md:text-xs font-bold px-2 py-1 md:px-3 rounded-full shadow-sm">
                                        {college.type}
                                    </div>
                                </div>
                                
                                <div className="p-5 md:p-6 flex-grow flex flex-col">
                                    <div className="flex items-center gap-1.5 md:gap-2 text-on-surface-variant text-xs md:text-sm mb-2 md:mb-3">
                                        <span className="material-symbols-outlined text-sm md:text-base">location_on</span>
                                        {college.location}
                                    </div>
                                    <h3 className="text-lg md:text-2xl font-bold text-primary mb-3 md:mb-4 line-clamp-1">{college.name}</h3>
                                    
                                    <div className="mt-auto pt-4 md:pt-6 border-t border-outline-variant/15 flex items-center justify-between">
                                        <span className="text-secondary font-bold text-xs md:text-sm">বিস্তারিত তথ্য জানুন</span>
                                        <Link 
                                            to={`/college/${college.id}`} 
                                            className="text-primary font-bold flex items-center gap-1 md:gap-2 text-sm md:text-base group-hover:text-tertiary-fixed-variant transition-colors"
                                        >
                                            বিস্তারিত <span className="material-symbols-outlined text-base md:text-lg group-hover:translate-x-1 transition-transform">arrow_forward</span>
                                        </Link>
                                    </div>
                                </div>

                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* ডটস (Dots) ইন্ডিকেটর */}
            <div className="flex justify-center gap-2 mt-6 md:mt-12">
                {colleges.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setCurrentIndex(index)}
                        className={`h-2.5 md:h-3 rounded-full transition-all duration-500 ${
                            currentIndex === index ? 'bg-primary w-8 md:w-10' : 'bg-outline-variant/50 w-2.5 md:w-3 hover:bg-primary/50'
                        }`}
                        aria-label={`Go to slide ${index + 1}`}
                    />
                ))}
            </div>

        </div>
    </section>
  );
}