import styled from 'styled-components'

export const Container = styled.div`
  background-color: ${({ theme }) => theme.COLORS.WHITE};
  height: 125px;

  padding: 15px;
  .social {
    display: flex;
    justify-content: center; // Aligns .social to the left and .text-wrapper to the right
    gap: 18px;
    position: relative;
    background-color: ${({ theme }) => theme.COLORS.WHITE};

    > img {
      height: 60px;
      width: 40px;
      object-fit: contain;
    }
    .text-wrapper {
      display: none;
    }
  }
  @media (min-width: 768px) {
    .social {
      .text-wrapper {
        display: flex;
        position: absolute;
        right: 0;
        justify-content: flex-end; // Aligns .social to the left and .text-wrapper to the right: ;
        padding: 1.5rem;
        gap: 1.8rem;
        color: ${({ theme }) => theme.COLORS.DARK};
        text-align: right;
        font-size: 1.66rem;
        font-style: normal;
        font-weight: 500;
        line-height: normal;
      }
    }
  }
`
