import { cn } from "@/lib/utils";
import { Marquee } from "@/components/magicui/marquee";

const textItems = [
  "Развитие",
  "Лидерство", 
  "Будущее",
  "Партнёрство",
  "Карьерa",
  "Инновации",
  "Образование",
  "Экосистема",
  "Возможности",
  "Успех"
];

const TextCard = ({ text }: { text: string }) => {
  return (
    <div
      className={cn(
        "relative mx-4 px-6 py-3 cursor-pointer overflow-hidden rounded-xl border",
        "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
        "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]",
        "shadow-sm hover:shadow-md transition-all duration-200"
      )}
    >
      <span className="text-lg font-semibold text-foreground whitespace-nowrap">
        {text}
      </span>
    </div>
  );
};

export function TextMarquee() {
  return (
    <div className="relative flex w-full flex-col items-center justify-center overflow-hidden py-8 mt-24">
      <Marquee pauseOnHover className="[--duration:20s]">
        {textItems.map((text, index) => (
          <TextCard key={index} text={text} />
        ))}
      </Marquee>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-background"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-background"></div>
    </div>
  );
}