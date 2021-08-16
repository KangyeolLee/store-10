import styled from 'styled-components';

export const ModalHeader = styled.div`
  ${({ theme }) => theme.fontSize.l};
  ${({ theme }) => theme.fontWeight.l};
`;

export const ModalDivider = styled.div`
  border-bottom: 1px solid #ededed;
`;

export const ModalBody = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  ${({ theme }) => theme.fontSize.m}
`;

export const ModalButtonArea = styled.div`
  display: flex;
  gap: 2rem;
  justify-content: space-between;
`;

export const ModalButton = styled.button`
  padding: 2rem;
  width: 100%;
  border: 1px solid #ededed;
  border-radius: 1.5rem;
  cursor: pointer;

  &:hover {
    opacity: 0.75;
  }
`;

// 나중에 Input 컴포넌트로 분리할 계획
export const Form = styled.form`
  h5 {
    margin-bottom: 1.5rem;
  }

  .category-selection {
    display: flex;
    justify-content: space-between;
    gap: 2rem;

    .each-category {
      padding: 2rem;
      border-radius: 2rem;
      background-color: ${({ theme }) => theme.color.primary2};
      display: flex;
      align-items: center;
      gap: 1.5rem;
      width: 30%;
      cursor: pointer;

      &:hover {
        opacity: 0.85;
      }

      &.selected {
        color: #fff;
        background-color: ${({ theme }) => theme.color.primary};

        svg {
          stroke: #fff;
          fill: #fff;
        }
      }
    }
  }

  .preview-wrapper {
    margin-top: 2rem;
    display: flex;
    gap: 2rem;

    img {
      object-fit: cover;
      width: 20%;
    }
  }

  .input-file-button {
    border-radius: 2rem;
    padding: 2rem;
    background-color: #ededed;
    display: flex;
    flex-direction: column;
    gap: 2rem;
    justify-content: center;
    align-items: center;
    border: 1px dashed #aaa;
    cursor: pointer;

    .helper-text {
      color: #adadad;
    }

    &:hover {
      opacity: 0.75;
    }
  }

  .error-text {
    margin-top: 1rem;
    text-align: right;
    color: ${({ theme }) => theme.color.error};
  }

  textarea {
    width: 100%;
    height: 15rem;
    padding: 2rem;
    min-height: 6rem;
    max-height: 20rem;
    border-top-left-radius: 2rem;
    border-top-right-radius: 2rem;
    border-bottom-left-radius: 2rem;
    resize: vertical;
  }

  & + & {
    margin-top: 3rem;
  }
`;
