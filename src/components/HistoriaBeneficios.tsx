import Image from "next/image";

const beneficios = [
  {
    nome: "Vestiários",
    descricao: "Mais praticidade e conforto para sua rotina de treino.",
    imagem:
      "https://static.wixstatic.com/media/837beb_f590946447044793a5277f57d90ed296~mv2.png/v1/fill/w_91,h_91,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/VESTIARIO.png",
  },
  {
    nome: "Ambiente climatizado",
    descricao: "Um espaço agradável para você treinar com mais conforto.",
    imagem:
      "https://static.wixstatic.com/media/837beb_85f656cf7ac14ed3937b599ab09dce43~mv2.png/v1/fill/w_91,h_91,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/ar-condicionado%20(2).png",
  },
  {
    nome: "Estacionamento gratuito",
    descricao: "Mais comodidade para chegar e aproveitar seu treino.",
    imagem:
      "https://static.wixstatic.com/media/837beb_676b1cb744354a08b5489cb7289c50b7~mv2.png/v1/fill/w_91,h_91,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/estacionamento%20(5).png",
  },
  {
    nome: "Música ambiente",
    descricao: "Mais energia e motivação para acompanhar seu ritmo.",
    imagem:
      "https://static.wixstatic.com/media/837beb_260952805d7e4849b1ec0c26a0454d9d~mv2.png/v1/fill/w_91,h_91,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/reprodutor-de-musica%20(3).png",
  },
];

export default function HistoriaBeneficios() {
  return (
    <section
      aria-labelledby="historia-titulo"
      className="relative overflow-hidden bg-[#0b0b0b] px-5 py-20 text-white sm:px-8 lg:py-28"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 top-20 h-96 w-96 rounded-full bg-orange-500/10 blur-[120px]"
      />

      <div className="relative mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-2 lg:gap-20">
        {/* Imagem e história */}
        <div className="relative">
          <div className="absolute -left-3 -top-3 h-28 w-28 rounded-tl-3xl border-l-2 border-t-2 border-orange-500 sm:-left-5 sm:-top-5" />

          <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-zinc-900">
            <Image
              src="https://static.wixstatic.com/media/837beb_7ff305b6c9c044758b9b31d00adb0411~mv2.png/v1/fill/w_876,h_881,al_c,q_90,usm_0.66_1.00_0.01,enc_avif,quality_auto/IMG_7648_heic.png"
              alt="Academia Cia do Corpo"
              width={876}
              height={881}
              className="h-[380px] w-full object-cover transition duration-700 hover:scale-105 sm:h-[480px] lg:h-[560px]"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />

            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black via-black/70 to-transparent p-6 pt-20 sm:p-8 sm:pt-24">
              <p className="text-sm font-bold uppercase tracking-[0.25em] text-orange-500">
                Nossa trajetória
              </p>
              <p className="mt-2 text-3xl font-black uppercase sm:text-4xl">
                Mais que uma academia.
              </p>
              <p className="mt-2 text-zinc-300">
                Um espaço para cuidar de você.
              </p>
            </div>
          </div>

          <div className="absolute -bottom-3 -right-3 h-28 w-28 rounded-br-3xl border-b-2 border-r-2 border-orange-500 sm:-bottom-5 sm:-right-5" />
        </div>

        {/* Texto e benefícios */}
        <div>
          <p className="text-sm font-extrabold uppercase tracking-[0.3em] text-orange-500">
            Cia do Corpo
          </p>

          <h2
            id="historia-titulo"
            className="mt-4 text-4xl font-black uppercase leading-tight sm:text-5xl lg:text-6xl"
          >
            + de 10 anos
            <span className="mt-1 block text-orange-500">
              de história
            </span>
          </h2>

          <p className="mt-6 text-lg font-semibold leading-8 text-white">
            Atendimento humanizado, atenção aos detalhes e compromisso com
            o bem-estar de cada aluno.
          </p>

          <p className="mt-4 leading-8 text-zinc-400">
            Acreditamos que cuidar da saúde vai além dos exercícios.
            Queremos oferecer um ambiente acolhedor, confortável e preparado
            para fazer parte da sua rotina.
          </p>

          <div className="my-9 h-px w-full bg-white/10" />

          <h3 className="mb-6 text-lg font-extrabold uppercase tracking-wider">
            Mais conforto para você
          </h3>

          <div className="grid gap-5 sm:grid-cols-2">
            {beneficios.map((beneficio) => (
              <article
                key={beneficio.nome}
                className="group flex items-start gap-4 rounded-xl border border-white/10 bg-white/[0.03] p-4 transition duration-300 hover:border-orange-500/40 hover:bg-orange-500/[0.05]"
              >
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-white p-2 transition group-hover:bg-orange-50">
                  <Image
                    src={beneficio.imagem}
                    alt=""
                    width={48}
                    height={48}
                    className="h-full w-full object-contain"
                  />
                </div>

                <div>
                  <h4 className="font-bold text-white">
                    {beneficio.nome}
                  </h4>
                  <p className="mt-1 text-sm leading-6 text-zinc-400">
                    {beneficio.descricao}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
