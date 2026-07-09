import { Button } from "@/components/ui/button";

export default function LandingPage(){
    return (
        <>
        <Button>Landing Page</Button>
        </>
    )
}
export function Landing() {
 
    return (
        <div className="flex flex-col items-center justify-center h-screen">
            <h1 className="text-4xl font-bold mb-4">Landing Page</h1>
            <p className="text-lg mb-8">Welcome to the landing page of our application.</p>
            <Button variant="secondary">Get Started by Clicking here</Button>
        </div>
    );

}