import Hero from "@/components/Hero";
import Invitation from "@/components/Invitation";
import GalleryBottom from "@/components/GalleryBottom";
import Calendar from "@/components/Calendar";
import Map from "@/components/Map";
import Account from "@/components/Account";
import Guestbook from "@/components/Guestbook";

export default function Home() {
    return (
        <main className="min-h-screen relative">
            {/* 1. Main Hero Section (Full Screen Photo) */}
            <Hero />

            {/* 2. Invitation Section (Static Photo + Text) */}
            <Invitation />

            {/* 3. Calendar Section (April 2026) */}
            <Calendar />

            {/* 4. Map Section (Location Info) */}
            <Map />

            {/* 4. Bottom Gallery (Remaining Photos) */}
            <GalleryBottom />

            {/* 5. Account Section (Bank Info) - Moved to bottom */}
            <Account />

            {/* 6. Guestbook Section */}
            {/* <Guestbook /> */}
        </main>
    );
}
