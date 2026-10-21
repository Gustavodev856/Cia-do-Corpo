const depoimentos = [
  {
    nome: "Glauston Paes Siqueira",
    texto:
      "Essa academia é perfeita em tudo, principalmente as funcionárias que atendem muito bem, e sem contar que são muito educadas.",
  },
  {
    nome: "Gilberto Epifânfio",
    texto:
      "Estrutura e maquinários excelentes! Atendimento impecável!",
  },
  {
    nome: "Kassio Campos",
    texto:
      "Top de linha, super indico. É de equipamento a funcionários... show de bola! PARABÉNS!!!",
  },
];

export default function Depoimentos() {
  return (
    <section
      id="depoimentos"
      aria-labelledby="titulo-depoimentos"
      className="relative overflow-hidden bg-[#0b0b0b] px-5 py-20 text-white sm:px-8 lg:py-28"
    >
      {/* Detalhes decorativos */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-32 top-20 h-72 w-72 rounded-full bg-orange-500/10 blur-[100px]"
      />

      <div className="relative mx-auto max-w-7xl">
        <div className="mx-auto mb-14 max-w-3xl text-center">
          <p className="text-sm font-extrabold uppercase tracking-[0.3em] text-orange-500">
            Experiências reais
          </p>

          <h2
            id="titulo-depoimentos"
            className="mt-4 text-3xl font-black uppercase leading-tight sm:text-4xl md:text-5xl"
          >
            O que nossos alunos{" "}
            <span className="text-orange-500">dizem</span>
          </h2>

          <p className="mx-auto mt-5 max-w-xl text-base leading-7 text-zinc-400 sm:text-lg">
            Mais do que treinar, queremos proporcionar uma experiência
            positiva em cada visita à Cia do Corpo.
          </p>

          <div className="mx-auto mt-6 h-1 w-20 rounded-full bg-orange-500" />
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {depoimentos.map((depoimento, index) => (
            <article
              key={depoimento.nome}
              className="group relative flex flex-col rounded-2xl border border-white/10 bg-[#121212] p-7 transition-all duration-300 hover:-translate-y-2 hover:border-orange-500/60 hover:shadow-[0_20px_50px_rgba(249,115,22,0.08)] sm:p-8"
            >
              <span
                aria-hidden="true"
                className="absolute right-6 top-3 font-serif text-7xl leading-none text-orange-500/20 transition-colors group-hover:text-orange-500/40"
              >
                ”
              </span>

              <div
                aria-label="5 de 5 estrelas"
                className="mb-6 flex gap-1 text-lg text-orange-500"
              >
                {Array.from({ length: 5 }, (_, i) => (
                  <span key={i}>★</span>
                ))}
              </div>

              <p className="flex-1 text-base leading-8 text-zinc-300">
                “{depoimento.texto}”
              </p>

              <div className="mt-8 border-t border-white/10 pt-6">
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-orange-500/30 bg-orange-500/10 text-lg font-black text-orange-500">
                    {depoimento.nome.charAt(0)}
                  </div>

                  <div>
                    <h3 className="font-bold text-white">
                      {depoimento.nome}
                    </h3>
                    <p className="mt-1 text-sm text-zinc-500">
                      Aluno da Cia do Corpo
                    </p>
                  </div>
                </div>
              </div>

              <span className="absolute bottom-0 left-7 right-7 h-0.5 scale-x-0 bg-orange-500 transition-transform duration-300 group-hover:scale-x-100 sm:left-8 sm:right-8" />
            </article>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-sm text-zinc-500">
            Sua experiência também faz parte da nossa história.
          </p>
        </div>
      </div>
    </section>
  );
}