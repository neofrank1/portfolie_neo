import React from 'react';

export function AppContent({ children }: { children: React.ReactNode }) {
    return (
        <main>
            {children}
        </main>
    );
}