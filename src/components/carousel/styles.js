import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  height: 500px;
  padding: 50px;
  font-family: 'Heebo', sans-serif;
  color: ${({ theme }) => theme.COLORS.DARK};
  background: linear-gradient(
    2deg,
    #6687fb 1.58%,
    rgba(102, 135, 251, 0) 94.44%
  );

  padding: 0 2rem;
  margin: auto;
  .swiper {
    display: flex;
    justify-content: center;
    width: 100%;
    max-width: 416px;
    flex: 0 0 auto;
    height: 100%;
  }

  .swiper-slide {
    display: flex;
    justify-content: center;
    align-items: center;
    background-position: center;
    background-size: cover;
    /* background-color: red; */
    flex: 0 0 auto;
  }

  .swiper-slide img {
    display: block;
    width: 100%;
  }
`
