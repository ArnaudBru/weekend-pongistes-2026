export function TicketHeader() {
  return (
    <>
      <div className="flex flex-col items-center gap-2 text-center px-6 pt-6 pb-5">
        <span className="text-[10px] font-bold uppercase tracking-[0.14em] text-[#9CA6A8]">
          Billet de weekend
        </span>
        <h1
          style={{ fontFamily: 'var(--font-slab), serif' }}
          className="text-2xl font-bold text-[#35424A] tracking-tight text-balance"
        >
          Un weekend entre potes 🏓
        </h1>
        <span className="font-mono text-xs tracking-wide tabular-nums text-[#C98A2C]">
          → Saint-Pierre-lès-Nemours · 27–29 nov. 2026
        </span>
      </div>
      <div
        aria-hidden="true"
        className="h-4 bg-[radial-gradient(circle_at_center,_#E9EDEE_5px,_transparent_5.5px)] [background-size:18px_16px] bg-repeat-x bg-center"
      />
    </>
  )
}
