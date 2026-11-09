import { createFileRoute } from "@tanstack/react-router";
import hero from "@/assets/basera-hero.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Basera — Heritage Homestay" },
      { name: "description", content: "Stay at Basera: sunlit rooms, home-cooked meals and slow mornings in a heritage courtyard home." },
      { property: "og:title", content: "Basera — Heritage Homestay" },
      { property: "og:description", content: "Sunlit rooms, home-cooked meals and slow mornings." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const features = [
  { t: "Courtyard rooms", d: "Six sunlit rooms opening onto a quiet inner courtyard." },
  { t: "Ghar ka khana", d: "Home-cooked meals from family recipes, served warm." },
  { t: "Slow mornings", d: "Chai on the terrace, birdsong, nowhere to be." },
];

function Index() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <section className="relative h-[92vh] min-h-[560px] overflow-hidden">
        <img src={hero} alt="Basera courtyard at golden hour" className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-veil" />
        <div className="relative flex h-full flex-col justify-between p-6 text-primary-foreground md:p-12">
          <span className="font-display text-xl tracking-wide">Basera</span>
          <div className="max-w-xl">
            <p className="mb-3 text-sm uppercase tracking-[0.3em] opacity-80">बसेरा · a place to rest</p>
            <h1 className="text-5xl leading-tight md:text-7xl">A home away from home.</h1>
            <a href="#stay" className="mt-8 inline-block rounded-sm bg-primary px-6 py-3 font-medium text-primary-foreground">
              Plan your stay
            </a>
          </div>
        </div>
      </section>

      <section id="stay" className="mx-auto grid max-w-5xl gap-10 px-6 py-20 md:grid-cols-3">
        {features.map((f) => (
          <div key={f.t} className="border-t border-primary pt-5">
            <h2 className="text-2xl">{f.t}</h2>
            <p className="mt-2 text-muted-foreground">{f.d}</p>
          </div>
        ))}
      </section>

      <footer className="border-t px-6 py-8 text-center text-sm text-muted-foreground">
        © {new Date().getFullYear()} Basera
      </footer>
    </main>
  );
}
