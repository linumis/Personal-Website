import NewsletterSection from "@/components/NewsletterSection";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col">
      {/* ========================================================
          HERO
          ======================================================== */}
      <section className="flex-1 flex items-center px-6 py-24 sm:py-32">
        <div className="w-full max-w-[600px] mx-auto">
          {/* Name */}
          <p className="animate-in text-sm font-medium tracking-widest text-muted uppercase mb-10">
            Linus Michael
          </p>

          {/* Tagline */}
          <h1 className="animate-in-1 text-4xl sm:text-5xl md:text-[3.5rem] font-bold leading-[1.1] tracking-tight text-ink">
            Cabinet maker.{" "}
            <br className="hidden sm:block" />
            AI builder.{" "}
            <br className="hidden sm:block" />
            Building in public.
          </h1>

          {/* Sub-copy */}
          <p className="animate-in-2 mt-8 text-lg sm:text-xl leading-relaxed text-muted max-w-[480px]">
            I spent a decade in the trade. Now I build AI systems for the shops
            still doing the work. Writing about it weekly.
          </p>

          {/* Newsletter */}
          <div className="animate-in-3 mt-12">
            <NewsletterSection />
          </div>
        </div>
      </section>

      {/* ========================================================
          FOOTER
          ======================================================== */}
      <footer className="px-6 py-8 border-t border-border">
        <div className="max-w-[600px] mx-auto flex items-center justify-between">
          <p className="text-sm text-muted">linusmichael.com</p>
          <a
            href="https://x.com/linumis"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-muted hover:text-ink transition-colors duration-200"
          >
            @linumis
          </a>
        </div>
      </footer>
    </main>
  );
}
