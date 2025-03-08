import { Marquee } from "@/components/lib/marquee";
import React from "react";

function MarqueeDemo() {
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
  return (
    <div className="flex flex-col gap-8 px-4 py-10 relative whitespace-nowrap [mask-image:linear-gradient(to_right,transparent,white_10%,white_90%,transparent)]">
      <Marquee pauseOnHover>
        {marqueeText.map((item) => (
          <span key={item} className="text-xl">{item}</span>
        ))}
      </Marquee>
      <Marquee reverse pauseOnHover>
        {marqueeText.map((item) => (
          <span key={item} className="text-xl">{item}</span>
        ))}
      </Marquee>
    </div>
  );
}

const html = ``;

const react = `
import { Marquee } from "@/components/lib/marquee";
import React from "react";

function MarqueeDemo() {
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
  return (
    <div className="flex flex-col gap-8 px-4 py-10 relative whitespace-nowrap [mask-image:linear-gradient(to_right,transparent,white_10%,white_90%,transparent)]">
      <Marquee pauseOnHover>
        {marqueeText.map((item) => (
          <span key={item} className="text-xl">{item}</span>
        ))}
      </Marquee>
      <Marquee reverse pauseOnHover>
        {marqueeText.map((item) => (
          <span key={item} className="text-xl">{item}</span>
        ))}
      </Marquee>
    </div>
  );
}
`;

export { MarqueeDemo, html, react };
