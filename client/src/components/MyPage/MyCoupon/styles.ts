import styled from 'styled-components';

export const MyCoupon = styled.div`
  display: flex;
  flex-direction: column;
`;

export const CouponSection = styled.section`
  display: flex;
  flex-direction: column;

  .sub-title {
    margin: 1.5rem 0;
  }
`;

export const CouponDisplay = styled.section`
  margin-top: 2rem;

  .title {
    margin-bottom: 3rem;
  }
`;

export const RegisterCoupon = styled.div`
  border-bottom: 1px solid ${({ theme }) => theme.color['border-gray']};
  padding: 3rem 0;
  display: flex;
  button {
    flex-grow: 0;
    margin-left: 1.2rem;
    width: 10rem;
  }
`;
