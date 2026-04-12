// src/components/FoundersMessage.jsx
import React from 'react';

export default function FoundersMessage() {
  const founderImageUrl = "/images/tamzidvai.jpg"; // প্রতিষ্ঠাতার ছবি URL

  return (
    // মোবাইলের জন্য py-12 করা হয়েছে স্পেসিং কমানোর জন্য
    <section className="py-12 md:py-24 bg-surface">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
            {/* মোবাইলের জন্য প্যাডিং p-6 এবং গ্যাপ gap-8 করা হয়েছে, টেক্সট সেন্টার করা হয়েছে */}
            <div className="bg-surface-container-lowest rounded-[1.5rem] md:rounded-[2rem] p-6 md:p-16 flex flex-col md:flex-row gap-8 md:gap-16 items-center shadow-[0_40px_80px_rgba(1,45,29,0.06)] text-center md:text-left">
                
                {/* ইমেজ কন্টেইনার: 'grayscale' এবং 'hover:grayscale-0' ক্লাসগুলো সরিয়ে দেওয়া হয়েছে।
                   এখন ছবিটি সবসময় রঙিন দেখাবে।
                */}
                <div className="w-48 h-48 md:w-96 md:h-96 rounded-[1.5rem] md:rounded-[2rem] overflow-hidden flex-shrink-0">
                    <img className="w-full h-full object-cover" alt="Professional portrait" src={founderImageUrl}/>
                </div>
                
                {/* মোবাইলে স্পেসিং কমানো হয়েছে: space-y-4 */}
                <div className="space-y-4 md:space-y-6 flex flex-col items-center md:items-start">
                   
                    
                    <div className="pt-2 md:pt-0">
                        {/* মোবাইলে নামের ফন্ট text-lg করা হয়েছে */}
                        <h4 className="text-lg md:text-2xl font-bold text-primary">তামজীদ ইসলাম</h4>
                        <p className="text-secondary text-xs md:text-base font-medium">প্রাক্তন শিক্ষার্থী,ঢাকা রেসিডেনসিয়াল মডেল কলেজ</p>
                         <p className="text-secondary text-xs md:text-base font-medium">ঢাকা বিশ্ববিদ্যালয়,ইংরেজি বিভাগ </p>
                         <p className="text-secondary text-xs md:text-base font-medium">যোগাযোগঃ ০১৯৫৭৭৪৭০৪১</p>
                         {/* fb er logo jekhane clik kore onar fb te jabe */}
                    </div>
                </div>

            </div>
        </div>
    </section>
  );
}