import { CardWrapper } from '@/components/CardWrapper/styles';
import styled from 'styled-components';
import Thung from '@/components/Thung';

export const SearchItemContainer = styled.div`
  max-height: 60vh;
  overflow-y: scroll;
  & {
    -ms-overflow-style: none;
  }
  &::-webkit-scrollbar {
    display: none;
  }
`;

export const RecentTitle = styled.div`
  margin: 1.5rem 0;
  padding: 0.5rem 0;
  font-size: ${({ theme }) => theme.fontSize.m};
  color: ${({ theme }) => theme.color.label};
  min-height: calc(-50vh + 80px);
`;

export const SearchItem = styled.div`
  cursor: pointer;
`;

export const SearchItemWrapper = styled(CardWrapper)`
  margin-bottom: 2rem;
  padding: 0.3rem;
  &:after {
    content: '';
    grid-column: 1 / -1;
    height: 1rem;
  }
`;

export const SearchItemList = styled.li`
  border-radius: 0.5rem;
  height: 100%;
  overflow: hidden;
  box-shadow: 0 0 4px #000;

  img {
    width: 100%;
  }
`;

export const RecentSearchUl = styled.ul`
  display: flex;
  flex-wrap: wrap;
`;

export const RecentSearchItem = styled.li`
  padding: 0.5rem;
  border-radius: 5px;
  box-shadow: 0 0 2px #999;
  color: ${({ theme }) => theme.color['text-color']};
  margin: 0 0.3rem;
  cursor: pointer;
  display: flex;
  align-items: center;

  svg {
    margin-left: 1rem;
    stroke-width: 3px !important;
    width: 1em !important;
    height: 1em !important;
  }
`;

export const EmptyData = styled(Thung)`
  max-width: 40rem;
  width: 90%;
  margin: 0 auto;
`;
