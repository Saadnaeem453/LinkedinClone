import Feed from "@/components/Home/Feed";
import News from "@/components/Home/News";
import Sidebar from "@/components/Home/Sidebar";
import { currentUser } from "@clerk/nextjs/server";

export default async function Home() {
  const user = await currentUser()
  return (
    <main className=" p-20 ">
      <div className="max-w-6xl mx-auto flex justify-between gap-8 ">
        {/* Sidebar */}
        <Sidebar user={user} />
        {/* Feed  */}
        <Feed />
        {/* News */}
        <News />
      </div>
    </main>
  );
}
