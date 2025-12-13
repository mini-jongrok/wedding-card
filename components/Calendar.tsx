"use client";
import Image from 'next/image';
import calendarImage from '@/app/assets/calendar.png';
import calendarBackground from '@/app/assets/calendar_background.png';
import { motion } from 'framer-motion';

export default function Calendar() {
    return (
        <section className="relative w-full py-10 overflow-hidden">
            {/* Section Background Pattern */}
            <div className="absolute inset-0 -z-10">
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
                    <div className="absolute inset-0 flex flex-col items-center justify-center pt-6 pb-2 text-[#5A4D4D]">
                        <br />
                        {/* Month */}
                        <div className="text-2xl font-bold mb-2" style={{ fontFamily: 'MuseumClassic, serif' }}>
                            April
                        </div>
                        <br />
                        <br />

                        {/* Calendar Grid */}
                        <div className="w-[50%] text-center text-xs md:text-sm leading-relaxed" style={{ fontFamily: 'MuseumClassic, serif' }}>
                            {/* Days of Week - Monday Start */}
                            <div className="grid grid-cols-7 mb-2 font-bold opacity-80">
                                <div>M</div>
                                <div>T</div>
                                <div>W</div>
                                <div>T</div>
                                <div>F</div>
                                <div className="text-[#1E3A8A]">S</div>
                                <div className="text-[#991B1B]">S</div>
                            </div>

                            {/* Dates */}
                            <div className="grid grid-cols-7 gap-y-1">
                                {/* Week 1 */}
                                <div></div> {/* Mon 30 */}
                                <div></div> {/* Tue 31 */}
                                <div>1</div>  {/* Wed 1 */}
                                <div>2</div>
                                <div>3</div>
                                <div className="text-[#1E3A8A]">4</div>
                                <div className="relative flex items-center justify-center text-[#991B1B] font-bold">
                                    <span className="relative z-10">5</span>
                                    <svg
                                        className="absolute w-[200%] h-[200%] -top-1/2 -left-1/2 pointer-events-none"
                                        viewBox="0 0 100 100"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <motion.path
                                            // d="M 25, 50 a 25,25 0 1,1 50,0 a 25,25 0 1,1 -50,0" // Simple circle path
                                            // More natural hand-drawn path approximation
                                            d="M 30 50 C 30 30, 45 20, 55 25 C 75 30, 85 50, 70 70 C 55 85, 30 80, 25 60 C 22 45, 35 30, 45 35"
                                            fill="none"
                                            stroke="#991B1B"
                                            strokeWidth="3"
                                            strokeLinecap="round"
                                            initial={{ pathLength: 0, opacity: 0 }}
                                            whileInView={{ pathLength: 1, opacity: 1 }}
                                            viewport={{ margin: "-20%" }}
                                            transition={{ duration: 0.8, ease: "easeInOut" }}
                                        />
                                    </svg>
                                </div> {/* Sun 5 - Highlighted */}

                                {/* Week 2 */}
                                <div>6</div>
                                <div>7</div>
                                <div>8</div>
                                <div>9</div>
                                <div>10</div>
                                <div className="text-[#1E3A8A]">11</div>
                                <div className="text-[#991B1B]">12</div>

                                {/* Week 3 */}
                                <div>13</div>
                                <div>14</div>
                                <div>15</div>
                                <div>16</div>
                                <div>17</div>
                                <div className="text-[#1E3A8A]">18</div>
                                <div className="text-[#991B1B]">19</div>

                                {/* Week 4 */}
                                <div>20</div>
                                <div>21</div>
                                <div>22</div>
                                <div>23</div>
                                <div>24</div>
                                <div className="text-[#1E3A8A]">25</div>
                                <div className="text-[#991B1B]">26</div>

                                {/* Week 5 */}
                                <div>27</div>
                                <div>28</div>
                                <div>29</div>
                                <div>30</div>
                                <div></div>
                                <div></div>
                                <div></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section >
    );
}
