import { gsap } from "gsap";
import { useEffect, useRef } from "react";
import Logo from "../../../components/Logo";
import Icons from "../../../components/Icons";

function Hero() {
  const marker = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);
  const descriptionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.set(descriptionRef.current, { opacity: 0, scale: 0.74 });

    gsap.to(headingRef.current, {
      opacity: 0,
      scale: 0.8,
      scrollTrigger: {
        scrub: 1,
        start: "top 94%",
        end: "top center",
        trigger: marker.current,
      },
    });

    gsap.to(descriptionRef.current, {
      opacity: 1,
      scale: 1,
      scrollTrigger: {
        scrub: true,
        end: "top 0%",
        start: "top 40%",
        trigger: marker.current,
      },
    });
  }, []);

  return (
    <>
      <div className="hero-section">
        <div className="hero-heading">
          <h1 ref={headingRef}>Yaba</h1>
          <h3 ref={descriptionRef}>
            Create workspaces, organize bookmarks and set reminders
            effortlessly.
          </h3>
        </div>

        <div className="hero-marker" ref={marker} />
      </div>

      <div className="fixed-nav">
        <div className="fixed-nav__content">
          <div className="nav-item logo">
            <Logo bg="#1e1e1e" color="#fff" size={38} />
            <p className="logo-text">Yaba</p>
          </div>

          <a
            target="_blank"
            rel="noreferrer"
            className="nav-item"
            href="https://github.com/codergon/Yaba"
          >
            <Icons.GitHubLogo size={17} />
            <p>Github</p>
          </a>
          <a
            target="_blank"
            rel="noreferrer"
            className="nav-item chrome-link"
            href="https://chrome.google.com/webstore/detail/lagenfgfnjhnkimjbocgnfmhdeckhfgk"
          >
            Download
          </a>
        </div>
      </div>
    </>
  );
}

export default Hero;
