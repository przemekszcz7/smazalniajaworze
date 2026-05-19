import { motion } from "motion/react";
import { Facebook, Mail, MapPin, Phone, Clock, Star, Quote } from "lucide-react";

export default function App() {
  const reviews = [
    {
      text: "W drodze – z Tatr Zachodnich przez Słowację do Poznania – zatrzymałem się z kolegami na pstrąga. Mniam, mniam, mniam x 1.000.000 i moc podziękowań za smak oraz arcymiłą obsługę zwieńczoną tajemniczym rabatem od Pani za ladą. 😉 ❤ 2 U",
      author: "Zadowolony Klient",
    },
    {
      text: "Polecam, w szczególności przygotowanego przez Panią Beatę pstrąga w migdałach. Zawsze smacznie i na czas:)",
      author: "Lokalny Smakosz",
    },
    {
      text: "Pycha pstrąg . świeżutki . Reszta jedonka też pyszna pachnąca i świeża Polecam baaaardzo",
      author: "Stały Bywalec",
    },
  ];

  const images = [
    "https://i.ibb.co/F4Qmv8vf/480804066-1176771587487898-7123720698821218017-n.jpg",
    "https://i.ibb.co/9H5TG0yy/480794313-1178030650695325-9064247894793813482-n.jpg",
    "https://i.ibb.co/23ST2tfW/480697889-1178595437305513-90575555338474941-n.jpg",
    "https://i.ibb.co/FLHM3M0K/481777463-1180514470446943-5092582005164161995-n.jpg",
  ];

  const logoUrl = "https://i.ibb.co/XksJCtHh/294580978-579868427178220-9190990582905189481-n.jpg";

  return (
    <div className="min-h-screen flex flex-col selection:bg-wood-dark selection:text-white">
      {/* Marquee Ticker */}
      <div className="marquee-container text-xs uppercase tracking-[0.4em] font-serif z-50">
        <div className="marquee-content">
          {[...Array(10)].map((_, i) => (
            <span key={i} className="mx-8 font-bold">
              Świeże Ryby • Gorąca Zupa Rybna • Frytki z prawdziwych ziemniaków • Pstrągi w migdałach • Tradycja z Jaworza • 
            </span>
          ))}
        </div>
      </div>

      <header className="wood-texture pt-12 pb-32 px-6 text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="flex flex-col lg:flex-row justify-between items-center lg:items-start gap-16">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="flex-1 space-y-10 text-center lg:text-left"
            >
              <div className="inline-block border border-white/30 px-4 py-1.5 text-[10px] uppercase tracking-[0.5em] opacity-60">
                Lokalna Tradycja • Jaworze
              </div>
              <h1 className="font-display text-7xl md:text-9xl lg:text-[11rem] leading-[0.8] uppercase tracking-tighter">
                Smażalnia<br />Jaworze
              </h1>
              <p className="font-serif text-2xl md:text-3xl opacity-80 max-w-2xl italic leading-relaxed pt-4">
                "Zapach świeżo smażonej ryby i prawdziwa gościnność, która sprawia, że każda wizyta staje się wspomnieniem."
              </p>
              <div className="pt-10 flex flex-wrap gap-6 justify-center lg:justify-start">
                <a href="#specials" className="bg-white text-black px-12 py-5 uppercase text-xs tracking-widest font-black hover:bg-amber-100 transition-all flex items-center gap-2 rounded-sm shadow-2xl">
                  <ForkIcon /> Zobacz Specjały
                </a>
                <a href="#contact" className="border border-white/20 px-12 py-5 uppercase text-xs tracking-widest font-black hover:bg-white/10 transition-all rounded-sm flex items-center gap-2">
                  <MapPin size={16} /> Znajdź Nas
                </a>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-72 h-72 md:w-[450px] md:h-[450px] shrink-0"
            >
              <div className="absolute inset-0 border-[20px] border-white/5 rounded-full animate-[spin_40s_linear_infinite]" />
              <div className="absolute inset-[10%] border-[2px] border-white/10 rounded-full animate-[spin_20s_linear_infinite_reverse]" />
              <div className="absolute inset-0 flex items-center justify-center">
                <img 
                  src={logoUrl} 
                  alt="Logo Smażalnia Jaworze" 
                  className="w-full h-full object-cover rounded-full shadow-[0_0_100px_rgba(0,0,0,0.6)] border-[6px] border-white ring-1 ring-white/20"
                />
              </div>
            </motion.div>
          </div>
        </div>
        
        {/* Navigation Transition Wave */}
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-[#f5f2ed] rounded-t-[5rem] md:rounded-t-[10rem] z-20" />
      </header>

      <main className="bg-[#f5f2ed] relative">
        {/* Modern Sticky Nav */}
        <div className="sticky top-0 bg-[#f5f2ed]/90 backdrop-blur-xl border-b border-black/5 z-40 py-6">
          <nav className="max-w-7xl mx-auto px-8 flex justify-center md:justify-between items-center text-[10px] uppercase tracking-[0.4em] font-black">
            <div className="hidden md:flex items-center gap-3">
               <ForkIcon size={14} />
               <span>Smażalnia Jaworze</span>
            </div>
            <div className="flex gap-10 md:gap-14">
              <a href="#about" className="hover:opacity-40 transition-all hover:tracking-[0.5em]">Historia</a>
              <a href="#specials" className="hover:opacity-40 transition-all hover:tracking-[0.5em]">Menu</a>
              <a href="#jars" className="hover:opacity-40 transition-all hover:tracking-[0.5em]">Słoiki</a>
              <a href="#gallery" className="hover:opacity-40 transition-all hover:tracking-[0.5em]">Galeria</a>
              <a href="#contact" className="hover:opacity-40 transition-all hover:tracking-[0.5em]">Kontakt</a>
            </div>
            <div className="hidden md:block opacity-40">since 2022</div>
          </nav>
        </div>

        {/* Narrative Section */}
        <section id="about" className="max-w-7xl mx-auto px-8 py-32 md:py-48">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-32 items-center">
            <motion.div 
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-16"
            >
              <div className="space-y-6">
                <span className="uppercase text-[11px] tracking-[0.6em] opacity-40 font-black flex items-center gap-4">
                  <div className="h-px w-8 bg-black opacity-20" /> Tradycja spod Jaworza
                </span>
                <h2 className="font-display text-6xl md:text-8xl italic leading-[0.95] tracking-tight">
                  Smak, który<br /><span className="text-9xl md:text-[11rem] not-italic uppercase tracking-tighter">Pamiętasz</span>
                </h2>
              </div>
              <div className="space-y-10 font-serif text-2xl text-gray-800 leading-relaxed text-justify-edge opacity-90">
                <p>
                  W Smażalni Jaworze każda ryba opowiada historię. Historię o świeżości, pasji i lokalnych składnikach, które łączymy w proste, ale doskonałe dania. 
                </p>
                <p>
                  Nie jesteśmy tylko restauracją – jesteśmy miejscem spotkań, gdzie zapach złocistego pstrąga łączy się z ciepłem domowej zupy rybnej. To tu spróbujesz najlepszych frytek w okolicy, krojonych z prawdziwych ziemniaków.
                </p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-12 pt-12 border-t border-black/10">
                {[
                  { val: "100%", label: "RYBY Z NATURY" },
                  { val: "DOM", label: "RECEPTURA" },
                  { val: "TOP", label: "W JAWORZU" }
                ].map((stat, i) => (
                  <div key={i} className="group">
                    <div className="text-6xl font-display mb-2 group-hover:scale-110 transition-transform origin-left">{stat.val}</div>
                    <div className="text-[10px] uppercase tracking-widest opacity-40 font-black">{stat.label}</div>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="vintage-border overflow-hidden rounded-sm shadow-[30px_30px_0_rgba(0,0,0,0.03)] group transition-all">
                <img src={images[0]} alt="Fresh fish preparing" className="w-full h-auto grayscale brightness-90 group-hover:grayscale-0 group-hover:brightness-100 transition-all duration-[2000ms]" />
              </div>
              <div className="absolute -bottom-12 -left-12 w-64 h-auto border-[12px] border-[#f5f2ed] shadow-2xl vintage-border overflow-hidden rounded-sm hidden xl:block z-10 animate-[bounce_5s_ease-in-out_infinite]">
                <img src={images[1]} alt="Interior" className="w-full h-auto object-cover" />
              </div>
              <div className="absolute top-10 -right-10 px-8 py-4 bg-black text-white text-[10px] uppercase tracking-[0.5em] font-black -rotate-90 origin-right">
                Prawdziwe Jedzenie
              </div>
            </motion.div>
          </div>
        </section>

        {/* Specials Spotlight - Grid with hover states */}
        <section id="specials" className="max-w-7xl mx-auto px-8 py-40">
          <div className="flex flex-col md:flex-row justify-between items-end mb-32 gap-12">
            <div className="space-y-6">
               <span className="uppercase text-[12px] tracking-[0.6em] opacity-40 font-bold">Karta dań</span>
               <h2 className="font-display text-7xl md:text-9xl uppercase tracking-tighter leading-none">Nasze<br />Specjały</h2>
            </div>
            <p className="font-serif text-2xl italic opacity-60 md:text-right max-w-sm">
              "Każda porcja to kawałek naszej pasji, podawany prosto z serca Jaworza."
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-black/10 vintage-border overflow-hidden rounded-sm shadow-2xl">
            {[
              {
                title: "Pstrąg w Migdałach",
                desc: "Nasza wizytówka. Smażony na maśle klarowanym, z chrupiącą skórką i aromatycznymi płatkami migdałow.",
                icon: <Star size={40} strokeWidth={1} />
              },
              {
                title: "Zupa Rybna",
                desc: "Esencjonalna i rozgrzewająca. Gotowana na świeżych wywarach z dodatkiem ziół i kawałków ryb.",
                icon: <Clock size={40} strokeWidth={1} />
              },
              {
                title: "Frytki Domowe",
                desc: "Zapomnij o mrożonkach. Korzystamy z polskich ziemniaków, które kroimy i smażymy na świeżo.",
                icon: <ForkIcon />
              }
            ].map((item, idx) => (
              <motion.div 
                key={idx}
                whileHover={{ backgroundColor: "#1a1a1a", color: "#f5f2ed" }}
                className="p-20 bg-white space-y-10 group transition-colors duration-700"
              >
                <div className="text-black group-hover:text-amber-200 transition-colors">
                   {item.icon}
                </div>
                <h3 className="font-display text-4xl uppercase tracking-tight leading-none">{item.title}</h3>
                <p className="font-serif text-xl opacity-70 leading-relaxed italic">{item.desc}</p>
                <div className="pt-10 flex items-center gap-4 opacity-0 group-hover:opacity-100 transition-all transform translate-y-4 group-hover:translate-y-0">
                   <div className="h-px w-10 bg-amber-200" />
                   <span className="text-[11px] uppercase tracking-[0.4em] font-black text-amber-200">Gwarancja Smaku</span>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Preservation Section - Dark/Immersive */}
        <section id="jars" className="wood-texture py-48 px-8 text-white relative shadow-[inset_0_0_200px_rgba(0,0,0,1)] flex flex-col items-center">
          <div className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-12 gap-24 items-center">
            <div className="lg:col-span-7 space-y-16">
              <div className="space-y-8">
                <span className="uppercase text-[12px] tracking-[0.7em] opacity-40 font-black">Jaworze w słoiku</span>
                <h2 className="font-display text-7xl md:text-9xl leading-[0.8] tracking-tighter">SMAK NA<br /><span className="italic font-serif normal-case opacity-70">później</span></h2>
              </div>
              <p className="font-serif text-3xl opacity-90 leading-relaxed italic border-l-2 border-white/20 pl-12">
                "Pstrągi i dorsze w słoikach w zalewie słodko-kwaśnej to nasza autorska produkcja, którą możesz zabrać ze sobą do domu."
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-12 font-serif group">
                {[
                  "Prawdziwy Pstrąg",
                  "Dorsz w marynacie",
                  "100% Natury",
                  "Bez Konserwantów"
                ].map((feat, i) => (
                  <div key={i} className="flex items-center gap-6 text-2xl group-hover:opacity-50 hover:!opacity-100 transition-opacity cursor-default">
                    <div className="w-2.5 h-2.5 bg-amber-200 rotate-45 shrink-0 shadow-[0_0_15px_rgba(251,191,36,0.5)]" /> {feat}
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-5 relative group">
              <motion.div 
                initial={{ rotate: -5, scale: 0.9 }}
                whileInView={{ rotate: 3, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}
                className="vintage-border border-white/10 overflow-hidden rounded-sm shadow-2xl relative z-10"
              >
                <img src={images[2]} alt="Ryby w słoikach" className="w-full h-auto grayscale hover:grayscale-0 transition-all duration-[3s]" />
              </motion.div>
              <div className="absolute inset-0 border-[20px] border-white/5 -rotate-6 translate-x-4 translate-y-4 rounded-sm" />
              <div className="absolute top-10 -right-10 px-8 py-4 bg-black text-white text-[10px] uppercase tracking-[0.5em] font-black -rotate-90 origin-right">
                Prawdziwe Jedzenie
              </div>
            </div>
          </div>
        </section>

        {/* Gallery Balanced Layout */}
        <section id="gallery" className="max-w-7xl mx-auto py-40 px-8">
          <div className="mb-24 text-center">
             <span className="uppercase text-[10px] tracking-[0.8em] opacity-40 font-black block mb-4">Wizualna Podróż</span>
             <h2 className="font-display text-5xl md:text-7xl uppercase tracking-widest">Nasza Kuchnia</h2>
             <div className="h-px w-24 bg-black mx-auto mt-8 opacity-20" />
          </div>
          
          <div className="columns-1 md:columns-2 gap-16 space-y-16">
             {images.map((src, i) => (
               <motion.div 
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: i * 0.1 }}
                className="break-inside-avoid"
               >
                 <div className="bg-white p-6 vintage-border shadow-2xl hover:shadow-3xl transition-all duration-500 group cursor-pointer relative">
                   <div className="overflow-hidden relative">
                     <img 
                       src={src} 
                       alt={`Galeria ${i + 1}`} 
                       className="w-full h-auto filter brightness-95 group-hover:brightness-100 group-hover:scale-105 transition-all duration-[1.5s] ease-out" 
                     />
                     <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
                   </div>
                   <div className="mt-8 flex justify-between items-center border-t border-black/5 pt-6">
                      <div className="flex flex-col">
                        <span className="text-[9px] uppercase font-black tracking-[0.4em] opacity-30">Jaworze</span>
                        <span className="font-display text-lg italic opacity-70">Specjał Domowy №{i + 1}</span>
                      </div>
                      <div className="h-0.5 w-8 bg-black/10" />
                   </div>
                 </div>
               </motion.div>
             ))}
          </div>
        </section>

        {/* Logistics & Location Section */}
        <section className="bg-white py-48">
          <div className="max-w-7xl mx-auto px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-32 items-center">
              <div id="hours" className="lg:col-span-5 space-y-20">
                 <div className="space-y-6">
                    <span className="uppercase text-[12px] tracking-[0.7em] opacity-40 font-black">Plan Dnia</span>
                    <h2 className="font-display text-7xl md:text-[8rem] uppercase tracking-tighter leading-[0.8]">Godziny<br />Otwarcia</h2>
                 </div>
                 
                 <div className="space-y-8 text-3xl font-serif">
                   <div className="flex justify-between items-center text-red-700 border-b-2 border-black/5 pb-8 opacity-50">
                     <span className="italic">Poniedziałek</span>
                     <span className="uppercase tracking-[0.3em] text-[11px] font-black border border-red-700 px-4 py-1">Zamknięte</span>
                   </div>
                   {["Wtorek", "Środa", "Czwartek", "Piątek", "Sobota", "Niedziela"].map(day => (
                     <div key={day} className="flex justify-between items-center border-b border-black/5 pb-8 group">
                       <span className="group-hover:pl-6 transition-all duration-500">{day}</span>
                       <span className="font-display tracking-[0.2em] text-2xl">11:00 - 18:00</span>
                     </div>
                   ))}
                 </div>
              </div>

              <div id="contact" className="lg:col-span-7 space-y-16">
                 <div className="vintage-border h-[700px] relative rounded-sm shadow-[50px_50px_100px_rgba(0,0,0,0.05)] overflow-hidden">
                    <iframe 
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2575.599235079315!2d18.944003077002183!3d49.79360103443979!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4716a09041ab48a3%3A0x793a778049ed6d95!2sSzkolna%207%2C%2043-384%20Jaworze!5e0!3m2!1spl!2spl!4v1779189164992!5m2!1spl!2spl" 
                      width="100%" 
                      height="100%" 
                      style={{ border: 0, filter: "grayscale(1) contrast(1.1) brightness(1.1) invert(0.05)" }} 
                      allowFullScreen 
                      loading="lazy" 
                      referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                 </div>
                 <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-center md:text-left">
                    <div className="space-y-4">
                       <p className="text-[10px] uppercase tracking-[0.5em] opacity-40 font-black">Telefonicznie</p>
                       <a href="tel:884747885" className="font-display text-4xl hover:opacity-50 transition-opacity">884 747 885</a>
                    </div>
                    <div className="space-y-4 text-center md:text-right">
                       <p className="text-[10px] uppercase tracking-[0.5em] opacity-40 font-black">Odwiedź Nas</p>
                       <p className="font-display text-4xl">Szkolna 7,<br />Jaworze</p>
                    </div>
                 </div>
              </div>
            </div>
          </div>
        </section>

        {/* Editorial Reviews */}
        <section className="bg-[#f5f2ed] py-48 border-t border-black/5">
           <div className="max-w-7xl mx-auto px-8">
              <div className="max-w-2xl mx-auto text-center mb-32 space-y-8">
                 <div className="flex justify-center gap-3">
                    {[...Array(5)].map((_, i) => <Star key={i} size={20} fill="black" />)}
                 </div>
                 <h2 className="font-display text-6xl italic leading-tight">Co mówią nasi<br />stali goście</h2>
                 <p className="uppercase text-[11px] tracking-[0.6em] opacity-40 font-black">Najwyższe oceny od lat</p>
              </div>

              <div className="columns-1 md:columns-2 lg:columns-3 gap-16 space-y-16">
                {reviews.map((rev, idx) => (
                  <motion.div 
                    key={idx}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    className="break-inside-avoid p-16 vintage-border bg-white border-black/5 hover:translate-y-[-10px] transition-all duration-500 rounded-sm shadow-xl"
                  >
                    <Quote className="opacity-10 mb-8" size={64} strokeWidth={1} />
                    <p className="font-serif italic text-xl leading-relaxed mb-12 opacity-90 text-justify-edge group-hover:text-black transition-colors text-justify">
                       "{rev.text}"
                    </p>
                    <div className="flex items-center gap-6">
                      <div className="h-px flex-grow bg-black/10" />
                      <span className="text-xs uppercase font-black tracking-[0.4em] opacity-40">— {rev.author}</span>
                    </div>
                  </motion.div>
                ))}
              </div>
              <div className="text-center mt-32">
                <a 
                   href="https://www.facebook.com/smazalnia.jaworze/reviews/?id=100054652021066&sk=reviews" 
                   target="_blank" 
                   rel="no-referrer"
                   className="inline-block px-12 py-6 bg-black text-white uppercase text-[11px] tracking-[0.5em] font-black hover:bg-gray-800 transition-all rounded-sm shadow-2xl"
                 >
                  Więcej opinii na Facebooku
                </a>
              </div>
           </div>
        </section>
      </main>

      <footer className="wood-texture py-40 px-8 text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto flex flex-col items-center gap-24 relative z-10">
          <div className="text-center space-y-10">
            <div className="inline-block border border-white/20 p-6 rounded-full grayscale opacity-40 mb-4">
              <img src={logoUrl} alt="Logo footer" className="w-20 h-20 rounded-full object-cover" />
            </div>
            <h3 className="font-display text-7xl md:text-9xl uppercase tracking-[0.2em] leading-none">Do<br />Usłyszenia</h3>
            <p className="font-serif text-3xl opacity-50 italic">Czekamy na Ciebie w Smażalnia Jaworze.</p>
          </div>
          
          <div className="w-full h-px bg-white/10" />

          <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-20 text-center md:text-left font-serif">
             <div className="space-y-6">
                <p className="text-[12px] uppercase tracking-[0.6em] opacity-40 font-black">Jaworze</p>
                <p className="text-3xl font-display">ul. Szkolna 7<br />43-384 Jaworze</p>
             </div>
             <div className="flex flex-col items-center justify-center space-y-8">
                <div className="flex gap-10">
                   <a href="https://www.facebook.com/smazalnia.jaworze" className="w-20 h-20 rounded-full border border-white/20 flex items-center justify-center hover:bg-white hover:text-wood-dark transition-all scale-125 shadow-3xl bg-black/40">
                     <Facebook size={32} />
                   </a>
                   <a href="mailto:smazalniajaworze@gmail.com" className="w-20 h-20 rounded-full border border-white/20 flex items-center justify-center hover:bg-white hover:text-wood-dark transition-all scale-125 shadow-3xl bg-black/40">
                     <Mail size={32} />
                   </a>
                </div>
                <p className="text-[10px] uppercase tracking-[0.8em] opacity-20">Śledź Nasze Nowości</p>
             </div>
             <div className="space-y-6 text-center md:text-right">
                <p className="text-[12px] uppercase tracking-[0.6em] opacity-40 font-black">Kontakt</p>
                <p className="text-3xl font-display">884 747 885</p>
                <p className="opacity-60 text-xl">smazalniajaworze@gmail.com</p>
             </div>
          </div>

          <div className="pt-24 space-y-6 opacity-20 hover:opacity-50 transition-opacity">
             <div className="w-16 h-[1px] bg-white mx-auto" />
             <p className="text-[10px] uppercase tracking-[0.8em] font-black">
               © 2026 SMAŻALNIA JAWORZE • PSTRĄGI • DORSZE • TRADYCJA
             </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

const KnifeIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 4V20M12 4H14C15.1046 4 16 4.89543 16 6V18C16 19.1046 15.1046 20 14 20H12" strokeOpacity="0.2"/>
    <path d="M8 2L8 10C8 11.1046 8.89543 12 10 12H11L11 22" />
    <path d="M8 6H4" />
    <path d="M8 4H4" />
    <path d="M8 8H4" />
  </svg>
);

const ForkIcon = ({ size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M6 2V12" />
    <path d="M10 2V12" />
    <path d="M14 2V12" />
    <path d="M18 2V12" />
    <path d="M6 12C6 15.3137 8.68629 18 12 18V22" />
    <path d="M12 18C15.3137 18 18 15.3137 18 12" />
  </svg>
);

const SectionDivider = () => (
  <div className="divider-ornament my-24 md:my-48 px-8 max-w-7xl mx-auto opacity-20">
    <ForkIcon size={40} />
    <div className="h-[2px] w-32 bg-black/10 mx-6" />
    <KnifeIcon />
  </div>
);
