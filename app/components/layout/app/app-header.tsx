import { NavigationMenu, NavigationMenuList, NavigationMenuItem } from "@/components/ui/navigation-menu";

export function AppHeader() {
    return (
        <header className="flex justify-around items-center h-16 border-b">
            <div>
                Logo
            </div>
            <NavigationMenu className="h-full flex justify-center items-center gap-4">
                <NavigationMenuList>
                    <NavigationMenuItem>
                        <a href="#about-me">About Me</a>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                        <a href="#projects">Projects</a>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                        <a href="#contact">Contact</a>
                    </NavigationMenuItem>
                </NavigationMenuList>
            </NavigationMenu>
            <div>
                Social
            </div>
        </header>
    );
}