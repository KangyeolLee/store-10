import { AnswerSVG, QuestionSVG } from '@/assets/svgs';
import React, { createRef, Fragment, useEffect, useState } from 'react';
import * as S from './styles';
import { dateFormat } from '@/utils/helper';
import { notify } from '../Toastify';
import { useRecoilState } from 'recoil';
import { userState } from '@/recoil/user';
import Dropdown from '@/components/Shared/Dropdown';
import { IDropDownItem } from '../Dropdown/Dropdown';

// TODO: ANY 안 쓰고 시퍼용

interface ICollapseItem {
  [key: string]: any;
}

interface ICollapse<T> {
  headers: {
    name: string;
    value: string;
  }[];
  items: Array<T>;
  noSecret?: boolean;
  dropdownItems?: IDropDownItem[];
  gaps?: string; // '1fr 2fr 1fr 1fr 1fr'
  forNotice?: boolean; // only for Notice page
}

const Collapse = <T extends ICollapseItem>({
  headers,
  items,
  gaps,
  noSecret,
  dropdownItems,
  forNotice,
}: ICollapse<T>) => {
  const initialState = items.map(() => ``);
  const [user] = useRecoilState(userState);
  const [isActive, setIsActive] = useState<string[]>(initialState);
  const [height, setHeight] = useState(0);
  const [refs, setRefs] = useState<React.RefObject<HTMLDivElement>[]>([]);

  const handleClickOnItem = (id: number, index: number) => {
    // TODO: user.name 이 고유값이 아니라면 user_id를 받아오도록 변경
    const seleted = items.filter((item) => item.id === id);
    if (!noSecret && seleted[0].secret && seleted[0].user_id !== user?.id) {
      return notify('error', '작성자와 관리자만 열람할 수 있습니다.');
    }

    const nextState = items.map((item) => {
      return id === item.id ? `collapse-item-${item.id}` : '';
    });

    isActive[index] ? setIsActive(initialState) : setIsActive(nextState);
    setHeight(refs[index].current?.clientHeight ?? 0);
  };

  useEffect(() => {
    setRefs((refs) => items.map((_, i) => refs[i] || createRef()));
  }, [items]);

  return (
    <S.Collapse>
      <S.CollapseHeader
        className={forNotice ? 'notice_collapse' : 'review_collapse'}
        gaps={gaps}
        length={headers.length}
      >
        {headers.map((header) => (
          <p
            key={header.value}
            className={
              (header.name === '답변' ? 'answer' : '') +
              ((header.name === '작성자' || header.name === '작성일') &&
              !forNotice
                ? 'on_btw_tab_mob_resolution'
                : '')
            }
          >
            {header.name}
          </p>
        ))}
      </S.CollapseHeader>
      <S.CollapseBody>
        {items.map((item, idx) => (
          <Fragment key={item.id}>
            <S.CollaspeRow
              gaps={gaps}
              length={headers.length}
              onClick={() => handleClickOnItem(item.id, idx)}
              className={
                (forNotice ? 'notice_collapse ' : 'review_collapse ') +
                (isActive[idx] === `collapse-item-${item.id}` ? 'active' : '') +
                (!noSecret && item.secret && item.user_id !== user?.id
                  ? 'lock'
                  : '')
              }
            >
              {headers.map((header) => {
                // TODO: 삼항연산자 depth가 너무 깊어 좀 풀고 싶은데 막상 좋은 방법이 떠오르지 않는군뇨..
                // 나는야 주석도 업데이트 하는 씐박한 개발자
                // 짜잔 요렇게 하는건 오떠신가요
                const headerTitle = (value: string) => {
                  switch (value) {
                    case 'createdAt':
                      return dateFormat(item[value], 'abs');

                    case 'answer':
                      return item[value] ? (
                        <S.Status>
                          <S.StatusPoint className="completed" />
                          <span className="on_tablet_resolution">완료</span>
                        </S.Status>
                      ) : (
                        <S.Status>
                          <S.StatusPoint className="pending" />
                          <span className="on_tablet_resolution">대기중</span>
                        </S.Status>
                      );

                    case value == 'name' &&
                      item.secret &&
                      item.user_id !== user?.id:
                      return '비공개';

                    case 'category':
                      return (
                        <div className="category">
                          <p className={item[value]}>{item[value]}</p>
                        </div>
                      );

                    default:
                      return item[value];
                  }
                };

                return (
                  <S.CollapseSubTitle
                    key={header.value}
                    className={
                      (header.name === '작성자' || header.name === '작성일') &&
                      !forNotice
                        ? 'on_btw_tab_mob_resolution'
                        : ''
                    }
                  >
                    {headerTitle(header.value)}
                  </S.CollapseSubTitle>
                );
              })}
            </S.CollaspeRow>

            <S.CollapsePanel
              className={
                isActive[idx] === `collapse-item-${item.id}` ? 'active' : ''
              }
              height={height}
            >
              {forNotice ? (
                <S.CollapseContent ref={refs[idx]}>
                  <S.CollapseDetails>
                    <pre>{item.content}</pre>
                  </S.CollapseDetails>
                </S.CollapseContent>
              ) : (
                <S.CollapseContent ref={refs[idx]}>
                  {(!item.secret || user?.id === item.user_id) && (
                    <>
                      <S.CollapseDetails>
                        <p className="question">
                          <span>Q. </span>
                          {item.content}
                        </p>
                        {noSecret && dropdownItems && (
                          <Dropdown
                            selectedId={item.id}
                            items={dropdownItems}
                          />
                        )}
                      </S.CollapseDetails>
                      <S.CollapseDetails>
                        <p className="answer">
                          {item.answer ||
                            '답변 대기중입니다... 조금만 기다려주세요!'}
                        </p>
                      </S.CollapseDetails>
                    </>
                  )}
                </S.CollapseContent>
              )}
            </S.CollapsePanel>
          </Fragment>
        ))}
      </S.CollapseBody>
    </S.Collapse>
  );
};

export default Collapse;
