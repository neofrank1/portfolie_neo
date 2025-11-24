import Link from "next/link";
import { Facebook, Linkedin } from "lucide-react";

export function AppFooter() {
    return (
        <footer className="grid grid-cols-[1fr_auto_1fr] items-center h-16 border-t bg-stone-300 text-white px-4">
            <div className="flex justify-center items-center">
                <p className="text-stone-500">Copyright © 2025 Neo Frank Uy</p>
            </div>
            <div></div>
            <div className="flex justify-center items-center gap-3">
                <Link href="https://www.linkedin.com/in/neo-frank-uy/" aria-label="LinkedIn profile">
                    <Linkedin className="text-stone-500 fill-current hover:fill-slate-600" fill="currentColor" stroke="none" />
                </Link>
                <Link href="https://web.facebook.com/kratos9700/" aria-label="Facebook profile">
                    <Facebook className="text-stone-500 fill-current hover:fill-slate-600" fill="currentColor" stroke="none"/>
                </Link>
            </div>
        </footer>
    );
}