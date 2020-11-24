import logo from './logo.svg';
import './App.css';
import Image from './image.jpg'
import React, { useState, useEffect } from 'react';
import { createGlobalStyle } from 'styled-components';
import Navbar from './components/Navbar';
import Logo from './components/Logo';

import ReactFullpage from '@fullpage/react-fullpage';
import styled from 'styled-components';
import { Link } from 'react-router-dom'

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
  const [load, setLoad] = useState(true);

  let loading = <div style={{
    height: '100vh',
    backgroundColor: 'black',
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'fixed',
    zIndex: 99,
    opacity: load ? 1 : 0,
    visibility: load ? 'visible' : 'hidden',
    transition: 'opacity 1s, visibility 0.5s linear 2s',
  }}>
    <div className="aaa"></div>
  </div>

  useEffect(() => {
    setTimeout(() => setLoad(false), 800)
  }, []);

  useEffect(() => {
    if (load == false) {
      setTimeout(() => loading = null, 2000)
    }
  }, [load]);
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
                <Bg style={{ paddingTop: 80, backgroundColor: 'blue', textAlign: "left" }} image='https://asset.kompas.com/data/photo/2020/10/16/5f8906974feb0.jpg'>
                  <div className='overlay' style={{ display: 'flex', alignItems: 'center', padding: 24 }}>
                    <div>
                      <h1 style={{ color: 'white' }} className='title'>RESESI UNTUK PEMULA</h1>
                      <p className="subTitle">
                        Tetap Merangkai Prestasi di Tengah Pandemi
                      </p>
                      <button >LIHAT    </button>
                    </div>

                  </div>
                </Bg>
              </div>
              <div className="section" style={{ backgroundColor: 'green' }}>
                <Bg style={{ paddingTop: 80, backgroundColor: 'blue', textAlign: "left" }} image='https://asset.kompas.com/data/photo/2020/10/05/5f7af945df258.jpg'>
                  <div className='overlay' style={{ display: 'flex', alignItems: 'center', padding: 24 }}>
                    <div>
                      <h1 style={{ color: 'white' }} className='title'>THOMAS UBER TERTUNDA, HARAPAN HARUS TERJAGA</h1>
                      <p className="subTitle">
                        TETAP MERANGKAI PRESTASI DI TENGAH PANDEMI
                      </p>
                      <button >LIHAT    </button>
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

