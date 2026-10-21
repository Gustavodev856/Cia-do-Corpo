import ClubeParceria from "@/components/ClubeParceria";
import Depoimentos from "@/components/Depoimentos";
import Footer from "@/components/Footer";
import HistoriaBeneficios from "@/components/HistoriaBeneficios";
import UnidadesCarousel from "@/components/UnidadesCarousel";

const modalidades = [
  {
    numero: "01",
    titulo: "GINÁSTICA",
    destaque: "COLETIVA",
    descricao:
      "Zumba, Pilates, Jump, Pump, Step, Funcional, HIIT e muito mais. Encontre a aula ideal para sua rotina.",
    imagem: "/images/ginastica.png",
    alt: "Pessoa praticando ginástica",
  },
  {
    numero: "02",
    titulo: "MUSCULAÇÃO",
    destaque: "",
    descricao:
      "Desenvolva força e resistência com exercícios adaptados aos seus objetivos e à sua evolução.",
    imagem: "/images/musculacao.png",
    alt: "Pessoa treinando musculação com halteres",
  },
  {
    numero: "03",
    titulo: "ARTES",
    destaque: "MARCIAIS",
    descricao:
      "Aulas de Muay Thai que combinam condicionamento físico, defesa pessoal e fortalecimento mental.",
    imagem: "/images/artes-marciais.png",
    alt: "Luvas de boxe para artes marciais",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-[#080808] px-5 py-16 text-white md:px-10 lg:py-24">
      <section className="mx-auto max-w-7xl">
        <div className="mb-12 max-w-3xl">
          <p className="text-sm font-bold uppercase tracking-[0.3em] text-orange-500">
            Academia Cia do Corpo
          </p>

          <h1 className="mt-4 text-4xl font-black uppercase leading-tight sm:text-5xl md:text-6xl">
            Encontre sua força.
            <span className="block text-orange-500">
              Supere seus limites.
            </span>
          </h1>
        </div>

        <div className="grid gap-7 md:grid-cols-2 lg:grid-cols-3">
          {modalidades.map((modalidade) => (
            <article
              key={modalidade.numero}
              className="group overflow-hidden rounded-2xl border border-orange-500/40 bg-[#101010] transition duration-300 hover:-translate-y-2 hover:border-orange-500 hover:shadow-[0_15px_45px_rgba(249,115,22,0.12)]"
            >
              <div className="relative h-64 overflow-hidden bg-zinc-900">
                <img
                  src={modalidade.imagem}
                  alt={modalidade.alt}
                  className="h-full w-full object-contain transition duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-[#101010] to-transparent" />
              </div>

              <div className="p-7 pt-2 md:p-8 md:pt-2">
                <p className="text-sm font-extrabold italic tracking-wider text-orange-500">
                  MODALIDADE {modalidade.numero}
                </p>

                <h2 className="mt-4 text-3xl font-black italic leading-tight sm:text-4xl">
                  {modalidade.titulo}
                  {modalidade.destaque && (
                    <span className="block text-orange-500">
                      {modalidade.destaque}
                    </span>
                  )}
                </h2>

                <p className="mt-5 text-base leading-7 text-zinc-300">
                  {modalidade.descricao}
                </p>

                <div className="mt-8 h-1.5 w-24 rounded-full bg-orange-500 transition-all duration-300 group-hover:w-36" />
              </div>
            </article>
          ))}
        </div>
      </section>

      <UnidadesCarousel/>
      <Depoimentos/>
      <HistoriaBeneficios/>
      <ClubeParceria/>
      <Footer/>
    </main>
  );
}
