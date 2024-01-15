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
    height: 38rem;
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
`
