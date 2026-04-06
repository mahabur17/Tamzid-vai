// src/components/Footer.jsx
import React, { useState } from 'react';

export default function Footer() {
  // পপ-আপ দেখানোর জন্য State
  const [showPopup, setShowPopup] = useState(false);

  // পপ-আপ ওপেন করার ফাংশন
  const handleSubscribeClick = (e) => {
    e.preventDefault(); // ফর্ম রিলোড হওয়া বন্ধ করতে
    setShowPopup(true);
  };

  return (
    <>
      {/* মোবাইলের জন্য প্যাডিং কমানো হয়েছে: pt-12 pb-8, ডেস্কটপে pt-20 pb-10 */}
      <footer className="bg-primary text-white pt-12 md:pt-20 pb-8 md:pb-10" id="contact">
        {/* মোবাইলের জন্য দুপাশের প্যাডিং কমানো হয়েছে: px-4 */}
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          {/* মোবাইলে গ্যাপ এবং মার্জিন কমানো হয়েছে: gap-8 mb-10 */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 mb-10 md:mb-16">
            
            {/* Brand & About */}
            <div className="space-y-4 md:space-y-6 text-center md:text-left flex flex-col items-center md:items-start">
              <h2 className="text-2xl md:text-3xl font-black text-tertiary-fixed tracking-tight">তামজিদ একাডেমি</h2>
              <p className="text-on-primary-container leading-relaxed text-sm md:text-base">
                শিক্ষায় অনন্য উৎকর্ষের নতুন দিগন্ত। আমাদের লক্ষ্য হলো আধুনিক শিক্ষার সাথে নৈতিকতার সমন্বয় ঘটিয়ে প্রতিটি ছাত্রছাত্রীকে একজন পূর্ণাঙ্গ মানুষ হিসেবে গড়ে তোলা।
              </p>
              {/* Social Icons */}
              <div className="flex gap-4">
                <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-tertiary-fixed hover:text-primary transition-all">
                  <span className="font-bold text-lg">f</span>
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-tertiary-fixed hover:text-primary transition-all">
                  <span className="font-bold text-lg">in</span>
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-tertiary-fixed hover:text-primary transition-all">
                  <span className="font-bold text-lg">yt</span>
                </a>
              </div>
            </div>

            {/* Quick Links - মোবাইলে হাইড করা হয়েছে (hidden md:block) */}
            <div className="hidden md:block">
              <h3 className="text-lg md:text-xl font-bold mb-4 md:mb-6 text-white border-b border-white/20 pb-2 md:pb-3 inline-block">প্রয়োজনীয় লিংক</h3>
              <ul className="space-y-3 md:space-y-4 text-on-primary-container text-sm md:text-base">
                <li><a href="#" className="hover:text-tertiary-fixed transition-colors flex items-center gap-2"><span className="material-symbols-outlined text-sm">chevron_right</span> হোম</a></li>
                <li><a href="#courses" className="hover:text-tertiary-fixed transition-colors flex items-center gap-2"><span className="material-symbols-outlined text-sm">chevron_right</span> আমাদের কোর্সসমূহ</a></li>
                <li><a href="#reviews" className="hover:text-tertiary-fixed transition-colors flex items-center gap-2"><span className="material-symbols-outlined text-sm">chevron_right</span> সাফল্যের গল্প</a></li>
                <li><a href="#college-info" className="hover:text-tertiary-fixed transition-colors flex items-center gap-2"><span className="material-symbols-outlined text-sm">chevron_right</span> প্রতিষ্ঠান রিভিউ</a></li>
                <li><a href="#faq" className="hover:text-tertiary-fixed transition-colors flex items-center gap-2"><span className="material-symbols-outlined text-sm">chevron_right</span> সচরাচর জিজ্ঞাসা (FAQ)</a></li>
              </ul>
            </div>

            {/* Contact Info */}
            <div className="text-center md:text-left flex flex-col items-center md:items-start">
              <h3 className="text-lg md:text-xl font-bold mb-4 md:mb-6 text-white border-b border-white/20 pb-2 md:pb-3 inline-block">যোগাযোগ</h3>
              <ul className="space-y-3 md:space-y-4 text-on-primary-container text-sm md:text-base w-full max-w-[250px] md:max-w-none mx-auto md:mx-0">
                <li className="flex items-start gap-3 justify-center md:justify-start">
                  <span className="material-symbols-outlined text-tertiary-fixed">location_on</span>
                  <span className="text-left">মিরপুর ১০, ঢাকা, বাংলাদেশ</span>
                </li>
                <li className="flex items-center gap-3 justify-center md:justify-start">
                  <span className="material-symbols-outlined text-tertiary-fixed">call</span>
                  <span>+880 1711-XXXXXX</span>
                </li>
                <li className="flex items-center gap-3 justify-center md:justify-start">
                  <span className="material-symbols-outlined text-tertiary-fixed">mail</span>
                  <span>info@tamjidacademy.com</span>
                </li>
              </ul>
            </div>

            {/* Newsletter */}
            <div className="text-center md:text-left flex flex-col items-center md:items-start">
              <h3 className="text-lg md:text-xl font-bold mb-4 md:mb-6 text-white border-b border-white/20 pb-2 md:pb-3 inline-block">আপডেট পেতে যুক্ত থাকুন</h3>
              <p className="text-on-primary-container mb-4 text-sm md:text-base">আমাদের নতুন ব্যাচ এবং অফার সম্পর্কে জানতে ইমেইল দিন।</p>
              <form className="flex flex-col gap-3 w-full" onSubmit={handleSubscribeClick}>
                <input 
                  type="email" 
                  placeholder="আপনার ইমেইল অ্যাড্রেস" 
                  onClick={handleSubscribeClick}
                  readOnly
                  className="bg-white/10 border border-white/20 text-white placeholder-white/50 rounded-lg px-4 py-2.5 md:py-3 focus:outline-none focus:border-tertiary-fixed transition-colors cursor-pointer text-sm md:text-base text-center md:text-left" 
                />
                <button 
                  type="submit" 
                  onClick={handleSubscribeClick}
                  className="bg-tertiary-fixed text-primary font-bold py-2.5 md:py-3 rounded-lg hover:bg-white transition-colors text-sm md:text-base"
                >
                  সাবস্ক্রাইব করুন
                </button>
              </form>
            </div>
            
          </div>

          {/* Copyright */}
          <div className="border-t border-white/20 pt-6 md:pt-8 flex flex-col md:flex-row items-center justify-between text-on-primary-container text-xs md:text-sm text-center gap-4 md:gap-0">
            <p>&copy; 2026 তামজিদ একাডেমি। সর্বস্বত্ব সংরক্ষিত।</p>
            <div className="flex gap-4 md:gap-6">
              <a href="#" className="hover:text-white transition-colors">শর্তাবলী</a>
              <a href="#" className="hover:text-white transition-colors">গোপনীয়তা নীতি</a>
            </div>
          </div>
        </div>
      </footer>

      {/* Static Version Notice Popup */}
      {showPopup && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl shadow-2xl max-w-md w-full p-6 md:p-8 text-center border border-gray-100 transform transition-all">
            <div className="w-14 h-14 md:w-16 md:h-16 bg-primary/10 text-primary rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="material-symbols-outlined text-2xl md:text-3xl">info</span>
            </div>
            <h3 className="text-lg md:text-xl font-bold text-gray-800 mb-2 md:mb-3">ফিচারটি এখনো যুক্ত হয়নি</h3>
            <p className="text-gray-600 mb-6 md:mb-8 leading-relaxed text-base md:text-lg">
              ওয়েবসাইটের এই ভার্সনটি স্ট্যাটিক রাখা হয়েছে, তাই এই ফিচারটি এখনো যুক্ত করা হয়নি। পরবর্তী ভার্সনগুলোতে এটি যুক্ত করা হবে।
            </p>
            <button 
              onClick={() => setShowPopup(false)} 
              className="w-full bg-primary text-white py-3 md:py-3.5 rounded-xl font-bold text-base md:text-lg hover:shadow-lg transition-all"
            >
              বুঝতে পেরেছি
            </button>
          </div>
        </div>
      )}
    </>
  );
}