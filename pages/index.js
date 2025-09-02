// pages/index.js
export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 text-white font-sans">
      
      {/* هدر */}
      <header className="text-center py-16">
        <h1 className="text-5xl font-bold">Hivad</h1>
        <p className="text-xl mt-4">Graphic & Web Designer</p>
      </header>

      {/* خدمات */}
      <section className="max-w-4xl mx-auto py-12 px-6">
        <h2 className="text-3xl font-semibold mb-6 text-center">خدمات من</h2>
        <ul className="grid grid-cols-2 md:grid-cols-3 gap-6 text-lg">
          <li className="bg-white/20 rounded-xl p-4 text-center">طراحی لوگو</li>
          <li className="bg-white/20 rounded-xl p-4 text-center">طراحی پوستر</li>
          <li className="bg-white/20 rounded-xl p-4 text-center">طراحی بنر</li>
          <li className="bg-white/20 rounded-xl p-4 text-center">طراحی وبسایت</li>
          <li className="bg-white/20 rounded-xl p-4 text-center">استیکر</li>
        </ul>
      </section>

      {/* نمونه‌کارها */}
      <section className="max-w-5xl mx-auto py-12 px-6">
        <h2 className="text-3xl font-semibold mb-6 text-center">نمونه‌کارها</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          <div className="bg-white/20 rounded-xl h-40 flex items-center justify-center">نمونه ۱</div>
          <div className="bg-white/20 rounded-xl h-40 flex items-center justify-center">نمونه ۲</div>
          <div className="bg-white/20 rounded-xl h-40 flex items-center justify-center">نمونه ۳</div>
        </div>
      </section>

      {/* تماس */}
      <footer className="text-center py-10 bg-white/10 mt-12">
        <h2 className="text-2xl font-semibold mb-4">ارتباط با من</h2>
        <p>Instagram: <a href="https://instagram.com/yourusername" target="_blank" className="underline">yourusername</a></p>
        <p>Email: <a href="mailto:youremail@gmail.com" className="underline">youremail@gmail.com</a></p>
      </footer>

    </div>
  )
}
