// src/components/SuccessStories.jsx
import React, { useState, useEffect } from 'react';

const students = [
  { id: 1, name: "আবরার ফাহিম", dept: "বুয়েট (ব্যাচ ২২)", img: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&q=80&w=200", quote: "তামজিদ একাডেমির লেকচার শিট এবং নিয়মিত এক্সাম আমার প্রস্তুতির ভীত শক্ত করেছে। বিশেষ করে ভাইয়াদের পার্সোনাল গাইডলাইন আমার চান্স পাওয়ার পেছনে মূল অবদান রেখেছে।" },
  { id: 2, name: "সাদিয়া ইসলাম", dept: "ঢাকা মেডিকেল কলেজ", img: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&q=80&w=200", quote: "বায়োলজি নিয়ে আমার যে ভীতি ছিল, তা একাডেমির মেন্টরদের ভিডিও লেকচার দেখার পর একদম দূর হয়ে গেছে। আমি কৃতজ্ঞ এই অসাধারণ শিক্ষার পরিবেশের জন্য।" },
  { id: 3, name: "তানভীর আহমেদ", dept: "ঢাকা বিশ্ববিদ্যালয়", img: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=200", quote: "অংকের জটিল থিওরিগুলো ভাইয়ারা যেভাবে ফিল দিয়ে বুঝাতেন, তা অন্য কোথাও পাইনি। ভর্তি পরীক্ষার আগে ওই মোটিভেশনাল ক্লাসগুলোই ছিল আমার ভরসা।" },
  { id: 4, name: "ফারিহা রহমান", dept: "জাহাঙ্গীরনগর বিশ্ববিদ্যালয়", img: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=200", quote: "এখানকার মডেল টেস্টগুলো একদম মেইন পরীক্ষার মতো। টাইম ম্যানেজমেন্ট শিখতে এই পরীক্ষাগুলো আমাকে সবচেয়ে বেশি সাহায্য করেছে।" },
  { id: 5, name: "রাফসান জানি", dept: "রাজশাহী বিশ্ববিদ্যালয়", img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=200", quote: "ভর্তি পরীক্ষার এই কঠিন জার্নিতে তামজিদ ভাইয়ার গাইডলাইন না পেলে হয়তো পথ হারিয়ে ফেলতাম। ভাইয়াদের মেন্টাল সাপোর্ট সত্যিই অতুলনীয়।" },
  { id: 6, name: "নাফিসা তাবাসসুম", dept: "বুয়েট (ব্যাচ ২৩)", img: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=200", quote: "সবচেয়ে ভালো লেগেছে ভাইয়াদের স্পেশাল সলভ ক্লাসগুলো। যেকোনো ডাউট সাথে সাথেই ক্লিয়ার হয়ে যেত যা প্রস্তুতির জন্য খুব দরকারি ছিল।" },
];

export default function SuccessStories() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  
  // সোয়াইপ ট্র্যাক করার জন্য স্টেট
  const [touchStartX, setTouchStartX] = useState(0);
  
  useEffect(() => {
    if (isHovered) return; 
    
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => {
        return prevIndex === students.length - 1 ? 0 : prevIndex + 1;
      });
    }, 2000);

    return () => clearInterval(timer);
  }, [isHovered]); 

  // Touch Start Handler
  const handleTouchStart = (e) => {
      setIsHovered(true);
      setTouchStartX(e.touches[0].clientX);
  };

  // Touch End Handler
  const handleTouchEnd = (e) => {
      setIsHovered(false);
      const touchEndX = e.changedTouches[0].clientX;
      const diff = touchStartX - touchEndX;

      if (diff > 50) {
          // Swipe Left (Next)
          setCurrentIndex((prevIndex) => prevIndex === students.length - 1 ? 0 : prevIndex + 1);
      } else if (diff < -50) {
          // Swipe Right (Previous)
          setCurrentIndex((prevIndex) => prevIndex === 0 ? students.length - 1 : prevIndex - 1);
      }
  };

  return (
    // মোবাইলের জন্য প্যাডিং কমানো হয়েছে (py-12)
    <section className="py-12 md:py-24 bg-surface px-4 md:px-8" id="reviews">
        <div className="max-w-7xl mx-auto">
            {/* মোবাইলের জন্য ফন্ট ও মার্জিন অপটিমাইজ করা হয়েছে */}
            <h2 className="text-2xl md:text-4xl font-black text-primary mb-10 md:mb-16 text-center">সাফল্যের গল্প</h2>

            {/* Carousel Container */}
            <div 
                className="w-[350px] md:w-[748px] lg:w-[1146px] mx-auto overflow-hidden py-4 cursor-grab active:cursor-grabbing"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                // টাচ ইভেন্টগুলো যুক্ত করা হলো
                onTouchStart={handleTouchStart}
                onTouchEnd={handleTouchEnd}
            >
                <div
                    className="flex gap-12 transition-transform duration-700 ease-in-out"
                    style={{ transform: `translateX(-${currentIndex * 398}px)` }}
                >
                    {[...students, ...students].map((student, index) => (
                        <div key={index} className="w-[350px] flex-shrink-0 relative pt-12 pointer-events-none md:pointer-events-auto">
                            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-20 h-20 md:w-24 md:h-24 rounded-full border-4 border-surface overflow-hidden shadow-xl z-10">
                                <img className="w-full h-full object-cover" alt={student.name} src={student.img}/>
                            </div>
                            <div className="h-full bg-surface-container-lowest p-6 md:p-8 pt-14 md:pt-16 rounded-[1.5rem] md:rounded-[2rem] text-center shadow-md border border-outline-variant/10 whitespace-normal flex flex-col pointer-events-auto">
                                <div className="text-tertiary mb-3 md:mb-4">
                                    <span className="material-symbols-outlined text-3xl md:text-4xl" style={{fontVariationSettings: "'FILL' 1"}}>format_quote</span>
                                </div>
                                <p className="text-on-surface-variant text-sm md:text-base italic mb-4 md:mb-6 leading-relaxed flex-grow">
                                    "{student.quote}"
                                </p>
                                <div className="mt-auto">
                                    <h4 className="text-lg md:text-xl font-bold text-primary">{student.name}</h4>
                                    <p className="text-secondary text-xs md:text-sm font-medium mt-1">{student.dept}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* ডটস (Dots) ইন্ডিকেটর */}
            <div className="flex justify-center gap-2 mt-8 md:mt-12">
                {students.map((_, index) => (
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