import Hero from "@/components/Hero";
import Cores from "@/components/Cores";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between">
      <Hero />
      <Cores />
    </main>
  );
}
