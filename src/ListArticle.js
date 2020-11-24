import logo from './logo.svg';
import './App.css';
import Image from './image.jpg'
import React, { useState, useEffect } from 'react';
import { createGlobalStyle } from 'styled-components';
import Navbar from './components/Navbar';
import Logo from './components/Logo';

import ReactFullpage from '@fullpage/react-fullpage';
import styled from 'styled-components';

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
    <Navbar style={{ justifyContent: 'center', height: 120, padding: '24px 10px', position: 'relative', backgroundColor: 'black' }}>
        <Logo />
      </Navbar>
      <Container>
        <ContentRow>
          <ContentCol>
            <ContentContainer>
              <ContentImmage style={{ paddingTop: 80, textAlign: "left" }} image='https://asset.kompas.com/data/photo/2020/10/16/5f8906974feb0.jpg' />
              <Title>RESESI UNTUK PEMULA</Title>
              <SubTitle>PANDEMI COVID-19 MEMUKUL PEREKONOMIAN GLOBAL</SubTitle>
              <Paragraph>Pasar saham di berbagai negara rontok. Nilai mata uang juga mengalami pelemahan. Menteri Keuangan Sri Mulyani memproyeksikan pertumbuhan ekonomi Indonesia hingga akhir tahun di kisaran minus 1,7 persen. Indonesia pun masuk jurang resesi.</Paragraph>
              <button style={{ borderColor: '#FED602' }}>LIHAT</button>
            </ContentContainer>
          </ContentCol>

          <ContentCol>
            <ContentContainer>
              <ContentImmage style={{ paddingTop: 80, textAlign: "left" }} image='https://asset.kompas.com/original/data/photo/2020/10/05/5f7af945df258.jpg' />
              <Title>RESESI UNTUK PEMULA</Title>
              <SubTitle>PANDEMI COVID-19 MEMUKUL PEREKONOMIAN GLOBAL</SubTitle>
              <Paragraph>Pasar saham di berbagai negara rontok. Nilai mata uang juga mengalami pelemahan. Menteri Keuangan Sri Mulyani memproyeksikan pertumbuhan ekonomi Indonesia hingga akhir tahun di kisaran minus 1,7 persen. Indonesia pun masuk jurang resesi.</Paragraph>
              <button style={{ borderColor: '#FED602' }}>LIHAT</button>
            </ContentContainer>
          </ContentCol>

          <ContentCol>
            <ContentContainer>
              <ContentImmage style={{ paddingTop: 80, textAlign: "left" }} image='https://asset.kompas.com/original/data/photo/2020/08/31/5f4c662e71a1b.jpg' />
              <Title>RESESI UNTUK PEMULA</Title>
              <SubTitle>PANDEMI COVID-19 MEMUKUL PEREKONOMIAN GLOBAL</SubTitle>
              <Paragraph>Pasar saham di berbagai negara rontok. Nilai mata uang juga mengalami pelemahan. Menteri Keuangan Sri Mulyani memproyeksikan pertumbuhan ekonomi Indonesia hingga akhir tahun di kisaran minus 1,7 persen. Indonesia pun masuk jurang resesi.</Paragraph>
              <button style={{ borderColor: '#FED602' }}>LIHAT</button>
            </ContentContainer>
          </ContentCol>
   
          <ContentCol>
            <ContentContainer>
              <ContentImmage style={{ paddingTop: 80, textAlign: "left" }} image='https://asset.kompas.com/data/photo/2020/10/16/5f8906974feb0.jpg' />
              <Title>RESESI UNTUK PEMULA</Title>
              <SubTitle>PANDEMI COVID-19 MEMUKUL PEREKONOMIAN GLOBAL</SubTitle>
              <Paragraph>Pasar saham di berbagai negara rontok. Nilai mata uang juga mengalami pelemahan. Menteri Keuangan Sri Mulyani memproyeksikan pertumbuhan ekonomi Indonesia hingga akhir tahun di kisaran minus 1,7 persen. Indonesia pun masuk jurang resesi.</Paragraph>
              <button style={{ borderColor: '#FED602' }}>LIHAT</button>
            </ContentContainer>
          </ContentCol>

          <ContentCol>
            <ContentContainer>
              <ContentImmage style={{ paddingTop: 80, textAlign: "left" }} image='https://asset.kompas.com/original/data/photo/2020/10/05/5f7af945df258.jpg' />
              <Title>RESESI UNTUK PEMULA</Title>
              <SubTitle>PANDEMI COVID-19 MEMUKUL PEREKONOMIAN GLOBAL</SubTitle>
              <Paragraph>Pasar saham di berbagai negara rontok. Nilai mata uang juga mengalami pelemahan. Menteri Keuangan Sri Mulyani memproyeksikan pertumbuhan ekonomi Indonesia hingga akhir tahun di kisaran minus 1,7 persen. Indonesia pun masuk jurang resesi.</Paragraph>
              <button style={{ borderColor: '#FED602' }}>LIHAT</button>
            </ContentContainer>
          </ContentCol>

          <ContentCol>
            <ContentContainer>
              <ContentImmage style={{ paddingTop: 80, textAlign: "left" }} image='https://asset.kompas.com/original/data/photo/2020/08/31/5f4c662e71a1b.jpg' />
              <Title>RESESI UNTUK PEMULA</Title>
              <SubTitle>PANDEMI COVID-19 MEMUKUL PEREKONOMIAN GLOBAL</SubTitle>
              <Paragraph>Pasar saham di berbagai negara rontok. Nilai mata uang juga mengalami pelemahan. Menteri Keuangan Sri Mulyani memproyeksikan pertumbuhan ekonomi Indonesia hingga akhir tahun di kisaran minus 1,7 persen. Indonesia pun masuk jurang resesi.</Paragraph>
              <button style={{ borderColor: '#FED602' }}>LIHAT</button>
            </ContentContainer>
          </ContentCol>
   
          <ContentCol>
            <ContentContainer>
              <ContentImmage style={{ paddingTop: 80, textAlign: "left" }} image='https://asset.kompas.com/data/photo/2020/10/16/5f8906974feb0.jpg' />
              <Title>RESESI UNTUK PEMULA</Title>
              <SubTitle>PANDEMI COVID-19 MEMUKUL PEREKONOMIAN GLOBAL</SubTitle>
              <Paragraph>Pasar saham di berbagai negara rontok. Nilai mata uang juga mengalami pelemahan. Menteri Keuangan Sri Mulyani memproyeksikan pertumbuhan ekonomi Indonesia hingga akhir tahun di kisaran minus 1,7 persen. Indonesia pun masuk jurang resesi.</Paragraph>
              <button style={{ borderColor: '#FED602' }}>LIHAT</button>
            </ContentContainer>
          </ContentCol>

          <ContentCol>
            <ContentContainer>
              <ContentImmage style={{ paddingTop: 80, textAlign: "left" }} image='https://asset.kompas.com/original/data/photo/2020/10/05/5f7af945df258.jpg' />
              <Title>RESESI UNTUK PEMULA</Title>
              <SubTitle>PANDEMI COVID-19 MEMUKUL PEREKONOMIAN GLOBAL</SubTitle>
              <Paragraph>Pasar saham di berbagai negara rontok. Nilai mata uang juga mengalami pelemahan. Menteri Keuangan Sri Mulyani memproyeksikan pertumbuhan ekonomi Indonesia hingga akhir tahun di kisaran minus 1,7 persen. Indonesia pun masuk jurang resesi.</Paragraph>
              <button style={{ borderColor: '#FED602' }}>LIHAT</button>
            </ContentContainer>
          </ContentCol>

          <ContentCol>
            <ContentContainer>
              <ContentImmage style={{ paddingTop: 80, textAlign: "left" }} image='https://asset.kompas.com/original/data/photo/2020/08/31/5f4c662e71a1b.jpg' />
              <Title>RESESI UNTUK PEMULA</Title>
              <SubTitle>PANDEMI COVID-19 MEMUKUL PEREKONOMIAN GLOBAL</SubTitle>
              <Paragraph>Pasar saham di berbagai negara rontok. Nilai mata uang juga mengalami pelemahan. Menteri Keuangan Sri Mulyani memproyeksikan pertumbuhan ekonomi Indonesia hingga akhir tahun di kisaran minus 1,7 persen. Indonesia pun masuk jurang resesi.</Paragraph>
              <button style={{ borderColor: '#FED602' }}>LIHAT</button>
            </ContentContainer>
          </ContentCol>
        </ContentRow>
      </Container>

    </>
  );
}



