import Hero from "@/components/Hero";
import Invitation from "@/components/Invitation";
import GalleryBottom from "@/components/GalleryBottom";
import Calendar from "@/components/Calendar";
import Map from "@/components/Map";
import Account from "@/components/Account";
import Image from "next/image";
import background from "@/app/assets/background.png";
import eggPhoto from "@/app/assets/main_photo_egg.png";

export default function Home() {
    return (
        <main className="min-h-screen relative">
            <div className="fixed inset-0 -z-10">
                <Image
                    src={background}
                    alt="Background"
                    fill
                    className="object-cover"
                    priority
                />
            </div>

            {/* 1. Main Hero Section (Full Screen Photo) */}
            <Hero />

            {/* 2. Invitation Section (Static Photo + Text) */}
            <Invitation />

            {/* 3. Calendar Section (April 2026) */}
            <Calendar />

            {/* Egg Photo Decoration */}
            <div className="flex justify-center mt-64 -mb-20 relative z-10 pointer-events-none">
                <Image
                    src={eggPhoto}
                    alt="Decoration"
                    width={250}
                    height={250}
                    quality={100}
                    priority
                />
            </div>

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
