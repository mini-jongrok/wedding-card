import Hero from "@/components/Hero";
import Gallery from "@/components/Gallery";
import Map from "@/components/Map";
import Account from "@/components/Account";

export default function Home() {
    return (
        <main className="min-h-screen bg-white">
            {/* 1. Main Hero Section (Full Screen Photo) */}
            <Hero />

            {/* 2. Gallery Section (Horizontal Scroll) */}
            <Gallery />

            {/* 3. Account Section (Bank Info) */}
            <Account />

            {/* 4. Map Section (Location Info) */}
            <Map />
        </main>
    );
}