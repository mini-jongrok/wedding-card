"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Account() {
    return (
        <section className="py-20 text-center">
            <div className="container mx-auto px-4 max-w-md">
                <h2 className="text-3xl font-serif text-[#2F4F2F] mb-8 tracking-widest" style={{ fontFamily: 'Mapo, serif' }}>
                    마음 전하실 곳
                </h2>
                <p className="text-gray-600 mb-10 text-sm leading-relaxed" style={{ fontFamily: 'Mapo, sans-serif' }}>
                    참석하지 못하시더라도 축하의 마음을<br />
                    전달해 주시면 감사하겠습니다.
                </p>

                <div className="space-y-4">
                    <AccountSection title="신랑측 계좌번호">
                        <AccountItem
                            relation="신랑 아버지"
                            name="백승곤"
                            bank="기업은행"
                            accountNumber="409-007888-01012"
                        />
                        <AccountItem
                            relation="신랑 어머니"
                            name="임연주"
                            bank="농협"
                            accountNumber="1110-12-193447"
                        />
                    </AccountSection>

                    <AccountSection title="신부측 계좌번호">
                        <AccountItem
                            relation="신부 아버지"
                            name="서동석"
                            bank="신협"
                            accountNumber="05-01212-000337"
                        />
                        <AccountItem
                            relation="신부 어머니"
                            name="김현정"
                            bank="케이뱅크"
                            accountNumber="10-01135-90281"
                        />
                    </AccountSection>
                </div>
            </div>
        </section>
    );
}

function AccountSection({ title, children }: { title: string, children: React.ReactNode }) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="border-b border-gray-200">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-full flex justify-start items-center gap-2 py-4 bg-transparent outline-none"
            >
                <span className={`transform transition-transform duration-300 ${isOpen ? "rotate-90" : "rotate-0"}`}>
                    &gt;
                </span>
                <span className="font-bold text-[#2F4F2F] text-lg" style={{ fontFamily: 'Mapo, sans-serif' }}>{title}</span>
            </button>
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="overflow-hidden"
                    >
                        <div className="pb-6 space-y-6 pt-2">
                            {children}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}

function AccountItem({ relation, name, bank, accountNumber }: { relation: string, name: string, bank: string, accountNumber: string }) {
    const [copied, setCopied] = useState(false);
    const accountNumberOnlyDigit = accountNumber.replace(/[^0-9]/g, "");
    const handleCopy = async () => {
        try {
            await navigator.clipboard.writeText(`${accountNumberOnlyDigit}`);
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        } catch (err) {
            console.error("Failed to copy", err);
        }
    };

    return (
        <div className="flex justify-between items-end text-left">
            <div className="w-full">
                <div className="flex justify-between items-start mb-1">
                    <div className="flex items-center gap-2">
                        <p className="text-xs text-gray-500" style={{ fontFamily: 'Mapo, sans-serif' }}>{relation}</p>
                        <p className="text-sm text-gray-800 font-medium" style={{ fontFamily: 'Mapo, sans-serif' }}>{name}</p>
                    </div>
                    <button
                        onClick={handleCopy}
                        className="text-xs px-2 py-1 rounded bg-gray-100 hover:bg-gray-200 text-gray-600 transition-colors"
                        style={{ fontFamily: 'Mapo, sans-serif' }}
                    >
                        {copied ? "복사됨" : "복사"}
                    </button>
                </div>
                <div className="flex items-center gap-2">
                    <p className="font-medium text-gray-800 text-base" style={{ fontFamily: 'Mapo, sans-serif' }}>{bank} {accountNumber}</p>
                </div>
            </div>
        </div>
    );
}
