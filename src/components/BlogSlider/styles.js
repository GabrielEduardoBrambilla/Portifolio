import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;

  font-family: 'Heebo', sans-serif;
  color: ${({ theme }) => theme.COLORS.DARK};
  background: linear-gradient(
    2deg,
    #6687fb 1.58%,
    rgba(102, 135, 251, 0) 94.44%
  );

  padding: 0 2rem;
  margin: auto;
`
