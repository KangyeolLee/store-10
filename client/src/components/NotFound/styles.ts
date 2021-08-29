import styled from 'styled-components';

export const NotFound = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: #fafafa;
  user-select: none;
`;

export const AlertTag = styled.div`
  position: absolute;
  padding: 3rem;
  box-sizing: border-box;
  border-radius: 2rem;
  font-size: 3rem;
  font-family: 'BMDOHYEON';
  text-align: center;
  bottom: 0;
  right: 0;
  width: 40%;
  height: 50%;
  background-color: #f45452;
  color: #fff;
  transform: rotate(-30deg) translate(15%, 60%);
`;

export const AlertContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  gap: 2rem;
  text-align: center;
  padding-right: 2rem;
  box-sizing: border-box;
  background-color: #fff;
  width: 100%;
  height: 100%;
  border-radius: 5rem;

  .title {
    font-size: 4rem;
    font-family: 'BMDOHYEON';
  }

  .sub-title {
    font-size: 2.5rem;
    font-family: 'BMDOHYEON';
  }
`;

export const AlertArea = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  gap: 3rem;
  border: 3px solid #111;
  border-radius: 5rem;
  background-color: #fff;
  box-shadow: 2rem 2rem 4rem #e2e1e1, -2rem -2rem 4rem #fefdfd;
  overflow: hidden;

  img {
    max-width: 30rem;
  }

  @media screen and (max-width: 780px) {
    flex-direction: column;
    margin: 5rem 0;
    img {
      max-width: unset;
      width: 110%;
    }

    ${AlertContent} {
      padding: 1rem 1rem 6rem 1rem;
    }

    ${AlertTag} {
      padding: 2rem;
      width: 25rem;
      height: 10rem;
      transform: rotate(-30deg) translate(20%, 60%);
    }
  }

  @media screen and (max-width: 500px) {
    img {
      width: 30rem;
    }
    .title {
      font-size: 2.5rem;
    }
    .sub-title {
      font-size: 1.8rem;
    }
    ${AlertTag} {
      font-size: 2rem;
      width: 15rem;
      height: 10rem;
      padding: 1.5rem;
      transform: rotate(-30deg) translate(15%, 60%);
    }
  }
`;
