import Image from "next/image";
import appScreenshot from "./assets/ss.jpeg";
import Iphone15Pro from "@/components/ui/iphone-15-pro";
import { AnimatedGradientTextDemo } from "@/components/mvp";
import HyperText from "@/components/ui/hyper-text";
import SparklesText from "@/components/ui/sparkles-text";
import { RainbowButton } from "@/components/ui/rainbow-button";
import { DownloadStats } from "@/components/custom/stats";
export default function Home() {
  return (
    <main className="w-full flex min-h-screen flex-col items-center p-4 sm:p-8 lg:p-24 mb-[20rem] mt-2">
      <div className="w-full grid grid-cols-1 lg:grid-row-3 gap-8 items-center justify-center">
        <div className="flex flex-col justify-center items-center space-y-6 lg:col-span-2">
          <AnimatedGradientTextDemo />
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-center">
            AI College Helper
          </h1>
          <p className="text-lg md:text-xl text-gray-600 text-center">
            Your intelligent companion for academic success
          </p>
          <DownloadStats />
          <div className="flex justify-center bg-slate-900 px-2 rounded-lg">
            <RainbowButton>Download Now</RainbowButton>
          </div>
        </div>
        <div className="flex">
          <div className="h-[400px] sm:h-[500px] lg:h-[600px] w-full items-center justify-center flex mt-48">
            <Iphone15Pro src={appScreenshot.src} />
          </div>
        </div>
      </div>
    </main>
  );
}
