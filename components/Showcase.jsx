import Reveal from "./Reveal";
import Marquee from "./Marquee";

const poster = (file) =>
  `https://wsrv.nl/?url=https%3A%2F%2Fimage.tmdb.org%2Ft%2Fp%2Fw342%2F${file}&output=webp&q=50&n=-1`;

const MOVIES = [
  { t: "Passenger", g: "Movie", r: "4K", img: poster("2sOEJzhPzjTkZSlPbGxOJ7xgIyS.jpg") },
  { t: "Obsession", g: "Movie", r: "4K", img: poster("bRwnj8WEKBCvmfeUNOukJPwB43K.jpg") },
  { t: "House of the Dragon", g: "TV Show", r: "4K", img: poster("7V0Ebks0GgpKvQ7QbLAIdX5dos4.jpg") },
  { t: "Silo", g: "TV Show", r: "4K", img: poster("gMYZZvnkVNTqSVnVCphWbPXwWwb.jpg") },
  { t: "Moana", g: "Movie", r: "4K", img: poster("zKVgiv5qHCvCLT4A2ymJi5QeXDH.jpg") },
  { t: "Sparks of Tomorrow", g: "TV Show", r: "4K", img: poster("yDTcX4l5D3OFeYGsQVI5Jqxx1D7.jpg") },
  { t: "Backrooms", g: "Movie", r: "4K", img: poster("rhGx6E3qRNMgj3i5su2oukNHwIQ.jpg") },
  { t: "Mushoku Tensei", g: "TV Show", r: "4K", img: poster("gLKOYIMyKlUHW0SVdskhgf9C0yy.jpg") },
  { t: "Toy Story 5", g: "Movie", r: "4K", img: poster("sfQtVlIHljToOwYjhe21KPGzZWK.jpg") },
  { t: "Enola Holmes 3", g: "Movie", r: "4K", img: poster("7kRYHH9H9PjBFwz1FprbHB2AAjI.jpg") },
];

const SPORTS = [
  { t: "Premier League", g: "Football", r: "LIVE", img: "/sports/premier-league.jpg" },
  { t: "LaLiga", g: "Football", r: "LIVE", img: "/sports/laliga.jpg" },
  { t: "NBA Superstars", g: "Basketball", r: "4K", img: "/sports/nba-superstars.jpg" },
  { t: "NBA Playoffs", g: "Basketball", r: "LIVE", img: "/sports/nba-playoffs.jpg" },
  { t: "Australian Grand Prix", g: "Motorsport", r: "LIVE", img: "/sports/f1-grand-prix.jpg" },
];

function Poster({ item }) {
  return (
    <div className="group relative mx-3 w-[190px] shrink-0 sm:w-[220px]">
      <div className="relative aspect-[2/3] overflow-hidden rounded-2xl border border-white/[0.06] bg-[#060707] transition-all duration-700 ease-out will-change-transform group-hover:-translate-y-2 group-hover:border-white/15">
        {item.img ? (
          <img
            src={item.img}
            alt={`${item.t} — ${item.g} in 4K`}
            loading="lazy"
            decoding="async"
            className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-105"
          />
        ) : (
          <>
            <div
              className="absolute inset-0 transition-transform duration-[1200ms] ease-out group-hover:scale-105"
              style={{
                background: `linear-gradient(160deg, ${item.c} -20%, ${item.c}1f 42%, #060707 100%)`,
              }}
            />
            <div
              className="absolute inset-0 opacity-60"
              style={{
                background: `radial-gradient(120% 70% at 30% 0%, ${item.c}55, transparent 55%)`,
              }}
            />
          </>
        )}
        <span className="absolute right-3 top-3 rounded-md border border-white/15 bg-black/30 px-1.5 py-0.5 text-[10px] font-medium tracking-wide text-white/70 backdrop-blur">
          {item.r}
        </span>
        <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-500 group-hover:opacity-100">
          <span className="flex h-14 w-14 items-center justify-center rounded-full border border-white/30 bg-black/20 backdrop-blur-md">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className="text-white">
              <path d="M8 5v14l11-7z" />
            </svg>
          </span>
        </div>
        <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/85 to-transparent p-4">
          <p className="text-[10px] uppercase tracking-[0.22em] text-white/45">
            {item.g}
          </p>
          <h4 className="mt-1 font-display text-[16px] font-medium tracking-editorial text-white">
            {item.t}
          </h4>
        </div>
      </div>
    </div>
  );
}

function Row({ eyebrow, title, subtitle, watermark, items, reverse }) {
  return (
    <div className="relative overflow-hidden py-14">
      <span
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-1/2 -z-0 -translate-x-1/2 -translate-y-1/2 select-none font-display text-[18vw] font-bold leading-none tracking-tighter text-[color:var(--hair)] opacity-60"
      >
        {watermark}
      </span>
      <div className="relative z-10">
        <div className="container-x">
          <Reveal className="mb-9 max-w-xl">
            <p className="eyebrow">{eyebrow}</p>
            <h3 className="mt-3 font-display text-[clamp(1.7rem,4vw,2.6rem)] font-semibold tracking-editorial text-primary">
              {title}
            </h3>
            <p className="mt-3 text-[15px] leading-relaxed text-secondary">
              {subtitle}
            </p>
          </Reveal>
        </div>
        <Marquee slow reverse={reverse}>
          {items.map((m) => (
            <Poster key={m.t} item={m} />
          ))}
        </Marquee>
      </div>
    </div>
  );
}

export default function Showcase() {
  return (
    <section id="library" className="relative overflow-hidden py-16 sm:py-24">
      <Row
        eyebrow="Trending now"
        title="Top 10 movies this week"
        subtitle="Thousands of on-demand films in stunning 4K — updated with new releases the moment they drop."
        watermark="TOP 10"
        items={MOVIES}
      />
      <Row
        eyebrow="Live & on-demand"
        title="Every sport event, in one place"
        subtitle="Never miss a match. Football, boxing, motorsport and more — streamed live with anti-freeze technology."
        watermark="SPORT"
        items={SPORTS}
        reverse
      />
    </section>
  );
}
