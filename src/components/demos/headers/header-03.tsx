import { Marquee } from "@/components/lib/marquee";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

function HeaderDemo() {
  const marqueeText = [
    "🎨 UI/UX: Designing Intuitive and Accessible Interfaces",
    "⚛️ React: Server Components & Performance Optimizations",
    "🅰️ Angular: Signals & Standalone Components Explained",
    "⚡ Next.js: Edge Rendering vs. SSR – Best Practices",
    "🚀 Vue.js: Composition API vs. Options API – Which to Choose?",
    "🛠️ Svelte: Rethinking Reactivity for Simpler State Management",
    "🌐 Web Performance: Optimizing CLS, LCP & FID",
    "📱 Mobile First: Building Responsive and PWA-ready UIs",
  ];

  const marqueeImages = [
    "https://images.unsplash.com/photo-1609342122563-a43ac8917a3a?auto=format&fit=crop&w=1600&q=80",
    "https://images.unsplash.com/photo-1608481337062-4093bf3ed404?auto=format&fit=crop&w=1600&q=80",
    "https://images.unsplash.com/photo-1418065460487-3e41a6c84dc5?auto=format&fit=crop&w=1600&q=80",
    "https://images.unsplash.com/photo-1505820013142-f86a3439c5b2?auto=format&fit=crop&w=1600&q=80",
    "https://images.unsplash.com/photo-1477322524744-0eece9e79640?auto=format&fit=crop&w=1600&q=80",
    "https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=1600&q=80",
    "https://images.unsplash.com/photo-1585338447937-7082f8fc763d?auto=format&fit=crop&w=1600&q=80",
    "https://images.unsplash.com/photo-1476842384041-a57a4f124e2e?auto=format&fit=crop&w=1600&q=80",
  ];

  const carouselItems = [
    {
      title: "Frontend Performance Tips",
      image:
        "https://images.unsplash.com/photo-1609342122563-a43ac8917a3a?auto=format&fit=crop&w=1600&q=80",
    },
    {
      title: "Dark Mode UI Design",
      image:
        "https://images.unsplash.com/photo-1608481337062-4093bf3ed404?auto=format&fit=crop&w=1600&q=80",
    },
    {
      title: "State Management in React",
      image:
        "https://images.unsplash.com/photo-1418065460487-3e41a6c84dc5?auto=format&fit=crop&w=1600&q=80",
    },
  ];

  const verticalMarqueeItems = [
    "📈 Apple Stock: +3.5%",
    "💰 Bitcoin Hits $60K!",
    "🔥 New JavaScript Framework Released!",
    "🛠️ Web Performance: LCP Optimization",
    "📢 Google I/O Announcements",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  //   useEffect(() => {
  //     const interval = setInterval(() => {
  //       setCurrentIndex((prevIndex) => (prevIndex + 1) % carouselItems.length);
  //     }, 3000);
  //     return () => clearInterval(interval);
  //   }, [carouselItems.length]);

  const marqueeItems = marqueeText.map((item) => (
    <span className="mx-4 text-lg md:text-2xl" key={item}>
      {item}
    </span>
  ));

  const marqueeImagesItems = marqueeImages.map((item) => (
    <Image
      key={item}
      src={item}
      alt="Tech logo"
      width={400}
      height={400}
      className="aspect-video object-cover object-center"
      loading="lazy"
    />
  ));

  return (
    <div className="mx-auto">
      <style>
        {`

         .marquee-wrapper {
            overflow: hidden;
            position: relative;
            white-space: nowrap;
            mask-image: linear-gradient(to right, transparent, white 20%, white 80%, transparent);
            -webkit-mask-image: linear-gradient(to right, transparent, white 20%, white 80%, transparent);
        }
       
       `}
      </style>
      <div className="marquee-wrapper">
        <div className="relative flex overflow-x-hidden">
          <div className="marquee-1 whitespace-nowrap py-12">
            {marqueeItems}
          </div>

          <div className="marquee-1-next absolute top-0 whitespace-nowrap py-12">
            {marqueeItems}
          </div>
        </div>
      </div>
      <div className="marquee-wrapper">
        <Marquee speed={20} reverse className="py-12">
          {marqueeItems}
        </Marquee>
      </div>
      <div className="marquee-wrapper">
        <Marquee speed={50} pauseOnHover className="py-12">
          {marqueeItems}
        </Marquee>
      </div>
      <div className="marquee-wrapper">
        <Marquee
          speed={20}
          vertical
          pauseOnHover
          className="max-h-4 gap-4 py-12"
        >
          {marqueeItems}
        </Marquee>
      </div>

      <div>
        <div className="relative flex overflow-x-hidden">
          <div className="marquee-1 flex items-center">
            {marqueeImagesItems}
          </div>
          <div className="marquee-1-next absolute top-0 flex items-center">
            {marqueeImagesItems}
          </div>
        </div>
      </div>

      <div className="relative w-full overflow-hidden">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {carouselItems.map((item, index) => (
            <div key={index} className="w-full flex-shrink-0 p-4">
              <Image
                src={item.image}
                alt={item.title}
                width={400}
                height={400}
                className="max-h-[500px] w-full rounded-lg object-cover"
              />
              <h3 className="mt-2 text-center text-lg font-semibold">
                {item.title}
              </h3>
            </div>
          ))}
        </div>
        {/* Controls */}
        <button
          onClick={() =>
            setCurrentIndex((prev) =>
              prev > 0 ? prev - 1 : carouselItems.length - 1,
            )
          }
          className="absolute left-0 top-1/2 -translate-y-1/2 transform rounded-full bg-primary p-2 text-primary-foreground"
        >
          <ChevronLeft className="h-6 w-6" />
        </button>
        <button
          onClick={() =>
            setCurrentIndex((prev) => (prev + 1) % carouselItems.length)
          }
          className="absolute right-0 top-1/2 -translate-y-1/2 transform rounded-full bg-primary p-2 text-primary-foreground"
        >
          <ChevronRight className="h-6 w-6" />
        </button>
      </div>

      <div className="relative flex w-full flex-col overflow-hidden bg-gray-800">
        <div className="vertical-marquee-1 flex flex-col text-lg font-semibold">
          {verticalMarqueeItems.map((item, index) => (
            <span key={index} className="py-1">
              {item}
            </span>
          ))}
        </div>
        <div className="vertical-marquee-1-next absolute top-0 flex flex-col text-lg font-semibold">
          {verticalMarqueeItems.map((item, index) => (
            <span key={index} className="py-1">
              {item}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

const html = ``;

const react = ``;

const title = "Simple Navigation Header";

export { HeaderDemo, html, react, title };

