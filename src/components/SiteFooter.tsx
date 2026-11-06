import { Link } from "@tanstack/react-router";
import { ShieldCheck } from "lucide-react";

export function SiteFooter() {
  return (
    <footer className="border-t border-emerald-500/20 bg-slate-950 text-slate-400">
      <div className="container-page py-16">
        <div className="grid gap-10 md:grid-cols-4">
          <div className="md:col-span-2">
            <Link to="/" className="flex items-center gap-3">
              <div className="grid size-9 place-items-center rounded-xl bg-gradient-to-br from-emerald-400 to-amber-400 text-slate-950 font-black">
                <ShieldCheck className="size-4" />
              </div>
              <span className="font-display text-lg font-bold text-white">
                IPTV <span className="text-amber-400">Oficial</span>
              </span>
            </Link>
            <p className="mt-4 text-sm text-slate-400 max-w-md leading-relaxed">
              Servidores oficiais de streaming de alta velocidade para o Brasil. Mais de 35.000 canais, filmes e séries em 4K com tecnologia anti-buffer e suporte 100% humanizado.
            </p>
          </div>

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wider text-white">Planos Oficiais</h3>
            <ul className="mt-4 space-y-2 text-sm">
              <li><Link to="/planos" className="hover:text-emerald-400 transition-colors">Planos Disponíveis</Link></li>
              <li><Link to="/beneficios" className="hover:text-emerald-400 transition-colors">Infraestrutura Oficial</Link></li>
              <li><Link to="/como-funciona" className="hover:text-emerald-400 transition-colors">Passo a Passo</Link></li>
              <li><Link to="/teste" className="hover:text-emerald-400 transition-colors">Teste Oficial</Link></li>
              <li><Link to="/faq" className="hover:text-emerald-400 transition-colors">Dúvidas Frequentes</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wider text-white">Segurança & Suporte</h3>
            <ul className="mt-4 space-y-2 text-sm">
              <li><Link to="/contato" className="hover:text-emerald-400 transition-colors">Central de Atendimento</Link></li>
              <li><Link to="/blog" className="hover:text-emerald-400 transition-colors">Notícias e Artigos</Link></li>
              <li><Link to="/politica-de-privacidade" className="hover:text-emerald-400 transition-colors">Privacidade</Link></li>
              <li><Link to="/termos-de-uso" className="hover:text-emerald-400 transition-colors">Termos de Uso</Link></li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-white/5 pt-8 text-center text-xs text-slate-500">
          <p>© {new Date().getFullYear()} IPTV Oficial. Todos os direitos reservados. Conexão direta com servidores balanceados.</p>
        </div>
      </div>
    </footer>
  );
}
