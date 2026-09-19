const menu = [
  {
    group: 'Për të filluar',
    items: [
      { n: 'Bruschetta me domate', d: 'bukë e pjekur, hudhër, borzilok', p: '€4.50' },
      { n: 'Sallatë fshtëpie', d: 'zarzavate sezonale, vaj ulliri', p: '€5.00' },
      { n: 'Supë e ditës', d: 'pyet kamerierin', p: '€4.00' },
    ],
  },
  {
    group: 'Pjata kryesore',
    items: [
      { n: 'Peshk i grilluar', d: 'me perime sezonale dhe barishte', p: '€14.00' },
      { n: 'Tagliatelle me trumza', d: 'makarona të bëra në shtëpi', p: '€9.50' },
      { n: 'Qofte me oriz', d: 'recetë tradicionale, salcë domate', p: '€8.00' },
      { n: 'Rizoto me kërpudha', d: 'parmezan, gjalpë, majdanoz', p: '€10.00' },
    ],
  },
  {
    group: 'Ëmbëlsira',
    items: [
      { n: 'Tiramisu', d: 'mascarpone, kafe, kakao', p: '€4.50' },
      { n: 'Bakllava', d: 'me arra dhe mjaltë', p: '€3.50' },
    ],
  },
]

export function AromaMenu() {
  return (
    <section id="menu" className="border-t border-border">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24">
        <div className="flex items-end justify-between">
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Menuja</p>
            <h2 className="mt-3 font-serif text-4xl tracking-tight text-foreground sm:text-5xl">
              Sezonale &amp; e freskët
            </h2>
          </div>
          <p className="hidden max-w-xs text-right text-sm text-muted-foreground sm:block">
            Menuja ndryshon sipas sezonit dhe tregut të mëngjesit.
          </p>
        </div>

        <div className="mt-12 grid gap-12 md:grid-cols-3">
          {menu.map((section) => (
            <div key={section.group}>
              <h3 className="border-b border-border pb-3 text-sm font-medium uppercase tracking-wide text-foreground">
                {section.group}
              </h3>
              <ul className="mt-4 space-y-5">
                {section.items.map((item) => (
                  <li key={item.n} className="flex items-baseline justify-between gap-4">
                    <div>
                      <p className="text-[15px] text-foreground">{item.n}</p>
                      <p className="mt-0.5 text-sm text-muted-foreground">{item.d}</p>
                    </div>
                    <span className="shrink-0 font-medium text-foreground tabular-nums">
                      {item.p}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
