import Feed from "@/components/Home/Feed";
import News from "@/components/Home/News";
import Sidebar from "@/components/Home/Sidebar";

export default function Home() {
  return (
    <main className=" p-20 ">
      <div className="max-w-6xl mx-auto flex justify-between gap-8 ">
        {/* Sidebar */}
        <Sidebar />
        {/* Feed  */}
        <Feed />
        {/* News */}
        <News />
      </div>
    </main>
  );
}
