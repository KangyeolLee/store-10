import React, { useEffect, useRef } from 'react';
import * as S from './style';

export interface ITextarea {
  name: string;
  placeholder?: string;
  resize: 'vertical' | 'horizontal' | 'both' | 'none';
  fullWidth?: boolean;
  attributes?: Record<string, unknown>;
  value?: string;
  helpertext?: string;
  error?: boolean;
  onFocus?: () => void;
  onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

const Textarea = ({
  name,
  placeholder,
  resize,
  value,
  attributes,
  fullWidth,
  error,
  helpertext,
  onChange,
  onFocus,
}: ITextarea) => {
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    if (error) {
      textareaRef.current?.focus();
    }
  }, [error]);

  return (
    <S.TextareaWrapper>
      <S.Textarea
        ref={textareaRef}
        className={error ? 'error-focus' : ''}
        placeholder={placeholder}
        resize={resize}
        name={name}
        fullWidth={fullWidth}
        value={value}
        onChange={onChange}
        onFocus={onFocus}
        {...attributes}
      />
      {error && (
        <S.ErrorMessage className="error-text">{helpertext}</S.ErrorMessage>
      )}
    </S.TextareaWrapper>
  );
};

export default Textarea;
