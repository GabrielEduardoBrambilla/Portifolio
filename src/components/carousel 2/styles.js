import styled from 'styled-components'

export const Container_wrapper = styled.div`
  padding: 32px 0;
  background: linear-gradient(
    2deg,
    #6687fb 1.58%,
    rgba(102, 135, 251, 0) 94.44%
  );
`
export const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  height: 500px;
  font-family: 'Heebo', sans-serif;
  color: ${({ theme }) => theme.COLORS.DARK};

  padding: 0 2rem;
  margin: auto;
  .swiper {
    display: flex;
    justify-content: center;
    width: 100%;
    max-width: 716px;
    flex: 0 0 auto;
    height: 100%;

    gap: 503px;
  }

  .swiper-slide-shadow {
    background: transparent;
  }
  .swiper-slide {
    display: flex;
    justify-content: center;
    align-items: center;
    /* margin-right: 100px !important; */
    background-color: transparent;
    flex: 0 0 auto;
  }

  .swiper-slide img {
    display: block;
    /* width: 100%; */
  }
`
