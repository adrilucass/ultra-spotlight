import { Search } from "lucide-react";

export default function Home() {
  return (
    <main className="flex items-center justify-center h-screen p-2">
      <div className="relative w-full flex items-center gap-4 px-4 h-full border-1 border-zinc-200/10 bg-zinc-800/95 shadow-md rounded-2xl">
        <Search size={30} className="text-zinc-400/40"/>
        <input type="text" placeholder="Spotlight Search" className="text-zinc-200 placeholder:text-zinc-200/30 outline-none text-xl text-left w-full" />
      </div>
    </main>
  );
}
