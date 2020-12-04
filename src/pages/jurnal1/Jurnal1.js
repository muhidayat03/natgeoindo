import React, { useState, useEffect, useRef, createRef } from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import bgImage from '../../assets/jurnal1/kopi-min.jpg';
import bgImage1 from '../../assets/jurnal1/biji1-min.jpg';
import RobustaImage from '../../assets/jurnal1/robusta-min.jpg';
import OwaImage from '../../assets/jurnal1/owa-min.jpg';
import ProdukImage from '../../assets/jurnal1/produk_kopi-min.jpg';
import SpaceImage from '../../assets/jurnal1/space-kopi-grey.jpg';
import BayarImage from '../../assets/jurnal1/bayar_kopi-min.jpeg';
import { Parallax } from "react-parallax";
import Navbar from '../../components/Navbar';
import Logo from '../../components/Logo';
import Logo1 from '../../assets/jurnal1/logo_national_geographic.png';
import Logo2 from '../../assets/jurnal1/logo_national_geographic_coid.png';
import Logo3 from '../../assets/jurnal1/logo_pertamina_white.png';
import Slide1 from '../../assets/jurnal1/slide/1.jpg';
import Slide2 from '../../assets/jurnal1/slide/2.jpg';
import Slide3 from '../../assets/jurnal1/slide/3.jpg';
import Slide4 from '../../assets/jurnal1/slide/4.jpg';
import Slide5 from '../../assets/jurnal1/slide/5.jpg';

import CountUp from 'react-countup';
import AOS from 'aos';
import 'aos/dist/aos.css';
import useVisibilitySensor from "@rooks/use-visibility-sensor";
import 'react-slideshow-image/dist/styles.css'
import {
  ScrollingProvider,
  useScrollSection,
  Section,
} from 'react-scroll-section';
import { Zoom } from 'react-slideshow-image';
import Youtube from './Youtube';
import ScrollWrapper from './ScrollWrapper';
import audio from '../../assets/jurnal1/audio.mp3';
import Player from './Player';




const NumberCount = ({ number }) => {

  const rootNode = useRef(null);
  const { isVisible, } = useVisibilitySensor(rootNode, {
    intervalCheck: false,
    scrollCheck: true,
    resizeCheck: true,
    scrollThrottle: 250
  });
  return (
    <div ref={rootNode} style={{ width: '100%' }}>
      {isVisible ? <CountUp end={number} duration={2.5} /> : '0'}
    </div>
  );
}



