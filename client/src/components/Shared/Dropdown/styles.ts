import styled from 'styled-components';

interface IDropDownItem {
  color: string;
}
export const DropdownButton = styled.div`
  position: relative;

  svg {
    cursor: pointer;
    fill: ${({ theme }) => theme.color.primary};
    outline: none;
    border: none;
  }

  ${({ theme }) => theme.fontSize.m};
  ${({ theme }) => theme.fontWeight.s};
`;

export const DropDown = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  border-radius: 1rem;
  background-color: ${({ theme }) => theme.color['off-white']};
  box-shadow: 0px 0px 4px rgba(204, 204, 204, 0.5),
    0px 2px 4px rgba(0, 0, 0, 0.25);
  top: 100%;
  right: 0;
  z-index: 100;
`;

export const DropDownItem = styled.div<IDropDownItem>`
  padding: 1rem 1.5rem;
  box-sizing: content-box;
  text-align: center;
  min-width: 7rem;
  cursor: pointer;
  color: ${({ color }) => (color ? color : `#111`)};

  &:hover {
    opacity: 0.75;
  }

  & + & {
    border-top: 1px solid #ededed;
  }
`;
