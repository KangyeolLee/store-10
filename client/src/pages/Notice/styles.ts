import { Collapse, CollapseHeader } from '@/components/Shared/Collapse/styles';
import styled from 'styled-components';

export const Notice = styled.div`
  max-width: ${({ theme }) => theme.media.pc}px;
  display: flex;
  flex-direction: column;

  .title {
    margin-bottom: 3rem;
  }
`;

export const NoticeCollapse = styled(Collapse)`
  ${CollapseHeader} {
    &.review_collapse {
      grid-template-columns: 1fr 3fr 1fr 1fr;
    }
  }
`;
