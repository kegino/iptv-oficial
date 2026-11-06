import { WhatsAppButton } from "@/components/WhatsAppButton";
import { Zap, ShieldCheck, CheckCircle2, Award } from "lucide-react";

export function Hero() {
  return (
    <section className="relative min-h-[92vh] flex items-center justify-center overflow-hidden pt-20">
      <div className="absolute inset-0 -z-20">
        <img
          src="/hero-bg.webp"
          alt="IPTV Oficial Background"
          className="h-full w-full object-cover object-center"
          loading="eager"
          decoding="async"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#08090d] via-[#08090d]/85 to-[#08090d]/60" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#08090d] via-transparent to-[#08090d]/90" />
      </div>

      <div className="container-page py-20 text-center relative z-10 max-w-4xl mx-auto">
        <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-950/60 px-4 py-1.5 text-xs font-semibold text-emerald-300 backdrop-blur-md">
          <ShieldCheck className="size-3.5 text-emerald-400" />
          <span>Servidores Oficiais Dedicados no Brasil • Uptime 99.9%</span>
        </div>

        <h1 className="mt-6 font-display text-4xl font-black tracking-tight sm:text-6xl lg:text-7xl text-white leading-[1.1]">
          O Verdadeiro <span className="gradient-text">IPTV Oficial</span> em 4K e Full HD
        </h1>

        <p className="mt-6 text-base sm:text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed">
          Assista a mais de 35.000 canais sem intermediários. Conexão direta com tecnologia CDN de alta performance, futebol ao vivo sem delay e suporte humanizado oficial.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center items-center">
          <WhatsAppButton
            keyword="Teste Rápido IPTV Oficial"
            label="Solicitar Teste Grátis"
            variant="whatsapp"
            size="lg"
            className="w-full sm:w-auto"
          />
          <WhatsAppButton
            keyword="Planos IPTV Oficial"
            label="Planos Oficiais"
            variant="primary"
            size="lg"
            className="w-full sm:w-auto"
          />
        </div>

        <div className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-4 pt-8 border-t border-white/10 text-left">
          <div className="glass-card rounded-xl p-3.5">
            <span className="text-xl font-black text-emerald-400">100% Oficial</span>
            <p className="text-xs text-slate-400 mt-0.5">Sem intermediários</p>
          </div>
          <div className="glass-card rounded-xl p-3.5">
            <span className="text-xl font-black text-amber-400">4K Real 60FPS</span>
            <p className="text-xs text-slate-400 mt-0.5">Sem compressão agressiva</p>
          </div>
          <div className="glass-card rounded-xl p-3.5">
            <span className="text-xl font-black text-emerald-400">+35.000 Canais</span>
            <p className="text-xs text-slate-400 mt-0.5">Grade completa liberada</p>
          </div>
          <div className="glass-card rounded-xl p-3.5">
            <span className="text-xl font-black text-amber-400">Zero Delay</span>
            <p className="text-xs text-slate-400 mt-0.5">Futebol em tempo real</p>
          </div>
        </div>
      </div>
    </section>
  );
}
