"use client"
import { useEffect } from "react";
import { PiStarFourFill } from "react-icons/pi";

export function SparkleText ({text}: {text: string}) {
  // Source: https://ui.hextastudio.in/docs/examples/general/SparkleTextEffect
  useEffect(() => {
    let index = 0;
    const interval = 1300;

    const rand = (min: number, max: number) =>
      Math.floor(Math.random() * (max - min + 1)) + min;

    const animate = (star: HTMLElement) => {
      star.style.setProperty("--star-left", `${rand(-10, 100)}%`);
      star.style.setProperty("--star-top", `${rand(-40, 80)}%`);
    };

    const stars = Array.from(document.getElementsByClassName("magic-star"));
    for (const star of stars) {
      const htmlStar = star as HTMLElement;
      setTimeout(() => {
        animate(htmlStar);

        setInterval(() => animate(htmlStar), 1300);
      }, index++ * (interval / 2));
    }
  }, []);

  return (
    <>
        <div>
            <span className="inline-block magic bg-clip-text bg-gradient-to-r from-pink-500 via-purple-200 to-pink-500 text-transparent font-bold relative hover:from-purple-500 hover:via-pink-400 hover:to-pink-500">
              <span>{text}</span>
              <PiStarFourFill className="magic-star [--size:clamp(20px,1.5vw,30px)] block h-[--size] w-[--size] top-[--star-top] left-[--star-left] absolute animate-starScale text-yellow-200" />
              <PiStarFourFill className="magic-star [--size:clamp(20px,1.5vw,30px)] block h-[--size] w-[--size] top-[--star-top] left-[--star-left] absolute animate-starScale text-yellow-200" />
            </span>
        </div>
    </>
  );
};