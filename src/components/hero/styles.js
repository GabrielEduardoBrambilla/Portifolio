import styled from 'styled-components'

export const Container = styled.main`
  font-family: 'Heebo', sans-serif;
  max-width: 850px;
  color: ${({ theme }) => theme.COLORS.DARK};

  background-color: ${({ theme }) => theme.COLORS.WHITE};
  padding: 0 15px;
  .hero {
    width: 100%;

    .picture-wrapper {
      display: flex;
      width: 100%;
      justify-content: center;
      padding: 0 0 16px 0;
      .picture {
        width: 260px;

        border-radius: 90%;
      }
    }

    .introduction {
      font-size: 14px;
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
      gap: 16px;
    }
    .CTA-btn {
      font-family: 'Heebo';
      font-size: 14px;
      font-style: normal;
      font-weight: 500;
      line-height: normal;

      padding: 5px 11px;
      height: 35px;
      color: ${({ theme }) => theme.COLORS.WHITE};
      background-color: ${({ theme }) => theme.COLORS.PRIMARY};
      border: none;
      border-radius: 90px;
    }
    .resume {
      font-family: Heebo;
      font-size: 16px;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
    }
  }
`
