import styled from 'styled-components';

export const SignUpContainer = styled.div`
  max-width: 45rem;
  display: flex;
  flex-direction: column;
  text-align: center;
  padding-top: 5rem;

  h3 {
    margin-bottom: 5rem;
  }

  @media (max-width: ${({ theme }) => theme.media.phone - 1}px) {
    h3 {
      ${({ theme }) => theme.fontSize.xl}
    }

    button {
      margin-bottom: 1rem;
    }

    input {
    }
  }
`;

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;

  .input-container,
  button {
    margin-bottom: 4rem;
  }
`;

export const EmailContainer = styled.div`
  display: flex;
  justify-content: space-between;

  div {
    flex: 2;
    margin-right: 2rem;
  }

  button {
    border-radius: 10px;
    border: 1px solid #c1c5c5;
  }
`;
