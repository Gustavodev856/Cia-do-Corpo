import Image from "next/image";
import Link from "next/link";

export default function ClubeParceria() {
  return (
    <section
      aria-labelledby="clube-parceria-titulo"
      className="relative overflow-hidden bg-[#101010] px-5 py-20 text-white sm:px-8 lg:py-28"
    >
      {/* Elementos decorativos */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-32 top-1/2 h-80 w-80 -translate-y-1/2 rounded-full bg-orange-500/10 blur-[110px]"
      />

      <div className="relative mx-auto max-w-7xl">
        <div className="grid items-center gap-10 overflow-hidden rounded-3xl border border-white/10 bg-[#151515] p-7 shadow-2xl sm:p-10 md:p-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          {/* Logo do Clube da Parceria */}
          <div className="flex min-h-52 items-center justify-center rounded-2xl border border-white/5 bg-orange-500 p-6 sm:min-h-64 sm:p-10">
            <Image
              src="https://static.wixstatic.com/media/837beb_2f6fd13d39384ccd927dfcf9945716c0~mv2.png/v1/fill/w_394,h_217,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/CP%20-%20LOGO.png"
              alt="Logo do Clube da Parceria Cia do Corpo"
              width={394}
              height={217}
              className="h-auto max-h-48 w-full max-w-sm object-contain"
              sizes="(max-width: 1024px) 90vw, 394px"
            />
          </div>

          {/* Conteúdo */}
          <div>
            <p className="text-sm font-extrabold uppercase tracking-[0.3em] text-orange-500">
              Clube da Parceria
            </p>

            <h2
              id="clube-parceria-titulo"
              className="mt-4 text-3xl font-black uppercase leading-tight sm:text-4xl lg:text-5xl"
            >
              Estamos sempre buscando o{" "}
              <span className="text-orange-500">melhor</span> para você!
            </h2>

            <p className="mt-6 max-w-xl text-base leading-8 text-zinc-400 sm:text-lg">
              Conheça o Clube da Parceria da Cia do Corpo e descubra os
              benefícios oferecidos para você aproveitar ainda mais essa
              experiência.
            </p>

            <div className="mt-8">
              <Link
                href="https://www.academiaciadocorpo.com/clube-da-parceria"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-center gap-3 rounded-full bg-orange-500 px-7 py-4 text-sm font-extrabold uppercase tracking-wide text-white transition duration-300 hover:-translate-y-1 hover:bg-orange-400 hover:shadow-[0_12px_35px_rgba(249,115,22,0.25)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-400 focus-visible:ring-offset-2 focus-visible:ring-offset-[#151515]"
              >
                Conferir benefícios
                <span
                  aria-hidden="true"
                  className="text-lg transition-transform duration-300 group-hover:translate-x-1"
                >
                  ↗
                </span>
              </Link>
            </div>

            <p className="mt-5 text-xs text-zinc-500">
              Consulte as condições e os benefícios disponíveis no site oficial.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}