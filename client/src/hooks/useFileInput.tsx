import { useCallback, useRef, useState } from 'react';
import { nanoid } from 'nanoid';
import { validateImage } from '@/utils/validator';
import { notify } from '@/components/Shared/Toastify';

export type CustomFile = Record<string, File>;

const useFileInput = () => {
  const [imgFiles, setImgFiles] = useState<CustomFile>({});
  const [isError, setIsError] = useState(false);
  const fileInput = useRef<HTMLInputElement>(null);

  const handleClickOnFileInput = useCallback(() => {
    fileInput.current?.click();
  }, [fileInput]);

  const handleUploadFile = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>, additional?: number) => {
      const {
        target: { files },
      } = e;

      if (!files) return;

      for (let i = 0; i < (files?.length ?? 0); i++) {
        const file = files[i];
        const ext = file.type;

        if (!validateImage.test(ext)) {
          return notify('error', '이미지 형식의 파일만 업로드 가능해요..!');
        }

        const values = Object.values(imgFiles).length;

        if (values + (additional ?? 0) === 3) {
          setIsError(true);
          return;
        }

        if (isError) setIsError(false);

        const hash = nanoid();
        const customFile = { [hash]: file };

        setImgFiles({ ...imgFiles, ...customFile });
      }
    },
    [imgFiles, isError]
  );

  const removeSeletedPreview = (e: React.MouseEvent, selected: string) => {
    e.preventDefault();

    const duplicated = { ...imgFiles };
    delete duplicated[selected];

    setImgFiles(duplicated);
  };

  return {
    fileRef: fileInput,
    imgFiles,
    isError,
    handleClickOnFileInput,
    handleUploadFile,
    removeSeletedPreview,
  } as const;
};

export default useFileInput;
