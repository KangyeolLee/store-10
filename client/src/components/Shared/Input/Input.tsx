import React, { useCallback, useRef, useState } from 'react';
import * as S from './style';

export interface IInputContainer {
  fullWidth?: boolean;
}

export interface IInputLabel {
  label: 'Standard' | 'Filled' | 'Outlined';
  error?: boolean;
}

export interface IInput {
  type: 'text' | 'password' | 'number';
  label: 'Standard' | 'Filled' | 'Outlined';
  labelName?: string;
  name: string;
  placeholder?: string;
  attributes?: Record<string, unknown>;
  value?: string | number;
  error?: boolean;
  autoComplete?: string;
  helperText?: string;
  helperAlign?: string;
  maxLength?: number;
  _ref?: React.RefObject<HTMLInputElement>;
  onFocus?: () => void;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onKeyPress?: (e: React.KeyboardEvent<HTMLInputElement>) => void;
  className?: string;
}

const Input = ({
  type,
  label,
  labelName,
  name,
  placeholder,
  value,
  autoComplete,
  attributes,
  fullWidth,
  maxLength,
  error,
  helperText,
  helperAlign,
  _ref,
  onChange,
  onBlur,
  onFocus,
  onKeyPress,
  className,
}: IInput & IInputContainer) => {
  const [isFocus, setFocus] = useState(false);
  const _inputRef = useRef<HTMLInputElement>(null);
  const inputRef = _ref ?? _inputRef;

  const onClickLabel = useCallback(() => {
    inputRef.current?.focus();
  }, [inputRef]);

  const onBlurInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    onBlur && onBlur(e);
    if (inputRef.current?.value === '') {
      setFocus((value) => !value);
    }
  };
  const isLabelFocusing = value && String(value).length > 0;

  return (
    <S.InputContainer
      fullWidth={fullWidth}
      className={'input-container' + (className ? className : '')}
    >
      {labelName ? (
        <S.Label
          className={isLabelFocusing || isFocus ? 'focusing' : ''}
          onClick={onClickLabel}
          label={label}
          error={error}
        >
          {labelName}
        </S.Label>
      ) : null}
      <S.Input
        autoComplete={autoComplete}
        type={type}
        label={label}
        className={isFocus ? 'focusing' : ''}
        placeholder={placeholder}
        name={name}
        ref={inputRef}
        value={value}
        maxLength={maxLength}
        onChange={onChange}
        onKeyPress={onKeyPress}
        labelName={labelName}
        error={error}
        onFocus={() => {
          if (onFocus) {
            onFocus();
          }
          setFocus(true);
        }}
        onBlur={onBlurInput}
        {...attributes}
      />
      {error ? (
        <S.ErrorText className="error-text" helperAlign={helperAlign}>
          {helperText}
        </S.ErrorText>
      ) : null}
    </S.InputContainer>
  );
};

export default Input;
