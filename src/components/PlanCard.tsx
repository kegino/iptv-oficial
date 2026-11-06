import { Check, Sparkles } from "lucide-react";
import { WhatsAppButton } from "./WhatsAppButton";

export interface Plan {
  id: string;
  name: string;
  duration: string;
  price: string;
  period: string;
  description: string;
  popular?: boolean;
  features: string[];
  ctaKeyword: string;
}

export const PLANS: Plan[] = [
  {
    id: "mensal",
    name: "Oficial Mensal",
    duration: "30 dias de acesso oficial",
    price: "R$ 35",
    period: "/mês",
    description: "Acesso completo aos servidores oficiais com suporte dedicado e sem contrato de permanência.",
    popular: false,
    ctaKeyword: "Plano Mensal IPTV Oficial",
    features: [
      "+35.000 canais em 4K e Full HD",
      "Filmes e séries on-demand atualizados",
      "Futebol ao vivo com rota direta oficial",
      "Guia de programação EPG completo",
      "Suporte oficial via WhatsApp",
    ],
  },
  {
    id: "trimestral",
    name: "Oficial Trimestral",
    duration: "90 dias de acesso oficial",
    price: "R$ 90",
    period: "/trimestre",
    description: "3 meses de estabilidade comprovada com desconto especial na assinatura oficial.",
    popular: false,
    ctaKeyword: "Plano Trimestral IPTV Oficial",
    features: [
      "+35.000 canais em 4K e Full HD",
      "Filmes e séries on-demand atualizados",
      "Futebol ao vivo com rota direta oficial",
      "Economia direta na mensalidade",
      "Atendimento prioritário oficial",
    ],
  },
  {
    id: "semestral",
    name: "Oficial Semestral",
    duration: "180 dias de acesso oficial",
    price: "R$ 170",
    period: "/semestre",
    description: "O plano mais vendido! 6 meses com alta velocidade e servidores CDN dedicados.",
    popular: true,
    ctaKeyword: "Plano Semestral IPTV Oficial",
    features: [
      "+35.000 canais em 4K e Full HD",
      "Filmes e séries on-demand atualizados",
      "Futebol ao vivo com rota direta oficial",
      "Acesso VIP aos servidores oficiais",
      "Suporte humanizado prioritário",
    ],
  },
  {
    id: "anual",
    name: "Oficial Anual",
    duration: "365 dias de acesso oficial",
    price: "R$ 280",
    period: "/ano",
    description: "Maior economia! 1 ano inteiro de streaming oficial por apenas R$ 23,33 por mês.",
    popular: false,
    ctaKeyword: "Plano Anual IPTV Oficial",
    features: [
      "+35.000 canais em 4K e Full HD",
      "Filmes e séries on-demand atualizados",
      "Futebol ao vivo com rota direta oficial",
      "Máxima prioridade em horários de pico",
      "Suporte VIP dedicado o ano todo",
    ],
  },
];

export function PlanCard({ plan }: { plan: Plan }) {
  return (
    <div
      className={`relative glass-card rounded-2xl p-6 sm:p-7 flex flex-col transition-all duration-300 hover:-translate-y-1 ${
        plan.popular ? "border-emerald-500/60 shadow-emerald-950/40 ring-1 ring-emerald-500/50" : ""
      }`}
    >
      {plan.popular && (
        <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 inline-flex items-center gap-1.5 rounded-full bg-gradient-to-r from-emerald-400 to-amber-400 px-3.5 py-1 text-xs font-bold text-slate-950 shadow-md">
          <Sparkles className="size-3.5" aria-hidden="true" />
          PLANO OFICIAL VIP
        </div>
      )}

      <div>
        <h3 className="font-display text-xl font-bold text-white">{plan.name}</h3>
        <p className="mt-1 text-xs text-slate-300">{plan.duration}</p>
        <div className="mt-4 flex items-baseline gap-1">
          <span className="font-display text-3xl sm:text-4xl font-extrabold text-white">{plan.price}</span>
          <span className="text-xs text-slate-300">{plan.period}</span>
        </div>
        <p className="mt-3 text-xs text-slate-300 leading-relaxed">{plan.description}</p>
      </div>

      <ul className="mt-6 space-y-2.5 text-xs text-slate-200 flex-1 border-t border-white/10 pt-5">
        {plan.features.map((feat) => (
          <li key={feat} className="flex items-start gap-2">
            <Check className="size-4 shrink-0 text-emerald-400 mt-0.5" aria-hidden="true" />
            <span>{feat}</span>
          </li>
        ))}
      </ul>

      <div className="mt-6 pt-2">
        <WhatsAppButton
          keyword={plan.ctaKeyword}
          label="Contratar Acesso Oficial"
          variant={plan.popular ? "primary" : "whatsapp"}
          size="md"
          className="w-full"
        />
      </div>
    </div>
  );
}
