import styled from 'styled-components';
import Title from '@/components/Shared/Title';
import Button from '@/components/Shared/Button';
import Checkbox from '@/components/Shared/Checkbox';
import Thung from '@/components/Thung';
import { Close2 } from '@/assets/svgs';

export const BookmarkContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const BookmarkTitle = styled(Title)`
  ${({ theme }) => theme.fontSize.l};
  font-family: 'BMDOHYEON', sans-serif;
  margin-bottom: 1rem;
`;

export const CardContainer = styled.div`
  flex: 1;
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export const EditButton = styled(Button)`
  margin-left: 1rem;
  margin-bottom: 2rem;
  border: none;
  gap: 1rem;
  padding: 1rem;
  border-radius: 1rem;
  line-height: inherit;
  justify-content: space-between;
  ${({ theme }) => theme.fontSize.m};
  background-color: ${({ theme }) => theme.color.body3};

  svg.edit {
    fill: ${({ theme }) => theme.color['text-color']};
  }
  &.red {
    color: ${({ theme }) => theme.color.error};
  }
`;

export const AllCheckBox = styled(Checkbox)`
  margin-left: 1rem;
  margin-bottom: 2rem;
  border: none;
  line-height: inherit;
  border-radius: 1rem;
  justify-content: space-between;
  ${({ theme }) => theme.fontSize.m};
  font-family: Arial, Helvetica, sans-serif;
  padding: 0.5rem 1rem;
  color: ${({ theme }) => theme.color['text-color']};
  background-color: ${({ theme }) => theme.color.body3};

  &:hover {
    background-color: ${({ theme }) => theme.color.hover};
  }

  span {
    width: 2rem;
    height: 2rem;
  }
`;

export const BookmarkThung = styled(Thung)`
  max-width: 80%;
  width: 35rem;
  margin: 3rem auto;
`;

export const BookmarkClose = styled(Close2)`
  fill: ${({ theme }) => theme.color['text-color']};
`;
