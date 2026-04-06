// src/components/StudyMaterials.jsx
import React from 'react';

const materials = [
  { id: 1, title: "প্রিমিয়াম লেকচার শিট", icon: "menu_book", desc: "প্রতিটি বিষয়ের জন্য সহজ ভাষায় রচিত, তথ্যবহুল এবং ১০০% কমন উপযোগী বিশেষ লেকচার শিট।" },
  { id: 2, title: "বিগত সালের প্রশ্ন সমাধান", icon: "history_edu", desc: "বিগত ১০-১৫ বছরের ভর্তি পরীক্ষার প্রশ্ন ও নির্ভুল সমাধান সম্বলিত বিষয়ভিত্তিক প্রশ্নব্যাংক।" },
  { id: 3, title: "স্পেশাল সলভ ক্লাস", icon: "support_agent", desc: "শিক্ষার্থীদের যেকোনো সমস্যার তাৎক্ষণিক সমাধানের জন্য রুটিনভিত্তিক এক্সট্রা সলভ ক্লাস এর ব্যবস্থা।" },
  { id: 4, title: "নিয়মিত মডেল টেস্ট", icon: "quiz", desc: "ভর্তি পরীক্ষার অনুরূপ ওএমআর (OMR) শিটে নিয়মিত সাপ্তাহিক ও মাসিক মডেল টেস্ট গ্রহণ।" },
  { id: 5, title: "ফাইনাল সাজেশন", icon: "lightbulb", desc: "পরীক্ষার ঠিক পূর্বে রিভিশনের জন্য অভিজ্ঞ শিক্ষকদের তৈরি এক্সক্লুসিভ শর্ট সাজেশন।" },
  { id: 6, title: "ভিডিও লেকচার ব্যাকআপ", icon: "play_circle", desc: "কখনো ক্লাস মিস হলে বা পুনরায় রিভিশন দিতে চাইলে আমাদের রেকর্ডেড ভিডিও ক্লাসের সুবিধা।" },
];

export default function StudyMaterials() {
  return (
    // মোবাইলের জন্য py-12, ডেস্কটপে py-24
    <section className="py-12 md:py-24 bg-surface" id='materials'>
        {/* মোবাইলের জন্য px-5 */}
        <div className="max-w-7xl mx-auto px-5 md:px-8">
            
            {/* Section Header */}
            {/* মোবাইলের জন্য mb-10 এবং space-y-3 */}
            <div className="mb-10 md:mb-16 text-center space-y-3 md:space-y-4">
                <span className="px-3 py-1 md:px-4 md:py-1.5 bg-secondary-container text-on-secondary-container rounded-full text-xs md:text-sm font-bold tracking-wide">
                    স্টাডি ম্যাটেরিয়ালস
                </span>
                {/* মোবাইলের জন্য text-3xl */}
                <h2 className="text-3xl md:text-4xl font-black text-primary">আমাদের বিশেষ সেবাসমূহ</h2>
                {/* মোবাইলের জন্য text-base */}
                <p className="text-on-surface-variant max-w-2xl mx-auto text-base md:text-lg">
                    শিক্ষার্থীদের ১০০% প্রস্তুতি নিশ্চিত করতে আমাদের রয়েছে বিষয়ভিত্তিক গোছানো স্টাডি ম্যাটেরিয়াল এবং সাপোর্ট সিস্টেম।
                </p>
            </div>

            {/* Materials Grid */}
            {/* মোবাইলের জন্য gap-5 */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-8">
                {materials.map(item => (
                    // মোবাইলের জন্য p-5 এবং gap-4
                    <div key={item.id} className="bg-surface-container-lowest p-5 md:p-8 rounded-2xl shadow-sm hover:shadow-lg transition-all border border-outline-variant/10 flex gap-4 md:gap-6 items-start group">
                        
                        {/* মোবাইলের জন্য আইকন বক্স ছোট করা হয়েছে: w-12 h-12 */}
                        <div className="w-12 h-12 md:w-14 md:h-14 bg-primary-fixed rounded-xl flex items-center justify-center flex-shrink-0 text-primary group-hover:scale-110 transition-transform">
                            {/* মোবাইলের জন্য আইকন সাইজ text-2xl */}
                            <span className="material-symbols-outlined text-2xl md:text-3xl">{item.icon}</span>
                        </div>
                        
                        <div>
                            {/* মোবাইলের জন্য text-lg */}
                            <h3 className="text-lg md:text-xl font-bold text-primary mb-1 md:mb-2">{item.title}</h3>
                            <p className="text-on-surface-variant text-sm leading-relaxed">{item.desc}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </section>
  );
}