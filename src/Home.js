import './App.css';
import React, { useState, useEffect } from 'react';
import { createGlobalStyle } from 'styled-components';
import Navbar from './components/Navbar';
import Logo from './components/Logo';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';
import KopiImage from './assets/jurnal1/biji1-min.jpg';
import Pertamina from './assets/jurnal1/logo_pertamina_white.png';



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
    const loadImage = image => {
      return new Promise((resolve, reject) => {
        console.log(image)
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

        <Logo isResponsive={true} />
        <Logo isResponsive={true} src={Pertamina} />
      </Navbar>
      <Bg style={{ paddingTop: 80, backgroundColor: 'black', textAlign: "left" }} image={KopiImage}>
        <div className='overlay' style={{ display: 'flex', alignItems: 'center', padding: 24 }}>
          <div>
            <div style={{ zIndex: 100, marginBottom: 40 }}>
              <Title>
                Berdikari dengan Kopi
            </Title>
              <SubTitle>
                Dari Konservasi Satwa, hingga UMKM yang Mendunia
            </SubTitle> 
            </div>
            <button onClick={() => { history.push('kopi') }} >LIHAT</button>
          </div>
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
  color: white;
  font-size: 32px;
  margin: 0;
  @media(max-width:400px){
    font-size: 24px;
  }
`;


export default App;

