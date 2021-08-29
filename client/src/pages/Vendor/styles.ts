import styled from 'styled-components';

export const Vendor = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  .main-title {
    margin-bottom: 3rem;
  }
`;

export const VendorList = styled.section`
  width: 100%;
  max-width: 45rem;
  display: flex;
  flex-direction: column;
  gap: 1em;
  padding: 1.5em;
  ${({ theme }) => theme.fontSize.l};
  @media (max-width: ${({ theme }) => theme.media.tablet}px) {
    ${({ theme }) => theme.fontSize.m};
  }
  & + & {
    border-top: 1px solid ${({ theme }) => theme.color.line};
  }
`;

export const VendorListItem = styled.div`
  display: flex;
  flex-direction: column;
  color: ${({ theme }) => theme.color['text-color']};
  font-size: 0.9em;
  ${({ theme }) => theme.fontWeight.s};

  &.info {
    font-size: 0.7em;
  }
`;

export const OuterLink = styled.a`
  word-break: break-all;
  color: ${({ theme }) => theme.color.primary3};
  font-size: 0.7em;
  ${({ theme }) => theme.fontWeight.l};
`;
