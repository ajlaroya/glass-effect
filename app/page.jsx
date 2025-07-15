import Index from "@/components/Scene/Index";
// import dynamic from "next/dynamic";

// Only render the 3D scene on the client
// const Scene = dynamic(() => import('@/components/Scene/Index'), {
//     ssr: !!false,
// })

export default function Home() {
  return (
    <main className="relative h-screen">
      <Index />
    </main>
  );
}
