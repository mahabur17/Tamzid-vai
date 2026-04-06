import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    // যখনই URL বা পাথ চেঞ্জ হবে, উইন্ডো স্ক্রল করে একদম উপরে (0,0) চলে যাবে
    window.scrollTo(0, 0);
  }, [pathname]);

  return null; // এই কম্পোনেন্ট স্ক্রিনে কিছুই দেখাবে না, শুধু ব্যাকগ্রাউন্ডে কাজ করবে
}