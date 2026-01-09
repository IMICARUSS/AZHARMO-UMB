import { HeroGeometric } from "@/components/ui/shape-landing-hero";
import { GlowingEffectDemo } from "@/components/ui/glowing-effect-demo";

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroGeometric 
        badge="Kokonut UI"
        title1="Elevate Your"
        title2="Digital Vision" 
      />
      <section className="w-full px-4 py-12 md:py-20">
        <div className="mx-auto max-w-7xl">
          <GlowingEffectDemo />
        </div>
      </section>
    </main>
  );
}