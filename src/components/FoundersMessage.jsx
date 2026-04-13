// src/components/FoundersMessage.jsx
import React from 'react';

export default function FoundersMessage() {
  const founderImageUrl = "/images/tamzidvai.jpg"; 
  const phoneNumber = "8801957747041"; // হোয়াটসঅ্যাপ নম্বর

  return (
    <section className="py-12 md:py-24 bg-surface">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
            <div className="bg-surface-container-lowest rounded-[1.5rem] md:rounded-[2rem] p-6 md:p-16 flex flex-col md:flex-row gap-8 md:gap-16 items-center shadow-[0_40px_80px_rgba(1,45,29,0.06)] text-center md:text-left">
                
                {/* ইমেজ কন্টেইনার */}
                <div className="w-48 h-48 md:w-96 md:h-96 rounded-[1.5rem] md:rounded-[2rem] overflow-hidden flex-shrink-0">
                    <img className="w-full h-full object-cover" alt="Tamzid Islam" src={founderImageUrl}/>
                </div>
                
                {/* কন্টেন্ট সেকশন - গ্যাপ কমানো হয়েছে */}
                <div className="space-y-3 md:space-y-4 flex flex-col items-center md:items-start">
                    
                    <div className="pt-2 md:pt-0">
                        {/* নাম - বড় সাইজ এবং নির্দিষ্ট গ্যাপ */}
                        <h4 className="text-2xl md:text-4xl font-bold text-primary mb-1 md:mb-2">তামজীদ ইসলাম</h4>
                        
                        {/* ডিটেইলস - প্রফেশনাল ফন্ট সাইজ */}
                        <div className="space-y-1 md:space-y-2">
                            <p className="text-secondary text-sm md:text-xl font-medium leading-relaxed">প্রাক্তন শিক্ষার্থী, ঢাকা রেসিডেনসিয়াল মডেল কলেজ</p>
                            <p className="text-secondary text-sm md:text-xl font-medium leading-relaxed">ইংরেজি বিভাগ, ঢাকা বিশ্ববিদ্যালয়</p>
                            <p className="text-secondary text-sm md:text-xl font-semibold mt-2">যোগাযোগঃ ০১৯৫৭৭৪৭০৪১</p>
                        </div>
                    </div>

                    {/* সোশ্যাল মিডিয়া আইকন সেকশন */}
                    <div className="flex gap-4 pt-4 md:pt-6">
                        
                        {/* ফেসবুক */}
                        <a href="https://www.facebook.com/tamzid.islam.5243" target="_blank" rel="noopener noreferrer" className="p-3 bg-primary/10 rounded-full text-primary hover:bg-primary hover:text-white transition-all duration-300" title="Facebook">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
                        </a>

                        {/* হোয়াটসঅ্যাপ - আপনার দেওয়া SVG এখানে ব্যবহার করা হয়েছে */}
                        <a href={`https://wa.me/${phoneNumber}`} target="_blank" rel="noopener noreferrer" className="p-3 bg-primary/10 rounded-full text-primary hover:bg-primary hover:text-white transition-all duration-300" title="WhatsApp">
                            <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 00-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                            </svg>
                        </a>

                        {/* ইউটিউব */}
                        <a href="#" target="_blank" rel="noopener noreferrer" className="p-3 bg-primary/10 rounded-full text-primary hover:bg-primary hover:text-white transition-all duration-300" title="YouTube">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.42a2.78 2.78 0 0 0-1.94 2C1 8.11 1 12 1 12s0 3.89.46 5.58a2.78 2.78 0 0 0 1.94 2c1.71.42 8.6.42 8.6.42s6.88 0 8.6-.42a2.78 2.78 0 0 0 1.94-2C23 15.89 23 12 23 12s0-3.89-.46-5.58z"></path><polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02"></polygon></svg>
                        </a>
                    </div>
                </div>

            </div>
        </div>
    </section>
  );
}