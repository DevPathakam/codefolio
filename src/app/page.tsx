import { IntroCardTitle } from "@/components/client/portfolio/IntroCardTitle";
import { RecentlyOpened } from "@/components/client/RecentlyOpened";
import { ConnectionLinks } from "@/components/ConnectionLinks";
import { StartLinks } from "@/components/StartLinks";

export default function HomePage() {
  return (
    <main className="relative w-full h-screen overflow-hidden">
      <div className="container font-sans mx-auto flex flex-col min-h-full py-8 px-5 md:items-center md:my-20">
        <section>
          <h1 className="text-4xl md:text-5xl">Aman Pathak</h1>
          <IntroCardTitle />

          <section className="flex md:flex-row flex-col justify-between">
            <div className="flex flex-col ">
              <StartLinks />
              <RecentlyOpened />
            </div>
            <ConnectionLinks />
          </section>
        </section>
      </div>
    </main>
  );
}
