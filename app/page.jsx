import Scene from "@/components/Scene";
import dynamic from "next/dynamic";

// Only render the 3D scene on the client
const Scene = dynamic(() => import("@/components/Scene"), {
  ssr: false,
});

export default function Home() {
  return (
    <main className="relative h-screen">
      <Scene />
    </main>
  );
}
