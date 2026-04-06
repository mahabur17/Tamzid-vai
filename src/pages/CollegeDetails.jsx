// src/pages/CollegeDetails.jsx
import React from "react";
import { useParams, Link } from "react-router-dom";
import { collegeData } from "../data/collegeData";

export default function CollegeDetails() {
  const { collegeId } = useParams();
  const college = collegeData[collegeId];

  if (!college || !college.about) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-surface pt-20 px-5 text-center">
        <span className="material-symbols-outlined text-6xl md:text-8xl text-outline mb-4 md:mb-6">
          domain_disabled
        </span>
        <h1 className="text-3xl md:text-4xl font-bold text-primary mb-4">
          দুঃখিত, তথ্যটি পাওয়া যায়নি!
        </h1>
        <p className="text-on-surface-variant mb-6 md:mb-8 text-base md:text-lg">
          এই কলেজটির বিস্তারিত তথ্য এখনো যোগ করা হয়নি।
        </p>
        <Link
          to="/"
          className="bg-primary text-white px-6 py-3 md:px-8 rounded-xl font-bold hover:shadow-lg transition-all"
        >
          হোম পেজে ফিরে যান
        </Link>
      </div>
    );
  }

  return (
    <div className="bg-surface font-body text-on-surface pt-20">
      {/* Header Section */}
      {/* মোবাইলের জন্য pt-16 pb-10 */}
      <header className="pt-16 pb-10 md:pt-24 md:pb-16 bg-primary relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img
            className="w-full h-full object-cover"
            src={college.bannerImg}
            alt={college.name}
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/90 to-transparent"></div>
        {/* মোবাইলের জন্য px-5, mt-8, gap-4 */}
        <div className="max-w-7xl mx-auto px-5 md:px-8 relative z-10 flex flex-col md:flex-row items-center gap-4 md:gap-8 mt-8 md:mt-12">
          {/* মোবাইলের জন্য আইকন বক্স ছোট করা হয়েছে */}
          <div className="w-24 h-24 md:w-32 md:h-32 bg-white rounded-full p-2 shadow-2xl flex-shrink-0">
            <div className="w-full h-full rounded-full border-2 border-outline-variant/20 flex items-center justify-center bg-surface-bright">
              <span className="material-symbols-outlined text-4xl md:text-5xl text-primary">
                {college.icon}
              </span>
            </div>
          </div>
          <div className="text-white text-center md:text-left">
            <span className="px-3 py-1 bg-white/20 rounded-full text-xs font-bold tracking-wide border border-white/30 mb-3 md:mb-4 inline-block">
              {college.type}
            </span>
            <h1 className="text-3xl md:text-5xl font-extrabold mb-3 md:mb-4">
              {college.name}
            </h1>
            <p className="text-on-primary-container text-base md:text-lg flex items-center justify-center md:justify-start gap-1 md:gap-2">
              <span className="material-symbols-outlined text-sm md:text-base">
                location_on
              </span>{" "}
              {college.location}
            </p>
          </div>
        </div>
      </header>

      {/* Info & Admission Section */}
      <section className="py-10 md:py-16 bg-surface">
        <div className="max-w-7xl mx-auto px-5 md:px-8">
          <div className="flex flex-col lg:flex-row gap-8 md:gap-12">
            <div className="flex-1 space-y-8">
              {/* About */}
              <div>
                <h2 className="text-2xl md:text-3xl font-black text-primary mb-4 flex items-center gap-2">
                  <span className="material-symbols-outlined text-tertiary-fixed-variant text-3xl md:text-4xl">
                    info
                  </span>
                  প্রতিষ্ঠান সম্পর্কে
                </h2>
                <div className="h-1 w-12 md:w-16 bg-primary rounded-full mb-4 md:mb-6"></div>
                {college.about.map((para, idx) => (
                  <p
                    key={idx}
                    className="text-on-surface-variant text-base md:text-lg leading-relaxed mb-4"
                  >
                    {para}
                  </p>
                ))}

                {/* Quote */}
                <div className="bg-primary-fixed/40 p-5 md:p-8 rounded-3xl border-l-4 border-primary relative shadow-sm mt-8">
                  <span className="material-symbols-outlined text-primary/10 text-6xl md:text-8xl absolute top-2 right-4 md:top-4 md:right-4 z-0">
                    format_quote
                  </span>
                  <div className="relative z-10">
                    <h3 className="text-lg md:text-xl font-bold text-primary mb-3 md:mb-4">
                      তামজিদ ভাইয়ের মতামত
                    </h3>
                    <p className="text-on-surface-variant italic leading-relaxed mb-4 md:mb-6 text-sm md:text-lg">
                      "{college.quote.text}"
                    </p>
                    <div className="flex items-center gap-3 md:gap-4">
                      <div className="w-10 h-10 md:w-12 md:h-12 rounded-full border-2 border-primary overflow-hidden flex-shrink-0">
                        <img
                          src={college.quote.image}
                          alt={college.quote.author}
                          className="w-full h-full object-cover grayscale"
                        />
                      </div>
                      <div>
                        <h4 className="font-bold text-primary text-sm md:text-base">
                          {college.quote.author}
                        </h4>
                        <p className="text-xs md:text-sm text-secondary font-medium">
                          {college.quote.designation}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Admission Process */}
              <div className="bg-surface-container-lowest p-5 md:p-8 rounded-[1.5rem] border border-outline-variant/20 shadow-sm mt-8 md:mt-12">
                <h2 className="text-xl md:text-2xl font-black text-primary mb-4 flex items-center gap-2">
                  <span className="material-symbols-outlined text-tertiary-fixed-variant text-2xl md:text-3xl">
                    how_to_reg
                  </span>
                  ভর্তি প্রক্রিয়া ও যোগ্যতা
                </h2>
                <div className="space-y-4 md:space-y-6 mt-4 md:mt-6">
                  {college.admissionInfo.map((info, idx) => (
                    <div
                      key={idx}
                      className={`flex gap-3 md:gap-4 items-start ${idx !== college.admissionInfo.length - 1 ? "pb-4 md:pb-6 border-b border-outline-variant/15" : ""}`}
                    >
                      <div className="min-w-[2.5rem] md:min-w-[3rem] h-10 md:h-12 px-3 md:px-4 bg-primary-fixed rounded-xl flex items-center justify-center flex-shrink-0 text-primary">
                        <span className="font-bold text-base md:text-lg whitespace-nowrap">
                          {info.classLevel}
                        </span>
                      </div>
                      <div>
                        <h4 className="text-lg md:text-xl font-bold text-primary mb-1 md:mb-2">
                          {info.title}
                        </h4>
                        <p className="text-sm md:text-base text-on-surface-variant leading-relaxed">
                          {info.desc}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar (Quick Facts) */}
            <div className="w-full lg:w-80 flex-shrink-0">
              <div className="bg-primary text-white rounded-[1.5rem] p-6 md:p-8 shadow-xl sticky top-28">
                <h3 className="text-lg md:text-xl font-bold mb-4 md:mb-6 border-b border-white/20 pb-3 md:pb-4">
                  এক নজরে তথ্য
                </h3>
                <ul className="space-y-3 md:space-y-4">
                  {college.quickFacts.map((fact, idx) => (
                    <li key={idx} className="flex items-center justify-between text-sm md:text-base">
                      <span className="text-on-primary-container">
                        {fact.label}
                      </span>
                      <span className="font-bold text-right ml-2">
                        {fact.value}
                      </span>
                    </li>
                  ))}
                </ul>
                <Link
                  to="/#courses"
                  className="mt-6 md:mt-8 block text-center bg-tertiary-fixed text-primary font-bold py-3 rounded-xl hover:bg-white transition-all text-sm md:text-base"
                >
                  প্রস্তুতি শুরু করো
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-10 md:py-16 bg-surface-container-low">
        <div className="max-w-7xl mx-auto px-5 md:px-8">
          <h2 className="text-2xl md:text-3xl font-black text-primary mb-6 md:mb-10 flex items-center gap-2">
            <span className="material-symbols-outlined text-tertiary-fixed-variant text-3xl md:text-4xl">
              photo_library
            </span>
            ক্যাম্পাস গ্যালারি
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {college.gallery.map((imgUrl, idx) => (
              <div
                key={idx}
                className="aspect-[4/3] rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow group"
              >
                <img
                  src={imgUrl}
                  alt="Campus"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-10 md:py-16 bg-surface">
        <div className="max-w-7xl mx-auto px-5 md:px-8">
          <h2 className="text-2xl md:text-3xl font-black text-primary mb-6 md:mb-10 flex items-center gap-2">
            <span className="material-symbols-outlined text-tertiary-fixed-variant text-3xl md:text-4xl">
              map
            </span>
            অবস্থান (লোকেশন)
          </h2>
          {/* মোবাইলের জন্য ম্যাপের উচ্চতা h-64 করা হয়েছে */}
          <div className="w-full h-64 md:h-96 rounded-3xl overflow-hidden shadow-md border border-outline-variant/20">
            <iframe
              src={college.mapUrl}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Location Map"
            ></iframe>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-10 md:py-16 bg-surface-container-low">
        <div className="max-w-4xl mx-auto px-5 md:px-8">
          <h2 className="text-2xl md:text-3xl font-black text-primary mb-6 md:mb-10 text-center flex items-center justify-center gap-2">
            <span className="material-symbols-outlined text-tertiary-fixed-variant text-3xl md:text-4xl">
              help
            </span>
            সাধারণ জিজ্ঞাসা (FAQ)
          </h2>
          <div className="space-y-3 md:space-y-4">
            {college.faqs.map((faq, idx) => (
              <details
                key={idx}
                className="group bg-surface-container-lowest rounded-2xl border border-outline-variant/20 shadow-sm open:shadow-md transition-all duration-300"
              >
                <summary className="flex justify-between items-center font-bold cursor-pointer list-none p-4 md:p-6 text-primary text-base md:text-lg gap-4">
                  <span>{faq.q}</span>
                  <span className="transition-transform duration-300 group-open:rotate-180 text-secondary flex-shrink-0">
                    <span className="material-symbols-outlined">
                      expand_more
                    </span>
                  </span>
                </summary>
                <div className="p-4 md:p-6 pt-0 md:pt-0 text-on-surface-variant leading-relaxed text-sm md:text-base">
                  {faq.a}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}