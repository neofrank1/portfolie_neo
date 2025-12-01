import { AppHeader } from "./app/app-header";
import { AppContent } from "./app/app-content";
import { AppFooter } from "./app/app-footer";
import React from "react";

export function AppLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className="flex min-h-screen flex-col">
            <AppHeader/>
            <AppContent>
                {/* Content goes here */}
                {children}
            </AppContent>
            <AppFooter/>
        </div>
    );
}