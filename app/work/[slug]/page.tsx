import fs from "fs";
import path from "path";
import Link from "next/link";
import { notFound } from "next/navigation";
import LightboxGallery from "../../components/LightboxGallery";

const SLUG_TO_FOLDER: Record<string, { title: string; folder: string }> = {
  wedding: { title: "WEDDING", folder: "wedding" },
  portrait: { title: "PORTRAIT", folder: "portraits" },
  events: { title: "EVENTS", folder: "events" },
  fashion: { title: "FASHION", folder: "fashion" },
  nature: { title: "NATURE", folder: "nature" },
};

function getPhotos(folder: string): string[] {
  const dir = path.join(process.cwd(), "public", folder);
  try {
    return fs
      .readdirSync(dir)
      .filter((f) => /\.(jpe?g|png|webp|jfif|avif)$/i.test(f))
      .sort()
      .map((f) => `/${folder}/${f}`);
  } catch {
    return [];
  }
}

export function generateStaticParams() {
  return Object.keys(SLUG_TO_FOLDER).map((slug) => ({ slug }));
}

export default async function CategoryPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const config = SLUG_TO_FOLDER[slug];
  if (!config) notFound();

  const photos = getPhotos(config.folder);

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
            className="text-[14px] font-light tracking-wide text-white/60 [@media(hover:hover)]:hover:text-[#E9C46A] transition-colors"
          >
            ← All work
          </Link>
        </nav>
      </header>

      <main className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
        <h1 className="font-thin-head text-4xl md:text-6xl font-extralight tracking-wide text-center">
          {config.title}
        </h1>
        <LightboxGallery photos={photos} />
      </main>
    </div>
  );
}
