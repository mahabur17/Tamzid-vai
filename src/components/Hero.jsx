// src/components/Hero.jsx
import React, { useState, useEffect } from "react";

export default function Hero() {
  // নিশ্চিতভাবে এখানে ৪টি ছবির লিংক দেওয়া আছে
  const heroImages = [
    "https://scontent.fdac151-1.fna.fbcdn.net/v/t39.30808-6/557711084_2083962479023741_7258371192955033680_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=109&ccb=1-7&_nc_sid=7b2446&_nc_eui2=AeFdpyZI5j73MvP7YK2hQyCevdbwvgAIiNG91vC-AAiI0TOqxIDvHLg1q98Ufyg9XrxfGdVYT5Wjsz2k7RdQ6T0k&_nc_ohc=mhHR5AJA7ccQ7kNvwHarvou&_nc_oc=AdrUxbuk39XMFVxEOhHZEUVTmvANJWi_G8R9nKXmVWXSbREZI0k6S3-wS3ZydyF-tXM&_nc_zt=23&_nc_ht=scontent.fdac151-1.fna&_nc_gid=pqw-d1hB7qyrRes4lZd5Pw&_nc_ss=7a3a8&oh=00_Af3WD0fygxBcCuyFIXYh-mIj6vUUII6G-PHF0yDNtgy0BQ&oe=69D4077B",
    "https://scontent.fdac151-1.fna.fbcdn.net/v/t39.30808-6/600221710_2143235533096435_2042593270027149638_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=105&ccb=1-7&_nc_sid=7b2446&_nc_eui2=AeEoMHFC4d4oFERcdqT_xrlLXik80cqAw6deKTzRyoDDp6ycSMKwSDNTPcu9tVeWDJzHXRkWb4dM5zHWAEpProUA&_nc_ohc=7XDZG_XFaZMQ7kNvwFUWa8b&_nc_oc=AdqsSbAcd6Fasa9atOejfnv2AjLvniPSYxGQ2prLE2KXDvloyHY8Zrm6KSRbKwkeGXI&_nc_zt=23&_nc_ht=scontent.fdac151-1.fna&_nc_gid=dZg7uShkRQz7H3S5iIRtfw&_nc_ss=7a3a8&oh=00_Af2p5ryogwLNlLw7Flt_X0A4vrus60De63r1fz3gulR3Aw&oe=69D99C61",
    "https://scontent.fdac151-1.fna.fbcdn.net/v/t39.30808-6/557599648_2083962779023711_3513442784134947241_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=111&ccb=1-7&_nc_sid=7b2446&_nc_eui2=AeGIeXUrBaANqIEN25dsKR2CxOw8dkKUzuXE7Dx2QpTO5f4W0DtV6VsVbGUkYZAtVxAJhcyq2JkzgmMj5kRt2yYW&_nc_ohc=O_5NSQNo0gEQ7kNvwFq6Uat&_nc_oc=AdoJ09nJgYHxaelPJNHJDAjuGVGOlxQJAPrGJVnT1mcVZKE2epXIuBUBaj_3fnySSow&_nc_zt=23&_nc_ht=scontent.fdac151-1.fna&_nc_gid=WAnI51lKR2oK-SI-1fihNQ&_nc_ss=7a3a8&oh=00_Af2RAS4uMl4fzhsu8hLXvW0UUj0Ay-LlZYgtkUIDeYs1oA&oe=69D9A02E",
    "https://scontent.fdac151-1.fna.fbcdn.net/v/t39.30808-6/558771059_2083961875690468_8049303050299819094_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=101&ccb=1-7&_nc_sid=7b2446&_nc_eui2=AeFQ9bbyYOjzun4h4ATrFSXORi4elP2SeYlGLh6U_ZJ5iUusxQq4CWaIWhAmwyNKkcAMRGnkeTj-GGplrFtJrUSJ&_nc_ohc=-2yUJtpDFWQQ7kNvwHIZhdV&_nc_oc=Ado89C75zspotsLR-IZ2VFTxr7NYpF7SEQecgT5PQnkRW_6Mk2duI5IjKALPtA87HQs&_nc_zt=23&_nc_ht=scontent.fdac151-1.fna&_nc_gid=0I0fXyBMrQUCbLsjQy-HDA&_nc_ss=7a3a8&oh=00_Af0KHt5cplqkzwqgm54yF7yLRah9d03jDlhc8ogMLfEV8Q&oe=69D9B0EC"
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  // ২ সেকেন্ড পরপর স্লাইড করার লজিক
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % heroImages.length);
    }, 2000); 

    return () => clearInterval(interval);
  }, []);

  return (
    // মোবাইলে pb-16 থেকে pb-8 করে নিচের অতিরিক্ত গ্যাপ কমানো হয়েছে
    <header className="relative pt-28 pb-8 md:pt-48 md:pb-32 overflow-hidden bg-primary">
      
      {/* ডেস্কটপ ব্যাকগ্রাউন্ড (স্থির) */}
      <div className="hidden md:block absolute inset-0 opacity-20">
        <img
          className="w-full h-full object-cover object-center"
          style={{ objectPosition: "85% center" }} 
          alt="Desktop Background"
          src={heroImages[0]}
        />
      </div>

      {/* মোবাইল ব্যাকগ্রাউন্ড (স্লাইডার) */}
      <div className="md:hidden absolute inset-0 opacity-25 overflow-hidden">
        <div 
          className="flex w-full h-full transition-transform duration-1000 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {heroImages.map((img, index) => (
            <img
              key={index}
              className="w-full h-full flex-shrink-0 object-cover"
              style={{ objectPosition: "85% center" }} 
              alt={`Mobile Slide ${index + 1}`}
              src={img}
            />
          ))}
        </div>
      </div>

      {/* গ্র্যাডিয়েন্ট ওভারলে */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/80 md:via-primary/50 to-transparent"></div>
      
      <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10 grid md:grid-cols-2 gap-12 items-center">
        
        {/* টেক্সট কন্টেন্ট */}
        <div className="text-white space-y-6 md:space-y-8">
          <h1 className="text-4xl md:text-7xl font-extrabold leading-tight tracking-normal">
            শিক্ষায় অনন্য <span className="text-tertiary-fixed">উৎকর্ষের</span>{" "}
            নতুন দিগন্ত
          </h1>
          <p className="text-base md:text-xl text-on-primary-container leading-relaxed max-w-xl">
            আমরা বিশ্বাস করি প্রতিটি শিক্ষার্থীর মাঝে লুকায়িত আছে এক অসীম
            সম্ভাবনা। সেই সম্ভাবনাকে জাগ্রত করতেই আমাদের এই পথচলা।
          </p>
          
          <div>
            <div className="flex flex-wrap gap-4 pt-2 md:pt-4">
              <a
                href="#courses"
                className="inline-block bg-surface-container-lowest text-primary px-6 py-3 md:px-8 md:py-4 rounded-xl font-bold text-base md:text-lg hover:shadow-xl transition-all"
              >
                আজই ভর্তি হন
              </a>
              <a
                href="#materials"
                className="inline-block border-2 border-white/30 text-white px-6 py-3 md:px-8 md:py-4 rounded-xl font-bold text-base md:text-lg hover:bg-white/10 transition-all"
              >
                আরও জানুন
              </a>
            </div>

            {/* মোবাইলের পেজিনেশন ডটস (mt-10 দিয়ে বাটনের নিচে সুন্দর গ্যাপ তৈরি করা হয়েছে) */}
            <div className="flex md:hidden items-center justify-center gap-2 mt-10">
              {heroImages.map((_, index) => (
                <div
                  key={index}
                  className={`transition-all duration-500 ease-in-out rounded-full ${
                    currentIndex === index 
                      ? "w-7 h-2 bg-[#023326]" // অ্যাক্টিভ ডট
                      : "w-2 h-2 bg-white/40"  // ইন-অ্যাক্টিভ ডট
                  }`}
                ></div>
              ))}
            </div>
          </div>

        </div>
        
        {/* ডানদিকের ডেস্কটপ কার্ড */}
        <div className="hidden md:block">
          <div className="bg-white/10 backdrop-blur-xl p-8 rounded-3xl border border-white/20 shadow-2xl">
            <div className="aspect-video bg-black/20 rounded-2xl flex items-center justify-center overflow-hidden relative">
              {heroImages.map((img, index) => (
                <img
                  key={index}
                  className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
                    currentIndex === index ? "opacity-90" : "opacity-0"
                  }`}
                  alt={`Card Slide ${index + 1}`}
                  src={img}
                />
              ))}
            </div>
            <div className="mt-6 flex items-center justify-between">
              <div className="flex -space-x-3">
                <div className="w-12 h-12 rounded-full border-2 border-white bg-secondary flex items-center justify-center text-white font-bold">
                  A+
                </div>
                <div className="w-12 h-12 rounded-full border-2 border-white bg-primary flex items-center justify-center text-white font-bold">
                  B
                </div>
                <div className="w-12 h-12 rounded-full border-2 border-white bg-tertiary flex items-center justify-center text-white font-bold">
                  C
                </div>
              </div>
              <div className="text-white/80 text-sm font-medium">
                আমাদের ৫০০+ শিক্ষার্থী গোল্ডেন A+ প্রাপ্ত
              </div>
            </div>
          </div>
        </div>

      </div>
    </header>
  );
}