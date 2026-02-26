export default function WhatYouGet() {
  const items = [
    {
      title: "Building in public",
      description:
        "Real stories from the journey \u2014 what I\u2019m building, what\u2019s working, what\u2019s not.",
    },
    {
      title: "AI automations for trades",
      description:
        "Practical systems and tools that help tradespeople save time and grow.",
    },
    {
      title: "Health & mindset",
      description:
        "What I\u2019m learning about staying sharp \u2014 body and mind \u2014 while building.",
    },
    {
      title: "Behind the scenes",
      description:
        "The unfiltered look at what it takes to go from tradesman to tech builder.",
    },
  ];

  return (
    <section className="py-24 sm:py-32 px-6 border-t border-ink/10">
      <div className="max-w-2xl mx-auto">
        <h2 className="font-serif text-3xl sm:text-4xl tracking-tight mb-12">
          What you get
        </h2>
        <ul className="space-y-8">
          {items.map((item) => (
            <li key={item.title} className="flex gap-4">
              <span className="mt-2 block w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0" />
              <div>
                <h3 className="font-serif text-xl mb-1">{item.title}</h3>
                <p className="text-ink/60 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
