import {Button } from "@/components/ui/button";
export default function EditorPage() {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-4xl font-bold mb-4">Editor Page</h1>
      <p className="text-lg mb-8">This is the editor page where you can create and edit content.</p>
      <Button variant="secondary">Create New Document</Button>
    </div>
  );
}