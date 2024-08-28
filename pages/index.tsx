import Image from "next/image";
import { Inter } from "next/font/google";
import Skills from "@/components/Skills";
import CandlestickChart from "@/components/TestSkills";
import { useState } from "react";
import * as d3 from "d3"
import { TestSkills2 } from "@/components/TestSkills2";
import SkillSet from "@/components/SkillSet";
const inter = Inter({ subsets: ["latin"] });

  

export default function Home() {
    return (
        <>
        <h1>Homepage</h1>
        <Skills />
        <SkillSet />
        </>
        
    );
}

