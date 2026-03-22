import { useEffect, useMemo, useState } from "react";
import styles from "./JustifiedGallery.module.css";

interface GalleryItem {
  id: string;
  src: string;
  alt?: string;
  aspectRatio?: number;
}

interface JustifiedGalleryProps {
  items: GalleryItem[];
  rowHeight?: number;
}

const MOBILE_BREAKPOINT = 640;

const JustifiedGallery = ({ items, rowHeight = 300 }: JustifiedGalleryProps) => {
  const [measuredItems, setMeasuredItems] = useState<GalleryItem[]>([]);
  const [containerWidth, setContainerWidth] = useState<number>(1200);
  const [hoveredId, setHoveredId] = useState<string | null>(null);
  const [isMobile, setIsMobile] = useState<boolean>(false);

  /* -----------------------------
     Measure image aspect ratios
  ----------------------------- */
  useEffect(() => {
    let cancelled = false;

    const loadImages = async () => {
      const results = await Promise.all(
        items.map(
          (item) =>
            new Promise<GalleryItem>((resolve) => {
              const img = new Image();
              img.src = item.src;

              img.onload = () =>
                resolve({
                  ...item,
                  aspectRatio: img.naturalWidth / img.naturalHeight,
                });

              img.onerror = () =>
                resolve({
                  ...item,
                  aspectRatio: 1,
                });
            })
        )
      );

      if (!cancelled) setMeasuredItems(results);
    };

    loadImages();
    return () => {
      cancelled = true;
    };
  }, [items]);

  useEffect(() => {
    const update = () => {
      const w = window.innerWidth;
      setIsMobile(w <= MOBILE_BREAKPOINT);
      setContainerWidth(w - 96); 
    };

    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  /* -----------------------------
     Calculate justified rows
  ----------------------------- */
  const rows = useMemo(() => {
    if (!measuredItems.length) return [];

    const result: GalleryItem[][] = [];
    let currentRow: GalleryItem[] = [];
    let currentRowWidth = 0;
    const gap = 8;

    measuredItems.forEach((item, index) => {
      if (!item.aspectRatio) return;

      const itemWidth = rowHeight * item.aspectRatio;

      if (
        currentRowWidth + itemWidth + currentRow.length * gap <= containerWidth ||
        currentRow.length === 0
      ) {
        currentRow.push(item);
        currentRowWidth += itemWidth;
      } else {
        result.push([...currentRow]);
        currentRow = [item];
        currentRowWidth = itemWidth;
      }

      if (index === measuredItems.length - 1 && currentRow.length) {
        result.push(currentRow);
      }
    });

    return result;
  }, [measuredItems, containerWidth, rowHeight]);

  if (!rows.length) return null;

return (
  <div className={styles.gallery}>
    {isMobile ? (
      /* -----------------------------
         MOBILE
      ----------------------------- */
      measuredItems.map((item) => (
        <div
          key={item.id}
          className={styles.mobileItem}
          style={{
            paddingTop: `${100 / (item.aspectRatio ?? 1)}%`,
            backgroundImage: `url(${item.src})`,
           // opacity: hoveredId && hoveredId !== item.id ? 1 : 0.8,
          }}
          aria-label={item.alt}
        />
      ))
    ) : (
      /* -----------------------------
         DESKTOP
      ----------------------------- */
      rows.map((row, rowIndex) => (
        <div key={rowIndex} className={styles.row}>
          {row.map((item) => (
            <div
              key={item.id}
              className={styles.item}
              style={{
                height: `${rowHeight}px`,
                width: `${rowHeight * (item.aspectRatio ?? 1)}px`,
                backgroundImage: `url(${item.src})`,
              //  opacity: hoveredId && hoveredId !== item.id ? 1 : 0.8,
              }}
              onMouseEnter={() => setHoveredId(item.id)}
              onMouseLeave={() => setHoveredId(null)}
              aria-label={item.alt}
            />
          ))}
        </div>
      ))
    )}
  </div>
);
};
export default JustifiedGallery;
