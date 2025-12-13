import { useState } from "react";

export default function App() {
  const [lang, setLang] = useState("ar");

  const t = {
    ar: {
      title: "Glow Up Fashion",
      subtitle: "حجز قاعات الأعراس بكل سهولة وأناقة",
      subtitle2: "نخدموك بأفضل القاعات وتنظيم راقي",
      book: "حجز الآن",
      services: "القاعات",
      events: "قسم التنظيم",
      contact: "اتصل بنا",
      halls: "قاعات الأعراس المتوفرة",
      eventText: "نقوم بتنظيم المناسبات حسب الطلب (اختياري)",
    },
    fr: {
      title: "Glow Up Fashion",
      subtitle: "Réservation de salles de mariage بسهولة",
      subtitle2: "Les meilleures salles avec un service élégant",
      book: "Réserver",
      services: "Salles",
      events: "Organisation",
      contact: "Contact",
      halls: "Salles disponibles",
      eventText: "Organisation d’événements حسب الطلب (optionnel)",
    },
  };

  return (
    <div className="min-h-screen bg-pink-50 text-gray-800">
      {/* HEADER */}
      <header className="text-center py-12">
        <h1 className="text-4xl font-bold mb-4">{t[lang].title}</h1>
        <p className="text-lg">{t[lang].subtitle}</p>
        <p className="text-md mb-6">{t[lang].subtitle2}</p>

        <div className="flex justify-center gap-4">
          <button className="bg-pink-500 text-white px-6 py-2 rounded-xl">
            {t[lang].services}
          </button>
          <button className="bg-white border px-6 py-2 rounded-xl">
            {t[lang].contact}
          </button>
        </div>

        <div className="mt-6">
          <button
            onClick={() => setLang("ar")}
            className={`px-3 ${lang === "ar" && "font-bold"}`}
          >
            AR
          </button>
          |
          <button
            onClick={() => setLang("fr")}
            className={`px-3 ${lang === "fr" && "font-bold"}`}
          >
            FR
          </button>
        </div>
      </header>

      {/* SERVICES */}
      <section className="py-12">
        <h2 className="text-3xl font-bold text-center mb-8">
          {t[lang].halls}
        </h2>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-