const IMAGES = [bgImage, bgImage1, RobustaImage, RobustaImage, OwaImage, ProdukImage, Slide1, Slide2, Slide3, Slide4, Slide5];
const Jurnal1 = () => {

  const [imgsLoaded, setImgsLoaded] = useState(false); 





  useEffect(() => {
    AOS.init({
      duration: 1500
    })
    document.title = "Berdikari dengan Kopi"
    const loadImage = image => {
      return new Promise((resolve, reject) => {
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






  const TopMenu = () => {
    const homeSection = useScrollSection('home');
    const sejarahSection = useScrollSection('sejarah');
    const owaSection = useScrollSection('owa');
    const panenSection = useScrollSection('panen');
    const produkSection = useScrollSection('produk');
    const bayarSection = useScrollSection('bayar');
    const mitraSection = useScrollSection('mitra');
    const videoSection = useScrollSection('video');
    return (
      <>
        <ListMenu className="hover" style={{ marginBottom: 20, height: 60, width: 60, borderRadius: 30, border: "2px solid white", color: 'white', display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: 'black' }}>
          <span style={{ color: 'white', fontWeight: 'bold' }} className="icon-list icon-class"></span>
          <div className="dropdown-content">
            <div selected={sejarahSection.selected} onClick={sejarahSection.onClick} className="menu-item">Sejarah Kopi</div>
            <div selected={owaSection.selected} onClick={owaSection.onClick} className="menu-item">Owa Jawa</div>
            <div selected={panenSection.selected} onClick={panenSection.onClick} className="menu-item">Panen Kopi Puntang</div>
            <div selected={produkSection.selected} onClick={produkSection.onClick} className="menu-item">Produk Kopi Puntang</div>
            <div selected={bayarSection.selected} onClick={bayarSection.onClick} className="menu-item">Bayar Kopi Pakai Sampah</div>
            <div selected={mitraSection.selected} onClick={mitraSection.onClick} className="menu-item">Kemitraan Kopi untuk UMKM</div>
            <div selected={videoSection.selected} onClick={videoSection.onClick} className="menu-item">Video Kopi Aceh Bawadi</div>
          </div>
        </ListMenu>

        <Player url={audio} />
        <div selected={homeSection.selected} onClick={homeSection.onClick} className="hover" style={{ height: 60, width: 60, borderRadius: 30, border: "2px solid white", color: 'white', display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: 'black' }}>
          <span style={{ color: 'white', fontWeight: 'bold' }} className="icon-up icon-class"></span>
        </div>

      </>
    );
  };


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



  const images = [Slide1, Slide2, Slide3, Slide4, Slide5];


  const properties = {
    autoplay: false,
    indicators: true,
    scale: 1.4,
    prevArrow: <div style={{ width: 40, height: 40, top: '50%', left: '10px', marginRight: '-20px', marginTop: '-20px', backgroundColor: 'black', padding: 10, borderRadius: 50, position: 'absolute', border: '2px solid white' }} className='hover'><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="#fff" ><path d="M242 180.6v-138L0 256l242 213.4V331.2h270V180.6z" /></svg></div>,
    nextArrow: <div style={{ width: 40, height: 40, top: '50%', right: '10px', marginLeft: '-20px', marginTop: '-20px', backgroundColor: 'black', padding: 10, borderRadius: 50, position: 'absolute', border: '2px solid white' }} className='hover'><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="#fff"  ><path d="M512 256L270 42.6v138.2H0v150.6h270v138z" /></svg></div>
  };


  const slideRef = useRef();



  const testing = <SideContainer2 style={{ position: 'relative' }} >
    <Zoom {...properties} style={{ height: '100%', position: 'relative' }} ref={slideRef}>
      {images.map((each, index) => (
        <div key={index} style={{ width: "100%", height: '100%', backgroundColor: 'red' }}>
          <img style={{ width: "100%", objectFit: 'cover', height: '100%', position: "absolute", top: '0', left: 0 }} src={each} />
        </div>
      ))}
    </Zoom>
    <div style={{ color: '#FED602', fontSize: 14, backgroundColor: 'black', padding: 4, position: 'absolute', top: 10, left: '50%', marginLeft: -98, zIndex: 99 }}>Foto oleh Septianjar Muharam</div>
  </SideContainer2>

  return <>
    {loading}
    <ScrollingProvider>
      <div >
        <div>
          <GlobalStyle />
          <ScrollWrapper>
            <TopMenu></TopMenu>
          </ScrollWrapper>
          <Section id="home">
            <Container >
              <Navbar style={{ height: 120, padding: 24, position: 'absolute', }}>
                <Logo />
              </Navbar>
              {
                imgsLoaded &&
                <div style={{ zIndex: 100 }} data-aos='fade-up'>
                  <Title data-aos="fade-up">
                    Berdikari dengan Kopi
                  </Title>
                  <SubTitle data-aos="fade-up" data-aos-delay="200">
                    Dari konservasi satwa sampai kemandirian warga yang mendunia
                  </SubTitle>
                  <div style={{ width: 140, height: 8, backgroundColor: '#FED602', marginTop: 40 }}></div>
                </div>
              }

              <BgOverlay></BgOverlay>
            </Container>
          </Section>
        </div>
        <Section id="sejarah">
          <Container2 >
            <Parallax blur={{ min: -10, max: 15 }} bgImage={SpaceImage} strength={500} >
              <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center' }}>
                <ContentContainer style={{ backgroundColor: 'rgba(251, 252, 254, .05) ', padding: '40px 20px', }}>
                  <p data-aos="fade-up">
                    <First>S</First>ekitar 13 abad silam, di daratan Etiopia, hiduplah seorang penggembala kambing bernama Kaldi. Pada suatu hari, ia melihat kawanan ternaknya bertingkah aneh. Mereka seolah-olah sedang menari! Tidak ada yang bisa memastikan kebenaran cerita tersebut. Tetapi, kisah itulah yang sering disebut-sebut sebagai awal mula orang mengenal kopi.
                  </p>
                  <p data-aos="fade-up">
                    Belakangan, Kaldi mengetahui bahwa kambing-kambing itu memakan sejenis kacang merah. Ia lalu menyimpulkan bahwa kacang itulah penyebab kawanan ternaknya bertingkah aneh. Kaldi kemudian mengabarkan temuannya kepada seorang biksu yang membutuhkan sesuatu untuk tetap terjaga sepanjang malam ketika berdoa. Namun, dalam cerita yang lain, biksu tersebut menolak dan melemparkan kacang tersebut ke dalam api dan memunculkan aroma yang menyenangkan.
                  </p>
                  {/* <Wave
                    text='  
                    Sekitar 13 abad silam, di daratan Etiopia, hiduplah seorang penggembala kambing bernama Kaldi. Pada suatu hari, ia melihat kawanan ternaknya bertingkah aneh. Mereka seolah-olah sedang menari! Tidak ada yang bisa memastikan kebenaran cerita tersebut. Tetapi, kisah itulah yang sering disebut-sebut sebagai awal mula orang mengenal kopi.
                    '
                    effect="verticalFadeIn"
                    effectChange={2.5}
                    speed={20}
                    iterations={1}

                  />
                  <Wave
                    text='  
                    Belakangan, Kaldi mengetahui bahwa kambing-kambing itu memakan sejenis kacang merah. Ia lalu menyimpulkan bahwa kacang itulah penyebab kawanan ternaknya bertingkah aneh. Kaldi kemudian mengabarkan temuannya kepada seorang biksu yang membutuhkan sesuatu untuk tetap terjaga sepanjang malam ketika berdoa. Namun, dalam cerita yang lain, biksu tersebut menolak dan melemparkan kacang tersebut ke dalam api dan memunculkan aroma yang menyenangkan.
                    '
                    effect="verticalFadeIn"
                    effectChange={2.5}
                    speed={20}
                    iterations={1}
                    delay={20}

                  /> */}


                  <div style={{ marginTop: 40 }} data-aos="fade-up">
                    <p style={{ fontWeight: 'bold', fontSize: 24 }}>
                      Tidak ada yang bisa memastikan kebenaran cerita tersebut. Tetapi, kisah itulah yang sering disebut-sebut sebagai awal mula orang mengenal kopi.
                  </p>
                    <div style={{ width: 140, height: 8, backgroundColor: '#FED602', marginTop: 20 }}></div>
                  </div>
                </ContentContainer>
              </div>
            </Parallax>
          </Container2>
        </Section>

        <Container3 style={{ display: 'flex' }} >
          <Balok>
            <div className='balok-item' style={{ margin: '20px 0' }}></div>
          </Balok>
          <article style={{ flex: 1 }}>
            <p data-aos="flip-up">
              Lantaran rasa dan aromanya yang khas, kepopuleran kopi segera menyebar dari utara ke Yaman pada abad ke-15. Di sana, biji kopi dikenal dengan nama "Mocha". Tak berselang lama, kenikmatan rasa dan aroma kopi mereka sampai ke Mesir, Persia, dan Turki sebagai "Wine of Araby”. Kedai kopi pun mulai dibuka dengan nama "Schools of the Wise". Tanah Arab juga akhirnya menjadi populer karena kopinya. Pada 1560, kopi merambah Eropa dan segera menjadi populer.
          </p>
            <p data-aos="flip-up">
              Sekitar satu abad berselang, Belanda memperkenalkan kopi ke Nusantara. Pada 1696, Belanda membawa benih kopi Arabika untuk ditanam di Pulau Jawa. Sayangnya, benih itu gagal tumbuh karena rusak akibat gempa bumi dan banjir.
          </p>
            <p data-aos="flip-up">
              Barulah 15 tahun kemudian, upaya pemerintah Belanda membuahkan hasil. Kopi Indonesia mulai dilirik dunia. Ketika itu, Bupati Cianjur Aria Wira Tanu mengirimkan sekitar empat kuintal kopi ke Amsterdam. Ekspor kopi tersebut berhasil memecahkan rekor harga saat lelang di sana.
          </p>
            <p data-aos="flip-up">
              Puncaknya, pada 1726, kopi asal Jawa sebanyak 2.145 ton membanjiri Eropa. Kopi Mocha asal Yaman yang kala itu mendominasi pasar akhirnya tersingkir. Momen tersebut menandai puncak keemasan kopi asal Jawa di Eropa, yang sejak itu populer dengan sebutan Java Coffee.
          </p>
            <p data-aos="flip-up">
              Dianggap sebagai komoditas yang menguntungkan, Belanda kemudian memperluas daerah penanaman kopi di Indonesia. Tak hanya itu, mereka juga mengembangkan benih kopi Robusta untuk menyiasati serangan jamur Hemileia vastatrix atau hama karat daun pada 1880. Robusta yang merupakan jenis kopi asal Kongo dipilih karena dianggap lebih kuat dan tahan hama.
          </p>
          </article>
        </Container3>


        <Container4>
          {testing}
          <SideContainer
          >
            <article >
              <p data-aos="zoom-in">
                Dalam perkembangannya, kopi Robusta dapat tumbuh dengan baik di Indonesia. Produksinya yang terus meningkat akhirnya menggeser kepopuleran kopi Arabika. Hingga saat ini, Nusantara menjadi salah satu produsen kopi Robusta terbesar di dunia. Harganya yang lebih terjangkau turut mengubah gaya hidup masyarakat dalam menikmati kopi.
            </p>
              <p data-aos="zoom-in">

                Dalam beberapa tahun terakhir, di seluruh dunia, termasuk Indonesia, kopi kian digemari dan menjadi bagian tak terpisahkan dari masyarakat urban. Kedai kopi bermunculan di mana-mana. Di banyak tempat, bahkan posisinya bersebelahan atau berseberangan.
            </p>
              <p data-aos="zoom-in">
                Menyesap kopi sebelum menjalani hari—atau menuntaskan sisa hari saat senja—seakan menjadi ritual wajib. Minuman kaya kafein ini mampu melecut stamina bagi siapa pun yang menyesapnya. Namun kini, pemanfaatan kopi tidak sekadar untuk memenuhi gaya hidup semata, tapi juga pelestarian alam dan meningkatkan perekonomian masyarakat lokal.
            </p>
            </article>
          </SideContainer>
        </Container4>

        <Container3 style={{ display: 'flex', minHeight: '100vh', justifyContent: 'center', alignItems: 'center' }}>
          <div style={{ display: 'flex' }}>
            <Balok>
              <div className='balok-item' style={{ margin: '40px 0 20px', top: '40vh' }}></div>
            </Balok>
            <article style={{ flex: 1 }}>
              <h1 style={{ fontSize: 36 }}>
                Membudidayakan Kopi Puntang,<br></br> Menyelamatkan Owa Jawa
          </h1>
              <p data-aos="fade-up">
                Owa jawa (Hylobates moloch) adalah satwa endemik Pulau Jawa yang kini hampir punah. Kera ini memiliki ciri khas tidak memiliki ekor dan warna tubuhnya keabu-abuan. Keberadaannya dapat diketahui dari nyanyiannya yang khas. Saat ini, persebaran Owa jawa hanya terbatas di Jawa bagian barat.
          </p>
              <p data-aos="fade-up">
                Kelangsungan hidup Owa jawa semakin terancam lantaran kian sempitnya habitat alami mereka. Padahal, di alam liar, kera ini memiliki peran penting dalam ekosistem hutan; secara alami, Owa jawa merestorasi hutan dengan menyebarkan benih yang membantu menjaga kesehatan hutan.
          </p>
            </article>
          </div>
        </Container3>





        <div style={{ width: '100%', height: '100vh' }}>
          <Section id="owa">
            <ParalaxImage image={OwaImage}>
              <Caption>Owa jawa, satwa endemik Pulau Jawa yang hampir punah.</Caption>

            </ParalaxImage>
            <Container6>
              <BgOverlay style={{ opacity: 0.75 }}></BgOverlay>

              <DetailedArticle
              >
                <article >
                  <p style={{ color: 'white' }} data-aos="fade-up">
                    Diperlukan upaya konservasi demi menyelamatkan Owa jawa dari kepunahan, sekaligus menjaga kelestarian hutan. Namun, ada beberapa tantangan yang harus dihadapi. Selain habitat yang semakin sempit, perburuan oleh manusia juga mengancam Owa jawa. Di wilayah Pegunungan Malabar, Jawa Barat, misalnya, upaya konservasi Owa jawa akan lebih sulit lantaran masih maraknya pemburu liar dan perambah hutan. Oleh sebab itu, peran masyarakat di sekitar lokasi konservasi sangat dibutuhkan.
              </p>
                  <p style={{ color: 'white' }} data-aos="fade-up">
                    Upaya untuk melibatkan masyarakat dalam pelestarian hutan sebagai habitat Owa jawa telah dilakukan Pertamina EP Asset 3 Subang Field. Caranya, mengajak warga yang tinggal di sekitar Gunung Puntang untuk menanam kopi. Aktivitas yang telah berlangsung sejak 2017 ini merupakan bagian Program CSR Melintang (Masyarakat Peduli Alam Puntang).
              </p>
                </article>
              </DetailedArticle>
            </Container6>
          </Section>



          <Section id="panen">
            <ParalaxImage image={bgImage}>
              <Caption>Hasil panen kopi Puntang.</Caption>




            </ParalaxImage>
          </Section>
          <Container6 >
            <BgOverlay style={{ opacity: 0.75 }}></BgOverlay>
            <DetailedArticle
            >
              <article >
                <p style={{ color: 'white' }} data-aos="fade-up">
                  “Penanaman kopi Puntang merupakan bentuk pemberdayaan masyarakat berbasis konservasi. Selain dapat meningkatkan kesejahteraan masyarakat yang tinggal di sekitar Gunung Puntang, juga dapat menjaga kelestarian hutan dan keberlangsungan kehidupan hewan langka Owa jawa. Jadi, sekali mendayung, dua-tiga pulau terlampaui,” tulis Vice President Corporate Communication Pertamina, Fajriyah Usman, pada laman web resmi Pertamina.
              </p>
              </article>
            </DetailedArticle>
          </Container6>
          <Section id="produk">
            <ParalaxImage image={ProdukImage}>
              <Caption>Produk kopi Puntang yang dikelola LMDH Bukit Amanah.</Caption>




            </ParalaxImage>
          </Section>
          <Container6>
            <BgOverlay style={{ opacity: 0.75 }}></BgOverlay>

            <DetailedArticle

            >
              <article >
                <p style={{ color: 'white' }} data-aos="fade-up">
                  Adapun jenis kopi yang ditanam adalah Arabika Priangan atau dikenal juga dengan Sunda Typica. Kopi Puntang merupakan kopi unggulan khas Bandung, Jawa Barat. Kopi ini disukai karena memiliki keunggulan dalam aroma (fragrant), tingkat kemanisan (sweetness) serta rasa (flavor). Dalam pengelolaannya, Pertamina mengajak masyarakat yang tergabung dalam Lembaga Masyarakat Desa Hutan (LMDH) Bukit Amanah. Organisasi ini terbentuk sebagai kelompok budi daya kopi ramah lingkungan yang anggotanya adalah para mantan perambah hutan.
              </p>
              </article>
            </DetailedArticle>
          </Container6>


          <article>
            <Container3 style={{ display: 'flex', minHeight: '100vh', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
              <p style={{ textAlign: 'center' }}
                data-aos="flip-left"
                data-aos-offset="120"
              >
                Selain untuk pemanfaatan konservasi hutan dan Owa jawa, kopi juga dapat digunakan untuk mendukung kampanye lingkungan. Seperti yang dilakukan warga Gresik di Kelurahan Sidokumpul, yang meluncurkan inovasi “Bayar Kopi Pakai Sampah” melalui Kedai Kopi Sampah. Di sini, pengunjung dapat menikmati kopi khas Gresik secara cuma-cuma. Syaratnya, pengunjung harus membawa sampah plastik untuk ditukarkan menjadi voucher kopi. <strong>Menarik, bukan?</strong>
              </p>
              <div style={{ width: 140, height: 8, backgroundColor: '#FED602', marginTop: 40 }}></div>
            </Container3>
          </article>


          <Section id="bayar">

            <ParalaxImage image={BayarImage}>
              <Caption>Bayar kopi pakai sampah.</Caption>

            </ParalaxImage>
          </Section>

          <Container6 style={{ flexDirection: 'column' }}>
            <BgOverlay style={{ opacity: 0.75 }}></BgOverlay>

            <article >
              <DetailedArticle
              >
                <p style={{ color: 'white' }}
                  data-aos="zoom-in-down">
                  Kedai Kopi Sampah merupakan bagian dari komitmen PT Pertamina Lubricant Production Unit Gresik (PUG) dengan Kelurahan Sidokumpul dalam upaya mengurangi sampah plastik. Selain itu, program ini juga bertujuan untuk menyadarkan masyarakat luas akan pentingnya pemanfaatan sampah plastik untuk didaur ulang menjadi barang yang lebih bernilai ekonomis. Hingga saat ini, sudah 897 kilogram sampah yang terkumpul, dan berkontribusi mengurangi sampah di Kelurahan Sidokumpul sebesar 0,22%. Tentu saja, itu bukanlah angka yang fantastis. Namun, mimpi-mimpi besar harus dimulai dengan satu langkah kecil.
              </p>
              </DetailedArticle>
            </article>




            <div style={{ display: 'flex', flexWrap: 'wrap', marginTop: 40 }}>
              <BoxInfo>
                <div className='titleBox'>
                  <h2 style={{ textAlign: 'center', margin: 0, color: '#FED602' }}>Omset Per Bulan</h2>
                </div>
                <div className='angka'>  <NumberCount number={20} />  </div>

                <h1 style={{ textAlign: 'center', margin: 0, color: '#FED602' }}>Juta</h1>
              </BoxInfo>
              <BoxInfo style={{ borderRight: '3px solid #FED602', borderLeft: '3px solid #FED602' }}>
                <div className='titleBox'>
                  <h2 style={{ textAlign: 'center', margin: 0, color: '#FED602' }}>Memberdayakan</h2>
                </div>
                <div className='angka'>  <NumberCount number={10} /> </div>

                <h1 style={{ textAlign: 'center', margin: 0, color: '#FED602' }}>Orang</h1>
              </BoxInfo>
              <BoxInfo>
                <div className='titleBox'>
                  <h2 style={{ textAlign: 'center', margin: 0, color: '#FED602' }}>Sampah Terkumpul Per Bulan</h2>
                </div>
                <div className='angka'>  <NumberCount number={897} /> </div>

                <h1 style={{ textAlign: 'center', margin: 0, color: '#FED602' }}>Kilogram</h1>
              </BoxInfo>
            </div>
          </Container6>



          <Section id="mitra">

            <Container3 style={{ display: 'flex' }}>

              <Balok>
                <div className='balok-item' style={{ margin: '40px 0 20px' }}></div>
              </Balok>

              <article style={{ flex: 1 }}>
                <h1 style={{ fontSize: 36 }}>
                  Program Kemitraan Kopi untuk UMKM
          </h1>
                <p data-aos="flip-up">
                  Indonesia merupakan salah satu negara penghasil kopi terbaik di dunia. Kualitasnya yang unggul dan cita rasanya yang khas, menjadikan biji kopi asal Indonesia disukai penikmat kopi di berbagai negara. Meksiko, misalnya, menjadi salah satu negara tempat kopi Indonesia begitu diminati. Menurut data Kementerian Perdagangan, meskipun Meksiko merupakan salah satu negara penghasil kopi, kopi Indonesia berhasil merebut 50 persen pangsa pasar kopi impor di Meksiko, disusul Kolombia dengan pangsa pasar rata-rata sebesar 14—16 persen per bulan.
            </p>
                <p data-aos="flip-up">
                  Peluang tersebut kemudian dimanfaatkan oleh Teuku Dharul Bawadi untuk terjun ke industri kopi. Melalui usaha Bawadi Coffee, ia memasarkan kopi single origin Aceh. Tak hanya soal bisnis, Bawadi Coffee memiliki komitmen untuk membesarkan potensi kopi Aceh dan mengembangkan hasil tani kopi Aceh ke seluruh dunia.
            </p>
                <p data-aos="flip-up">
                  Saat awal mula berbisnis, Bawadi hanya bermodalkan Rp30 juta dan bekerja sama dengan lima orang petani kopi Aceh saja. Dengan semangat dan kerja keras, ia akhirnya berhasil memperluas kerja sama dengan koperasi yang memiliki 1.140 orang petani kopi dalam empat tahun. Omzetnya dari usaha kopi melonjak 200 persen sejak ia memulai usaha kecilnya.
            </p>
                <p data-aos="flip-up">
                  Tak hanya sukses di Tanah Air, bisnis kopi Bawadi juga sukses menembus pasar internasional. Pemuda 31 tahun ini berhasil mengenalkan kopi Aceh hingga ke Malaysia, Singapura, Thailand, Kamboja, dan Eropa. Keberhasilannya ini juga tidak terlepas dari dukungan pinjaman modal usaha Program Kemitraan Pertamina untuk menambah kapasitas produksi Bawadi Coffee.
            </p>
                <p data-aos="flip-up">
                  Pada 2018, Bawadi Coffee mendapatkan pinjaman modal usaha sebesar Rp150 juta. Setahun kemudian, Pertamina juga membawa Bawadi Coffee mengikuti pameran di “The 16th China-ASEAN Expo (CAEXPO 2019)” di Nanning International Convention and Exhibition Center, China, dan berhasil mendapat pesanan kopi total senilai Rp1,4 miliar.
            </p>
                <p data-aos="flip-up">
                  Upaya Pertamina dalam memanfaatkan kopi untuk mendukung UMKM menjadi energi positif bagi Indonesia. Energi yang memberdayakan masyarakat lokal di bidang ekonomi dan mampu mengembangkan potensi daerahnya sendiri. Bukan hal yang tak mungkin, jika di masa depan UMKM turut menjadi penyangga ekonomi nasional.
          </p>
              </article>
            </Container3>
          </Section>

          <Section id="video">

            <Youtube />
          </Section>

          <div style={{ backgroundColor: 'black', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', paddingBottom: 60 }}>
            <div style={{ display: 'flex', marginBottom: 48, maxWidth: 800, width: '100%', justifyContent: 'center', flexWrap: 'wrap' }}>
              <div style={{ marginBottom: 24, width: '30%', minWidth: '200px' }}>
                <h4 style={{ textAlign: 'center', color: "white", marginBottom: 4 }}>Reporter</h4>
                <p style={{ textAlign: 'center', color: "white", margin: 0, fontSize: 14 }}>Lastboy Tahara Sinaga</p>
              </div>
              <div style={{ marginBottom: 24, width: '30%', minWidth: '200px' }}>
                <h4 style={{ textAlign: 'center', color: "white", marginBottom: 4 }}>Editor</h4>
                <p style={{ textAlign: 'center', color: "white", margin: 0, fontSize: 14 }}>Firman Firdaus</p>
              </div>
              <div style={{ marginBottom: 24, width: '30%', minWidth: '200px' }}>
                <h4 style={{ textAlign: 'center', color: "white", marginBottom: 4 }}>Foto dan Video</h4>
                <p style={{ textAlign: 'center', color: "white", margin: 0, fontSize: 14 }}>Dokumentasi Pertamina</p>
              </div>
            </div>
            <div style={{ display: "flex", flexWrap: 'wrap', justifyContent: 'center', alignItems: 'center', width: '100%' }}>
              <ImageFooter height={50} src={Logo1} style={{ margin: 10 }} />
              <ImageFooter height={40} src={Logo2} style={{ margin: 10 }} />
              <ImageFooter height={40} src={Logo3} style={{ margin: 10 }} />
            </div>
          </div>

        </div>
      </div >
    </ScrollingProvider>
  </>
}


const ListMenu = styled.div`
.dropdown-content {
  display: none;
  position: absolute; 
  min-width: 200px;
  padding: 12px 16px 20px;
  z-index: 1; 
  bottom: 48px; 
  right: -10px;  

}
.menu-item{
  &:last-child{
    border-bottom: 2px solid white; 
  }
background-color:black;
box-shadow: 4px 4px 18px 4px rgba(0,0,0,0.4);

color: white; 
border-color: white;
border-style: solid;
border-width: 2px 2px 0px 2px;
padding: 10px;
text-align:center; 
font-size: 10px;
font-weight: bold; 
:hover{
  transform:scale(1.2);
  border-bottom: 2px solid white;

}
}
:hover .dropdown-content {
  display: block;
}
`;


const GlobalStyle = createGlobalStyle`
  p{
    font-family: charter, Georgia, Cambria, "Times New Roman", Times, serif;
    font-size: 20px;
    line-height: 1.48;
    @media(max-width: 800px){
      font-size: 18px;
    }
  }
`;

const BoxInfo = styled.div`
  padding: 20px;
  width: 300px;
  position: relative;
  z-index: 10; 
  .angka{
    font-size: 60px; 
    text-align: center;
    font-weight: bold; 
    margin: 0;
    color: #FED602;
    height: 140px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .titleBox{
    height : 60px;
  }
  @media(max-width: 970px){
      width: 240px;
  }
  @media(max-width: 800px){
    .angka{
      height: 100px;
    }
    .titleBox{
    height :auto;
    }
    width: 100%;
    border : none !important;
    padding: 40px; 
  }
`;

const Caption = styled.div`
  padding : 40px;
  text-align: center;
  color : #FED602;
   background-color: black;
   opacity: .8;
`;


const Container = styled.div`
  height: 100vh; 
  background:  url(${bgImage1}) center center no-repeat;
  background-size: cover !important;
  display: flex;
  justify-content: center;
  align-items: center;
  padding : 20px;
  position: relative;
`;

const Container2 = styled.div`
  min-height: 100vh;
  background-size: cover !important;
  position: relative;
`;


const Container3 = styled.div`
  padding: 100px 20px;
  max-width : 800px;
  margin: 0 auto;
`;



const Container4 = styled.div`
background-color: black;
  display: flex;
  flex-direction: row-reverse;
  margin: 0 auto;
  flex-wrap: wrap;
`;

const SideContainer = styled.div`
  width : 50%;
  padding: 60px;
  color: white;
  @media(max-width:978px){
    width: 100%;
    padding: 60px 20px;
  }
`;

const SideContainer2 = styled.div`
  width : 50%; 
  min-height: 600px;
  @media(max-width:978px){
        width: 100%; 
  }
`;

const First = styled.span`
    /* color: #903; */
    float: left; 
    /* font-family: Georgia; */
    font-size: 75px;
    line-height: 60px;
    padding-top: 4px;
    padding-right: 8px;
    padding-left: 3px;
`;




const ContentContainer = styled.div`
  max-width : 800px;
  margin: 0 auto;
  p{
    line-height: 1.8;
  } 
`;

const BgOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: black;
  opacity: 0.6;
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

const DetailedArticle = styled.div`
  max-width: 800px;
  margin: 0 auto;
  text-align: center;
  font-size: 20px;
  line-height: 1.4;
  z-Index: 10;
  position: relative;
`;

const ParalaxImage = styled.div`
  height: 100vh;
  background:  ${(props) => `url(${props.image})`};
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  flex-direction: column-reverse;
  @media only screen and (max-device-width: 1366px) {
    background-attachment: scroll;
  }
`;

const Container6 = styled.div`
  background:  url(${bgImage1}) center center no-repeat;
  background-size: cover !important;
  position: relative;
  min-height: 600px;
  background-color: black;
  padding: 80px 20px; 
  display: flex;
  justify-content: center;
  align-items: center
`;

const Balok = styled.div`
  width: 80px;
  .balok-item{
    background-color: #FED602;
    height: 150px;
    width: 10px; 
    position: sticky; 
    top: 200px;
  }
  @media(max-width:700px){
    width: 40px;
    .balok-item{
      width: 8px; 
    }
  }
`;

const ImageFooter = styled.img`
  @media(max-width:700px){
    height: 28px;
    margin: 10px !important;
  }
`;



export default Jurnal1;



