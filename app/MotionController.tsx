"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export function MotionController() {
  const router = useRouter();

  useEffect(() => {
    const root = document.documentElement;
    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    let parallaxItems: HTMLElement[] = [];
    let scrollFrame = 0;
    let navigating = false;
    let resetTimer = 0;

    root.classList.add("motion-enhanced");

    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("is-visible");
          revealObserver.unobserve(entry.target);
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -6% 0px" },
    );

    const scanMotionElements = () => {
      const revealItems = Array.from(
        document.querySelectorAll<HTMLElement>(
          "[data-reveal]:not([data-motion-bound])",
        ),
      );

      revealItems.forEach((element) => {
        element.dataset.motionBound = "true";
        if (reduceMotion) {
          element.classList.add("is-visible");
        } else {
          revealObserver.observe(element);
        }
      });

      parallaxItems = Array.from(
        document.querySelectorAll<HTMLElement>("[data-parallax]"),
      );
    };

    const updateParallax = () => {
      scrollFrame = 0;
      if (reduceMotion) return;

      const viewportHeight = window.innerHeight;
      parallaxItems.forEach((element) => {
        const rect = element.getBoundingClientRect();
        if (rect.bottom < -100 || rect.top > viewportHeight + 100) return;
        const distance =
          (rect.top + rect.height / 2 - viewportHeight / 2) / viewportHeight;
        const shift = Math.max(-12, Math.min(12, distance * -10));
        element.style.setProperty("--parallax-shift", `${shift.toFixed(2)}px`);
      });
    };

    const requestParallax = () => {
      if (scrollFrame) return;
      scrollFrame = window.requestAnimationFrame(updateParallax);
    };

    const mutationObserver = new MutationObserver(() => {
      scanMotionElements();
      requestParallax();
    });

    scanMotionElements();
    requestParallax();
    mutationObserver.observe(document.body, { childList: true, subtree: true });
    window.addEventListener("scroll", requestParallax, { passive: true });
    window.addEventListener("resize", requestParallax);

    const handleInternalNavigation = (event: MouseEvent) => {
      if (
        event.defaultPrevented ||
        event.button !== 0 ||
        event.metaKey ||
        event.ctrlKey ||
        event.shiftKey ||
        event.altKey ||
        navigating
      ) {
        return;
      }

      const target = event.target as Element | null;
      const anchor = target?.closest<HTMLAnchorElement>("a[href]");
      if (!anchor || anchor.target === "_blank" || anchor.hasAttribute("download")) {
        return;
      }

      const url = new URL(anchor.href, window.location.href);
      if (
        url.origin !== window.location.origin ||
        url.protocol !== window.location.protocol ||
        (url.pathname === window.location.pathname &&
          url.search === window.location.search)
      ) {
        return;
      }

      event.preventDefault();
      navigating = true;
      root.classList.remove("page-revealing", "page-reset");
      root.classList.add("page-covering");

      window.setTimeout(() => {
        router.push(`${url.pathname}${url.search}${url.hash}`);
        window.scrollTo({ top: 0, behavior: "instant" });
      }, 480);

      window.setTimeout(() => {
        root.classList.remove("page-covering");
        root.classList.add("page-revealing");
      }, 620);

      resetTimer = window.setTimeout(() => {
        root.classList.remove("page-revealing");
        root.classList.add("page-reset");
        window.requestAnimationFrame(() => {
          window.requestAnimationFrame(() => {
            root.classList.remove("page-reset");
            navigating = false;
          });
        });
      }, 1240);
    };

    document.addEventListener("click", handleInternalNavigation, true);

    return () => {
      root.classList.remove(
        "motion-enhanced",
        "page-covering",
        "page-revealing",
        "page-reset",
      );
      revealObserver.disconnect();
      mutationObserver.disconnect();
      window.removeEventListener("scroll", requestParallax);
      window.removeEventListener("resize", requestParallax);
      document.removeEventListener("click", handleInternalNavigation, true);
      window.cancelAnimationFrame(scrollFrame);
      window.clearTimeout(resetTimer);
    };
  }, [router]);

  return (
    <>
      <div className="intro-curtain" aria-hidden="true">
        <div className="intro-curtain__top">
          <span>Chang Siyeong</span>
          <span>Photographer · Seoul</span>
        </div>
      </div>
      <div className="route-curtain" aria-hidden="true" />
    </>
  );
}
