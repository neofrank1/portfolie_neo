import { AppContent } from "../components/layout/app/app-content";

export default function NotFound() {
    return (
        <AppContent>
            <div className="flex flex-col justify-center items-center h-full mt-20">
                <h1 className="text-6xl font-bold mb-4">404 - Page Not Found</h1>
                <p className="text-lg text-pretty">Sorry, the page you are looking for does not exist.</p>
            </div>
        </AppContent>
    );
}  