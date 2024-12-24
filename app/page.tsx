import Grid from "@/components/Grid";
import Hero from "@/components/Hero";
import { FloatingNav } from "@/components/ui/floating-navbar";
import RecentProjects from "@/components/RecentProjects";
import { navItems } from "@/data";
import Education from "@/components/Education";
import Experience from "@/components/Experience";
import Approach from "@/components/Approach";

export default function Home() {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <FloatingNav navItems={
          navItems
        }></FloatingNav>
        <Hero></Hero>
        <Grid></Grid>
        <RecentProjects></RecentProjects>
        <Education></Education>
        <Experience></Experience>
        <Approach></Approach>
      </div>
    </main>
  );
}
