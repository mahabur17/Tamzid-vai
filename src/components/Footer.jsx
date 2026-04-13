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
      <footer className="bg-primary text-white pt-12 md:pt-20 pb-8 md:pb-10" id="contact">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 mb-10 md:mb-16">
            
            {/* Brand & About */}
            <div className="space-y-4 md:space-y-6 text-center md:text-left flex flex-col items-center md:items-start">
              {/* তামজীদ ও ইসলাম শব্দ দুটির মাঝে গ্যাপ বাড়ানো হয়েছে */}
              <h2 className="text-2xl md:text-3xl font-black text-tertiary-fixed tracking-tight">
                তামজীদ <span className="ml-2">ইসলাম</span>
              </h2>
              <p className="text-on-primary-container leading-relaxed text-sm md:text-base">
                শিক্ষায় অনন্য উৎকর্ষের নতুন দিগন্ত। আমাদের লক্ষ্য হলো আধুনিক শিক্ষার সাথে নৈতিকতার সমন্বয় ঘটিয়ে প্রতিটি ছাত্রছাত্রীকে একজন পূর্ণাঙ্গ মানুষ হিসেবে গড়ে তোলা।
              </p>
              
              {/* Social Icons */}
              <div className="flex gap-4">
                {/* Facebook Icon */}
                <a href="https://www.facebook.com/tamzid.islam.5243" target='_blank' className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-tertiary-fixed hover:text-primary transition-all">
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                    <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                  </svg>
                </a>
                
                {/* WhatsApp Icon (Direct Chat Link Added) */}
                <a href="https://wa.me/8801957747041" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-tertiary-fixed hover:text-primary transition-all">
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 00-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                </a>
                
                {/* YouTube Icon */}
                <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-tertiary-fixed hover:text-primary transition-all">
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                    <path fillRule="evenodd" d="M21.582 6.115a2.684 2.684 0 00-1.888-1.899C17.986 3.75 12 3.75 12 3.75s-5.986 0-7.694.466a2.684 2.684 0 00-1.888 1.899C1.95 7.822 1.95 12 1.95 12s0 4.178.468 5.885a2.684 2.684 0 001.888 1.899c1.708.466 7.694.466 7.694.466s5.986 0 7.694-.466a2.684 2.684 0 001.888-1.899C22.05 16.178 22.05 12 22.05 12s0-4.178-.468-5.885zM9.95 15.25V8.75L15.65 12l-5.7 3.25z" clipRule="evenodd" />
                  </svg>
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
                <li><a href="#faq" className="hover:text-tertiary-fixed transition-colors flex items-center gap-2"><span className="material-symbols-outlined text-sm">chevron_right</span> অভিভাবকদের জিজ্ঞাসা (FAQ)</a></li>
              </ul>
            </div>

            {/* Contact Info */}
            <div className="text-center md:text-left flex flex-col items-center md:items-start">
              <h3 className="text-lg md:text-xl font-bold mb-4 md:mb-6 text-white border-b border-white/20 pb-2 md:pb-3 inline-block">যোগাযোগ</h3>
              <ul className="space-y-3 md:space-y-4 text-on-primary-container text-sm md:text-base w-full max-w-[250px] md:max-w-none mx-auto md:mx-0">
                <li className="flex items-start gap-3 justify-center md:justify-start">
                  <span className="material-symbols-outlined text-tertiary-fixed">location_on</span>
                  <span className="text-left">চিলড্রেনস গার্ডেন (৫ম তলা) তাজমহল রোড,মোহাম্মদপুর,ঢাকা</span>
                </li>
                <li className="flex items-center gap-3 justify-center md:justify-start">
                  <span className="material-symbols-outlined text-tertiary-fixed">call</span>
                  <span>+8801957-747041</span>
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
            <p>&copy; 2026 তামজীদ ইসলাম। সর্বস্বত্ব সংরক্ষিত।</p>
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