import styled from 'styled-components'

export const Container = styled.main`
  display: flex;
  justify-content: center;
  flex-direction: column;
  max-width: 85rem;

  font-family: 'Heebo', sans-serif;
  background-color: ${({ theme }) => theme.COLORS.WHITE};
  color: ${({ theme }) => theme.COLORS.DARK};

  padding: 0 2rem;
  margin: auto;
  .hero {
    width: 100%;
    margin: auto;

    .picture-wrapper {
      display: flex;
      width: 100%;
      justify-content: center;
      padding: 0 0 1.6rem 0;
      .picture {
        width: 26rem;

        border-radius: 90%;
      }
    }

    .introduction {
      font-size: 1.4rem;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
    }
    .main-txt {
      font-size: 5.25rem;
      font-family: 'Heebo', sans-serif;
      font-weight: bold;
      line-height: 5.25rem;
    }
    .btn-wrapper {
      display: flex;
      align-items: center;
      gap: 1.6rem;
    }
    .CTA-btn {
      font-family: 'Heebo';
      font-size: 1.4rem;
      font-style: normal;
      font-weight: 500;
      line-height: normal;

      padding: 0.5rem 1.2rem;
      height: 35px;
      color: ${({ theme }) => theme.COLORS.WHITE};
      background-color: ${({ theme }) => theme.COLORS.PRIMARY};
      border: none;
      border-radius: 90px;
    }
    .resume {
      font-family: Heebo;
      font-size: 1.6rem;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
      padding: 0 0 3.2rem 0;
    }
  }
`
