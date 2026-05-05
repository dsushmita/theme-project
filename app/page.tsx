export default function Home() {
  const notes = [
    { title: "Ship the prototype", body: "Wire up the form and call the API." },
    { title: "Read paper", body: "Draft notes on the attention mechanism." },
    { title: "Gym", body: "Pull day. Focus on form, not weight." },
  ];

  return (
    <main className="min-h-screen px-6 py-16">
      <div className="mx-auto max-w-2xl">
        <header className="mb-12 border-b border-border pb-6">
          <h1 className="text-4xl font-bold tracking-tight">Mono</h1>
          <p className="mt-2 text-muted-foreground">
            A monochrome notebook.
          </p>
        </header>

        <section className="space-y-4">
          {notes.map((note) => (
            <article
              key={note.title}
              className="border border-border bg-muted/40 p-5 transition hover:border-foreground"
            >
              <h2 className="font-semibold">{note.title}</h2>
              <p className="mt-1 text-sm text-muted-foreground">{note.body}</p>
            </article>
          ))}
        </section>

        <footer className="mt-12 flex gap-3">
          <button className="bg-accent px-4 py-2 text-sm font-medium text-accent-foreground hover:opacity-90">
            New note
          </button>
          <button className="border border-border px-4 py-2 text-sm font-medium hover:bg-muted">
            Settings
          </button>
        </footer>
      </div>
    </main>
  );
}
