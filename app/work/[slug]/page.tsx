import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

const GALLERIES: Record<string, { title: string; photos: string[] }> = {
  wedding: {
    title: "WEDDING",
    photos: [
      "/pexels-abhishek-c-2151406991-37443970.jpg",
      "/pexels-anandumohanmr-31540065.jpg",
      "/pexels-anandumohanmr-31580615.jpg",
      "/pexels-aumgraphy-39538032.jpg",
      "/pexels-beard-kid-401529963-17843095.jpg",
      "/pexels-blackbean-weddings-820560431-19302451.jpg",
      "/pexels-dream_-makkerzz-1603229-28428046.jpg",
      "/pexels-dream_-makkerzz-1603229-28428054.jpg",
      "/pexels-dream_-makkerzz-1603229-30458560.jpg",
      "/pexels-framesbyambro-11118004.jpg",
      "/pexels-framesbyambro-12995519.jpg",
      "/pexels-jinto-mathew-3071051-11292171.jpg",
      "/pexels-keyurmali7-7153785.jpg",
      "/pexels-leeloothefirst-4545092.jpg",
      "/pexels-look-me-photography-779697472-27402587.jpg",
      "/pexels-mangalassery-11759190.jpg",
      "/pexels-nikku0109-33885298.jpg",
      "/pexels-nikku0109-33885312.jpg",
      "/pexels-pavel-danilyuk-8815290.jpg",
      "/pexels-pexels-user-1493533273-27575174.jpg",
      "/pexels-picturebymv-28604241.jpg",
      "/pexels-tobiasbjorkli-13293704.jpg",
      "/pexels-vireshstudio-1444442.jpg",
    ],
  },
  portrait: {
    title: "PORTRAIT",
    photos: [
      "/pexels-optical-chemist-340351297-31822475.jpg",
      "/pexels-ian-panelo-8203346.jpg",
      "/pexels-frank-minjarez-333886454-35568009.jpg",
      "/pexels-phamthe-5660355.jpg",
    ],
  },
  events: {
    title: "EVENTS",
    photos: [
      "/pexels-chris-wade-ntezicimpa-564856410-29002892.jpg",
      "/pexels-raqeebkhan-13827131.jpg",
      "/pexels-willsantos-1953445.jpg",
      "/pexels-vladyslav-dukhin-296649.jpg",
    ],
  },
  fashion: {
    title: "FASHION",
    photos: [
      "/pexels-jamie-saw-4619044-6080065.jpg",
      "/pexels-fabianreck-17888976.jpg",
      "/pexels-expressivestanley-1487077.jpg",
      "/pexels-frank-minjarez-333886454-35568009.jpg",
    ],
  },
  commercial: {
    title: "COMMERCIAL",
    photos: [
      "/pexels-pixabay-247676.jpg",
      "/pexels-asim-razan-32997.jpg",
      "/pexels-alejandro-orozco-211352387-18628454.jpg",
      "/pexels-vladyslav-dukhin-296649.jpg",
    ],
  },
  nature: {
    title: "NATURE",
    photos: [
      "/pexels-reza-shahriari-2148987319-32802947.jpg",
      "/pexels-reza-shahriari-2148987319-33043534.jpg",
      "/pexels-renjith-tomy-pkm-138432405-36860881.jpg",
      "/pexels-gantas-5528205.jpg",
    ],
  },
};

export function generateStaticParams() {
  return Object.keys(GALLERIES).map((slug) => ({ slug }));
}

export default async function CategoryPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const gallery = GALLERIES[slug];
  if (!gallery) notFound();

  return (
    <div className="min-h-screen bg-black text-white">
      <header className="border-b border-white/10">
        <nav className="max-w-6xl mx-auto flex items-center justify-between px-5 md:px-8 h-[72px]">
          <Link
            href="/"
            className="flex items-center gap-2 tracking-[0.18em] font-semibold text-lg"
          >
            <svg
              width="28"
              height="28"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                d="M7 17L17 7M9 7h8v8M7 7l3 3M17 17l-3-3"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <rect x="3" y="3" width="18" height="18" rx="4" />
            </svg>
            SQUARESPACE
          </Link>
          <Link
            href="/#work"
            className="text-[14px] font-light tracking-wide text-white/60 hover:text-white transition-colors"
          >
            ← All work
          </Link>
        </nav>
      </header>

      <main className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
        <h1 className="font-thin-head text-4xl md:text-6xl font-extralight tracking-wide text-center">
          {gallery.title}
        </h1>
        <div className="mt-12 md:mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {gallery.photos.map((src) => (
            <div
              key={src}
              className="relative aspect-[3/4] overflow-hidden rounded-lg border border-white/10"
            >
              <Image
                src={src}
                alt=""
                fill
                quality={80}
                className="object-cover"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
