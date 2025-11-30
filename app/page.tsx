import Hero from "@/components/Hero";
import Gallery from "@/components/Gallery";
import Map from "@/components/Map";

export default function Home() {
    return (
        <main className="min-h-screen bg-white">
            {/* 1. Main Hero Section (Full Screen Photo) */}
            <Hero />

            {/* 2. Gallery Section (Horizontal Scroll) */}
            <Gallery />

            {/* 3. Map Section (Location Info) */}
            <Map />
        </main>
    );
}