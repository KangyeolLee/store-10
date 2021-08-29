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

export const validatePhone = (phone: string) => {
  const regex = /[0-9]{2,3}-[0-9]{3,4}-[0-9]{3,4}/;
  return regex.test(phone);
};

export const validatePostcode = (postcode: string) => {
  const regex = /[0-9]{5,6}/;
  return regex.test(postcode);
};
