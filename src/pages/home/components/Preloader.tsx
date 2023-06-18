import { gsap } from "gsap";
import { each, words } from "lodash";
import { useEffect, useRef } from "react";

function Preloader() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const preloader = ref.current;
    if (!preloader) return;
    const lines = preloader.querySelectorAll(".preloader__text-line");

    each(lines, (line, index) => {
      const wordsArray = words(line.textContent ?? "");
      line.innerHTML = wordsArray
        .map(word => `<span>${word}&nbsp;</span>`)
        .join("");

      const wordSpans = line.querySelectorAll("span");
      const tl = gsap.timeline(); // Delay animation based on index
      gsap.set(wordSpans, { opacity: 0, y: "60%", rotate: 10 });

      tl.to(wordSpans, {
        opacity: 1,
        y: "0%",
        rotate: 0,
        stagger: 0.06,
        duration: 0.5,
        ease: "power2.out",
        delay: 0.4 * index,
      }).to(wordSpans, {
        y: "120%",
        rotate: 3,
        opacity: 0,
        duration: 0.4,
        stagger: 0.06,
        ease: "power2.out",
        staggerDirection: -1,
        delay: (lines.length - index) * 0.6 + 1.3,
      });
    });

    gsap.to(".preloader", {
      scaleY: 0,
      delay: 4.5,
      duration: 1.2,
      ease: "power3.out",
      transformOrigin: "top",
      onComplete: () => {
        const homepage = document.querySelector(".home-page");
        if (homepage) homepage.classList.remove("no-scroll");
      },
    });
  }, []);

  return (
    <div className="preloader">
      <p className="preloader__text" ref={ref}>
        <span className="preloader__text-line">Supercharge your browsing</span>
        <br />
        <span className="preloader__text-line">experience and maximize</span>
        <br />
        <span className="preloader__text-line">productivity</span>
      </p>
    </div>
  );
}

export default Preloader;
