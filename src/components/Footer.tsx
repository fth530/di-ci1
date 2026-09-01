export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-graphite border-t border-cream/5">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10 py-8 md:py-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-6">
            <span className="font-serif text-lg text-cream/60">Dt. Özlem Ersöz</span>
            <span className="hidden md:inline text-cream/15">|</span>
            <span className="text-[11px] tracking-[0.1em] text-cream/25">
              Diş Hekimi &middot; Eskişehir
            </span>
          </div>
          <div className="flex items-center gap-6">
            <a
              href="https://ozlemersoz.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[11px] tracking-[0.1em] text-cream/25 hover:text-cream/50 transition-colors"
            >
              ozlemersoz.com
            </a>
            <span className="text-[11px] tracking-[0.1em] text-cream/20">
              © {currentYear}
            </span>
          </div>
        </div>
      </div>
    </footer>
  )
}
