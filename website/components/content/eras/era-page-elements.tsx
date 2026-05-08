export function SectionAnchor({ id, title, children }: { id: string; title: string; children: React.ReactNode }) {
  return (
    <section id={id} className="era-wide-section section-anchor-target" aria-labelledby={`${id}-heading`}>
      <h2 id={`${id}-heading`} className="editorial-section-title font-semibold">
        {title}
      </h2>
      <div className="era-body space-y-3 text-[15px] leading-7">{children}</div>
    </section>
  );
}

export function CuratorNote({ children }: { children: React.ReactNode }) {
  return (
    <aside className="era-note" aria-label="Curator note">
      <p className="era-note-label">Curator Note</p>
      <p className="era-body text-sm leading-7">{children}</p>
    </aside>
  );
}

export function PullQuote({ children }: { children: React.ReactNode }) {
  return <blockquote className="era-pull-quote">{children}</blockquote>;
}

export function DebateCard({ title, claim, response }: { title: string; claim: string; response: string }) {
  return (
    <article className="era-debate-card" aria-label={title}>
      <p className="era-note-label">Debate at the Time</p>
      <h3 className="text-base font-semibold">{title}</h3>
      <div className="era-debate-grid">
        <section>
          <p className="era-meta text-xs uppercase tracking-[0.12em]">Claim</p>
          <p className="era-body mt-1 text-sm leading-6">{claim}</p>
        </section>
        <section>
          <p className="era-meta text-xs uppercase tracking-[0.12em]">Evidence Response</p>
          <p className="era-body mt-1 text-sm leading-6">{response}</p>
        </section>
      </div>
    </article>
  );
}

export function MilestoneRibbon({ year, title, impact }: { year: string; title: string; impact: string }) {
  return (
    <div className="era-milestone-ribbon" role="note" aria-label="Milestone ribbon">
      <span className="era-meta text-xs uppercase tracking-[0.12em]">{year}</span>
      <span className="text-sm font-semibold">{title}</span>
      <span className="era-body text-sm">{impact}</span>
    </div>
  );
}

export function ObjectLabel({ title, details }: { title: string; details: string }) {
  return (
    <aside className="era-object-label" aria-label="Object label">
      <p className="era-note-label">Object Label</p>
      <h3 className="text-base font-semibold leading-tight">{title}</h3>
      <p className="era-body mt-1 text-sm leading-6">{details}</p>
    </aside>
  );
}
