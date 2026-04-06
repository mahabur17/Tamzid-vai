// src/components/Courses.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const mainBatches = [
  {
    id: 1,
    title: "Class 3 Admission",
    icon: "local_library",
    description: "তৃতীয় শ্রেণিতে ভর্তি পরীক্ষার জন্য স্পেশাল কেয়ার ও পূর্ণাঙ্গ গাইডলাইন।",
    path: "/admission/class-3",
  },
  {
    id: 2,
    title: "Class 6 Admission",
    icon: "menu_book",
    description: "ষষ্ঠ শ্রেণিতে সেরা স্কুলে ভর্তির জন্য ১০০% কমন উপযোগী প্রস্তুতি।",
    path: "/admission/class-6",
  },
  {
    id: 3,
    title: "Class 9 Admission",
    icon: "import_contacts",
    description: "নবম শ্রেণির বিজ্ঞান ও অন্যান্য বিভাগে ভর্তির সেরা প্ল্যাটফর্ম।",
    path: "/admission/class-9",
  }
];

export default function Courses() {
  return (
    // মোবাইলের জন্য py-12, ডেস্কটপে py-24
    <section className="py-12 md:py-24 bg-surface-container-low" id="courses">
        <div className="max-w-7xl mx-auto px-5 md:px-8">
            {/* Header */}
            {/* মোবাইলের জন্য mb-10 এবং space-y-3 */}
            <div className="mb-10 md:mb-16 space-y-3 md:space-y-4">
                <span className="px-3 py-1 md:px-4 md:py-1.5 bg-secondary-container text-on-secondary-container rounded-full text-xs md:text-sm font-bold tracking-wide">
                    অ্যাডমিশন প্রোগ্রাম
                </span>
                {/* মোবাইলের জন্য text-3xl */}
                <h2 className="text-3xl md:text-4xl font-black text-primary">আমাদের অ্যাডমিশন ব্যাচসমূহ</h2>
                {/* মোবাইলের জন্য text-base */}
                <p className="text-on-surface-variant max-w-2xl text-base md:text-lg">
                    ভর্তি পরীক্ষায় শতভাগ সাফল্যের লক্ষ্যে আমাদের বিশেষায়িত অ্যাডমিশন ব্যাচগুলোতে ভর্তি চলছে।
                </p>
            </div>

            {/* Main Batches Section */}
            {/* মোবাইলের জন্য mb-12 */}
            <div className="mb-12 md:mb-20">
                <div className="flex items-center gap-3 md:gap-4 mb-6 md:mb-8">
                    {/* মোবাইলের জন্য text-2xl */}
                    <h3 className="text-2xl md:text-3xl font-bold text-primary">মেইন ব্যাচ সমূহ</h3>
                    <div className="h-[2px] flex-1 bg-outline-variant/30 rounded-full"></div>
                </div>
                
                {/* মোবাইলের জন্য gap-6 */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                    {mainBatches.map((batch) => (
                      // মোবাইলের জন্য p-6
                      <div key={batch.id} className="bg-surface-container-lowest p-6 md:p-8 rounded-[1.5rem] shadow-sm hover:shadow-xl transition-all group border border-outline-variant/20">
                          {/* আইকনের সাইজ মোবাইলের জন্য একটু ছোট করা হয়েছে */}
                          <div className="w-12 h-12 md:w-14 md:h-14 bg-primary-fixed rounded-2xl flex items-center justify-center mb-5 md:mb-6 text-primary group-hover:scale-110 transition-transform">
                              <span className="material-symbols-outlined text-2xl md:text-3xl">{batch.icon}</span>
                          </div>
                          {/* মোবাইলের জন্য text-xl */}
                          <h3 className="text-xl md:text-2xl font-bold text-primary mb-3 md:mb-4">{batch.title}</h3>
                          <p className="text-on-surface-variant mb-6 md:mb-8 line-clamp-2 text-sm md:text-base">{batch.description}</p>
                          <div className="flex items-center justify-between border-t border-outline-variant/15 pt-5 md:pt-6">
                              <span className="text-secondary font-bold text-sm md:text-base">অ্যাডমিশন ব্যাচ</span>
                              <Link 
                                to={batch.path}
                                className="text-primary font-bold text-sm md:text-base flex items-center gap-2 group-hover:text-tertiary-fixed-variant transition-colors"
                              >
                                  বিস্তারিত দেখুন <span className="material-symbols-outlined text-lg md:text-xl group-hover:translate-x-1 transition-transform">arrow_forward</span>
                              </Link>
                          </div>
                      </div>
                    ))}
                </div>
            </div>

            {/* আরও ব্যাচ সমূহ */}
            <div>
                <div className="flex items-center gap-3 md:gap-4 mb-6 md:mb-8">
                    {/* মোবাইলের জন্য text-2xl */}
                    <h3 className="text-2xl md:text-3xl font-bold text-primary">আরও ব্যাচ সমূহ</h3>
                    <div className="h-[2px] flex-1 bg-outline-variant/30 rounded-full"></div>
                </div>
                
                {/* মোবাইলের জন্য gap-4 */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
                    {[1, 2, 4, 5, 7, 8, 11].map((cls) => (
                      // মোবাইলের জন্য p-5
                      <div key={cls} className="bg-surface-container-lowest p-5 md:p-6 rounded-2xl shadow-sm hover:shadow-lg transition-all group">
                          {/* মোবাইলের জন্য text-lg */}
                          <h3 className="text-lg md:text-xl font-bold text-primary mb-2">Class {cls} Admission</h3>
                          <p className="text-on-surface-variant text-xs md:text-sm mb-5 md:mb-6">
                            {cls === 11 ? 'একাদশ' : cls === 8 ? 'অষ্টম' : 'ভর্তি'} শ্রেণির প্রস্তুতি।
                          </p>
                          <Link 
                            to={`/admission/class-${cls}`} 
                            className="text-primary text-sm font-bold flex items-center gap-1 group-hover:text-tertiary-fixed-variant transition-colors"
                          >
                              বিস্তারিত <span className="material-symbols-outlined text-base group-hover:translate-x-1 transition-transform">arrow_forward</span>
                          </Link>
                      </div>
                    ))}
                </div>
            </div>
        </div>
    </section>
  );
}