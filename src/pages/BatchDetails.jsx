// src/pages/BatchDetails.jsx
import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { courseData } from '../data/courseData';
import PaymentModal from '../components/PaymentModal';

export default function BatchDetails() {
  const { batchId } = useParams(); 
  const data = courseData[batchId]; 

  const [modalState, setModalState] = useState({ isOpen: false, data: {} });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [batchId]);

  const openModal = (type, itemName = '') => {
    let modalData = {};
    if (type === 'admission') {
      modalData = { 
        title: 'ব্যাচে ভর্তি প্রক্রিয়া', 
        purposeText: `${itemName} ব্যাচে ভর্তির` 
      };
    } else if (type === 'pdf_all') {
      modalData = { 
        title: 'সমস্ত শিট সংগ্রহ', 
        purposeText: `এই ব্যাচের সম্পূর্ণ লেকচার শিট সংগ্রহের` 
      };
    } else if (type === 'question_all') {
      modalData = { 
        title: 'সমস্ত প্রশ্নব্যাংক সংগ্রহ', 
        purposeText: `বিগত সালের সকল প্রশ্নব্যাংক ও সমাধান সংগ্রহের` 
      };
    }
    setModalState({ isOpen: true, data: modalData });
  };

  const closeModal = () => {
    setModalState({ isOpen: false, data: {} });
  };

  if (!data) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center text-center px-5 md:px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-primary mb-4">দুঃখিত, ব্যাচটি পাওয়া যায়নি!</h2>
        <Link to="/" className="text-white bg-primary px-6 py-2 rounded-xl font-bold">হোমে ফিরে যান</Link>
      </div>
    );
  }

  return (
    <main className="no-scrollbar">
      {/* Hero Header */}
      <header className="pt-24 pb-12 md:pt-32 md:pb-16 bg-primary relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-tertiary-fixed via-primary to-primary"></div>
        <div className="max-w-7xl mx-auto px-5 md:px-8 relative z-10 text-center">
          <span className="px-3 py-1 md:px-4 md:py-1.5 bg-white/10 text-tertiary-fixed rounded-full text-xs md:text-sm font-bold tracking-wide border border-white/20 mb-4 md:mb-6 inline-block">অ্যাডমিশন প্রোগ্রাম</span>
          <h1 className="text-3xl md:text-5xl font-extrabold text-white mb-4 md:mb-6">{data.title}</h1>
          <p className="text-on-primary-container max-w-2xl mx-auto text-base md:text-lg">{data.description}</p>
        </div>
      </header>

      {/* Target Schools */}
      <section className="py-12 md:py-20 bg-surface">
        <div className="max-w-7xl mx-auto px-5 md:px-8">
          <div className="bg-surface-container-lowest rounded-[2rem] p-6 md:p-12 shadow-sm border border-outline-variant/20 flex flex-col md:flex-row gap-8 md:gap-12 items-center">
            <div className="flex-1 space-y-4 md:space-y-6">
              <h2 className="text-2xl md:text-3xl font-bold text-primary">আমাদের টার্গেট স্কুলসমূহ এবং প্রস্তুতির ধরন</h2>
              <div className="h-1 w-12 md:w-16 bg-primary rounded-full"></div>
              <p className="text-on-surface-variant leading-relaxed text-base md:text-lg">{data.schoolDesc1}</p>
              <p className="text-on-surface-variant leading-relaxed text-base md:text-lg">{data.schoolDesc2}</p>
              
              <button 
                onClick={() => openModal('admission', data.title)} 
                className="bg-primary text-white px-6 py-3 md:px-8 md:py-3.5 rounded-xl font-bold text-base md:text-lg hover:shadow-lg transition-all mt-4 flex items-center gap-2"
              >
                এই ব্যাচে ভর্তি হোন <span className="material-symbols-outlined text-lg md:text-xl">arrow_forward</span>
              </button>
            </div>
            <div className="w-full md:w-[350px] bg-primary-fixed p-6 md:p-8 rounded-3xl flex-shrink-0">
              <h3 className="text-lg md:text-xl font-bold text-primary mb-4 md:mb-6">ব্যাচের হাইলাইটস</h3>
              <ul className="space-y-3 md:space-y-4">
                {data.highlights.map((highlight, index) => (
                  <li key={index} className="flex items-center gap-2 md:gap-3 text-on-primary-fixed-variant font-medium text-sm md:text-base">
                    <span className="material-symbols-outlined text-primary text-xl md:text-2xl">check_circle</span> {highlight}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* PDF Materials (Demo) */}
      <section className="py-10 md:py-16 bg-surface-container-low">
        <div className="max-w-7xl mx-auto px-5 md:px-8">
          <div className="flex items-center gap-3 md:gap-4 mb-6 md:mb-10">
            <span className="material-symbols-outlined text-3xl md:text-4xl text-primary">picture_as_pdf</span>
            <h2 className="text-2xl md:text-3xl font-black text-primary">লেকচার শিট (ফ্রি ডেমো)</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {data.pdfs.map((pdf, index) => (
              <div key={index} className="bg-surface-container-lowest p-5 md:p-6 rounded-2xl border border-outline-variant/20 hover:border-primary/50 transition-colors group shadow-sm hover:shadow-md flex flex-col justify-between h-full">
                <div>
                  <div className="w-10 h-10 md:w-12 md:h-12 bg-error/10 text-error rounded-lg flex items-center justify-center mb-3 md:mb-4">
                    <span className="material-symbols-outlined text-xl md:text-2xl">description</span>
                  </div>
                  <h3 className="font-bold text-primary text-base md:text-lg mb-1">{pdf.title}</h3>
                  <p className="text-xs md:text-sm text-on-surface-variant mb-4">{pdf.desc}</p>
                </div>
                
                {/* সরাসরি নতুন ট্যাবে PDF ওপেন হবে */}
                <a 
                  href={pdf.link || "/pdfs/demo-sheet.pdf"} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-primary font-bold text-sm flex items-center gap-1 group-hover:text-tertiary-fixed-variant transition-colors mt-auto w-fit"
                >
                  ফ্রি ডাউনলোড <span className="material-symbols-outlined text-base">download</span>
                </a>
              </div>
            ))}
          </div>

          {/* সমস্ত শিট সংগ্রহের বাটন */}
          <div className="mt-10 flex justify-center">
            <button 
              onClick={() => openModal('pdf_all')}
              className="bg-tertiary text-white px-6 py-3 md:px-10 md:py-4 rounded-xl font-bold text-base md:text-lg hover:shadow-lg hover:bg-tertiary/90 transition-all flex items-center gap-2"
            >
              <span className="material-symbols-outlined">library_books</span>
              সমস্ত শিট সংগ্রহ করুন
            </button>
          </div>
        </div>
      </section>

      {/* Videos */}
      <section className="py-10 md:py-16 bg-surface">
        <div className="max-w-7xl mx-auto px-5 md:px-8">
          <div className="flex items-center gap-3 md:gap-4 mb-6 md:mb-10">
            <span className="material-symbols-outlined text-3xl md:text-4xl text-primary">smart_display</span>
            <h2 className="text-2xl md:text-3xl font-black text-primary">গুরুত্বপূর্ণ ভিডিও লেকচার</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-8">
            {data.videos.map((video, index) => (
              <div key={index} className="bg-surface-container-lowest rounded-[1.5rem] overflow-hidden shadow-sm border border-outline-variant/20">
                <div className="aspect-video bg-surface-dim relative">
                  <iframe className="w-full h-full absolute top-0 left-0" src="https://www.youtube.com/embed/dQw4w9WgXcQ" title="YouTube video" frameBorder="0" allowFullScreen></iframe>
                </div>
                <div className="p-4 md:p-6">
                  <span className="text-[10px] md:text-xs font-bold text-secondary bg-secondary-container px-2 py-1 rounded mb-2 md:mb-3 inline-block">{video.subject}</span>
                  <h3 className="font-bold text-primary text-base md:text-lg mb-1 md:mb-2">{video.title}</h3>
                  <p className="text-xs md:text-sm text-on-surface-variant">{video.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Past Questions (Demo) */}
      <section className="py-10 md:py-16 bg-surface-container-low">
        <div className="max-w-7xl mx-auto px-5 md:px-8">
          <div className="flex items-center gap-3 md:gap-4 mb-6 md:mb-10">
            <span className="material-symbols-outlined text-3xl md:text-4xl text-primary">history_edu</span>
            <h2 className="text-2xl md:text-3xl font-black text-primary">বিগত সালের প্রশ্ন ও সমাধান (ফ্রি ডেমো)</h2>
          </div>
          <div className="bg-surface-container-lowest rounded-3xl p-5 md:p-10 border border-outline-variant/20 shadow-sm">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
              {data.questions.map((q, index) => (
                <div key={index} className="flex items-center justify-between p-3 md:p-4 rounded-xl border border-outline-variant/20 hover:bg-surface-bright transition-colors">
                  <div className="flex items-center gap-3 md:gap-4">
                    <div className="w-8 h-8 md:w-10 md:h-10 bg-primary/10 text-primary rounded-full flex items-center justify-center">
                      <span className="material-symbols-outlined text-lg md:text-xl">quiz</span>
                    </div>
                    <div>
                      <h4 className="font-bold text-primary text-sm md:text-base">{q.title}</h4>
                      <p className="text-[10px] md:text-xs text-on-surface-variant">পিডিএফ সাইজ: {q.size}</p>
                    </div>
                  </div>
                  
                  {/* সরাসরি নতুন ট্যাবে PDF ওপেন হবে */}
                  <a 
                    href={q.link || "/pdfs/demo-question.pdf"} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-primary hover:bg-primary/10 p-2 rounded-full transition-colors flex items-center"
                    title="ফ্রি ডাউনলোড"
                  >
                    <span className="material-symbols-outlined">download</span>
                  </a>
                </div>
              ))}
            </div>

            {/* সমস্ত প্রশ্ন সংগ্রহের বাটন */}
            <div className="mt-8 flex justify-center border-t border-outline-variant/10 pt-8">
              <button 
                onClick={() => openModal('question_all')}
                className="border-2 border-primary text-primary px-6 py-3 md:px-10 md:py-4 rounded-xl font-bold text-base md:text-lg hover:bg-primary hover:text-white transition-all flex items-center gap-2"
              >
                <span className="material-symbols-outlined">collections_bookmark</span>
                সমস্ত প্রশ্নব্যাংক সংগ্রহ করুন
              </button>
            </div>
          </div>
        </div>
      </section>

      <PaymentModal 
        isOpen={modalState.isOpen} 
        onClose={closeModal} 
        data={modalState.data} 
      />
    </main>
  );
}