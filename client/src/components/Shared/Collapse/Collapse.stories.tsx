import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Collapse from './Collapse';

const headers = [
  { name: '번호', value: 'number' },
  { name: '제목', value: 'title' },
  { name: '작성자', value: 'username' },
  { name: '작성일', value: 'date' },
  { name: '답변', value: 'check' },
];

const items = [
  {
    id: 1,
    number: '1',
    title: '재구매 문의',
    username: '우아한개발자',
    date: '2021-08-21',
    check: '미답변',
    content: '재구매 하고 싶어요! 재구매 해주세요! 우와아아으앙!',
    answer: '',
  },
  {
    id: 2,
    number: '2',
    title: '품질 퀄리티 문의',
    username: '우아한퀄리티',
    date: '2021-08-21',
    check: '미답변',
    content:
      '안녕하세요 품질 퀄리티 문의 드립니다. 이게 품질이 그렇게까지 좋은거 같지 않더라구요. 그나저나 제가 98년 LA에 있을 때도 품질 때문에 크게 싸운적이 있는데',
    answer: '',
  },
  {
    id: 3,
    number: '3',
    title: '아니 장사를 이딴 식으로 하면',
    username: '우아한불편러',
    date: '2021-08-21',
    check: '완료',
    content:
      '아니 선생님 장사를 이렇게 하면 됩니까 이거? 분명 10개를 샀는데 왜 2개밖에 안 오는거죠? 신고감이네요 ㅂㅂ',
    answer: '안녕하세요 배민문방구 입니다. 감사합니다.',
  },
  {
    id: 4,
    number: '4',
    title: '입점 문의',
    username: '우아한매니저',
    date: '2021-08-21',
    check: '완료',
    content:
      '안녕하세요 입점 문의 드립니다. 뭐라고 해야할 지는 몰라서 그냥 길 게 써 볼려구요 하하하. 근데 뭐라고 쓸 말이 없네요~ 입점 문의 해주시죠 그냥! 해주세요~~ 하하하 호호호~ 무슨 말을 더 써야할 지 모르겠으니 이만 글을 줄이도록 하겠습니다. 만수무강 하시고 하시는 사업 모두 번창하시기를 바랍니다.안녕하세요 입점 문의 드립니다. 뭐라고 해야할 지는 몰라서 그냥 길 게 써 볼려구요 하하하. 근데 뭐라고 쓸 말이 없네요~ 입점 문의 해주시죠 그냥! 해주세요~~ 하하하 호호호~ 무슨 말을 더 써야할 지 모르겠으니 이만 글을 줄이도록 하겠습니다. 만수무강 하시고 하시는 사업 모두 번창하시기를 바랍니다.안녕하세요 입점 문의 드립니다. 뭐라고 해야할 지는 몰라서 그냥 길 게 써 볼려구요 하하하. 근데 뭐라고 쓸 말이 없네요~ 입점 문의 해주시죠 그냥! 해주세요~~ 하하하 호호호~ 무슨 말을 더 써야할 지 모르겠으니 이만 글을 줄이도록 하겠습니다. 만수무강 하시고 하시는 사업 모두 번창하시기를 바랍니다.안녕하세요 입점 문의 드립니다. 뭐라고 해야할 지는 몰라서 그냥 길 게 써 볼려구요 하하하. 근데 뭐라고 쓸 말이 없네요~ 입점 문의 해주시죠 그냥! 해주세요~~ 하하하 호호호~ 무슨 말을 더 써야할 지 모르겠으니 이만 글을 줄이도록 하겠습니다. 만수무강 하시고 하시는 사업 모두 번창하시기를 바랍니다.',
    answer:
      '안녕하세요 배민문방구 입니다. 감사합니다. 입점 문의는 02-2173-2193번으로 전화 주시기 바랍니다. 감사합니다.',
  },
];

export default {
  title: '컴포넌트/공통/콜랍스',
  component: Collapse,
} as ComponentMeta<typeof Collapse>;

const Template: ComponentStory<typeof Collapse> = (args) => (
  <Collapse {...args} />
);

export const Default = Template.bind({});
Default.args = {
  headers,
  items,
  gaps: '1fr 3fr 1fr 1fr 1fr',
};
