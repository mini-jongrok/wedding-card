import Hero from "@/components/Hero";
import GalleryTop from "@/components/GalleryTop";
import GalleryBottom from "@/components/GalleryBottom";
import Map from "@/components/Map";
import Account from "@/components/Account";

export default function Home() {
    return (
        <main className="min-h-screen bg-white">
            {/* 1. Main Hero Section (Full Screen Photo) */}
            <Hero />

            {/* 2. Top Gallery (3 Vertical Best Cuts) */}
            {/* <GalleryTop /> */}

            {/* 3. Map Section (Location Info) */}
            <Map />

            {/* 4. Bottom Gallery (Remaining Photos) */}
            <GalleryBottom />

            {/* 5. Account Section (Bank Info) - Moved to bottom */}
            <Account />
        </main>
    );
}