import SelectPortfolio from "@/components/SelectPortfolio";

export default function PortfolioPage() {
  return (
    <main className="min-h-screen bg-black text-white flex items-center justify-center px-6">

      <div className="text-center">

        <h1 className="text-6xl md:text-7xl font-bold text-cyan-400 mb-6">
          Select Portfolio
        </h1>

        <p className="text-zinc-400 text-xl mb-12">
          Choose which intern portfolio you want
        </p>

        <SelectPortfolio />

      </div>

    </main>
  );
}