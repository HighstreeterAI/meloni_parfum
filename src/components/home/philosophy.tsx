const pillars = [
  { numeral: "I", title: "Handwerk", text: "Sorgfältig komponiert aus erlesenen Rohstoffen." },
  { numeral: "II", title: "Zeit", text: "Geschaffen, um Teil Ihres persönlichen Rituals zu werden." },
  { numeral: "III", title: "Erinnerung", text: "Ein Duft wird nicht getragen. Er wird erinnert." },
] as const;

export function Philosophy() {
  return (
    <section aria-labelledby="philosophy-heading" className="bg-cream py-20 lg:py-32">
      <div className="container-page">
        <p id="philosophy-heading" className="eyebrow text-center">
          Unsere Philosophie
        </p>
        <ul className="mt-14 grid gap-14 md:grid-cols-3 md:gap-0 lg:mt-20">
          {pillars.map((pillar) => (
            <li
              key={pillar.title}
              className="text-center md:border-l md:border-line md:px-10 md:first:border-l-0 lg:px-16"
            >
              <span className="font-serif text-lg italic text-champagne">{pillar.numeral}</span>
              <h3 className="heading mt-4 text-4xl lg:text-5xl">{pillar.title}</h3>
              <p className="body-copy mx-auto mt-5 max-w-[17rem]">{pillar.text}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
