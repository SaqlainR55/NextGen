import { HeroSection } from "@/components/home/HeroSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <section className="py-16 md:py-24 bg-white overflow-hidden">
        <div className="container mx-auto px-4 relative">
          <div className="absolute top-0 left-0 w-full h-full">
            <div className="absolute inset-0 bg-gradient-to-r from-red-50 via-white to-red-50 opacity-60 transform -skew-y-6"></div>
            <div className="absolute inset-0 bg-[url('/images/grid-pattern.svg')] opacity-5"></div>
          </div>
          <div className="text-center relative z-10 max-w-5xl mx-auto">
            <div className="inline-block mb-8">
              <span className="inline-block px-4 py-2 bg-red-50 text-[#FA061A] text-sm font-semibold rounded-full mb-4 transform hover:scale-105 transition-transform">
                Professional MEP Solutions
              </span>
            </div>
            <h2 className="text-5xl md:text-7xl lg:text-8xl font-black mb-8 bg-gradient-to-r from-[#FA061A] to-red-700 bg-clip-text text-transparent animate-gradient tracking-wide font-playfair">
              Welcome to NEXTGEN MEPfp
            </h2>
          </div>
        </div>
      </section>
    </>
  );
}