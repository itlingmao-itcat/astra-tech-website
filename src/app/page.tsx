const work = [
  {
    name: "Product software",
    text: "Web applications and tools a team can actually use day to day.",
  },
  {
    name: "Operating systems",
    text: "Small internal systems that keep records, requests, and handoffs in one place.",
  },
  {
    name: "Delivery support",
    text: "Help from a first working version through the weeks after launch.",
  },
];

const steps = [
  ["01", "Listen", "Agree on the job, the limits, and what finished looks like."],
  ["02", "Shape", "Sketch the product and the pieces it needs."],
  ["03", "Make", "Build a plain, working version before adding more."],
  ["04", "Stay", "Fix what breaks and keep the system usable."],
];

const facts = [
  ["Legal name", "ASTRA TECH Ltd"],
  ["Formation", "Corporation under the laws of Colorado"],
  ["Purpose in the bylaws", "Any lawful business"],
  ["Bylaws adopted", "September 27, 2026"],
  ["Director on the adoption", "Scott Stuart Sears"],
  ["How the company is run", "The board directs the company’s affairs"],
];

const questions = [
  {
    q: "What is ASTRA TECH Ltd?",
    a: "A Colorado corporation. The bylaws say it is formed to engage in any lawful business. This site describes that work as practical technology: software and the systems around it.",
  },
  {
    q: "When were the bylaws adopted?",
    a: "The board adopted the bylaws on September 27, 2026. Scott Stuart Sears signed as director.",
  },
  {
    q: "Who manages the company?",
    a: "The bylaws place management of the company’s affairs with the board of directors. Directors are elected for a one-year term.",
  },
  {
    q: "What do you not do here?",
    a: "This site is not a trading desk, a card product, or a digital-asset service. It is a short introduction to the company and its technology work.",
  },
];

export default function Home() {
  return (
    <>
      <header className="sticky top-0 z-10 border-b border-[var(--line)] bg-[var(--paper)]/95 backdrop-blur">
        <div className="wrap flex h-16 items-center justify-between gap-6">
          <a href="#top" className="flex items-center gap-3">
            <span className="grid h-8 w-8 place-items-center rounded-md bg-[var(--deep)] text-sm text-[#e7c27a]">
              A
            </span>
            <span className="font-[family-name:var(--font-display)] text-lg">
              ASTRA TECH
            </span>
          </a>
          <nav className="hidden gap-6 text-sm text-[var(--muted)] sm:flex">
            <a href="#work">Work</a>
            <a href="#approach">Approach</a>
            <a href="#company">Company</a>
            <a href="#questions">Questions</a>
          </nav>
          <a
            href="#company"
            className="rounded-full bg-[var(--deep)] px-4 py-2 text-sm text-[#f4efe4]"
          >
            Company record
          </a>
        </div>
      </header>

      <main id="top">
        <section className="wrap grid gap-12 py-16 md:grid-cols-[1.4fr_0.8fr] md:py-24">
          <div>
            <p className="text-sm uppercase tracking-[0.18em] text-[var(--gold)]">
              Colorado technology company
            </p>
            <h1 className="mt-4 font-[family-name:var(--font-display)] text-5xl leading-[1.05] text-[var(--deep)] sm:text-6xl">
              Software, kept simple.
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-8 text-[var(--muted)]">
              ASTRA TECH Ltd builds practical software for operating a
              business. The company is a Colorado corporation, formed for any
              lawful business and introduced here as a technology practice.
            </p>
          </div>
          <aside className="border-t-4 border-[var(--deep)] bg-[var(--band)] p-6">
            <p className="text-sm text-[var(--muted)]">From the bylaws</p>
            <p className="mt-3 font-[family-name:var(--font-display)] text-3xl text-[var(--deep)]">
              Adopted September 27, 2026
            </p>
            <p className="mt-4 leading-7 text-[var(--muted)]">
              Signed by director Scott Stuart Sears. The board directs the
              company’s affairs.
            </p>
          </aside>
        </section>

        <section id="work" className="bg-[var(--deep)] text-[#f4efe4]">
          <div className="wrap py-16">
            <h2 className="font-[family-name:var(--font-display)] text-4xl">
              The work
            </h2>
            <div className="mt-10 grid gap-8 md:grid-cols-3">
              {work.map((item) => (
                <article key={item.name} className="border-t border-white/20 pt-5">
                  <h3 className="text-xl">{item.name}</h3>
                  <p className="mt-3 leading-7 text-[#d5e0e8]">{item.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="approach" className="wrap py-16">
          <h2 className="font-[family-name:var(--font-display)] text-4xl text-[var(--deep)]">
            A short way of working
          </h2>
          <ol className="mt-10 grid gap-6 md:grid-cols-4">
            {steps.map(([n, title, text]) => (
              <li key={n}>
                <p className="font-[family-name:var(--font-display)] text-2xl text-[var(--gold)]">
                  {n}
                </p>
                <h3 className="mt-2 text-lg">{title}</h3>
                <p className="mt-2 leading-7 text-[var(--muted)]">{text}</p>
              </li>
            ))}
          </ol>
        </section>

        <section id="company" className="border-y border-[var(--line)] bg-[var(--band)]">
          <div className="wrap grid gap-10 py-16 md:grid-cols-[0.8fr_1.2fr]">
            <div>
              <h2 className="font-[family-name:var(--font-display)] text-4xl text-[var(--deep)]">
                Company record
              </h2>
              <p className="mt-4 leading-7 text-[var(--muted)]">
                These points come from the corporate bylaws. They describe the
                company, not a product offer.
              </p>
            </div>
            <dl className="grid gap-4">
              {facts.map(([label, value]) => (
                <div
                  key={label}
                  className="grid gap-1 border-b border-[var(--line)] pb-4 sm:grid-cols-[12rem_1fr]"
                >
                  <dt className="text-sm text-[var(--muted)]">{label}</dt>
                  <dd>{value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </section>

        <section id="questions" className="wrap py-16">
          <h2 className="font-[family-name:var(--font-display)] text-4xl text-[var(--deep)]">
            Questions
          </h2>
          <div className="mt-8 grid gap-8">
            {questions.map((item) => (
              <article key={item.q} className="max-w-3xl">
                <h3 className="text-xl">{item.q}</h3>
                <p className="mt-2 leading-7 text-[var(--muted)]">{item.a}</p>
              </article>
            ))}
          </div>
        </section>
      </main>

      <footer className="border-t border-[var(--line)]">
        <div className="wrap flex flex-col gap-2 py-8 text-sm text-[var(--muted)] sm:flex-row sm:justify-between">
          <p>ASTRA TECH Ltd · Colorado, United States</p>
          <p>Bylaws adopted September 27, 2026</p>
        </div>
      </footer>
    </>
  );
}
