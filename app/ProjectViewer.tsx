"use client";

import {
  useCallback,
  useEffect,
  useRef,
  useState,
  type KeyboardEvent as ReactKeyboardEvent,
  type TouchEvent,
} from "react";

type ViewerImage = {
  src: string;
  alt: string;
  orientation: "wide" | "portrait";
};

// 👇 1. logo 정보를 받을 수 있도록 타입을 추가했습니다.
type ProjectViewerProps = {
  images: ViewerImage[];
  title: string;
  logo?: string; 
};

// 👇 2. 컴포넌트가 logo를 받아오도록 수정했습니다.
export function ProjectViewer({ images, title, logo }: ProjectViewerProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState<"next" | "previous">("next");
  const [viewMode, setViewMode] = useState<"slider" | "grid">("slider");
  const touchStart = useRef<{ x: number; y: number } | null>(null);
  const activeThumbnail = useRef<HTMLButtonElement>(null);
  const viewerRef = useRef<HTMLElement>(null);
  const total = images.length;

  const selectImage = useCallback(
    (index: number) => {
      const safeIndex = Math.max(0, Math.min(total - 1, index));
      setActiveIndex((current) => {
        setDirection(safeIndex < current ? "previous" : "next");
        return safeIndex;
      });
    },
    [total],
  );

  const showPrevious = useCallback(() => {
    selectImage(activeIndex - 1);
  }, [activeIndex, selectImage]);

  const showNext = useCallback(() => {
    selectImage(activeIndex + 1);
  }, [activeIndex, selectImage]);

  const showFirst = useCallback(() => {
    selectImage(0);
  }, [selectImage]);

  const showLast = useCallback(() => {
    selectImage(total - 1);
  }, [selectImage, total]);

  const handleKeyDown = (event: ReactKeyboardEvent<HTMLElement>) => {
    if (event.target !== event.currentTarget) return;

    if (viewMode === "grid" && event.key === "Escape") {
      event.preventDefault();
      setViewMode("slider");
      return;
    }

    if (viewMode !== "slider") return;

    if (event.key === "ArrowLeft" && activeIndex > 0) {
      event.preventDefault();
      showPrevious();
    }

    if (event.key === "ArrowRight" && activeIndex < total - 1) {
      event.preventDefault();
      showNext();
    }

    if (event.key === "Home") {
      event.preventDefault();
      showFirst();
    }

    if (event.key === "End") {
      event.preventDefault();
      showLast();
    }
  };

  useEffect(() => {
    [images[activeIndex - 1], images[activeIndex + 1]].forEach((image) => {
      if (!image) return;
      const preload = new window.Image();
      preload.src = image.src;
    });
  }, [activeIndex, images]);

  useEffect(() => {
    if (viewMode !== "slider") return;
    activeThumbnail.current?.scrollIntoView({
      behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches
        ? "auto"
        : "smooth",
      block: "nearest",
      inline: "center",
    });
  }, [activeIndex, viewMode]);

  const handleTouchStart = (event: TouchEvent<HTMLDivElement>) => {
    const touch = event.touches[0];
    touchStart.current = { x: touch.clientX, y: touch.clientY };
  };

  const handleTouchEnd = (event: TouchEvent<HTMLDivElement>) => {
    const start = touchStart.current;
    const touch = event.changedTouches[0];
    touchStart.current = null;
    if (!start || !touch) return;

    const horizontalDistance = touch.clientX - start.x;
    const verticalDistance = touch.clientY - start.y;
    const isHorizontalSwipe =
      Math.abs(horizontalDistance) > 48 &&
      Math.abs(horizontalDistance) > Math.abs(verticalDistance) * 1.2;

    if (!isHorizontalSwipe) return;
    if (horizontalDistance > 0 && activeIndex > 0) showPrevious();
    if (horizontalDistance < 0 && activeIndex < total - 1) showNext();
  };

  const openGridImage = (index: number) => {
    selectImage(index);
    setViewMode("slider");
    window.requestAnimationFrame(() => {
      viewerRef.current?.focus({ preventScroll: true });
    });
  };

  if (total === 0) {
    return (
      <div className="project-viewer project-viewer--empty">
        사진을 준비 중입니다.
      </div>
    );
  }

  const currentImage = images[activeIndex];
  const currentNumber = String(activeIndex + 1).padStart(2, "0");
  const totalNumber = String(total).padStart(2, "0");

  return (
    <figure
      ref={viewerRef}
      className={`project-viewer project-viewer--${viewMode}`}
      aria-label={`${title} 사진 뷰어`}
      aria-roledescription={viewMode === "slider" ? "carousel" : undefined}
      tabIndex={0}
      onKeyDown={handleKeyDown}
    >
      <button
        className="project-viewer__mode"
        type="button"
        aria-expanded={viewMode === "grid"}
        aria-controls="project-gallery-content"
        onClick={() =>
          setViewMode((current) => (current === "slider" ? "grid" : "slider"))
        }
      >
        {viewMode === "slider" ? "View all" : "Slider"}
      </button>

      {viewMode === "grid" ? (
        <div
          className="project-viewer__grid"
          id="project-gallery-content"
          aria-label={`${title} 전체 사진`}
        >
          {images.map((image, index) => (
            <button
              className={`project-viewer__grid-item project-viewer__grid-item--${image.orientation}`}
              type="button"
              onClick={() => openGridImage(index)}
              aria-label={`${index + 1}번째 사진을 슬라이드로 보기`}
              key={`${image.src}-grid`}
            >
              <img
                src={image.src}
                alt={image.alt}
                loading="lazy"
                decoding="async"
                onLoad={(event) => {
                  const imageElement = event.currentTarget;
                  const orientation =
                    imageElement.naturalWidth >= imageElement.naturalHeight
                      ? "wide"
                      : "portrait";

                  imageElement.parentElement?.setAttribute(
                    "data-orientation",
                    orientation,
                  );
                }}
              />
            </button>
          ))}
        </div>
      ) : (
        <>
          <div
            className="project-viewer__stage"
            id="project-gallery-content"
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
            style={{ position: "relative" }} /* 로고 위치 고정을 위해 추가 */
          >
            <img
              className={`project-viewer__image project-viewer__image--${direction}`}
              src={currentImage.src}
              alt={currentImage.alt}
              key={`${activeIndex}-${currentImage.src}`}
              draggable="false"
              fetchPriority={activeIndex === 0 ? "high" : "auto"}
              decoding="async"
            />

            {/* 👇 3. 로고가 있다면 우측 하단에 띄우는 코드입니다. */}
            {logo && (
              <img
                src={logo}
                alt={`${title} 로고`}
                className="project-viewer__logo"
                style={{
                  position: "absolute",
                  bottom: "24px",
                  right: "24px",
                  height: "40px", // 로고 크기 (필요시 조절)
                  width: "auto",
                  zIndex: 10,
                  pointerEvents: "none", // 로고 때문에 사진 넘기기 터치가 방해받지 않도록 설정
                }}
              />
            )}

            {total > 1 && (
              <>
                <button
                  className="project-viewer__arrow project-viewer__arrow--previous"
                  type="button"
                  onClick={showPrevious}
                  disabled={activeIndex === 0}
                  aria-label={`이전 사진, 현재 ${activeIndex + 1}번째`}
                >
                  <span aria-hidden="true">←</span>
                </button>
                <button
                  className="project-viewer__arrow project-viewer__arrow--next"
                  type="button"
                  onClick={showNext}
                  disabled={activeIndex === total - 1}
                  aria-label={`다음 사진, 현재 ${activeIndex + 1}번째`}
                >
                  <span aria-hidden="true">→</span>
                </button>
              </>
            )}
          </div>

          <figcaption className="project-viewer__footer">
            <div
              className="project-viewer__thumbnails"
              aria-label={`${title} 사진 목록`}
            >
              {images.map((image, index) => (
                <button
                  className={`project-viewer__thumbnail ${
                    index === activeIndex ? "is-active" : ""
                  }`}
                  type="button"
                  onClick={() => selectImage(index)}
                  aria-label={`${total}장 중 ${index + 1}번째 사진 보기`}
                  aria-current={index === activeIndex ? "true" : undefined}
                  ref={index === activeIndex ? activeThumbnail : undefined}
                  key={`${image.src}-thumbnail`}
                >
                  <img
                    src={image.src}
                    alt=""
                    loading={index < 6 ? "eager" : "lazy"}
                    decoding="async"
                  />
                </button>
              ))}
            </div>

            <div className="project-viewer__counter" aria-hidden="true">
              <span>{currentNumber}</span>
              <span />
              <span>{totalNumber}</span>
            </div>
          </figcaption>
        </>
      )}

      <p className="sr-only" aria-live="polite">
        {viewMode === "slider"
          ? `${total}장 중 ${activeIndex + 1}번째 사진: ${currentImage.alt}`
          : `전체 사진 ${total}장을 보는 중`}
      </p>
    </figure>
  );
}