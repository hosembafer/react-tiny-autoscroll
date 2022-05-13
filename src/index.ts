import { RefObject, useCallback, useEffect, useState } from "react";

const clamp = (x: number, min: number, max: number) => Math.min(Math.max(x, min), max);

const between = (x: number, from: number, to: number) => x > from && x < to;

export const useAutoScroll = ({
  containerRef,
  skip = false,
  threshold = 50,
  maxSpeed = 30,
}: {
  containerRef: RefObject<HTMLElement>;
  skip?: boolean;
  threshold?: number;
  maxSpeed?: number;
}) => {
  const [scrollingFactorY, setScrollingFactorY] = useState(0);
  const [direction, setDirection] = useState<"up" | "down">();

  const containerNode = containerRef.current!;

  useEffect(() => {
    if (!skip) {
      const intervalId = setInterval(() => {
        const delta = clamp(scrollingFactorY, -maxSpeed, maxSpeed);
        containerNode.scrollTop += delta;
      }, 10);

      return () => {
        clearInterval(intervalId);
      }
    }
  }, [containerNode, skip, scrollingFactorY, maxSpeed]);

  const onMove = useCallback((event: MouseEvent) => {
    const { clientY, movementY } = event;

    setDirection(prevDirection => {
      if (movementY > 0) {
        return "down";
      } else if (movementY < 0) {
        return "up";
      } else {
        return prevDirection;
      }
    });

    if (containerNode && !skip) {
      const { y, height } = containerNode.getBoundingClientRect();
      const containerTop = y;
      const containerBottom = y + height;
      if (between(clientY, -Infinity, containerTop + threshold) && direction === "up") {
        const delta = (containerTop + threshold) - clientY;
        setScrollingFactorY(delta * -1);
      } else if (between(clientY, containerBottom - threshold, Infinity) && direction === "down") {
        const delta = (containerBottom - threshold) - clientY;
        setScrollingFactorY(delta * -1);
      } else {
        setScrollingFactorY(0);
      }
    }
  }, [containerNode, skip, threshold, direction]);

  useEffect(() => {
    if (!skip) {
      document.body.addEventListener("mousemove", onMove);

      return () => {
        document.body.removeEventListener("mousemove", onMove);
      }
    }
  }, [onMove, skip]);

  useEffect(() => {
    if (skip) {
      setDirection(undefined);
    }
  }, [skip]);
};
