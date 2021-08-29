import dayjs from 'dayjs';

export const wonFormat = (number: number | string) => {
  let price: string;
  if (typeof number === 'number') {
    price = number.toLocaleString('ko-kr');
  }
  price = Number(number).toLocaleString('ko-kr');

  return price + '원';
};

export const calculateDiscount = ({
  price,
  discount,
}: {
  price: number | string;
  discount: number;
}) => {
  const _price = typeof price === 'string' ? +price : price;
  return _price - Math.floor((_price * (discount / 100)) / 10) * 10;
};

export const dateFormat = (date: string | Date, seperator = '-') => {
  if (seperator === '-') {
    return dayjs(date).format('YYYY-MM-DD');
  } else if (seperator === '.') {
    return dayjs(date).format('YYYY.MM.DD');
  } else if (seperator === 'abs') {
    return dayjs(date).format('MM.DD');
  }
};

export const calculateRating = ({
  sum,
  count,
}: {
  sum: string;
  count: number;
}) => {
  if (!+sum || !count) return 0;
  const value = (+sum / count).toFixed(1);
  return +value;
};

export const calculateRatio = ({
  total,
  count,
}: {
  total: number;
  count: string;
}) => {
  const portion = +count / total;
  return +portion.toFixed(2);
};

export const compressImageFile = (file: File) => {
  return new Promise<File>((resolve) => {
    const fileReader = new FileReader();

    fileReader.readAsArrayBuffer(file);
    fileReader.onload = ({ target }) => {
      if (!target || !target.result) return;

      const blob = new Blob([target.result]);
      const blobURL = URL.createObjectURL(blob);

      const image = new Image();
      image.src = blobURL;
      image.onload = async () => {
        const resized = await resize(image);
        resolve(
          new File([dataURItoBlob(resized)], file.name, {
            type: 'image/jpeg',
            lastModified: Date.now(),
          })
        );
      };
    };
  });
};

const resize = async (image: HTMLImageElement) => {
  const canvas = document.createElement('canvas');
  const { width, height } = image;

  canvas.width = width;
  canvas.height = height;

  const context = canvas.getContext('2d');
  context?.drawImage(image, 0, 0, width, height);

  return canvas.toDataURL('image/jpeg', 0.5);
};

const dataURItoBlob = (resized: string) => {
  const data = resized.split(',');
  const bytes = atob(data[1]); // base64 decoding
  const mime = data[0].split(':')[1].split(';')[0]; // get MIMEType
  const arrayBuffer = new ArrayBuffer(bytes.length);
  const int8Arr = new Uint8Array(arrayBuffer);

  for (let i = 0; i < bytes.length; i++) {
    int8Arr[i] = bytes.charCodeAt(i);
  }

  const blob = new Blob([arrayBuffer], { type: mime });
  return blob;
};
