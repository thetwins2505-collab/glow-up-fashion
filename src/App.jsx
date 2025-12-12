import React from "react";

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
        <h2 className="text-4xl md:text-6xl font-bold mb-4">تنظيم أعراس</h2>
        <p className="text-lg md:text-2xl max-w-2xl">
          خدمات كاملة لتزيين الأعراس، تنسيق يوم العرس، القاعات، وخدمات الأفلام (Ifilmont).
        </p>
        <button className="mt-6 px-6 py-3 bg-pink-500 text-white rounded-xl text-xl hover:bg-pink-600">
          احجز الآن
        </button>
      </section>

      {/* SERVICES */}
      <section id="services" className="w-full py-20 bg-white px-6">
        <h3 className="text-3xl font-bold text-center mb-10">خدماتنا</h3>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">

          {/* 1 - تنظيم الأعراس */}
          <div className="bg-gray-100 rounded-2xl shadow p-6 text-center">
            <h4 className="text-2xl font-semibold mb-2">تنظيم الأعراس</h4>
            <p>تنظيم كامل للعرس + ديكور + تنسيق كامل ليوم العرس.</p>
          </div>

          {/* 2 - Ifilmont */}
          <div className="bg-gray-100 rounded-2xl shadow p-6 text-center">
            <h4 className="text-2xl font-semibold mb-2">Ifilmont</h4>
            <p>تصوير احترافي، فيديوهات قصيرة، مونتاج بجودة عالية.</p>
          </div>

        </div>
      </section>

      {/* SALLES */}
      <section id="salles" className="w-full py-20 bg-gray-50 px-6">
        <h3 className="text-3xl font-bold text-center mb-10">ا
