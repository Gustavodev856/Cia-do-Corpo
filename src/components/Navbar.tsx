"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";

const links = [
  { label: "Início", href: "/" },
  { label: "Unidades", href: "/unidades" },
  { label: "Sobre", href: "/sobre" },
  { label: "Contato", href: "/contato" },
];

export default function Navbar() {
  const [menuAberto, setMenuAberto] = useState(false);

  function fecharMenu() {
    setMenuAberto(false);
  }

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-zinc-950/95 text-white shadow-xl backdrop-blur-xl">
      <nav
        aria-label="Navegação principal"
        className="relative mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 md:px-8"
      >
        {/* Botão hambúrguer: somente no celular */}
        <button
          type="button"
          aria-label={menuAberto ? "Fechar menu" : "Abrir menu"}
          aria-expanded={menuAberto}
          aria-controls="menu-mobile"
          onClick={() => setMenuAberto(!menuAberto)}
          className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-white/10 transition hover:border-orange-500 hover:text-orange-500 md:hidden"
        >
          {menuAberto ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Links para computador */}
        <div className="hidden items-center gap-7 md:flex">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="group relative py-2 font-medium tracking-wide text-zinc-300 transition hover:text-orange-500"
            >
              {link.label}
              <span className="absolute bottom-0 left-0 h-0.5 w-0 bg-orange-500 transition-all group-hover:w-full" />
            </Link>
          ))}
        </div>

        {/* Logo */}
        <Link
          href="/"
          aria-label="Cia do Corpo - Página inicial"
          onClick={fecharMenu}
          className="absolute left-1/2 -translate-x-1/2"
        >
          <Image
            src="https://static.wixstatic.com/media/837beb_b9d0229eec144443a8c5b28950c17874~mv2.png/v1/fill/w_350,h_83,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/LOGO-HORI-BRA.png"
            alt="Logo da Academia Cia do Corpo"
            width={220}
            height={52}
            priority
            className="h-auto w-[125px] sm:w-[165px] md:static md:w-[200px]"
          />
        </Link>

        {/* Botão de unidades */}
        <Link
          href="/unidades"
          onClick={fecharMenu}
          className="shrink-0 rounded-full bg-orange-500 px-3 py-2 text-xs font-bold uppercase text-white transition hover:bg-orange-400 sm:px-5 sm:py-3 sm:text-sm"
        >
          <span className="sm:hidden">Unidades</span>
          <span className="hidden sm:inline">Encontre sua unidade</span>
        </Link>
      </nav>

      {/* Painel flutuante: não altera o espaço do conteúdo */}
      <div
        id="menu-mobile"
        aria-hidden={!menuAberto}
        className={`absolute left-0 right-0 top-full z-50 border-b border-orange-500/30 bg-zinc-950/98 shadow-2xl shadow-black/50 transition-all duration-300 md:hidden ${
          menuAberto
            ? "visible translate-y-0 opacity-100"
            : "invisible -translate-y-2 opacity-0 pointer-events-none"
        }`}
      >
        <div className="mx-auto max-w-7xl px-5 py-3">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              tabIndex={menuAberto ? 0 : -1}
              onClick={fecharMenu}
              className="flex items-center justify-between border-b border-white/10 py-4 text-sm font-semibold text-zinc-200 transition hover:pl-2 hover:text-orange-500 last:border-b-0"
            >
              {link.label}
              <span className="text-orange-500">↗</span>
            </Link>
          ))}
        </div>
      </div>
    </header>
  );
}
