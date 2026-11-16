
import { useLayoutEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function MotionEffects({ root }) {
  useLayoutEffect(() => {
    const scope =
      root?.current ??
      document.getElementById("app-root") ??
      document.getElementById("root");

    if (!scope) {
      console.warn("[GSAP] App root was not provided.");
      return undefined;
    }

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      console.warn(
        "[GSAP] Animations disabled by the reduced-motion preference.",
      );
      return undefined;
    }

    const context = gsap.context(() => {
      const select = gsap.utils.selector(scope);

      const get = (selector) => select(selector);
      const first = (selector) => get(selector)[0];

      // --------------------------------------------------
      // HERO ENTRANCE
      // --------------------------------------------------

      const hero = gsap.timeline({
        defaults: { ease: "power3.out" },
        delay: 0.1,
      });

      if (first("[data-hero-intro]")) {
        hero.fromTo(
          "[data-hero-intro]",
          { autoAlpha: 0, y: 30 },
          { autoAlpha: 1, y: 0, duration: 0.7 },
        );
      }

      if (first("[data-hero-heading]")) {
        hero.fromTo(
          "[data-hero-heading]",
          { autoAlpha: 0, y: 75 },
          { autoAlpha: 1, y: 0, duration: 1 },
          "-=0.35",
        );
      }

      if (first("[data-hero-description]")) {
        hero.fromTo(
          "[data-hero-description]",
          { autoAlpha: 0, y: 35 },
          { autoAlpha: 1, y: 0, duration: 0.7 },
          "-=0.4",
        );
      }

      if (get("[data-hero-action]").length) {
        hero.fromTo(
          "[data-hero-action]",
          { autoAlpha: 0, y: 30, scale: 0.94 },
          {
            autoAlpha: 1,
            y: 0,
            scale: 1,
            duration: 0.65,
            stagger: 0.15,
          },
          "-=0.35",
        );
      }

      if (first("[data-hero-portrait]")) {
        hero.fromTo(
          "[data-hero-portrait]",
          { autoAlpha: 0, y: 55, rotate: 2 },
          {
            autoAlpha: 1,
            y: 0,
            rotate: 0,
            duration: 1.15,
            ease: "power3.out",
          },
          "-=0.8",
        );
      }

      if (first("[data-hero-image]")) {
        hero.fromTo(
          "[data-hero-image]",
          { scale: 1.12 },
          { scale: 1, duration: 1.5, ease: "power2.out" },
          "<",
        );

        // Gentle continuous portrait movement.
        gsap.to("[data-hero-image]", {
          scale: 1.035,
          duration: 5,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
          delay: 1.8,
        });
      }

      if (get("[data-hero-fact]").length) {
        hero.fromTo(
          "[data-hero-fact]",
          { autoAlpha: 0, y: 32 },
          {
            autoAlpha: 1,
            y: 0,
            duration: 0.65,
            stagger: 0.12,
          },
          "-=0.5",
        );
      }

      // --------------------------------------------------
      // REUSABLE SCROLL REVEAL
      // --------------------------------------------------

      const reveal = (
        selector,
        {
          y = 55,
          scale = 0.96,
          duration = 0.85,
          stagger = 0.1,
          start = "top 90%",
        } = {},
      ) => {
        const elements = get(selector);

        elements.forEach((element, index) => {
          gsap.fromTo(
            element,
            {
              autoAlpha: 0,
              y,
              scale,
            },
            {
              autoAlpha: 1,
              y: 0,
              scale: 1,
              duration,
              delay: (index % 4) * stagger,
              ease: "power3.out",
              clearProps: "opacity,visibility,transform",
              scrollTrigger: {
                trigger: element,
                start,
                once: true,
                invalidateOnRefresh: true,
              },
            },
          );
        });

        return elements.length;
      };

      // --------------------------------------------------
      // ABOUT
      // --------------------------------------------------

      reveal("[data-about-intro]", {
        y: 35,
        scale: 1,
        stagger: 0.12,
      });

      reveal("[data-timeline-entry]", {
        y: 65,
        scale: 0.95,
        start: "top 92%",
        stagger: 0.15,
        duration: 1,
      });

      // --------------------------------------------------
      // SKILLS
      // --------------------------------------------------

      reveal("[data-skills-heading]", {
        y: 30,
        scale: 1,
      });

      reveal("[data-skill-card]", {
        y: 75,
        scale: 0.92,
        start: "top 94%",
        stagger: 0.12,
        duration: 1,
      });

      reveal("[data-toolbox-intro]", {
        y: 35,
        scale: 1,
      });

      get("[data-toolbox-track]").forEach((track, index) => {
        const direction = track.dataset.toolboxTrack;
        const halfWidth = track.scrollWidth / 2;
        if (!halfWidth) return;

        gsap.fromTo(
          track,
          { x: () => (direction === "left" ? 0 : -track.scrollWidth / 2) },
          {
            x: () => (direction === "left" ? -track.scrollWidth / 2 : 0),
            duration: index === 0 ? 34 : 38,
            ease: "none",
            repeat: -1,
            scrollTrigger: {
              trigger: track.parentElement,
              start: "top bottom",
              end: "bottom top",
              toggleActions: "play pause resume pause",
              invalidateOnRefresh: true,
            },
          },
        );
      });

      // --------------------------------------------------
      // TRAINING
      // --------------------------------------------------

      reveal("[data-training-intro]", {
        y: 35,
        scale: 1,
      });

      reveal("[data-training-card]", {
        y: 65,
        scale: 0.94,
        start: "top 92%",
        stagger: 0.16,
        duration: 1,
      });

      // --------------------------------------------------
      // CONTACT
      // --------------------------------------------------

      reveal("[data-contact-intro]", {
        y: 35,
        scale: 1,
      });

      reveal("[data-contact-link]", {
        y: 40,
        scale: 0.96,
        start: "top 94%",
        stagger: 0.12,
      });

      reveal("[data-footer-reveal]", {
        y: 25,
        scale: 1,
        start: "top 96%",
      });

      // --------------------------------------------------
      // FLOATING GLASS ORBS
      // --------------------------------------------------

      const float = (selector, options) => {
        if (!first(selector)) return;

        gsap.to(selector, {
          ...options,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
        });
      };

      float(".hero-orb--blue", {
        x: 45,
        y: -35,
        scale: 1.16,
        duration: 6,
      });

      float(".hero-orb--violet", {
        x: -40,
        y: 45,
        scale: 1.12,
        duration: 8,
      });

      float(".hero-orb--cyan", {
        x: 30,
        y: -35,
        scale: 1.18,
        duration: 7,
      });

      float(".contact-orb--one", {
        x: -35,
        y: 40,
        scale: 1.15,
        duration: 8,
      });

      float(".contact-orb--two", {
        x: 40,
        y: -30,
        scale: 1.1,
        duration: 7,
      });

      // --------------------------------------------------
      // NETWORK LINE ANIMATION
      // --------------------------------------------------

      get(".fiber-pulse").forEach((path, index) => {
        const values = (path.getAttribute("stroke-dasharray") || "")
          .trim()
          .split(/[\s,]+/)
          .map(Number)
          .filter(Number.isFinite);

        const cycle = values.reduce((total, value) => total + value, 0);

        if (!cycle) return;

        gsap.fromTo(
          path,
          { strokeDashoffset: 0 },
          {
            strokeDashoffset: -cycle,
            duration: index === 0 ? 2.2 : 3,
            repeat: -1,
            ease: "none",
          },
        );
      });

    }, scope);

    console.info("[GSAP] MotionEffects initialized successfully.");

    const refresh = () => ScrollTrigger.refresh();
    const frame = requestAnimationFrame(refresh);

    window.addEventListener("load", refresh);

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("load", refresh);
      context.revert();
    };
  }, [root]);

  return null;
}
