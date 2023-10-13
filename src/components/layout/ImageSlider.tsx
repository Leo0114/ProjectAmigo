import { useState, useEffect } from "preact/hooks";

const slides = [
  {
    url: "https://res.cloudinary.com/diiabesnk/image/upload/v1691964387/ksbqcoq2jdixuphzgsqh.webp",
    title: "Food ",
  },
  {
    url: "https://res.cloudinary.com/diiabesnk/image/upload/v1691964387/jkxvcuu2d10crnykv8tr.webp",
    title: "Food 2",
  },
  {
    url: "https://res.cloudinary.com/diiabesnk/image/upload/v1691964387/neuz5thmvahkqtk2d74m.webp",
    title: "Food 3",
  },
  {
    url: "https://res.cloudinary.com/diiabesnk/image/upload/v1691964388/wofztxlplgjivft8g6jt.webp",
    title: "Food 4",
  },
  {
    url: "https://res.cloudinary.com/diiabesnk/image/upload/v1691964387/xhnmofgo7yz9xsui6wug.webp",
    title: "Food 5",
  },
];
export default function ImageSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };
  const nextvSlide = () => {
    const istLastSlide = currentIndex === slides.length - 1;
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
    <div class="max-w-[1400px] mx-auto  px-4  py-12 ">
      <div className=" h-[480px] w-full  relative group ">
        <div
          loading="lazy"
          alt={slides[currentIndex].title}
          className=" w-full h-full rounded-2xl bg-center bg-cover  transition-all  duration-500 border border-slate-400 drop-shadow-xl shadow-xl"
          style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
        ></div>
        <div className="absolute top-[50%] -translate-x-0 translate-y-[-50%]  left-5 text-2xl rounded-full p-2 group-hover:bg-black/20 text-white cursor-pointer bg-slate-900/40">
          <svg
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-10 h-10"
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
            className="w-10 h-10"
            onClick={nextvSlide}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M8.25 4.5l7.5 7.5-7.5 7.5"
            />
          </svg>
        </div>

        <div className=" flex top-4 justify-center py-2">
          {slides.map((slide, slideIndex) => (
            <div
              className="text-2xl "
              key={slideIndex}
              onClick={() => goToSlide(slideIndex)}
            >
              <svg
                width="256"
                height="256"
                viewBox="0 0 256 256"
                className="h-10 w-10 cursor-pointer"
              >
                <path
                  fill="currentColor"
                  d="M140 128a12 12 0 1 1-12-12a12 12 0 0 1 12 12Z"
                />
              </svg>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