const Container = styled.div`
  min-height: calc(100vh - 80px);
  background-color: black;
`;

const ContentRow = styled.div` 
  max-width : 1100px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: stretch;
  flex-wrap: wrap;
`;
const ContentCol = styled.div` 
  width: 33.333%;
  padding: 10px;
  margin-bottom: 40px;
  @media(max-width:978px){
    width: 50%;
  }
  
  @media(max-width:670px){
    width: 100%;
  }
  
`;

const ContentContainer = styled.div` 
  text-align: left;

`;

const ContentImmage = styled.div`
  height: 280px;
  width: 100%;
  background-size: cover !important;
  z-index: -100; 
  background: ${({ image }) => `url(${image}) center center no-repeat`};
`;

const Title = styled.h3`
  font-family: Fjalla One;
  font-size: 30px;
  font-weight: 400;
  margin-bottom: 10px;
  color: white;
`;
const SubTitle = styled.h3`
  font-family: Open Sans;
  font-size: 18px;
  font-weight: 600; 
  text-transform: uppercase;
  color: white;
  margin: 0;  
  margin-bottom: 10px;
`;

const Paragraph = styled.p`
  font-family: Open Sans;
  font-size:14px;
  color: white;
  margin: 0;  
  margin-bottom: 20px;
`;


export default App;

