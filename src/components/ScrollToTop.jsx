// src/components/ScrollToTop.jsx
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    // যদি URL-এ কোনো hash (যেমন #contact বা #reviews) না থাকে, তাহলেই শুধু উপরে স্ক্রল করবে
    if (!hash) {
      window.scrollTo(0, 0);
    } else {
      // Hash থাকলে নির্দিষ্ট সেকশনে যাওয়ার জন্য একটু সময় (delay) দেওয়া হলো, 
      // যাতে অন্য পেজ থেকে হোম পেজ সম্পূর্ণ লোড হওয়ার পর সে আইডিটা খুঁজে পায়।
      setTimeout(() => {
        const id = hash.replace('#', '');
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100); // 100ms delay for smooth rendering
    }
  }, [pathname, hash]);

  return null;
}