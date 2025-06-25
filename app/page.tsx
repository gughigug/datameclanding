"use client";
import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import Draggable from "gsap/Draggable";
import { FaArrowRightLong } from "react-icons/fa6";
import type { Draggable as DraggableInstance } from "gsap/Draggable";

gsap.registerPlugin(Draggable);

export default function Home() {
  const scrollContainer = useRef<HTMLDivElement>(null);
  const coinRef = useRef(null);
  const thirdSectionRef = useRef<HTMLDivElement>(null);
  const draggableInstance = useRef<DraggableInstance | null>(null);

  useEffect(() => {
    const section = thirdSectionRef.current;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && coinRef.current) {
          draggableInstance.current = Draggable.create(coinRef.current, {
            bounds: section,
            inertia: true,
          })[0];
        } else {
          if (draggableInstance.current) {
            draggableInstance.current.kill();
            draggableInstance.current = null;
          }
        }
      },
      { threshold: 0.5 }
    );

    if (section) {
      observer.observe(section);
    }

    return () => {
      if (section) {
        observer.unobserve(section);
      }
      if (draggableInstance.current) {
        draggableInstance.current.kill();
        draggableInstance.current = null;
      }
    };
  }, []);

  return (
    <div
      ref={scrollContainer}
      className="flex flex-col overflow-y-auto overflow-x-hidden h-screen w-screen snap-y snap-mandatory scroll-smooth"
      style={{ scrollBehavior: "smooth" }}
    >
      {/* Sezione 1 */}
      <section className="snap-start w-full min-h-screen flex-shrink-0 bg-[#A5D8FF] text-[#0f172a] relative overflow-hidden flex flex-col items-center justify-center px-8">
        <motion.img
          src="/datameclogo.jpeg"
          alt="Datamec Logo"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="absolute top-6 left-6 w-24 sm:w-32 md:w-40 hover:opacity-90 transition-opacity duration-300 z-20"
        />

        <motion.div
          className="absolute -bottom-40 -right-40 w-[400px] h-[400px] bg-[#76E5FC] rounded-full blur-3xl opacity-60"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.5, duration: 1.2 }}
        />

        <div className="flex flex-col items-center justify-center w-full max-w-5xl z-10 text-center relative pb-20">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight text-[#0f172a]"
          >
            Precisione che comunica,<br /> innovazione che connette.
          </motion.h1>

          <svg className="mt-4 w-40 h-6" viewBox="0 0 160 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 12 L10 6 L20 12 L30 6 L40 12 L50 6 L60 12 L70 6 L80 12 L90 6 L100 12 L110 6 L120 12 L130 6 L140 12 L150 6 L160 12" stroke="#0b3d91" strokeWidth="2" fill="none" strokeLinecap="square" />
          </svg>

          <motion.div
            animate={{ x: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="mt-10 text-5xl sm:text-6xl text-[#FF8552] hover:text-[#FFFFFA] transition-colors duration-300 cursor-pointer"
          >
            <FaArrowRightLong />
          </motion.div>
        </div>

        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none" style={{ height: "80px" }}>
          <svg className="relative block w-full h-full" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" viewBox="0 0 1440 80">
            <path fill="#76E5FC" d="M0,30 C360,90 720,0 1080,40 1260,65 1440,15 1440,15 L1440,80 L0,80 Z" />
          </svg>
        </div>
      </section>

      {/* Sezione 2 */}
      <section className="snap-start w-full min-h-screen bg-[#FFFFFA] text-[#0f172a] flex items-center justify-center flex-shrink-0 px-4 sm:px-6 py-12">
        <div className="w-full max-w-[90rem] px-4 sm:px-0 grid grid-cols-1 sm:grid-cols-2 gap-6 max-h-[80vh] sm:max-h-full overflow-y-auto">
          {[
            {
              text: "Dal 1983, Datamec è un punto di riferimento preciso e affidabile nella comunicazione diretta per il Non Profit, partner consolidato delle principali Onlus italiane e sempre pronta a innovare.",
              imgSrc: "/palma.png",
              alt: "Palma",
            },
            {
              text: "La nostra missione è chiara: rafforzare la voce dei nostri clienti senza perdere la nostra identità. Ci evolviamo, ci completiamo, ci integriamo. Restiamo autentici. E rendiamo ogni progetto più forte, più mirato, più efficace.",
              imgSrc: "/fiore.png",
              alt: "Fiore",
            },
            {
              text: "Strategia. Produzione. Monitoraggio.\nDati variabili. Sicurezza. CRM integrati.\nCreatività che coinvolge. Cura sartoriale.\n20 anni di esperienza vissuta, non raccontata.\nQuesto è il nostro modo di fare fundraising.",
              imgSrc: "/tucano.png",
              alt: "Tucano",
            },
            {
              text: "Branding & adv.\nSiti web & app.\nSocial media & content.\nShooting, render 3D, video.\nDalla creatività alla tecnica, ogni dettaglio ha una visione. Il nostro lavoro è unire ogni elemento in un’unica grande esperienza: quella del tuo brand.",
              imgSrc: "/ananas.png",
              alt: "Ananas",
            },
          ].map(({ text, imgSrc, alt }, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2, type: "spring", stiffness: 80 }}
              className="bg-[#A5D8FF] p-5 sm:p-6 rounded-2xl shadow-xl whitespace-pre-wrap text-sm sm:text-base flex flex-col items-center text-center break-words transition-transform duration-300 hover:scale-105 hover:shadow-[0_10px_30px_rgba(118,229,252,0.5)] cursor-default"
            >
              <img src={imgSrc} alt={alt} className="mb-4 w-12 h-12 sm:w-16 sm:h-16 object-contain" loading="lazy" />
              <p>{text}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Sezione 3 */}
      <section ref={thirdSectionRef} className="snap-start w-full min-h-screen flex flex-col justify-center items-center bg-[#A5D8FF] text-[#0f172a] relative flex-shrink-0 px-6 text-center">
        <div className="absolute top-0 left-0 w-full overflow-hidden leading-none" style={{ height: "80px" }}>
          <svg className="relative block w-full h-full rotate-180" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" viewBox="0 0 1440 80">
            <path fill="#76E5FC" d="M0,30 C360,90 720,0 1080,40 1260,65 1440,15 1440,15 L1440,80 L0,80 Z" />
          </svg>
        </div>

        <svg className="mt-4 w-40 h-6" viewBox="0 0 160 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 12 L10 6 L20 12 L30 6 L40 12 L50 6 L60 12 L70 6 L80 12 L90 6 L100 12 L110 6 L120 12 L130 6 L140 12 L150 6 L160 12" stroke="#0b3d91" strokeWidth="2" fill="none" strokeLinecap="square" />
        </svg>

        <div className="space-y-2 sm:space-y-3 mb-12 text-base sm:text-xl">
          <p className="font-semibold text-xl">Pensiamo</p>
          <p>La tua idea prende forma.</p>
          <p className="font-semibold text-xl">Facciamo</p>
          <p>Dalla carta al pixel, tutto gira.</p>
          <p className="font-semibold text-xl">Miglioriamo</p>
          <p>Ogni progetto, ogni volta.</p>
        </div>

        <div className="absolute bottom-10 right-10 flex flex-col items-center z-30" style={{ touchAction: "none" }}>
          <motion.span
            initial={{ opacity: 0, y: 5 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="text-sm text-[#0f172a] bg-white/70 px-2 py-1 rounded-full shadow-md mb-2"
          >
            Trascinami
          </motion.span>
          <img ref={coinRef} id="coin" src="/coin.png" alt="coin" className="w-20 h-20 sm:w-24 sm:h-24 cursor-grab touch-none" />
        </div>
      </section>

      {/* Sezione 4 */}
      <section className="snap-start w-full min-h-screen relative flex flex-col justify-end items-center text-white px-6 pt-12 pb-0 flex-shrink-0" style={{ backgroundImage: "url('/nave.png')", backgroundSize: "cover", backgroundPosition: "center", backgroundRepeat: "no-repeat" }}>
        <footer className="w-full text-center text-xs sm:text-sm md:text-base font-semibold text-white bg-black/40 backdrop-blur-sm py-6 px-4">
          © 2025 Data Mec S.r.l. – INDI SRL – guglielmogiannattasio.exe. All Rights Reserved.
        </footer>
      </section>
    </div>
  );
}