export const MY_PAGE_NAVIGATIONS = [
  { value: 'orderHistroy', name: '주문내역' },
  { value: 'coupon', name: '쿠폰' },
  { value: 'inqurey', name: '상품문의' },
  { value: 'review', name: '상품후기' },
  { value: 'changeUserInfo', name: '회원정보 변경' },
];

export const FRUSTRATE_IMG =
  'https://store-10.s3.ap-northeast-2.amazonaws.com/test/frustrate.png';

interface IORDER_STATUS {
  [index: string]: string;
  wait: string;
  paid: string;
  preparing: string;
  delivering: string;
  delivered: string;
  confirmed: string;
}

export const ORDER_STATUS: IORDER_STATUS = {
  wait: '입금대기',
  paid: '결제완료',
  preparing: '상품준비중',
  delivering: '배송중',
  delivered: '배송완료',
  confirmed: '구매확정',
};

export const DELIVERY_REQUEST_MESSAGES = [
  {
    value: '',
    name: '배송시 요청 사항을 선택해주세요',
  },
  {
    value: '부재시 문 앞에 놓아주세요',
    name: '부재시 문 앞에 놓아주세요',
  },
  {
    value: '배송전에 미리 연락주세요',
    name: '배송전에 미리 연락주세요',
  },
  {
    value: '부재시 경비실에 맡겨 주세요',
    name: '부재시 경비실에 맡겨 주세요',
  },
  {
    value: '부재시 전화주시거나 문자 남겨 주세요.',
    name: '부재시 전화주시거나 문자 남겨 주세요.',
  },
  {
    value: '직접입력',
    name: '직접입력',
  },
];

export const ORDER_STATUS_DATA = [
  {
    value: 'wait',
    name: '입금대기',
    count: 0,
  },
  {
    value: 'paid',
    name: '결제완료',
    count: 0,
  },
  {
    value: 'preparing',
    name: '배송준비',
    count: 0,
  },
  {
    value: 'delivering',
    name: '배송중',
    count: 0,
  },
  {
    value: 'delivered',
    name: '배송완료',
    count: 0,
  },
  {
    value: 'confirmed',
    name: '구매확정',
    count: 0,
  },
];

export const PERIOD_FILTER: { name: string; value: null | number }[] = [
  { name: '6개월 전', value: null },
];
let currentYear = new Date().getFullYear();
while (currentYear >= 2016) {
  PERIOD_FILTER.push({ name: currentYear.toString(), value: currentYear });
  currentYear--;
}

export const KOREAN_PHONE_PREFIX: string[] = [
  '010',
  '011',
  '016',
  '017',
  '018',
  '019',
  '02',
  '031',
  '032',
  '033',
  '041',
  '042',
  '043',
  '044',
  '051',
  '052',
  '053',
  '054',
  '055',
  '061',
  '062',
  '063',
  '064',
  '070',
  '080',
  '050',
  '012',
  '059',
];

export const DELIVERY_DISCOUNT_CONDITION = 30000;

export const MISSIONS = {
  login: '일반 회원으로 로그인 하기',
  bookmark: '상품 찜하기',
  moreDescription: '상품상세 정보 더보기',
  pay: '주문 완료하기',
  addCart: '장바구니에 상품 추가하기',
  checkDelivery: '주문 완료된 상품 배송조회',
  changeAddress: '배송지 수정하기',
  orderHistoryFilter: '주문내역 필터 사용하기',
  search: '검색 하기',
  category: '카테고리 이동하기',
  createReview: '리뷰 생성하기',
  updateReview: '리뷰 수정하기',
  createQuestion: '문의 생성하기',
  updateQuestion: '문의 수정하기',
  imageView: '리뷰 이미지 클릭해 보기',
  noticeView: '공지사항 확인하기',
};
