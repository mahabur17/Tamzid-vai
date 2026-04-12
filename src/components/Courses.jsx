// src/components/Courses.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const mainBatches = [
  {
    id: 1,
    title: "Class 3 Admission (Bangla Version)",
    icon: "local_library",
    description: "তৃতীয় শ্রেণিতে ভর্তি পরীক্ষার জন্য পূর্ণাঙ্গ গাইডলাইন এবং মেটারিয়ালস।",
    path: "/admission/class-3",
    tag: "অ্যাডমিশন ব্যাচ",
    btnText: "বিস্তারিত দেখুন"
  },
  {
    id: 2,
    title: "Class 3 Admission (English Version)",
    icon: "school", // আপনি চাইলে আইকন পরিবর্তন করতে পারেন
    description: "Complete guidelines and study materials for Class 3 admission test.",
    path: "/admission/class-3-english", // আপনি চাইলে এই রাউটটি courseData.js এ নতুন করে বানিয়ে নিতে পারেন
    tag: "Admission Batch",
    btnText: "View Details"
  },
  {
    id: 3,
    title: "Class 6 Admission",
    icon: "menu_book",
    description: "ষষ্ঠ শ্রেণিতে ভর্তি পরীক্ষার জন্য পূর্ণাঙ্গ গাইডলাইন এবং মেটারিয়ালস।",
    path: "/admission/class-6",
    tag: "অ্যাডমিশন ব্যাচ",
    btnText: "বিস্তারিত দেখুন"
  },
  {
    id: 4,
    title: "Class 9 Admission",
    icon: "import_contacts",
    description: "নবম শ্রেণিতে বিজ্ঞান, ব্যবসায় শিক্ষা ও মানবিক বিভাগে ভর্তি প্রস্তুতির জন্য পূর্ণাঙ্গ গাইডলাইন এবং মেটারিয়ালস।",
    path: "/admission/class-9",
    tag: "অ্যাডমিশন ব্যাচ",
    btnText: "বিস্তারিত দেখুন"
  }
];

// ক্লাসের সংখ্যা অনুযায়ী বাংলা নাম পাওয়ার জন্য ফাংশন
const getClassNameInBengali = (cls) => {
  const classNames = {
    1: "প্রথম",
    2: "দ্বিতীয়",
    4: "চতুর্থ",
    5: "পঞ্চম",
    7: "সপ্তম",
    8: "অষ্টম"
  };
  return classNames[cls];
};

export default function Courses() {
  return (
    <section className="py-12 md:py-24 bg-surface-container-low" id="courses">
        <div className="max-w-7xl mx-auto px-5 md:px-8">
            {/* Header */}
            <div className="mb-10 md:mb-16 space-y-3 md:space-y-4">
                <span className="px-3 py-1 md:px-4 md:py-1.5 bg-secondary-container text-on-secondary-container rounded-full text-xs md:text-sm font-bold tracking-wide">
                    অ্যাডমিশন প্রোগ্রাম
                </span>
                <h2 className="text-3xl md:text-4xl font-black text-primary">আমাদের অ্যাডমিশন ব্যাচসমূহ</h2>
                <p className="text-on-surface-variant max-w-2xl text-base md:text-lg">
                    ভর্তি পরীক্ষায় শতভাগ সাফল্যের লক্ষ্যে আমাদের বিশেষায়িত অ্যাডমিশন ব্যাচগুলোতে ভর্তি চলছে।
                </p>
            </div>

            {/* Main Batches Section */}
            <div className="mb-12 md:mb-20">
                <div className="flex items-center gap-3 md:gap-4 mb-6 md:mb-8">
                    <h3 className="text-2xl md:text-3xl font-bold text-primary">মেইন ব্যাচ সমূহ</h3>
                    <div className="h-[2px] flex-1 bg-outline-variant/30 rounded-full"></div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
                    {mainBatches.map((batch) => (
                      <div key={batch.id} className="bg-surface-container-lowest p-6 md:p-8 rounded-[1.5rem] shadow-sm hover:shadow-xl transition-all group border border-outline-variant/20 flex flex-col">
                          <div className="w-12 h-12 md:w-14 md:h-14 bg-primary-fixed rounded-2xl flex items-center justify-center mb-5 md:mb-6 text-primary group-hover:scale-110 transition-transform">
                              <span className="material-symbols-outlined text-2xl md:text-3xl">{batch.icon}</span>
                          </div>
                          <h3 className="text-xl md:text-2xl font-bold text-primary mb-3 md:mb-4">{batch.title}</h3>
                          <p className="text-on-surface-variant mb-6 md:mb-8 text-sm md:text-base flex-grow">
                              {batch.description}
                          </p>
                          <div className="flex items-center justify-between border-t border-outline-variant/15 pt-5 md:pt-6">
                              <span className="text-secondary font-bold text-sm md:text-base">{batch.tag}</span>
                              <Link 
                                to={batch.path}
                                className="text-primary font-bold text-sm md:text-base flex items-center gap-2 group-hover:text-tertiary-fixed-variant transition-colors"
                              >
                                  {batch.btnText} <span className="material-symbols-outlined text-lg md:text-xl group-hover:translate-x-1 transition-transform">arrow_forward</span>
                              </Link>
                          </div>
                      </div>
                    ))}
                </div>
            </div>

            {/* আরও ব্যাচ সমূহ */}
            <div>
                <div className="flex items-center gap-3 md:gap-4 mb-6 md:mb-8">
                    <h3 className="text-2xl md:text-3xl font-bold text-primary">অন্যান্য ক্লাসের ভর্তি প্রস্তুতি</h3>
                    <div className="h-[2px] flex-1 bg-outline-variant/30 rounded-full"></div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
                    {[1, 2, 4, 5, 7, 8, 11].map((cls) => (
                      <div key={cls} className="bg-surface-container-lowest p-5 md:p-6 rounded-2xl shadow-sm hover:shadow-lg transition-all group flex flex-col justify-between h-full">
                          <div>
                              <h3 className="text-lg md:text-xl font-bold text-primary mb-2">Class {cls} Admission</h3>
                              <p className="text-on-surface-variant text-xs md:text-sm mb-5 md:mb-6">
                                {cls === 11 
                                  ? "একাদশ শ্রেণিতে বিজ্ঞান, ব্যবসায় শিক্ষা ও মানবিক বিভাগে ভর্তি প্রস্তুতির জন্য পূর্ণাঙ্গ গাইডলাইন এবং মেটারিয়ালস।"
                                  : `${getClassNameInBengali(cls)} শ্রেণিতে ভর্তি পরীক্ষার জন্য পূর্ণাঙ্গ গাইডলাইন এবং মেটারিয়ালস।`
                                }
                              </p>
                          </div>
                          <Link 
                            to={`/admission/class-${cls}`} 
                            className="text-primary text-sm font-bold flex items-center gap-1 group-hover:text-tertiary-fixed-variant transition-colors mt-auto w-fit"
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