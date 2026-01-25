"use client";

import { useEffect, useRef, useState } from "react";

interface UseInfiniteScrollOptions {
  threshold?: number;
  rootMargin?: string;
}

export function useInfiniteScroll<T>(
  items: T[],
  itemsPerPage: number = 24,
  options: UseInfiniteScrollOptions = {}
) {
  const { threshold = 0.5, rootMargin = "100px" } = options;
  const [displayedItems, setDisplayedItems] = useState<T[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const observerTarget = useRef<HTMLDivElement>(null);

  // Track previous items length to detect changes
  const prevItemsLengthRef = useRef(items.length);

  // Reset when items array changes (filters applied)
  useEffect(() => {
    // Only reset if the items length actually changed
    if (prevItemsLengthRef.current !== items.length) {
      prevItemsLengthRef.current = items.length;
      const initialItems = items.slice(0, itemsPerPage);
      setDisplayedItems(initialItems);
      setCurrentPage(1);
      setHasMore(items.length > itemsPerPage);
    }
  }, [items.length, itemsPerPage, items]);

  // Intersection Observer for infinite scroll
  useEffect(() => {
    if (!hasMore) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          // Load more items
          const startIndex = currentPage * itemsPerPage;
          const endIndex = startIndex + itemsPerPage;
          const newItems = items.slice(startIndex, endIndex);

          if (newItems.length > 0) {
            setDisplayedItems((prev) => [...prev, ...newItems]);
            setCurrentPage((prev) => prev + 1);
            setHasMore(endIndex < items.length);
          } else {
            setHasMore(false);
          }
        }
      },
      {
        threshold,
        rootMargin,
      }
    );

    const currentTarget = observerTarget.current;
    if (currentTarget) {
      observer.observe(currentTarget);
    }

    return () => {
      if (currentTarget) {
        observer.unobserve(currentTarget);
      }
    };
  }, [hasMore, currentPage, items, itemsPerPage, threshold, rootMargin]);

  return {
    displayedItems,
    hasMore,
    observerTarget,
  };
}
