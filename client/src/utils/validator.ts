import React from 'react';
interface IReviewValidation {
  content: string;
  rating: number;
  setContentError: (value: React.SetStateAction<boolean>) => void;
  setRatingError: (value: React.SetStateAction<boolean>) => void;
}

interface IQuestionValidation {
  content: string;
  title: string;
  setContentError: (value: React.SetStateAction<boolean>) => void;
  setTitleError: (value: React.SetStateAction<boolean>) => void;
}

export const validateInput = (value: string) => {
  return !!value;
};

export const validateEmail = (email: string) => {
  const re =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
};

export const validatePassword = (password: string) => {
  const num = password.search(/[0-9]/g);
  const eng = password.search(/[a-z]/gi);
  const spe = password.search(/[`~!@@#$%^&*|₩₩₩'₩";:₩/?]/gi);

  if (password.length < 10 || password.length > 20) {
    return false;
  } else if (password.search(/\s/) != -1) {
    return false;
  } else if (
    (num < 0 && eng < 0) ||
    (eng < 0 && spe < 0) ||
    (spe < 0 && num < 0)
  ) {
    return false;
  } else {
    return true;
  }
};

export const validateRePassword = (password: string, rePassword: string) => {
  return password === rePassword && !!rePassword;
};

export const validateName = (name: string) => {
  return !!name;
};

export const validateAll = (
  email: string,
  password: string,
  rePassword: string,
  name: string
) => {
  if (
    validateEmail(email) &&
    validatePassword(password) &&
    validateRePassword(password, rePassword) &&
    validateName(name)
  ) {
    return true;
  }
  return false;
};

export const validatePhone = (
  e: React.ChangeEvent<HTMLInputElement>
): string => {
  if (e.currentTarget.value.length > 9) {
    return '';
  }
  let value = e.currentTarget.value.replace(/[^0-9]/g, '');

  if (value.length >= 5) {
    value = value.slice(0, value.length - 4) + '-' + value.slice(-4);
  }

  return value;
};

export const validateReview = ({
  content,
  rating,
  setContentError,
  setRatingError,
}: IReviewValidation) => {
  if (!content) {
    setContentError(true);
  } else {
    setContentError(false);
  }

  if (!rating) {
    setRatingError(true);
  } else {
    setRatingError(false);
  }

  if (!content || !rating) return false;
  return true;
};

export const validateQuestion = ({
  content,
  title,
  setContentError,
  setTitleError,
}: IQuestionValidation) => {
  if (!content) {
    setContentError(true);
  } else {
    setContentError(false);
  }

  if (!title) {
    setTitleError(true);
  } else {
    setTitleError(false);
  }

  if (!content || !title) return false;
  return true;
};

export const validateImage = new RegExp(/^image\//);
