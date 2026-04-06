// src/components/FAQ.jsx
import React from 'react';

const faqs = [
  { q: "একটি ব্যাচে কতজন শিক্ষার্থী থাকে?", a: "শিক্ষার্থীদের প্রতি যেন শিক্ষকরা আলাদাভাবে নজর দিতে পারেন, সেজন্য আমরা ব্যাচগুলোতে শিক্ষার্থীর সংখ্যা সীমিত রাখি। সাধারণত একটি ব্যাচে ২০-২৫ জনের বেশি শিক্ষার্থী রাখা হয় না।" },
  { q: "দুর্বল শিক্ষার্থীদের জন্য কি বিশেষ কোনো ব্যবস্থা আছে?", a: "জি, অবশ্যই। কোনো শিক্ষার্থী কোনো বিষয়ে পিছিয়ে পড়লে বা ক্লাসে বুঝতে সমস্যা হলে তার জন্য আলাদা এক্সট্রা কেয়ার বা প্রব্লেম সলভিং ক্লাসের ব্যবস্থা করা হয়।" },
  { q: "সপ্তাহে কয়দিন ক্লাস এবং পরীক্ষা হয়?", a: "ব্যাচ ও ক্লাস ভেদে আমাদের রুটিন আলাদা হয়ে থাকে। তবে সাধারণত সপ্তাহে ৩-৪ দিন ক্লাস এবং শিক্ষার্থীদের প্রস্তুতি যাচাই করার জন্য প্রতি সপ্তাহে একটি করে উইকলি এক্সাম (সাপ্তাহিক পরীক্ষা) নেয়া হয়।" },
  { q: "অভিভাবকদের সাথে কি নিয়মিত যোগাযোগ রাখা হয়?", a: "জি, আমরা শিক্ষার্থীদের উপস্থিতির হার এবং পরীক্ষার রেজাল্ট নিয়মিত এসএমএস (SMS)-এর মাধ্যমে অভিভাবকদের জানিয়ে দিই। এছাড়া প্রতি মাসে অন্তত একবার প্যারেন্টস মিটিংয়ের আয়োজন করা হয়।" },
  { q: "ভর্তির নিয়মাবলী এবং বেতন কীভাবে জমা দিতে হয়?", a: "ভর্তি সংক্রান্ত যাবতীয় তথ্য আমাদের ওয়েবসাইটে দেয়া আছে। আপনি চাইলে আমাদের অফিসে সরাসরি এসে অথবা ওয়েবসাইটের মাধ্যমে অনলাইনে ফর্ম পূরণ করে ভর্তি হতে পারবেন। মাসিক বেতন অফিস ডেস্কে অথবা মোবাইল ব্যাংকিংয়ের মাধ্যমে পরিশোধ করা যায়।" },
];

export default function FAQ() {
  return (
    // মোবাইলের জন্য py-12, ডেস্কটপে py-24
    <section className="py-12 md:py-24 bg-surface-container-low" id="faq">
        {/* মোবাইলের জন্য px-5 */}
        <div className="max-w-4xl mx-auto px-5 md:px-8">
            
            {/* Section Header */}
            {/* মোবাইলের জন্য mb-10 এবং space-y-3 */}
            <div className="mb-10 md:mb-16 text-center space-y-3 md:space-y-4">
                <span className="px-3 py-1 md:px-4 md:py-1.5 bg-secondary-container text-on-secondary-container rounded-full text-xs md:text-sm font-bold tracking-wide">
                    জিজ্ঞাসিত প্রশ্নসমূহ
                </span>
                {/* মোবাইলের জন্য text-3xl */}
                <h2 className="text-3xl md:text-4xl font-black text-primary">অভিভাবকদের সাধারণ জিজ্ঞাসা (FAQ)</h2>
                {/* মোবাইলের জন্য text-base */}
                <p className="text-on-surface-variant text-base md:text-lg">
                    আমাদের কোচিং এবং শিক্ষাদান পদ্ধতি সম্পর্কে আপনাদের মনে থাকা কিছু সাধারণ প্রশ্নের উত্তর।
                </p>
            </div>

            {/* FAQ Items (Accordion) */}
            {/* মোবাইলের জন্য gap/space একটু কমানো হয়েছে */}
            <div className="space-y-3 md:space-y-4">
                {faqs.map((faq, index) => (
                    <details key={index} className="group bg-surface-container-lowest rounded-2xl border border-outline-variant/20 shadow-sm open:shadow-md transition-all duration-300">
                        {/* মোবাইলের জন্য p-4, text-base এবং gap-4 যুক্ত করা হয়েছে */}
                        <summary className="flex justify-between items-center font-bold cursor-pointer list-none p-4 md:p-6 text-primary text-base md:text-lg gap-4">
                            <span>{faq.q}</span>
                            <span className="transition-transform duration-300 group-open:rotate-180 text-secondary flex-shrink-0">
                                <span className="material-symbols-outlined">expand_more</span>
                            </span>
                        </summary>
                        {/* উত্তরের টেক্সট মোবাইলের জন্য text-sm করা হয়েছে */}
                        <div className="p-4 md:p-6 pt-0 md:pt-0 text-on-surface-variant leading-relaxed text-sm md:text-base">
                            {faq.a}
                        </div>
                    </details>
                ))}
            </div>
        </div>
    </section>
  );
}