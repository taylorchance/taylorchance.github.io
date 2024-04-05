"use client";

import Button from "../common/Button";
import Heading from "../common/Heading";
import Text from "../common/Text";

export default function About() {
  return (
    <div
      className="centered-block flex flex-col items-center pb-16 lg:flex-row lg:gap-14 lg:pb-48"
      id="skills"
    >
      {/* <div className="mb-9 w-full lg:mb-0 lg:w-1/2">
        <Heading>About Me</Heading>
        <Text className="mb-4">
          I&apos;m a passionate Software Developer with a journey spanning
          more than a decade in the ever-evolving digital landscape.
          My
          expertise lies in crafting pixel-perfect designs and translating them
          into smooth, responsive, and visually stunning websites.
        </Text>
        <Text>
          Over the years, I&apos;ve had the privilege of building websites for
          various clients, including a bank, a popular artist&apos;s promotional
          website, a website for a popular company&apos;s new product launch,
          and a corporate website.
        </Text>
      </div>
      <div className="flex w-full flex-col items-start justify-center lg:w-1/2"> */}
      <div className="flex w-full flex-col items-start justify-center">

        <div className="centered-block flex flex-col justify-center mb-20">
          <Heading className="mb-4 text-center">Skills</Heading>
          <Text className="text-center text-sm text-neutral-500">
            Here are just a few of the tools I like to use. Due to my extensive agency experience, I have also picked up many technologies on the fly.
          </Text>
        </div>

        <h2 className="mb-6 font-anek-bangla text-2xl font-semibold text-raisin-black sm:text-3xl">
          Client Side
        </h2>
        {/* <div className="mb-7 grid grid-cols-2 gap-3 font-anek-bangla text-lg min-[375px]:grid-cols-3 sm:grid-cols-4"> */}
        <div className="mb-7 flex flex-wrap gap-3 font-anek-bangla text-lg">
          <Button>Typescript</Button>
          <Button>VueJS</Button>
          <Button>ReactJS</Button>
          <Button>NuxtJS</Button>
          <Button>NextJS</Button>
          <Button>Wordpress</Button>
          <Button>Shopify / Liquid</Button>
          <Button>GSAP</Button>
        </div>

        <h3 className="mb-5 font-anek-bangla text-xl font-semibold text-raisin-black sm:text-2xl">
          Server Side
        </h3>
        <div className="mb-7 flex flex-wrap gap-3 font-anek-bangla text-lg">
          <Button>Node.js</Button>
          <Button>Express.js</Button>
          <Button>GraphQL</Button>
          <Button>Firebase</Button>
          <Button>PHP</Button>
          <Button>MySQL</Button>
          <Button>NoSQL</Button>
          <Button>MongoDB</Button>
        </div>

        <h3 className="mb-5 font-anek-bangla text-xl font-semibold text-raisin-black sm:text-2xl">
          Tools
        </h3>
        <div className="mb-7 flex flex-wrap gap-3 font-anek-bangla text-lg">
          <Button>NPM</Button>
          <Button>Webpack</Button>
          <Button>Github Actions</Button>
          <Button>Docker</Button>
          <Button>GCP</Button>
          <Button>Jenkins</Button>
          <Button>Figma</Button>
        </div>
      </div>
    </div>
  );
}
