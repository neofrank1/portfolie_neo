import { AppHeader } from "./app/app-header";
import { AppContent } from "./app/app-content";
import React from "react";

export function AppLayout({ children }: { children: React.ReactNode }) {
    return (
        <div>
            <AppHeader/>
            <AppContent>
                {/* Content goes here */}
                {children}
            </AppContent>
        </div>
    );
}