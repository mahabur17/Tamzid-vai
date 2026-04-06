import React from 'react';

export default function PaymentModal({ isOpen, onClose, data }) {
  if (!isOpen) return null;

  // এখানে আপনার আসল নাম্বারগুলো বসাবেন
  const bkashNumber = "018XXXXXXXX"; 
  
  // হোয়াটসঅ্যাপ নাম্বার (কোনো স্পেস, + বা - ছাড়া)
  const whatsappNumber = "8801957747041"; 
  
  // সরাসরি WhatsApp API লিংক (সাথে অটোমেটিক মেসেজ)
  const whatsappLink = `https://api.whatsapp.com/send?phone=${whatsappNumber}&text=হ্যালো,%20আমি%20পেমেন্ট%20করেছি।`;

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      {/* Modal Box - flex-col এবং max-h-[90vh] যোগ করা হয়েছে */}
      <div className="bg-surface rounded-3xl shadow-2xl w-full max-w-lg overflow-hidden flex flex-col max-h-[90vh] border border-outline-variant/20 transform transition-all duration-300">
        
        {/* Header - flex-shrink-0 যোগ করা হয়েছে যাতে হেডার ছোট না হয়ে যায় */}
        <div className="bg-primary px-5 py-4 md:px-6 md:py-5 flex justify-between items-center text-white flex-shrink-0">
          <h3 className="text-lg md:text-xl font-bold flex items-center gap-2">
            <span className="material-symbols-outlined text-xl md:text-2xl">payments</span>
            {data.title}
          </h3>
          <button 
            onClick={onClose} 
            className="text-white/80 hover:text-white hover:bg-white/20 p-1 md:p-1.5 rounded-full transition-colors flex items-center justify-center"
          >
            <span className="material-symbols-outlined">close</span>
          </button>
        </div>

        {/* Body - overflow-y-auto যোগ করা হয়েছে স্ক্রল করার জন্য */}
        <div className="p-5 md:p-8 overflow-y-auto flex-1">
          <p className="text-on-surface-variant mb-5 md:mb-6 text-base md:text-lg font-medium border-b border-outline-variant/20 pb-3 md:pb-4">
            প্রক্রিয়াটি সম্পন্ন করতে নিচের ধাপগুলো অনুসরণ করুন:
          </p>
          
          <div className="space-y-4 md:space-y-5">
            {/* Step 1 */}
            <div className="flex gap-3 md:gap-4">
              <div className="w-7 h-7 md:w-8 md:h-8 rounded-full bg-primary-fixed text-primary flex items-center justify-center font-bold flex-shrink-0 mt-0.5 text-sm md:text-base">১</div>
              <p className="text-on-surface text-base md:text-lg">
                প্রথমে <strong>{bkashNumber}</strong> নাম্বারে <strong>{data.amount} টাকা</strong> সেন্ড মানি (Send Money) করুন।
              </p>
            </div>

            {/* Step 2 */}
            <div className="flex gap-3 md:gap-4">
              <div className="w-7 h-7 md:w-8 md:h-8 rounded-full bg-primary-fixed text-primary flex items-center justify-center font-bold flex-shrink-0 mt-0.5 text-sm md:text-base">২</div>
              <div className="text-on-surface text-base md:text-lg">
                পেমেন্ট করা হয়ে গেলে আমাদের হোয়াটসঅ্যাপ নাম্বারে যোগাযোগ করুন।
                <a 
                  href={whatsappLink} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="mt-2 inline-flex items-center gap-1.5 md:gap-2 bg-[#25D366] text-white px-3 py-2 md:px-4 md:py-2 rounded-xl font-bold hover:shadow-lg transition-all text-sm"
                >
                  <span className="material-symbols-outlined text-base">chat</span>
                  হোয়াটসঅ্যাপে মেসেজ দিন
                </a>
              </div>
            </div>

            {/* Step 3 */}
            <div className="flex gap-3 md:gap-4">
              <div className="w-7 h-7 md:w-8 md:h-8 rounded-full bg-primary-fixed text-primary flex items-center justify-center font-bold flex-shrink-0 mt-0.5 text-sm md:text-base">৩</div>
              <p className="text-on-surface text-base md:text-lg">
                হোয়াটসঅ্যাপে আপনার <strong>Transaction ID</strong> এবং <strong>{data.purposeText}</strong> জন্য পেমেন্ট করেছেন, তা স্পষ্টভাবে মেসেজ করে জানান।
              </p>
            </div>

            {/* Step 4 */}
            <div className="flex gap-3 md:gap-4">
              <div className="w-7 h-7 md:w-8 md:h-8 rounded-full bg-primary-fixed text-primary flex items-center justify-center font-bold flex-shrink-0 mt-0.5 text-sm md:text-base">৪</div>
              <p className="text-on-surface text-base md:text-lg">
                অ্যাডমিন আপনার পেমেন্ট ভেরিফাই করে আপনাকে অ্যাক্সেস দিয়ে দিবে।
              </p>
            </div>
          </div>

          {/* Footer Action */}
          <div className="mt-6 md:mt-8 pt-5 md:pt-6 border-t border-outline-variant/20">
            <button 
              onClick={onClose} 
              className="w-full bg-primary text-white py-3 md:py-3.5 rounded-xl font-bold text-base md:text-lg hover:shadow-lg transition-all"
            >
              বুঝতে পেরেছি
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}