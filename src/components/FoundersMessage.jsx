// src/components/FoundersMessage.jsx
import React from 'react';

export default function FoundersMessage() {
  const founderImageUrl = "https://scontent.fdac151-1.fna.fbcdn.net/v/t39.30808-6/542760564_2057942524959070_7492125585090781052_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=106&ccb=1-7&_nc_sid=7b2446&_nc_eui2=AeHdrraZgGiNAIZoC4orhjJPOe_ZploVgLE579mmWhWAsa5oHF-Y9_U2LQL1FL2h4eKh1GbvW2RPEBs0lHp_JNXd&_nc_ohc=HZrtxtaHoEcQ7kNvwGL5fN9&_nc_oc=Adp4e1dPTMDi6HhHseWy9CdQkPSzqPEcBsSpCn9rldRZWQM0YrmeTHh2PxHRo70etCM&_nc_zt=23&_nc_ht=scontent.fdac151-1.fna&_nc_gid=6owehOZ9zxwFjHzw8LELEA&_nc_ss=7a3a8&oh=00_Af2Mdqbpmz_cQxbbPOCY-u6yRyI8K9z7zuem64kMtR2yVg&oe=69D40CC4";

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
                    <h2 className="text-2xl md:text-4xl font-extrabold text-primary">প্রতিষ্ঠাতার কথা</h2>
                    
                    <div className="h-1 w-16 md:w-20 bg-primary rounded-full"></div>
                    
                    {/* মোবাইলে ফন্ট text-sm করা হয়েছে যাতে বড় না দেখায় */}
                    <p className="text-sm md:text-xl text-on-surface-variant leading-relaxed italic">
                        "শিক্ষা কেবল জ্ঞান অর্জন নয়, শিক্ষা হলো একটি জাতির মেরুদণ্ড গড়ার কারিগর। তামজিদ একাডেমি এমন একটি জায়গা যেখানে আমরা শুধু পাঠ্যবই পড়াই না, বরং শিক্ষার্থীদের জীবনের বড় স্বপ্ন দেখার সাহস যোগাই। আমাদের লক্ষ্য হলো আধুনিক শিক্ষার সাথে নৈতিকতার সমন্বয় ঘটিয়ে প্রতিটি ছাত্রছাত্রীকে একজন পূর্ণাঙ্গ মানুষ হিসেবে গড়ে তোলা।"
                    </p>
                    
                    <div className="pt-2 md:pt-0">
                        {/* মোবাইলে নামের ফন্ট text-lg করা হয়েছে */}
                        <h4 className="text-lg md:text-2xl font-bold text-primary">তামজিদ আহমেদ</h4>
                        <p className="text-secondary text-xs md:text-base font-medium">প্রতিষ্ঠাতা ও প্রধান মেন্টর, তামজিদ একাডেমি</p>
                    </div>
                </div>

            </div>
        </div>
    </section>
  );
}