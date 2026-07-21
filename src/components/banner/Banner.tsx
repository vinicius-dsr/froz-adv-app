import { FaHandshake, FaChessKnight, FaEye, FaRocket } from "react-icons/fa";

const items = [
  {
    icon: FaHandshake,
    label: "Atendimento personalizado",
  },
  {
    icon: FaChessKnight,
    label: "Soluções Estratégicas",
  },
  {
    icon: FaEye,
    label: "Transparência em cada etapa",
  },
  {
    icon: FaRocket,
    label: "Agilidade e Compromisso",
  },
];

export const Banner = () => {
  return (
    <section className="bg-gradient-to-r from-primary to-[#4a1a0a] py-12">
      <div className="mx-auto max-w-6xl px-4">
        <div className="flex snap-x snap-mandatory gap-8 overflow-x-auto scrollbar-none md:grid md:grid-cols-4 md:overflow-visible">
          {items.map((item) => (
            <div
              key={item.label}
              className="flex min-w-[200px] shrink-0 flex-col items-center gap-4 text-center snap-center md:min-w-0"
            >
              <item.icon className="size-8 text-white" />
              <span className="text-sm font-medium text-white">
                {item.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
