import { Inter } from "next/font/google";
import Skills from "@/components/Skills";
import CandlestickChart from "@/components/TestSkills";
import { useState } from "react";
import * as d3 from "d3"
import { TestSkills2 } from "@/components/TestSkills2";
import SkillSet from "@/components/SkillSet";
import Navbar from "@/components/Navbar";
import MobileNavbar from "@/components/MobileNavbar";
import HeroSection from "@/components/HeroSection";
import AboutMe from "@/components/AboutMe";
import Timeline from "@/components/Timeline";
import SkillsGeo from "@/components/SkillsGeo";
import Experience from "@/components/Experience";
import ContactMe from "@/components/ContactMe";


const inter = Inter({ subsets: ["latin"] });

  

export default function Home() {
	const [nav, setNav] = useState(false)
	const openNav = ()=> setNav(true)
	const closeNav = ()=> setNav(false)
return (
	<>
		<MobileNavbar nav={nav} closeNav={closeNav} />
		<Navbar openNav={openNav} />
		<HeroSection />
		<div className="relative z-30">
			<AboutMe />
			<Timeline />
			<SkillsGeo />
			<Experience />
			<ContactMe />
		</div>
		{/* <Skills />
		<SkillSet /> */}
	</>

);
}

