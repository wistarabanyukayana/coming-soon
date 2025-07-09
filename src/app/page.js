import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-12">
      <Image
        src="/logo.png"
        alt="Padelix Logo"
        width={500}
        height={500}
        className="bg-slate-200 rounded-full mb-6 shadow-xl/50 dark:shadow-slate-50 shadow-slate-700 transition-all duration-300 hover:scale-105 transform animate-pulse"
        priority
      />

      <h1 className="text-4xl font-bold mb-2 text-center">Segera Hadir!</h1>
    </main>
  );
}
