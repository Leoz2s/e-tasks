import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  
  background-color: ${({ theme }) => theme.COLORS.GRAY_700};
  color: ${({ theme }) => theme.COLORS.GRAY_100};
  
  border-radius: .43rem; // 7px /16 = 0,437
  
  > input {
    height: 3.5rem; // 56px /16px = 3.5rem (1rem = 16px)
    width: 100%;
    font-size: 1rem; // 16px = 1rem
    padding: .75rem; // 12px /16 = 0.75
    
    color: ${({ theme }) => theme.COLORS.GRAY_100};
    background: transparent;
    border: 0;

    &::placeholder {
      color: ${({ theme }) => theme.COLORS.GRAY_300};
    }
  }
  
  > svg {
    margin-left: 1rem; // 16px = 1rem
    font-size: 1.5rem; // 24px /16 = 1.5rem
    color: ${({ theme }) => theme.COLORS.GRAY_400};
  }
`;