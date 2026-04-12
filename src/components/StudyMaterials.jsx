// src/components/StudyMaterials.jsx
import React from 'react';

const materials = [
  { id: 1, title: "প্রিমিয়াম লেকচার শিট", icon: "menu_book", desc: "বইয়ের প্রতিটি অধ্যায়ের উপর এবং এর বাইরে আসার মতো প্রতিটি বিষয়ের উপর আলাদা লেকচার ও প্র‍্যাকটিস শিট।" },
  { id: 2, title: "বিগত সালের প্রশ্নপত্র", icon: "history_edu", desc: "বিগত বছরের ভর্তি পরীক্ষার প্রশ্নসমূহ দেখে আপনি Question Pattern সম্পর্কে ধারণা নিতে পারবেন।" },
  { id: 3, title: "গাইডলাইন ও সাজেশন সংবলিত ভিডিও", icon: "support_agent", desc: "ভর্তি পরীক্ষায় কোথায় থেকে প্রশ্ন আসে,কি ধরণের প্রশ্ন আসে, মানবণ্টন কেমন হবে এবং উত্তরগুলো কিভাবে খাতায় লিখতে হবে তা সম্পর্কে জানতে পারবেন।" },
  { id: 4, title: "নিয়মিত মডেল টেস্ট", icon: "quiz", desc: "রেসিডেনসিয়াল,সেন্ট জোসেফ এবং অন্যান্য কলেজ গুলোর বিগত সালের প্রশ্নের আলোকে তৈরি মডেল টেস্ট এবং উত্তরমালা।" },
  { id: 5, title: "ফাইনাল সাজেশন", icon: "lightbulb", desc: "ভর্তি পরীক্ষার পূর্ব মুহূর্তে অভিভাবক এবং শিক্ষার্থীদের করণীয় সম্পর্কে জানতে পারবেন।" },
];

export default function StudyMaterials() {
  return (
    <section className="py-12 md:py-24 bg-surface" id='materials'>
        <div className="max-w-7xl mx-auto px-5 md:px-8">
            
            {/* Section Header */}
            <div className="mb-10 md:mb-16 text-center flex flex-col items-center">
                
                {/* স্টাডি ম্যাটেরিয়ালস পিল-বক্স */}
                <h2 className="inline-block px-6 py-2.5 md:px-8 md:py-3 bg-secondary-container text-on-secondary-container rounded-full text-xl md:text-3xl font-bold tracking-wide mb-4 md:mb-6">
                    স্টাডি ম্যাটেরিয়ালস
                </h2>
                
                {/* text-balance সরানো হয়েছে এবং max-w-3xl করা হয়েছে যাতে দুই পাশে ফাঁকা জায়গা কমে */}
                <p className="text-on-surface-variant max-w-3xl mx-auto text-base md:text-lg leading-relaxed text-center px-1 md:px-0">
                    ভর্তি পরীক্ষার ১০০% প্রস্তুতি নিশ্চিত করতে আমাদের কাছে থেকে পাবেন বিষয়ভিত্তিক লেকচার শিট, রেসিডেনসিয়াল ও সেন্ট জোসেফ কলেজের প্রশ্নের প্যাটার্নের মডেল টেস্ট, উত্তরমালা এবং বিগত বছরের প্রশ্নপত্র।
                </p>
            </div>

            {/* Materials Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-8">
                {materials.map(item => (
                    <div key={item.id} className="bg-surface-container-lowest p-6 md:p-8 rounded-2xl shadow-sm hover:shadow-lg transition-all border border-outline-variant/10 flex gap-4 md:gap-6 items-start group">
                        
                        {/* Icon Box */}
                        <div className="w-12 h-12 md:w-16 md:h-16 bg-primary-fixed rounded-xl md:rounded-2xl flex items-center justify-center flex-shrink-0 text-primary group-hover:scale-110 transition-transform">
                            <span className="material-symbols-outlined text-2xl md:text-3xl">{item.icon}</span>
                        </div>
                        
                        {/* Content */}
                        <div>
                            <h3 className="text-xl md:text-2xl font-bold text-primary mb-2 md:mb-3">{item.title}</h3>
                            <p className="text-on-surface-variant text-sm md:text-base leading-relaxed">{item.desc}</p>
                        </div>
                    </div>
                ))}
            </div>
            
        </div>
    </section>
  );
}