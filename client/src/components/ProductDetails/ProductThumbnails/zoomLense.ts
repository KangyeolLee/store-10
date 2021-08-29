// 원본 섬네일에 등장하는 돋보기 가로 및 세로 크기(픽셀)
const LENSER_WIDTH = 100;
const LENSER_HEIGHT = 100;

interface PosProps {
  clientX: number;
  clientY: number;
  target: EventTarget & Element;
  lenserBox: HTMLDivElement;
}

const getOffsets = (offsetWidth: number, offsetHeight: number) => {
  const offsetX = offsetWidth / 2;
  const offsetY = offsetHeight / 2;
  return { offsetX, offsetY };
};

const getRatios = (width: number, height: number) => {
  const ratioX = width / LENSER_WIDTH;
  const ratioY = height / LENSER_HEIGHT;
  return { ratioX, ratioY };
};

export const calculatePos = ({
  clientX,
  clientY,
  target,
  lenserBox,
}: PosProps) => {
  const { x, y, right, bottom, width, height } = target.getBoundingClientRect();
  let posX = clientX - x;
  let posY = clientY - y;

  const { offsetX, offsetY } = getOffsets(
    lenserBox.offsetWidth,
    lenserBox.offsetHeight
  );

  const { ratioX, ratioY } = getRatios(width, height);

  if (posX < offsetX) posX = offsetX;
  if (posY < offsetY) posY = offsetY;
  if (posX + x >= right - offsetX) posX = right - offsetX - x;
  if (posY + y >= bottom - offsetY) posY = bottom - offsetY - y;

  posX -= offsetX;
  posY -= offsetY;

  return { posX, posY, ratioX, ratioY };
};

export const adjustZoomBoxStyles = (
  zoomedBox: HTMLDivElement,
  width: number,
  height: number
) => {
  const { ratioX, ratioY } = getRatios(width, height);

  zoomedBox.style.cssText = `
  background-size: ${width * ratioX}px ${height * ratioY}px;
  right: ${-width - 20}px;
  width: ${width}px;
  height: ${height}px;
`;
};

export const adjustLenserBoxStyles = (
  lenserBox: HTMLDivElement,
  posX: number,
  posY: number
) => {
  lenserBox.style.cssText = `
    top: ${posY}px;
    left: ${posX}px;
  `;
};

export const adjustZoomPostionStyles = (
  zoomBox: HTMLDivElement,
  posX: number,
  posY: number
) => {
  zoomBox.style.backgroundPosition = `${-posX}px ${-posY}px`;
};
