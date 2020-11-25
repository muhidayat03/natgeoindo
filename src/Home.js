import './App.css'; 
import React, { useState, useEffect } from 'react';
import { createGlobalStyle } from 'styled-components';
import Navbar from './components/Navbar';
import Logo from './components/Logo';

import ReactFullpage from '@fullpage/react-fullpage';
import styled from 'styled-components';
import { Link, useHistory } from 'react-router-dom';
import KopiImage from './assets/jurnal1/biji1-min.jpg';
import BayarImage from './assets/jurnal1/bayar_kopi-min.jpeg';



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
  const IMAGES = [BayarImage];

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
          }, 2000)
        loadImg.onerror = err => reject(err)
      })
    } 
    Promise.all(IMAGES.map(image => loadImage(image)))
      .then(() => setImgsLoaded(true))
      .catch(err => console.log("Failed to load images", err))
  }, []);

  let loading = <div style={{
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
    transition: 'opacity 0.5s, visibility 0.5s linear 0.2s',
  }}>
    <div className="aaa"></div>
  </div>






  return (
    <>
      {loading}
      <GlobalStyles></GlobalStyles>
      <Navbar>
        <Logo />
        <Link to="list">
          <div className="hover" style={{ marginRight: 24, height: 40, width: 40, borderRadius: 20, border: "1px solid white", color: 'white', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <span style={{ color: 'white' }} className="icon-list icon-class"></span>
          </div>
        </Link>
      </Navbar>
      <ReactFullpage
        //fullpage options  
        scrollingSpeed={400} easingcss3='ease-out'

        render={({ state, fullpageApi }) => {
          return (
            <ReactFullpage.Wrapper>
              <div className="section" style={{ backgroundColor: 'green' }}>
                <Bg style={{ paddingTop: 80, backgroundColor: 'black', textAlign: "left" }} image={KopiImage}>
                  <div className='overlay' style={{ display: 'flex', alignItems: 'center', padding: 24 }}>
                    <div>
                      <h1 style={{ color: 'white' }} className='title'>BERDIKARI DENGAN KOPI</h1>
                      <p className="subTitle">
                        Dari Konservasi Satwa, hingga UMKM yang Mendunia
                      </p>
                      <button onClick={() => { history.push('kopi') }} >LIHAT</button>
                    </div>

                  </div>
                </Bg>
              </div>
            </ReactFullpage.Wrapper>
          );
        }}
      />

    </>
  );
}

const Bg = styled.div`
  height: 100%;
  width: 100%;
  background-size: cover !important;
  z-index: -100; 
  background: ${({ image }) => `url(${image}) center center no-repeat`};
`;


export default App;

