import styled from 'styled-components'

export const Container = styled.div`
  background-color: ${({ theme }) => theme.COLORS.WHITE};
  padding: 15px;
  .social {
    display: flex;
    gap: 18px;
    justify-content: center;

    > img {
      object-fit: contain;
      width: 40px;
      height: 60px;
    }
  }
`
