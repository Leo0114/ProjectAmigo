import { useState, useEffect } from "preact/hooks";
import { imageSlide } from "@data/about";

export default function ImageSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? imageSlide.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };
  const nextvSlide = () => {
    const istLastSlide = currentIndex === imageSlide.length - 1;
    const newIndex = istLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };
  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextvSlide();
    }, 4000);

    return () => clearInterval(interval);
  }, [currentIndex]);

  return (
    <div class="max-w-[1400px] mx-auto px-4 py-12">
      <div className="lg:h-[480px] w-full relative group h-[380px]">
        <div
          loading="lazy"
          alt={imageSlide[currentIndex].title}
          className=" w-full h-full rounded-2xl bg-center bg-cover  transition-all  duration-500 border border-slate-400 drop-shadow-xl shadow-xl"
          style={{ backgroundImage: `url(${imageSlide[currentIndex].slide})` }}
        ></div>
        <div className="absolute top-[50%] -translate-x-0 translate-y-[-50%]  left-5 text-2xl rounded-full p-2 group-hover:bg-black/20 text-white cursor-pointer bg-slate-900/40">
          <svg
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="lg:w-10 lg:h-10 w-5 h-5"
            onClick={prevSlide}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 19.5L8.25 12l7.5-7.5"
            />
          </svg>
        </div>
        <div className="absolute top-[50%] -translate-x-0 translate-y-[-50%]  right-5 text-2xl rounded-full p-2 group-hover:bg-black/20 text-white cursor-pointer bg-slate-900/40">
          <svg
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="lg:w-10 lg:h-10 w-5 h-5"
            onClick={nextvSlide}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M8.25 4.5l7.5 7.5-7.5 7.5"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}
