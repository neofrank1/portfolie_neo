import { NavigationMenu, NavigationMenuList, NavigationMenuItem } from "@/components/ui/navigation-menu";
import Link from "next/link";
import { type NavItem } from "@/types/nav_types";
import { Linkedin, Facebook} from "lucide-react";

export function AppHeader() {

    const NavigationList: NavItem[] = [
        { title: "About Me", href: "#about-me" },
        { title: "Projects", href: "#projects" },
        { title: "Contact", href: "#contact" },
    ];

    return (
        <header className="flex justify-around items-center h-16 border-b mb-4 bg-stone-950 text-white">
            <div className="flex justify-center items-center">
                <Link href="/" aria-label="Home">
                    <img src="/neo_logo_clean.svg" alt="Neo logo" className="h-34 w-auto" />
                </Link>
            </div>
            <NavigationMenu>
                <NavigationMenuList className="h-full flex justify-center items-center gap-6">
                    {NavigationList.map((item, index) => (
                        <NavigationMenuItem key={index}>
                            <Link href={item.href} className="hover:text-slate-600 font-bold">{item.title}</Link>
                        </NavigationMenuItem>
                    ))}
                </NavigationMenuList>
            </NavigationMenu>
            <div className="grid grid-cols-3 gap-5">
                <Link href="https://www.linkedin.com/in/neo-frank-uy/" aria-label="LinkedIn profile">
                    <Linkedin className="text-white fill-current" fill="currentColor" stroke="none" />
                </Link>
                <Link href="https://web.facebook.com/kratos9700/" aria-label="Facebook profile">
                    <Facebook className="text-white fill-current" fill="currentColor" stroke="none"/>
                </Link>
                <Link href="#"></Link>
            </div>
        </header>
    );
}