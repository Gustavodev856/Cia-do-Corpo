import Link from "next/link";
import Image from "next/image";

const horarios = [
  { dias: "Segunda a quinta", horario: "5h às 23h" },
  { dias: "Sexta-feira", horario: "5h às 22h" },
  { dias: "Sábado", horario: "7h às 15h" },
  { dias: "Domingo", horario: "8h às 12h" },
];

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#070707] text-white">
      {/* Chamada para aulas experimentais */}
      <section className="relative overflow-hidden border-b border-white/10 bg-[#111111] px-5 py-16 sm:px-8 lg:py-20">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-20 -top-32 h-80 w-80 rounded-full bg-orange-500/10 blur-[100px]"
        />

        <div className="relative mx-auto flex max-w-7xl flex-col items-start justify-between gap-8 md:flex-row md:items-center">
          <div className="max-w-3xl">
            <p className="text-sm font-extrabold uppercase tracking-[0.3em] text-orange-500">
              Seu próximo passo começa aqui
            </p>

            <h2 className="mt-4 text-4xl font-black uppercase leading-tight sm:text-5xl lg:text-6xl">
              Você ganhou
              <span className="block text-orange-500">
                3 dias de aulas
              </span>
              <span className="block">experimentais gratuitas!</span>
            </h2>

            <p className="mt-5 max-w-xl leading-7 text-zinc-400">
              Venha conhecer a Cia do Corpo, nossa estrutura e nossas
              modalidades. Dê o primeiro passo para uma rotina mais ativa.
            </p>
          </div>

          <Link
            href="https://www.academiaciadocorpo.com/unidades"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex shrink-0 items-center gap-3 rounded-full bg-orange-500 px-7 py-4 font-extrabold uppercase tracking-wide text-white transition duration-300 hover:-translate-y-1 hover:bg-orange-400 hover:shadow-[0_12px_35px_rgba(249,115,22,0.25)]"
          >
            Agende aqui
            <span
              aria-hidden="true"
              className="text-xl transition-transform group-hover:translate-x-1"
            >
              →
            </span>
          </Link>
        </div>
      </section>

      {/* Informações do rodapé */}
      <div className="mx-auto grid max-w-7xl gap-12 px-5 py-14 sm:px-8 md:grid-cols-2 lg:grid-cols-4 lg:gap-10 lg:py-16">
        {/* Marca e redes sociais */}
        <div>
          <Link
            href="/"
            aria-label="Cia do Corpo - Página inicial"
            className="inline-block"
          >
            <Image
              src="https://static.wixstatic.com/media/837beb_b9d0229eec144443a8c5b28950c17874~mv2.png/v1/fill/w_350,h_83,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/LOGO-HORI-BRA.png"
              alt="Academia Cia do Corpo"
              width={220}
              height={52}
              className="h-auto w-48"
            />
          </Link>

          <p className="mt-5 max-w-xs text-sm leading-7 text-zinc-400">
            Movimento, saúde e bem-estar para fazer parte da sua vida.
          </p>

          <div className="mt-6 flex items-center gap-3">
            <Link
              href="https://www.instagram.com/academiaciadocorpo/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram da Cia do Corpo"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 transition hover:border-orange-500 hover:bg-orange-500/10"
            >
              <Image
                src="https://static.wixstatic.com/media/11062b_cef3b719166a4815b446d4dcfcb6120d~mv2.png/v1/fill/w_52,h_52,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/11062b_cef3b719166a4815b446d4dcfcb6120d~mv2.png"
                alt=""
                width={26}
                height={26}
              />
            </Link>

            <Link
              href="https://www.facebook.com/ciadocorpope"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook da Cia do Corpo"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 transition hover:border-orange-500 hover:bg-orange-500/10"
            >
              <Image
                src="https://static.wixstatic.com/media/11062b_ef6a6ac194704911951645990055c2ce~mv2.png/v1/fill/w_52,h_52,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/11062b_ef6a6ac194704911951645990055c2ce~mv2.png"
                alt=""
                width={26}
                height={26}
              />
            </Link>
          </div>
        </div>

        {/* Horários */}
        <div>
          <h3 className="text-sm font-extrabold uppercase tracking-[0.2em] text-orange-500">
            Horário de funcionamento
          </h3>

          <ul className="mt-6 space-y-4">
            {horarios.map((item) => (
              <li
                key={item.dias}
                className="flex flex-col gap-1 text-sm sm:flex-row sm:items-center sm:justify-between sm:gap-3"
              >
                <span className="text-zinc-400">{item.dias}</span>
                <span className="font-semibold text-white">
                  {item.horario}
                </span>
              </li>
            ))}
          </ul>

          <p className="mt-5 text-xs leading-5 text-zinc-500">
            Os horários podem variar conforme a unidade.
          </p>
        </div>

        {/* Endereço e empresa */}
        <div>
          <h3 className="text-sm font-extrabold uppercase tracking-[0.2em] text-orange-500">
            Nossa empresa
          </h3>

          <p className="mt-6 text-sm font-bold leading-6 text-white">
            ACADEMIA CIA DO CORPO LTDA
          </p>

          <p className="mt-2 text-sm text-zinc-400">
            CNPJ: 19.248.919/0001-27
          </p>

          <div className="mt-5 flex items-start gap-3">
            <span className="mt-1 text-orange-500" aria-hidden="true">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="19"
                height="19"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 1 1 16 0Z" />
                <circle cx="12" cy="10" r="2.5" />
              </svg>
            </span>

            <p className="text-sm leading-7 text-zinc-400">
              Av. Antônio da Costa Azevedo, 566
              <br />
              Peixinhos, Olinda - PE
              <br />
              CEP 53220-130
            </p>
          </div>
        </div>

        {/* Institucional */}
        <div>
          <h3 className="text-sm font-extrabold uppercase tracking-[0.2em] text-orange-500">
            Institucional
          </h3>

          <ul className="mt-6 space-y-4">
            <li>
              <Link
                href="/sobre"
                className="text-sm text-zinc-400 transition hover:text-orange-500"
              >
                Sobre a Cia do Corpo
              </Link>
            </li>

            <li>
              <Link
                href="/unidades"
                className="text-sm text-zinc-400 transition hover:text-orange-500"
              >
                Nossas unidades
              </Link>
            </li>

            <li>
              <Link
                href="https://www.academiaciadocorpo.com/_files/ugd/837beb_aa8fd1283a7a4c4ea0bd1fd390db0e48.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm leading-6 text-zinc-400 transition hover:text-orange-500"
              >
                Normas internas de uso
                <span aria-hidden="true">↗</span>
              </Link>
            </li>
          </ul>
        </div>
      </div>

      {/* Direitos autorais */}
      <div className="border-t border-white/10 px-5 py-6 sm:px-8">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 text-center text-xs text-zinc-500 sm:flex-row sm:text-left">
        <p>
            © 2026 Cia do Corpo Gym. Todos os direitos reservados.
        </p>

          <p>Feito para quem busca sua melhor versão.</p>
        </div>
      </div>
    </footer>
  );
}