import styled from 'styled-components'

export const Container = styled.div`
  font-family: 'Heebo', sans-serif;
  color: ${({ theme }) => theme.COLORS.DARK};

  background: linear-gradient(120deg, #345ce9 20.39%, #4200ff 72.35%);
  padding: 3.2rem 2rem;
  .contact {
    background-color: white;
    margin: auto;
    max-width: 85rem;
    min-height: 38rem;
    padding: 2.4rem;
    .CTA-wrapper {
      color: #000c24;

      font-size: 3rem;
      font-style: normal;
      font-weight: 600;
      line-height: 3.5rem;
    }
    .form {
      > h2 {
        display: none;
      }
      > form {
        display: flex;
        flex-direction: column;
        margin: 2.4rem 0 0 0;
        gap: 1.6rem;
        > input {
          border-radius: 3.129px;
          border: 0.782px solid #000;
          height: 4rem;
          padding: 7px;
          background-color: FFF;
        }
        > textarea {
          border-radius: 3.129px;
          border: 0.782px solid #000;
          display: flex;
          justify-content: start;
          height: 50px;
          padding: 7px;

          text-align: start;
        }
        > button {
          border-radius: 8.2rem;
          background: #000c24;
          height: 41.458px;
          width: 13.6rem;
          color: white;
          border: none;
        }
      }
    }
  }
  @media (min-width: 575px) {
    .contact {
      display: grid;
      grid-gap: 40px;
      max-height: 38rem;
      grid-template-columns: 3fr 4fr;
      background-color: white;
      margin: auto;
      max-width: 85rem;
      min-height: 38rem;
      padding: 2.4rem;

      .CTA-wrapper {
        display: flex;
        margin: auto;
        flex-direction: column;
        max-width: 435px;
        color: ${({ theme }) => theme.COLORS.DARK};
        font-size: 3rem;
        font-style: normal;
        font-weight: 500;
        line-height: 3.5rem;
      }
      .form {
        display: flex;
        flex-direction: column;
        justify-content: center;
        gap: 1.6rem;
        max-width: 435px;
        > h2 {
          display: none;
        }
        > form {
          display: flex;
          flex-direction: column;
          gap: 1.6rem;

          > input {
            border-radius: 3.129px;
            border: 0.782px solid #000;
            height: 4rem;
            padding: 7px;
            background-color: #fff;
            + textarea {
              border-radius: 3.129px;
              padding: 7px;
              border: 0.782px solid #000;
              display: flex;
              justify-content: start;
              height: 10rem;
              text-align: start;
            }
          }
          > button {
            border-radius: 8.2rem;
            background: #000c24;
            height: 41.458px;
            width: 13.6rem;
            color: white;
            border: none;
          }
        }
      }
    }
  }
  @media (min-width: 768px) {
    .contact {
      display: grid;
      grid-gap: 40px;
      max-height: 38rem;
      margin: 28px auto;
      grid-template-columns: 3fr 4fr;
      .form {
        > h2 {
          display: flex;
          font-size: 2.5rem;
          font-style: normal;
          font-weight: 700;
          line-height: normal;
          color: ${({ theme }) => theme.COLORS.DARK};
        }
        > form {
          display: flex;
          flex-direction: column;
          margin: 0;
          gap: 1.6rem;
          > input {
            border-radius: 3.129px;
            border: 0.782px solid #000;
            height: 4rem;
            padding: 7px;
            background-color: #fff;
            + textarea {
              display: flex;
              justify-content: start;
              height: 97px;
              text-align: start;
            }
          }

          > button {
            border-radius: 8.2rem;
            background: #000c24;
            height: 41.458px;
            width: 13.6rem;
            color: white;
            border: none;
          }
        }
      }
    }
    .CTA-wrapper {
      display: flex;
      margin: auto;
      flex-direction: column;
    }
  }
`
