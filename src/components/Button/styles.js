import styled from 'styled-components';
import {DEVICE_BREAKPOINTS} from "../../styles/deviceBreakpoints";

export const Container = styled.button`
  background-color: ${({ theme }) => theme.COLORS.BLUE_300};
  color: ${({ theme }) => theme.COLORS.BLUE_600};
  
  border: 0;
  height: 3.5rem; // 56px /16px = 3.5rem (1rem = 16px)
  padding: 0 1rem; // 16px /16 = 1rem
  font-weight: 500;
  border-radius: .43rem; // 7px /16 = 0,437
  
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;

  > span {
    font-size: 1rem;
  }

  > svg {
    font-size: 1.37rem; // 22px /16 = 1.735rem
  }

  @media (max-width: ${DEVICE_BREAKPOINTS.XS}) {
    height: 3rem;
    padding: 0 0.5rem;

    > span {
      font-size: 0.8rem;
    }

    > svg {
      font-size: 1rem; // 22px /16 = 1.735rem
    }
  }
`;