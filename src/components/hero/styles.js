import styled from 'styled-components'

export const Container = styled.main`
  max-width: 85rem;
  width: 100%;
  padding: 0 2rem;
  margin: auto;
  font-family: 'Heebo', sans-serif;

  display: flex;
  justify-content: center;
  flex-direction: column;
  .hero {
    display: flex;
    justify-content: center;
    flex-direction: column;
    background-color: ${({ theme }) => theme.COLORS.WHITE};
    color: ${({ theme }) => theme.COLORS.DARK};
  }

  .picture {
    width: 26rem;
    margin: auto;
    border-radius: 90%;
  }
  .picture-wrapper {
    display: flex;
    width: 100%;
    justify-content: center;
    padding: 0 0 1.6rem 0;
  }

  .introduction {
    font-size: 1.4rem;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
  .main-txt {
    font-size: 5.25rem;
    font-weight: bold;
    line-height: 5.25rem;
  }
  .btn-wrapper {
    display: flex;
    align-items: center;
    gap: 1.6rem;
  }
  .CTA-btn {
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
    font-size: 1.6rem;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    padding: 0 0 3.2rem 0;
  }

  @media (min-width: 768px) {
    .hero {
      width: 100%;
      flex-direction: row;
      align-items: center;
      justify-content: center;
      gap: 16px;
    }
    .txt-wrapper {
      max-width: 750px;
      .main-txt {
        font-size: 8rem;
        font-weight: bold;
        line-height: 7rem;
      }
    }
    .picture {
      width: 21.7rem;
      margin: auto;
      border-radius: 90%;
    }
    .picture-wrapper {
      display: unset;
      width: unset;
      justify-content: unset;
      padding: unset;
    }

    .CTA-btn {
      font-size: 2rem;
      font-style: normal;
      font-weight: 500;
      line-height: normal;

      /* padding: 0.8rem 1.2rem; */
      height: 4.7rem;
      color: ${({ theme }) => theme.COLORS.WHITE};
      background-color: ${({ theme }) => theme.COLORS.PRIMARY};
      border: none;
      border-radius: 90px;
    }
    .resume {
      margin: 12px;
    }
  }
`
