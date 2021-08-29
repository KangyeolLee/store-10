import styled from 'styled-components';

export const AuthContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  padding: 8rem;
  box-shadow: ${({ theme }) => theme.boxShadow};
  border-radius: 0.8rem;

  button,
  .input-container {
    margin-bottom: 2rem;
  }

  ${({ theme }) => theme.mediaScreen.btw_tab_mob`
    padding: 5rem;  
  `};

  ${({ theme }) => theme.mediaScreen.phone`
    padding: 1.5rem;  
  `}

  button {
    min-width: 8rem;
  }
`;

export const Information = styled.p`
  font-size: 2rem;
  color: ${({ theme }) => theme.color['text-color']};
`;

export const PasswordContainer = styled.form`
  display: flex;
  justify-content: center;
  margin-top: 4rem;

  .input-container {
    margin-right: 2rem;
  }
`;

export const NickNameContainer = styled.form`
  display: flex;
  position: relative;
  padding: 8rem;
  box-shadow: ${({ theme }) => theme.boxShadow};
  border-radius: 0.8rem;
  margin-bottom: 4rem;

  button {
    min-width: 13rem;
  }

  .input-wrapper {
    margin-top: 4rem;
    display: flex;
    gap: 2rem;

    ${({ theme }) => theme.mediaScreen.mphone`
      margin-top: 5.5rem;
    `}
  }

  ${({ theme }) => theme.mediaScreen.btw_tab_mob`
    padding: 5rem;  
  `};

  ${({ theme }) => theme.mediaScreen.phone`
    padding: 1.5rem;  
  `}
`;

export const NewPasswordContainer = styled.form`
  display: flex;
  position: relative;
  flex-direction: column;
  padding-top: 2rem;
  padding: 8rem;
  box-shadow: ${({ theme }) => theme.boxShadow};
  border-radius: 0.8rem;

  button,
  .input-container {
    margin-top: 4rem;
  }

  ${({ theme }) => theme.mediaScreen.btw_tab_mob`
    padding: 5rem;  
  `};

  ${({ theme }) => theme.mediaScreen.phone`
    padding: 1.5rem;  
  `}
`;

export const ContainerTitle = styled.p`
  position: absolute;
  top: 0;
  left: 0;
  font-size: 2rem;
  margin: 2rem;
  color: ${({ theme }) => theme.color['text-color']};
`;
