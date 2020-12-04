import './App.css';
import React, { useState, useEffect } from 'react';
import { createGlobalStyle } from 'styled-components';
import Navbar from './components/Navbar';
import Logo from './components/Logo';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';
import KopiImage from './assets/jurnal1/biji1-min.jpg';
import Pertamina from './assets/jurnal1/logo_pertamina_bg.png';
import Natgeo from './assets/jurnal1/natgeo.png';
import AOS from 'aos';
import 'aos/dist/aos.css';



const GlobalStyles = createGlobalStyle`
 html {
   box-sizing: border-box;
}

 *,
 *::before,
 *::after {
   box-sizing: inherit;
}
`;


function App() {

  const [imgsLoaded, setImgsLoaded] = useState(false);
  const IMAGES = [KopiImage];

  const history = useHistory();







  useEffect(() => {
    AOS.init({
      duration: 1500
    })
    const loadImage = image => {
      return new Promise((resolve, reject) => {
        const loadImg = new Image()
        loadImg.src = image
        loadImg.onload = () =>
          setTimeout(() => {
            resolve(image.url)
          }, 1000)
        loadImg.onerror = err => reject(err)
      })
    }
    Promise.all(IMAGES.map(image => loadImage(image)))
      .then(() => setImgsLoaded(true))
      .catch(err => console.log("Failed to load images", err))
  }, []);



  let loading = <><div style={{
    height: '100vh',
    backgroundColor: 'black',
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'fixed',
    zIndex: 200,
    opacity: !imgsLoaded ? 1 : 0,
    visibility: !imgsLoaded ? 'visible' : 'hidden',
    transition: 'opacity 1s, visibility 0.5s linear 2s',
  }}>
  </div>
    <div style={{
      height: '100vh',
      display: 'flex',
      width: '100%',
      position: 'fixed',
      justifyContent: 'center',
      alignItems: 'center',
      zIndex: 300,
      opacity: !imgsLoaded ? 1 : 0,
      visibility: !imgsLoaded ? 'visible' : 'hidden',
      transition: 'opacity 1s, visibility 0.5s linear 2s',
    }}>
      <div className="aaa"></div>
    </div>
  </>






  return (
    <>
      {loading}
      <GlobalStyles></GlobalStyles>
      <Navbar>

        <Logo isResponsive={true} src={Natgeo} height='80px' />
        <Logo isResponsive={true} src={Pertamina} height='80px' />
      </Navbar>
      <Bg style={{ paddingTop: 80, backgroundColor: 'black', textAlign: "left" }} image={KopiImage}>
        <div className='overlay' style={{ display: 'flex', alignItems: 'center', padding: 24 }}>
          {
            imgsLoaded &&
            <div>
              <div style={{ zIndex: 100, marginBottom: 40 }} data-aos="fade-up" >
                <Title data-aos="fade-up">
                  Berdikari dengan Kopi
            </Title>
                <SubTitle data-aos="fade-up" data-aos-delay="400">
                  Dari konservasi satwa sampai kemandirian warga yang mendunia
            </SubTitle>
              </div>
              <button data-aos="zoom-out-left" data-aos-delay="600" onClick={() => { history.push('kopi') }} >LIHAT</button>
            </div>
          }
        </div>
      </Bg>

    </>
  );
}

const Bg = styled.div`
  height: 100vh;
  width: 100%;
  background-size: cover !important;
  z-index: -100; 
  background: ${({ image }) => `url(${image}) center center no-repeat`};
`;

const Title = styled.h1`
  /* text-transform: uppercase; */
  color: white;
  font-size: 68px;
  margin: 0;
  @media(max-width:400px){
    font-size: 48px;
  }
`;

const SubTitle = styled.p`
  font-family: charter, Georgia, Cambria, "Times New Roman", Times, serif;
  color: white;
  font-size: 32px;
  margin: 0;
  @media(max-width:400px){
    font-size: 24px;
  }
`;


export default App;

