// src/components/FAQ.jsx
import React from 'react';

const faqs = [
  { q: "স্যার আপনার লোকেশন কোথায় এবং যোগাযোগের উপায় কি?", a: "লোকেশন চিলড্রেনস গার্ডেন (৫ম তলা),মোহাম্মদপুর। আমার সাথে দেখা করতে চাইলে 01957-747041 নম্বরে যোগাযোগ করে কনফার্ম হয়ে তারপর বিকেল ৪.৩০ থেকে ৬ টার মাঝে উক্ত ঠিকানায় আসবেন।" },
  { q: "স্যার আপনি অফলাইনের পাশাপাশি কি অনলাইনেও ক্লাস নেন?", a: "" },
  { q: "ইংলিশ ভার্সন ভালো নাকি বাংলা?", a: "" },
  { q: "শুধু শিটগুলো নিলেই কি প্রস্তুতি শতভাগ হয়ে যাবে?", a: "" },
  { q: "রেসিডেনসিয়াল এর আবাসিক কেমন?", a: "" },
  { q: "রেসিডেনসিয়াল ভালো নাকি সেন্ট জোসেফ?", a: "" },
  { q: "রেসিডেনসিয়াল এবং সেন্ট জোসেফ এর মাসিক খরচ কেমন?", a: "" },
  { q: "ভর্তি প্রস্তুতির জন্য কি কোচিং করতেই হবে?", a: "" },
  { q: "ঢাকার বাইরে থাকলে আমার সন্তানের ভর্তি প্রস্তুতি কিভাবে নেওয়াব?", a: "" },
  { q: "স্যার, আপনার সম্পর্কে জানতে চাই", a: "" },
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
                    অভিভাবকরা সাধারণত যেসকল প্রশ্নসমূহ করে থাকেন, তাদের উত্তর দেয়া হলো।
                </p>
            </div>

            {/* FAQ Items (Accordion) */}
            {/* মোবাইলের জন্য gap/space একটু কমানো হয়েছে */}
            <div className="space-y-3 md:space-y-4">
                {faqs.map((faq, index) => (
                    <details key={index} className="group bg-surface-container-lowest rounded-2xl border border-outline-variant/20 shadow-sm open:shadow-md transition-all duration-300">
                        {/* মোবাইলের জন্য p-4, text-base এবং gap-4 যুক্ত করা হয়েছে */}
                        <summary className="flex justify-between items-center font-bold cursor-pointer list-none p-4 md:p-6 text-primary text-base md:text-lg gap-4">
                            <span>{faq.q}</span>
                            <span className="transition-transform duration-300 group-open:rotate-180 text-secondary flex-shrink-0">
                                <span className="material-symbols-outlined">expand_more</span>
                            </span>
                        </summary>
                        {/* উত্তরের টেক্সট মোবাইলের জন্য text-sm করা হয়েছে */}
                        <div className="p-4 md:p-6 pt-0 md:pt-0 text-on-surface-variant leading-relaxed text-sm md:text-base whitespace-pre-wrap">
                            {faq.a}
                        </div>
                    </details>
                ))}
            </div>
        </div>
    </section>
  );
}