export function HeroSection() {
  return (
    <section className="flex flex-col items-center gap-4 text-center pt-14 pb-8 px-6">
      <span className="text-sm font-semibold text-primary">Tu as trouvé le code secret 🎉</span>
      <h1 className="text-3xl sm:text-4xl font-extrabold text-foreground tracking-tight text-balance">
        Un weekend entre potes 🏓
      </h1>
      <p className="text-base text-muted-foreground font-medium max-w-sm">
        Dates à confirmer — on vous tient au courant dans le groupe.
      </p>
    </section>
  )
}
