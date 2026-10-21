
"use client";

import { useEffect, useState } from "react";

const unidades = [
  {
    nome: "Cia Água Fria",
    endereco: "Av. Beberibe, 2600 - Beberibe, Recife - PE",
    telefone: "(81) 98943-2074",
    whatsapp: "5581989432074",
    mapa: "https://maps.app.goo.gl/67mnmfj3dFcoeNuq6",
    imagem:
      "https://static.wixstatic.com/media/837beb_425a5fecd1da4b7caaacbf0aa9893cb0~mv2.jpg/v1/fill/w_1550,h_569,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Firefly%2020241001033631_edited.jpg",
  },
  {
    nome: "Cia Afogados",
    endereco: "Rua São Miguel, 893 - Afogados, Recife - PE",
    telefone: "(81) 98697-7782",
    whatsapp: "5581989434807",
    mapa: "https://maps.app.goo.gl/oLBbLy97QV9abz8Z6",
    imagem:
      "https://static.wixstatic.com/media/837beb_425a5fecd1da4b7caaacbf0aa9893cb0~mv2.jpg/v1/fill/w_1550,h_569,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Firefly%2020241001033631_edited.jpg",
  },
  {
    nome: "Cia Bomba do Hemetério",
    endereco: "Rua Padre Oliveira, 772 - Recife - PE",
    telefone: "(81) 98943-8666",
    whatsapp: "5581989438666",
    mapa: "https://maps.app.goo.gl/9XnC4tkLJmyRwLpS8",
    imagem:
      "https://static.wixstatic.com/media/837beb_425a5fecd1da4b7caaacbf0aa9893cb0~mv2.jpg/v1/fill/w_1550,h_569,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Firefly%2020241001033631_edited.jpg",
  },
  {
    nome: "Cia Ouro Preto",
    endereco: "Av. Argentina Castelo Branco, 175 - Olinda - PE",
    telefone: "(81) 98943-8592",
    whatsapp: "5581989438592",
    mapa: "https://maps.app.goo.gl/zuVMjNU1khcbtVf59",
    imagem:
      "https://static.wixstatic.com/media/837beb_425a5fecd1da4b7caaacbf0aa9893cb0~mv2.jpg/v1/fill/w_1550,h_569,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Firefly%2020241001033631_edited.jpg",
  },
  {
    nome: "Cia Peixinhos",
    endereco: "Av. Antônio da Costa Azevedo, 566 - Olinda - PE",
    telefone: "(81) 98944-4888",
    whatsapp: "5581989444888",
    mapa: "https://maps.app.goo.gl/AtURzTjUgjaZowK16",
    imagem:
      "https://static.wixstatic.com/media/837beb_425a5fecd1da4b7caaacbf0aa9893cb0~mv2.jpg/v1/fill/w_1550,h_569,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Firefly%2020241001033631_edited.jpg",
  },
  {
    nome: "Cia Areias",
    endereco: "Rua Tucunaré, 55 - Areias, Recife - PE",
    telefone: "(81) 98734-8391",
    whatsapp: "5581987348391",
    mapa: "https://maps.app.goo.gl/tpCzs3X7ZokMmWkB9",
    imagem:
      "https://static.wixstatic.com/media/837beb_425a5fecd1da4b7caaacbf0aa9893cb0~mv2.jpg/v1/fill/w_1550,h_569,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Firefly%2020241001033631_edited.jpg",
  },
  {
    nome: "Cia Avenida Norte",
    endereco: "Av. Norte Miguel Arraes de Alencar, 6350 - Casa Amarela, Recife - PE",
    telefone: "(81) 98943-1738",
    whatsapp: "5581989431738",
    mapa: "https://g.co/kgs/MDRq364",
    imagem:
      "https://static.wixstatic.com/media/837beb_425a5fecd1da4b7caaacbf0aa9893cb0~mv2.jpg/v1/fill/w_1550,h_569,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Firefly%2020241001033631_edited.jpg",
  },
];

