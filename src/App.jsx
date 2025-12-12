import { useState } from "react";

export default function App() {
  return (
    <div className="w-full min-h-screen bg-gray-50 text-gray-800">
      {/* NAVBAR */}
      <nav className="w-full bg-white shadow-md px-6 py-4 flex justify-between items-center fixed top-0 left-0 z-50">
        <h1 className="text-2xl font-bold">Glow Up Fashion</h1>
        <div className="flex gap-6 text-lg">
          <a href="#home" className="hover:text-pink-500">Accueil</a>
          <a href="#services" className="hover:text-pink-500">Services</a>
          <a href="#salles" className="hover:text-pink-500">Salles</a>
          <a href="#contact" className="hover:text-pink-500">Réservation</a>
        </div>
      </nav>

      {/* HERO */}
      <section id="home" className="w-full h-screen flex flex-col justify-center items-center text-center px-4">
        <h2 className="text-4xl md:text-6xl font-bold mb-4">تنظيم حفلات و أعراس</h2>
        <p className="text-lg md:text-2xl max-w-2xl">
          خدمات كاملة لتزيين الأعراس، 

          <div className="bg-gray-100 rounded-2xl shadow p-6 text-center">
            <h4 className="text-2xl font-semibold mb-2">تنظيم الحفلات</h4>
            <p>حفلات نجاح، خطوبة، أعياد ميلاد، حفلات صغيرة وكبيرة.</p>
          </div>

          <div className="bg-gray-100 rounded-2xl shadow p-6 text-center">
            <h4 className="text-2xl font-semibold mb-2">Ifilmont</h4>
            <p>تصوير احترافي، فيديوهات قصيرة، مونتاج عالي الجودة.</p>
          </div>
        </div>
      </section>

      {/* SALLES */}
      <section id="salles" className="w-full py-20 bg-gray-50 px-6">
        <h3 className="text-3xl font-bold text-center mb-10">القاعات المتاحة</h3>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[1, 2, 3].map((s) => (
            <div key={s} className="bg-white rounded-2xl shadow p-4 text-center h-64 flex justify-center items-center">
              <p className="text-gray-400">صورة القاعة {s} (تزيدها إنت)</p>
            </div>
          ))}
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="w-full py-20 bg-white px-6 text-center">
        <h3 className="text-3xl font-bold mb-6">الحجز</h3>
        <p className="mb-6 text-lg">للحجز يرجى التواصل معنا عبر الواتساب:</p>

        <a
          href="https://wa.me/213000000000"
          target="_blank"
          className="inline-block px-8 py-3 bg-green-500 text-white rounded-xl text-xl hover:bg-green-600"
        >
          WhatsApp
        </a>
      </section>
    </div>
  );
}
