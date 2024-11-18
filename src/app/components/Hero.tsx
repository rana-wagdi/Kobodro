import Image from "next/image";
//img
import hero from "../../../public/hero/hero.svg";
import mobile from "../../../public/hero/mobile.svg";
import { Typography } from "./design-system";
//hooks
import useBreakpoint from "../hooks/useBreakpoint";
//icons
import AppStoreHero from "../icons/appstoreHero";
import AppleLogoHero from "../icons/appleLogoHero";

export default function Hero() {
  const { md } = useBreakpoint();
  return (
    <div
      className="md:flex justify-between sm:block sm:px-[16px] sm:mt-[40px] md:mt-[100px] md:pl-[100px] overflow-hidden"
      id="hero"
    >
      <div>
        <Typography
          size="h1"
          className="text-primary-950 mt-[50px] block lg:w-[80%] md:w-[70%]"
        >
          Start spending the smart way
        </Typography>
        <Typography
          size="xl"
          className="block mt-[16px]  leading-[30px] md:w-[80%] text-neutral-900"
        >
          Take Control of Your Finances Anytime, Anywhere <br /> with Kobodrop.
          Discover the Smart Way to Use <br /> Your Money!
        </Typography>
        <div className="flex mt-[35px] gap-x-4">
          <AppStoreHero />
          <AppleLogoHero />
        </div>
      </div>
      <Image
        src={hero}
        width={md ? 450 : 650}
        height={md ? 512 : 612}
        alt="hero-img"
        className="sm:hidden md:block z-[-2]"
      />
      <Image
        src={mobile}
        width={md ? 200 : 320}
        height={md ? 552 : 652}
        className="sm:static sm:z-0 sm:mx-auto  md:absolute md:z-[-1] lg:right-[450px] md:right-[300px] sm:mt-[80px] md:top-[177px]"
        alt="hero-img"
      />
    </div>
  );
}
