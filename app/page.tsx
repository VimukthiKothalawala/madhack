import Image from "next/image";
import Navbar from "./_components/navbar";

import { Fira_Code } from "next/font/google";
import { FlipWords } from "@/components/flip-words";
import { TextGenerateEffect } from "@/components/text-generate";
import { WobbleCard } from "@/components/wobble-card";
import { Card } from "@/components/card";

import whatis from "@/assets/whatis.png";
import { Timeline } from "@/components/timeline";
import { time } from "@/timeline";
import { FloatingNav } from "@/components/floating-nav";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import { HoverBorderGradient } from "@/components/hover-boder";

// Configure the Fira Code font
const firaCode = Fira_Code({
  subsets: ["latin"],
  weight: ["400", "500", "700"], // Specify the weights you want to use
  display: "swap",
});

export default function Home() {
  return (
    <div>
      <Navbar />
      <FloatingNav
        navItems={[
          { name: "Home", link: "/" },
          { name: "About", link: "/" },
          { name: "Timeline", link: "/" },
        ]}
      />
      <div className="h-[50rem] w-full dark:bg-black bg-white  dark:bg-grid-white/[0.2] bg-grid-black/[0.2] relative flex items-center justify-center">
        {/* Radial gradient for the container to give a faded look */}
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
        <div>
          <h1
            className={`text-8xl font-bold text-sky-500 ${firaCode.className}`}
          >
            MADHACK 3.0
          </h1>
          <TextGenerateEffect
            className="bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500"
            words="Unleashing Innovation and Creativity in Mobile App Development."
          />
        </div>
      </div>

      <div>
        <Card
          className="w-full"
          children={
            <div className="flex items-center gap-6">
              <Image className="rounded-lg" src={whatis} height={400} alt="" />
              <div>
                <div
                  className={`font-bold text-4xl mb-3 ${firaCode.className}`}
                >
                  What is MADHACK?
                </div>
                <div className="text-xl">
                  Introducing Sri Lanka’s first Mobile Application Development
                  Hackathon, the IEEE Student Branch of UCSC proudly presents
                  'MadHack', an inter-university hackathon followed by a series
                  of workshops. MadHack aims to let the participants put their
                  creativity and innovation to the test by giving them the
                  opportunity to develop in any platform of choice.
                </div>
              </div>
            </div>
          }
        />
      </div>

      <div className="mt-[84px]">
        <div className={`text-4xl font-bold ${firaCode.className} p-4`}>
          Timeline
        </div>
        <Timeline
          data={[
            {
              title: "Jan 6th",
              content: (
                <div className="mb-8">
                  <WobbleCard className="text-3xl font-bold">
                    Awareness Session (Virtual)
                  </WobbleCard>
                </div>
              ),
            },
            {
              title: "Jan 10th",
              content: (
                <div className="mb-8">
                  <WobbleCard className="text-3xl font-bold">
                    Mobile App Designing Session (Virtual)
                  </WobbleCard>
                </div>
              ),
            },
            {
              title: "Feb 4th",
              content: (
                <div className="mb-8">
                  <WobbleCard className="text-3xl font-bold">
                    Workshop - Flutter Session - Basics (Virtual)
                  </WobbleCard>
                </div>
              ),
            },
          ]}
        />
      </div>

      <div className="mt-[84px]">
        <div className={`text-4xl font-bold ${firaCode.className} p-4`}>
          Prizes
        </div>
        <div className="grid grid-cols-3">
          <CardContainer className="inter-var">
            <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
              <CardItem
                translateZ="50"
                className="text-4xl m-auto font-bold bg-gradient-to-bl from-slate-100 to-slate-200 text-transparent bg-clip-text"
              >
                Silver
              </CardItem>
              <CardItem translateZ="100" className="w-full mt-4">
                <Image
                  src="https://madhack.ucscieee.lk/static/media/1.d2d9d01c450deb46e6cf.png"
                  height="500"
                  width="500"
                  className="h-60 w-auto m-auto rounded-xl group-hover/card:shadow-xl"
                  alt="thumbnail"
                />
              </CardItem>
              <div className="flex justify-center items-center mt-20">
                <HoverBorderGradient>40,000 LKR</HoverBorderGradient>
              </div>
            </CardBody>
          </CardContainer>

          <CardContainer className="inter-var">
            <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
              <CardItem
                translateZ="50"
                className="text-4xl m-auto font-bold bg-gradient-to-bl from-yellow-500 to-yellow-600 text-transparent bg-clip-text"
              >
                Gold
              </CardItem>
              <CardItem translateZ="100" className="w-full mt-4">
                <Image
                  src="https://madhack.ucscieee.lk/static/media/2.77ab750a1741046710e1.png"
                  height="500"
                  width="500"
                  className="h-60 w-auto m-auto rounded-xl group-hover/card:shadow-xl"
                  alt="thumbnail"
                />
              </CardItem>
              <div className="flex justify-center items-center mt-20">
                <HoverBorderGradient>60,000 LKR</HoverBorderGradient>
              </div>
            </CardBody>
          </CardContainer>

          <CardContainer className="inter-var">
            <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
              <CardItem
                translateZ="50"
                className="text-4xl m-auto font-bold bg-gradient-to-bl from-amber-700 to-amber-900 text-transparent bg-clip-text"
              >
                Bronze
              </CardItem>
              <CardItem translateZ="100" className="w-full mt-4">
                <Image
                  src="https://madhack.ucscieee.lk/static/media/3.79d47d0340ba066bd0fd.png"
                  height="500"
                  width="500"
                  className="h-60 w-auto m-auto rounded-xl group-hover/card:shadow-xl"
                  alt="thumbnail"
                />
              </CardItem>
              <div className="flex justify-center items-center mt-20">
                <HoverBorderGradient>20,000 LKR</HoverBorderGradient>
              </div>
            </CardBody>
          </CardContainer>
        </div>
      </div>
    </div>
  );
}