export default function UnidadesCarousel() {
  const [atual, setAtual] = useState(0);

  useEffect(() => {
    const intervalo = window.setInterval(() => {
      setAtual((anterior) => (anterior + 1) % unidades.length);
    }, 5000);

    return () => window.clearInterval(intervalo);
  }, []);

  const unidade = unidades[atual];

  function anterior() {
    setAtual((valor) => (valor - 1 + unidades.length) % unidades.length);
  }

  function proxima() {
    setAtual((valor) => (valor + 1) % unidades.length);
  }

  return (
    <section
      id="unidades"
      aria-label="Nossas unidades"
      className="bg-[#080808] px-5 py-20 text-white md:px-10 lg:py-28"
    >
      <div className="mx-auto max-w-7xl">
        <div className="mb-10">
          <p className="text-sm font-bold uppercase tracking-[0.3em] text-orange-500">
            Perto de você
          </p>
          <h2 className="mt-3 text-4xl font-black uppercase md:text-6xl">
            Conheça nossas{" "}
            <span className="text-orange-500">unidades</span>
          </h2>
          <p className="mt-4 max-w-2xl text-zinc-400">
            Escolha a unidade ideal para sua rotina e venha treinar com a
            Cia do Corpo.
          </p>
        </div>

        <div className="overflow-hidden rounded-3xl border border-white/10 bg-[#111111]">
          <div className="relative h-56 sm:h-72 md:h-[420px]">
            <img
              key={unidade.imagem + atual}
              src={unidade.imagem}
              alt={`Imagem da ${unidade.nome}`}
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />

            <div className="absolute bottom-6 left-6 right-6 md:bottom-10 md:left-10">
              <span className="rounded-full bg-orange-500 px-3 py-1 text-xs font-bold uppercase tracking-wider">
                Unidade {String(atual + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-4 text-3xl font-black uppercase sm:text-4xl md:text-6xl">
                {unidade.nome}
              </h3>
            </div>
          </div>

          <div className="grid gap-7 p-6 md:grid-cols-[1fr_auto] md:items-center md:p-10">
            <div>
              <p className="text-xs font-bold uppercase tracking-widest text-orange-500">
                Endereço
              </p>
              <p className="mt-2 text-zinc-200">{unidade.endereco}</p>

              <p className="mt-5 text-xs font-bold uppercase tracking-widest text-orange-500">
                Telefone
              </p>
              <p className="mt-2 text-zinc-200">{unidade.telefone}</p>

              <a
                href={unidade.mapa}
                target="_blank"
                rel="noreferrer"
                className="mt-4 inline-flex text-sm font-semibold text-zinc-400 underline decoration-orange-500 underline-offset-4 transition hover:text-orange-400"
              >
                Ver no Google Maps ↗
              </a>
            </div>

            <a
              href={`https://wa.me/${unidade.whatsapp}?text=${encodeURIComponent(`Olá! Gostaria de agendar uma aula na ${unidade.nome}.`)}`}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center rounded-full bg-orange-500 px-7 py-4 text-center font-bold text-white transition hover:scale-105 hover:bg-orange-400"
            >
              Agendar aula pelo WhatsApp
            </a>
          </div>
        </div>

        <div className="mt-7 flex flex-wrap items-center justify-between gap-5">
          <p className="text-sm text-zinc-500">
            {String(atual + 1).padStart(2, "0")} /{" "}
            {String(unidades.length).padStart(2, "0")}
          </p>

          <div className="flex items-center gap-2">
            {unidades.map((item, index) => (
              <button
                key={item.nome}
                onClick={() => setAtual(index)}
                aria-label={`Mostrar ${item.nome}`}
                aria-current={atual === index ? "true" : undefined}
                className={`h-2.5 rounded-full transition-all ${
                  atual === index
                    ? "w-9 bg-orange-500"
                    : "w-2.5 bg-zinc-600 hover:bg-zinc-400"
                }`}
              />
            ))}
          </div>

          <div className="flex gap-3">
            <button
              onClick={anterior}
              aria-label="Unidade anterior"
              className="flex h-12 w-12 items-center justify-center rounded-full border border-white/15 text-xl transition hover:border-orange-500 hover:bg-orange-500"
            >
              ←
            </button>
            <button
              onClick={proxima}
              aria-label="Próxima unidade"
              className="flex h-12 w-12 items-center justify-center rounded-full bg-orange-500 text-xl transition hover:bg-orange-400"
            >
              →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
