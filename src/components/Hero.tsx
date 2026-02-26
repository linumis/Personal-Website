import NewsletterForm from "./NewsletterForm";

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 pt-16">
      <div className="max-w-2xl w-full">
        <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl tracking-tight leading-[1.1] animate-fade-up">
          Linus Michael
        </h1>
        <p className="mt-6 text-lg sm:text-xl text-ink/70 leading-relaxed animate-fade-up-delay-1">
          Cabinetmaker. Builder. Teaching tradesmen to scale with AI.
        </p>
        <div className="mt-10 animate-fade-up-delay-2">
          <NewsletterForm />
        </div>
      </div>
    </section>
  );
}
