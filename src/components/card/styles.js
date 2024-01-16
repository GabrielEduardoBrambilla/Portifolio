import styled from 'styled-components'

export const Container = styled.div`
  border-radius: 20px;
  background-color: ${({ theme }) => theme.COLORS.WHITE};
  /* background-color: lightskyblue; */
  font-family: Poppins, sans-serif;
  max-width: 280px;
  filter: ${props => (props.isActive ? 'blur(5px)' : 'none')};
  .content-wrapper {
    padding: 0 16px;
  }

  .img-wrapper {
    > img {
      width: 100%;
      max-width: 37.5rem;
      object-fit: cover;
    }
  }
  .title {
    padding: 8px 0px;
    font-size: 28px;
    font-style: normal;
    font-weight: 500;
    line-height: 26px; /* 92.857% */
  }
  .description {
    font-weight: 300;
  }

  .tag-wrapper {
    padding: 16px 0px;
    display: flex;
    gap: 5px;
    .tag {
      background-color: ${({ theme }) => theme.COLORS.DARK};
      color: #fff;
      font-weight: 900;
      padding: 2px 5px;
      border-radius: 90px;
    }
  }
`
