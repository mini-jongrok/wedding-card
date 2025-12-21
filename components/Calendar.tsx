"use client";
import { useState, useEffect } from 'react';
import Image from 'next/image';
import calendarImage from '@/app/assets/calendar.png';
import calendarBackground from '@/app/assets/calendar_background.png';

export default function Calendar() {
    const [diffDays, setDiffDays] = useState<number | null>(null);

    useEffect(() => {
        const today = new Date();
        const weddingDate = new Date('2026-04-05T00:00:00');

        // Reset time to midnight for accurate day calculation
        today.setHours(0, 0, 0, 0);
        weddingDate.setHours(0, 0, 0, 0);

        const diffTime = weddingDate.getTime() - today.getTime();
        const days = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
        setDiffDays(days);
    }, []);

    return (
        <section className="relative w-full py-30 overflow-hidden">
            {/* Section Background Pattern */}
            <div className="absolute inset-0">
                <Image
                    src={calendarBackground}
                    alt="Calendar Section Background"
                    fill
                    className="object-cover opacity-50"
                    priority
                />
            </div>

            <div className="relative z-10 flex flex-col items-center justify-center p-4 w-full">
                <div className="relative w-full max-w-lg">
                    {/* Calendar Background Image */}
                    <Image
                        src={calendarImage}
                        alt="Calendar Background"
                        className="w-full h-auto drop-shadow-xl"
                        priority
                    />

                    {/* Calendar Content Overlay */}
                    <div className="absolute inset-0 flex flex-col items-center justify-center pt-2 pb-14 text-[#5A4D4D]">
                        <br />
                        {/* Month */}
                        <div className="text-6xl font-bold mb-4 text-[#FFE4E6]" style={{ fontFamily: 'MuseumClassic, serif' }}>
                            4
                        </div>
                        <div className="text-1xl font-bold mb-2 text-[#FFFFFF]" style={{ fontFamily: 'MuseumClassic, serif' }}>
                            April
                        </div>
                        <br />

                        {/* Calendar Grid */}
                        <div className="w-[50%] text-center text-sm md:text-base leading-relaxed" style={{ fontFamily: 'MuseumClassic, serif' }}>
                            {/* Days of Week - Monday Start */}
                            <div className="grid grid-cols-7 mb-2 font-bold opacity-80">
                                <div className='text-[#FFFFFF]'>M</div>
                                <div className='text-[#FFFFFF]'>T</div>
                                <div className='text-[#FFFFFF]'>W</div>
                                <div className='text-[#FFFFFF]'>T</div>
                                <div className='text-[#FFFFFF]'>F</div>
                                <div className="text-[#6082B6]">S</div>
                                <div className="text-[#FB7185]">S</div>
                            </div>

                            {/* Dates */}
                            <div className="grid grid-cols-7 gap-y-1 font-bold">
                                {/* Week 1 */}
                                <div></div> {/* Mon 30 */}
                                <div></div> {/* Tue 31 */}
                                <div className="text-[#FFFFFF]">1</div>  {/* Wed 1 */}
                                <div className="text-[#FFFFFF]">2</div>
                                <div className="text-[#FFFFFF]">3</div>
                                <div className="text-[#6082B6]">4</div>
                                <div className="relative flex items-center justify-center text-[#FB7185] font-bold">
                                    <span className="relative z-10">5</span>
                                    <HeartHighlight />
                                </div> {/* Sun 5 - Highlighted */}

                                {/* Week 2 */}
                                <div className="text-[#FFFFFF]">6</div>
                                <div className="text-[#FFFFFF]">7</div>
                                <div className="text-[#FFFFFF]">8</div>
                                <div className="text-[#FFFFFF]">9</div>
                                <div className="text-[#FFFFFF]">10</div>
                                <div className="text-[#6082B6]">11</div>
                                <div className="text-[#FB7185]">12</div>

                                {/* Week 3 */}
                                <div className='text-[#FFFFFF]'>13</div>
                                <div className='text-[#FFFFFF]'>14</div>
                                <div className='text-[#FFFFFF]'>15</div>
                                <div className='text-[#FFFFFF]'>16</div>
                                <div className='text-[#FFFFFF]'>17</div>
                                <div className="text-[#6082B6]">18</div>
                                <div className="text-[#FB7185]">19</div>

                                {/* Week 4 */}
                                <div className="text-[#FFFFFF]">20</div>
                                <div className="text-[#FFFFFF]">21</div>
                                <div className="text-[#FFFFFF]">22</div>
                                <div className="text-[#FFFFFF]">23</div>
                                <div className="text-[#FFFFFF]">24</div>
                                <div className="text-[#6082B6]">25</div>
                                <div className="text-[#FB7185]">26</div>

                                {/* Week 5 */}
                                <div className='text-[#FFFFFF]'>27</div>
                                <div className='text-[#FFFFFF]'>28</div>
                                <div className='text-[#FFFFFF]'>29</div>
                                <div className='text-[#FFFFFF]'>30</div>
                                <div></div>
                                <div></div>
                                <div></div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Countdown - Placed below the calendar image */}
                <div className="mt-8 text-center text-[#5A4D4D] animate-fade-in text-lg" style={{ fontFamily: 'Mapo, serif' }}>
                    {diffDays !== null && (
                        diffDays > 0 ? (
                            <>
                                상민과 종록의 결혼식까지 <span className="text-[#FB7185] font-bold">{diffDays}일</span> 남았습니다
                            </>
                        ) : diffDays === 0 ? (
                            <>상민과 종록의 결혼식이 오늘입니다!</>
                        ) : (
                            <>상민과 종록의 결혼식이 지났습니다</>
                        )
                    )}
                </div>
            </div>
        </section >
    );
}

function HeartHighlight() {
    return (
        <svg
            className="absolute w-[220%] h-[220%] -top-[50%] -left-[60%] pointer-events-none"
            viewBox="0 0 120 120"
            xmlns="http://www.w3.org/2000/svg"
        >
            {/* Heart Background */}
            <path
                d="M60 95 C30 70 15 55 15 40 C15 25 28 15 42 15 C52 15 60 22 60 22 C60 22 68 15 78 15 C92 15 105 25 105 40 C105 55 90 70 60 95 Z"
                fill="#FFE4E6"
                stroke="none"
                className="opacity-90"
            />
        </svg>
    );
}
