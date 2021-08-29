import React, { useEffect, useRef, useState } from 'react';
import * as S from './styles';

const LAZY_LOAD_IMAGE = 'LAZY_LOAD_IMAGE';

interface IImage {
  src: string;
  alt: string;
}

const Image = ({ src, alt }: IImage) => {
  const imgRef = useRef<HTMLImageElement>(null);
  const [isLoad, setIsLoad] = useState(false);

  useEffect(() => {
    if (!observer) {
      observer = new IntersectionObserver(onIntersection, {
        threshold: 0.3,
      });
    }
    imgRef.current && observer.observe(imgRef.current);
  }, []);

  useEffect(() => {
    function loadImage() {
      setIsLoad(true);
    }

    const imgEl = imgRef.current;
    imgEl && imgEl.addEventListener(LAZY_LOAD_IMAGE, loadImage);
    return () => {
      imgEl && imgEl.removeEventListener(LAZY_LOAD_IMAGE, loadImage);
    };
  }, []);

  return (
    <S.Image
      ref={imgRef}
      src={
        isLoad
          ? src
          : 'https://media3.giphy.com/media/XfzAbKlHFEHNUpbR5t/giphy.gif'
      }
      alt={alt}
    />
  );
};

export default Image;

let observer: IntersectionObserver | null = null;

function onIntersection(
  entries: IntersectionObserverEntry[],
  io: IntersectionObserver
) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      io.unobserve(entry.target);
      entry.target.dispatchEvent(new CustomEvent(LAZY_LOAD_IMAGE));
    }
  });
}
