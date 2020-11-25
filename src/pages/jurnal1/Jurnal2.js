import React, { useState, useEffect, useRef, createRef } from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import bgImage from '../../assets/jurnal1/kopi-min.jpg';
import bgImage1 from '../../assets/jurnal1/biji1-min.jpg';
import NaskahImage from '../../assets/jurnal1/bg_pattern-min.jpg';
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
import Logo3 from '../../assets/jurnal1/logo_pertamina.png';
 
import AOS from 'aos';
import 'aos/dist/aos.css';  
import { ReactComponent as MySVG } from "./Logo.svg";



 



const Jurnal1 = () => {


  const IMAGES = [bgImage, bgImage1, NaskahImage, RobustaImage, RobustaImage, OwaImage, ProdukImage,];

  const [imgsLoaded, setImgsLoaded] = useState(false);  
  

  useEffect(() => {
    AOS.init({
      duration: 1000
    })
    document.title = "Berdikari dengan Kopi"
    const loadImage = image => {
      return new Promise((resolve, reject) => {
        const loadImg = new Image()
        loadImg.src = image
        // wait 2 seconds to simulate loading time
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
  }, [AOS, IMAGES]);

  
 



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

  return <>
    {loading}
    <div > 
      <div>
        <GlobalStyle />
        <Container>
          <Navbar style={{ height: 120, padding: '24px 10px', position: 'absolute', }}>
            <Logo />
          </Navbar>
          <div style={{ zIndex: 100 }} data-aos='fade-up'>
            <Title>
              Berdikari dengan Kopi
            </Title>
            <SubTitle>
              Dari Konservasi Satwa, hingga UMKM yang Mendunia
            </SubTitle>
            <div style={{ width: 140, height: 8, backgroundColor: '#FED602', marginTop: 40 }}></div>
          </div>
          <BgOverlay></BgOverlay>
        </Container>
      </div>

      <Container2>
        <Parallax blur={{ min: -10, max: 15 }} bgImage={SpaceImage} strength={500} >
          <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center' }}>
            <ContentContainer style={{ backgroundColor: 'rgba(251, 252, 254, .05) ', padding: '40px 20px', }}>
              <p>
                <First>S</First>ekitar 13 abad silam, di daratan Etiopia, hiduplah seorang penggembala kambing bernama Kaldi. Pada suatu hari, ia melihat kawanan ternaknya bertingkah aneh. Mereka seolah-olah sedang menari! Tidak ada yang bisa memastikan kebenaran cerita tersebut. Tetapi, kisah itulah yang sering disebut-sebut sebagai awal mula orang mengenal kopi.
              </p>
              <p>

                Belakangan, Kaldi mengetahui bahwa kambing-kambing itu memakan sejenis kacang merah. Ia lalu menyimpulkan bahwa kacang itulah penyebab kawanan ternaknya bertingkah aneh. Kaldi kemudian mengabarkan temuannya kepada seorang biksu yang membutuhkan sesuatu untuk tetap terjaga sepanjang malam ketika berdoa. Namun, dalam cerita yang lain, biksu tersebut menolak dan melemparkan kacang tersebut ke dalam api dan memunculkan aroma yang menyenangkan.
            </p>
              <p style={{ fontWeight: 'bold' }}>
                Tidak ada yang bisa memastikan kebenaran cerita tersebut. Tetapi, kisah itulah yang sering disebut-sebut sebagai awal mula orang mengenal kopi.
            </p>
            </ContentContainer>
          </div>
        </Parallax>
      </Container2>

      <Container3 style={{ display: 'flex' }}>
        <Balok>
          <div className='balok-item' style={{ margin: '20px 0' }}></div>
        </Balok>
        <article style={{ flex: 1 }}>
          <p>
            Lantaran rasa dan aromanya yang khas, kepopuleran kopi segera menyebar dari utara ke Yaman pada abad ke-15. Di sana, biji kopi dikenal dengan nama "Mocha". Tak berselang lama, kenikmatan rasa dan aroma kopi mereka sampai ke Mesir, Persia, dan Turki sebagai "Wine of Araby”. Kedai kopi pun mulai dibuka dengan nama "Schools of the Wise". Tanah Arab juga akhirnya menjadi populer karena kopinya. Pada 1560, kopi merambah Eropa dan segera menjadi populer.
          </p>
          <p>
            Sekitar satu abad berselang, Belanda memperkenalkan kopi ke Nusantara. Pada 1696, Belanda membawa benih kopi Arabika untuk ditanam di Pulau Jawa. Sayangnya, benih itu gagal tumbuh karena rusak akibat gempa bumi dan banjir.
          </p>
          <p>
            Barulah 15 tahun kemudian, upaya pemerintah Belanda membuahkan hasil. Kopi Indonesia mulai dilirik dunia. Ketika itu, Bupati Cianjur Aria Wira Tanu mengirimkan sekitar empat kuintal kopi ke Amsterdam. Ekspor kopi tersebut berhasil memecahkan rekor harga saat lelang di sana.
          </p>
          <p>
            Puncaknya, pada 1726, kopi asal Jawa sebanyak 2.145 ton membanjiri Eropa. Kopi Mocha asal Yaman yang kala itu mendominasi pasar akhirnya tersingkir. Momen tersebut menandai puncak keemasan kopi asal Jawa di Eropa, yang sejak itu populer dengan sebutan Java Coffee.
          </p>
          <p>
            Dianggap sebagai komoditas yang menguntungkan, Belanda kemudian memperluas daerah penanaman kopi di Indonesia. Tak hanya itu, mereka juga mengembangkan benih kopi Robusta untuk menyiasati serangan jamur Hemileia vastatrix atau hama karat daun pada 1880. Robusta yang merupakan jenis kopi asal Kongo dipilih karena dianggap lebih kuat dan tahan hama.
          </p>
        </article>
      </Container3>

      <Container4>
        <SideContainer2>
          <Parallax blur={{ min: -2, max: 5 }} bgImage={RobustaImage} strength={500} style={{ width: '100%', height: '100%' }} bgImageStyle={{ height: '150%', width: 'auto', filter: 'grayscale(100%)' }}>
          </Parallax>
        </SideContainer2>
        <SideContainer data-aos="fade-up"
          data-aos-anchor-placement="top-bottom">
          <article >
            <p>
              Dalam perkembangannya, kopi Robusta dapat tumbuh dengan baik di Indonesia. Produksinya yang terus meningkat akhirnya menggeser kepopuleran kopi Arabika. Hingga saat ini, Nusantara menjadi salah satu produsen kopi Robusta terbesar di dunia. Harganya yang lebih terjangkau turut mengubah gaya hidup masyarakat dalam menikmati kopi.
            </p>
            <p>

              Dalam beberapa tahun terakhir, di seluruh dunia, termasuk Indonesia, kopi kian digemari dan menjadi bagian tak terpisahkan dari masyarakat urban. Kedai kopi bermunculan di mana-mana. Di banyak tempat, bahkan posisinya bersebelahan atau berseberangan.
            </p>
            <p>
              Menyesap kopi sebelum menjalani hari—atau menuntaskan sisa hari saat senja—seakan menjadi ritual wajib. Minuman kaya kafein ini mampu melecut stamina bagi siapa pun yang menyesapnya. Namun kini, pemanfaatan kopi tidak sekadar untuk memenuhi gaya hidup semata, tapi juga pelestarian alam dan meningkatkan perekonomian masyarakat lokal.
            </p>
          </article>
        </SideContainer>
      </Container4>

      <Container3 style={{ display: 'flex', minHeight: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <div style={{ display: 'flex' }}>
          <Balok>
            <div className='balok-item' style={{ margin: '40px 0 20px', top: '40vh' }}></div>
          </Balok>
          <article style={{ flex: 1 }}>
            <h1 style={{ fontSize: 36 }}>
              Membudidayakan Kopi Puntang,<br></br> Menyelamatkan Owa Jawa
          </h1>
            <p>
              Owa jawa (Hylobates moloch) adalah satwa endemik Pulau Jawa yang kini hampir punah. Kera ini memiliki ciri khas tidak memiliki ekor dan warna tubuhnya keabu-abuan. Keberadaannya dapat diketahui dari nyanyiannya yang khas. Saat ini, persebaran Owa jawa hanya terbatas di Jawa bagian barat.
          </p>
            <p>
              Kelangsungan hidup Owa jawa semakin terancam lantaran kian sempitnya habitat alami mereka. Padahal, di alam liar, kera ini memiliki peran penting dalam ekosistem hutan; secara alami, Owa jawa merestorasi hutan dengan menyebarkan benih yang membantu menjaga kesehatan hutan.
          </p>
          </article>
        </div>
      </Container3>

      <div style={{ width: '100%', height: '100vh' }}>
        <ParalaxImage image={OwaImage}>
          <Caption>FOTO: OWA JAWA</Caption>

        </ParalaxImage>
        <Container6>
          <BgOverlay style={{ opacity: 0.75 }}></BgOverlay>

          <DetailedArticle data-aos="fade-up"
            data-aos-anchor-placement="top-bottom">
            <article >
              <p style={{ color: 'white' }}>
                Diperlukan upaya konservasi demi menyelamatkan Owa jawa dari kepunahan, sekaligus menjaga kelestarian hutan. Namun, ada beberapa tantangan yang harus dihadapi. Selain habitat yang semakin sempit, perburuan oleh manusia juga mengancam Owa jawa. Di wilayah Pegunungan Malabar, Jawa Barat, misalnya, upaya konservasi Owa jawa akan lebih sulit lantaran masih maraknya pemburu liar dan perambah hutan. Oleh sebab itu, peran masyarakat di sekitar lokasi konservasi sangat dibutuhkan.
              </p>
              <p style={{ color: 'white' }}>
                Upaya untuk melibatkan masyarakat dalam pelestarian hutan sebagai habitat Owa jawa telah dilakukan Pertamina EP Subang Field. Caranya, mengajak warga yang tinggal di sekitar Gunung Puntang untuk menanam kopi. Aktivitas yang telah berlangsung sejak 2017 ini merupakan bagian Program CSR Melintang (Masyarakat Peduli Alam Puntang).
              </p>
            </article>
          </DetailedArticle>
        </Container6>
        <ParalaxImage image={bgImage}>
          <Caption>FOTO: HASIL PANEN KOPI PUNTANG</Caption>


        </ParalaxImage>
        <Container6 >
          <BgOverlay style={{ opacity: 0.75 }}></BgOverlay>
          <DetailedArticle data-aos="fade-up"
            data-aos-anchor-placement="top-bottom">
            <article >
              <p style={{ color: 'white' }}>
                “Penanaman kopi Puntang merupakan bentuk pemberdayaan masyarakat berbasis konservasi. Selain dapat meningkatkan kesejahteraan masyarakat yang tinggal di sekitar Gunung Puntang, juga dapat menjaga kelestarian hutan dan keberlangsungan kehidupan hewan langka Owa jawa. Jadi, sekali mendayung, dua-tiga pulau terlampaui,” tulis Vice President Corporate Communication Pertamina, Fajriyah Usman, pada laman web resmi Pertamina.
              </p>
            </article>
          </DetailedArticle>
        </Container6>
        <ParalaxImage image={ProdukImage}>
          <Caption>FOTO: PRODUK KOPI PUNTANG</Caption>


        </ParalaxImage>
        <Container6>
          <BgOverlay style={{ opacity: 0.75 }}></BgOverlay>

          <DetailedArticle data-aos="fade-up"
            data-aos-anchor-placement="top-bottom">
            <article >
              <p style={{ color: 'white' }}>
                Adapun jenis kopi yang ditanam adalah Arabika Priangan atau dikenal juga dengan Sunda Typica. Kopi Puntang merupakan kopi unggulan khas Bandung, Jawa Barat. Kopi ini disukai karena memiliki keunggulan dalam aroma (fragrant), tingkat kemanisan (sweetness) serta rasa (flavor). Dalam pengelolaannya, Pertamina mengajak masyarakat yang tergabung dalam Lembaga Masyarakat Desa Hutan (LMDH) Bukit Amanah. Organisasi ini terbentuk sebagai kelompok budi daya kopi ramah lingkungan yang anggotanya adalah para mantan perambah hutan.
              </p>
            </article>
          </DetailedArticle>
        </Container6>

        <article>
          <Container3 style={{ display: 'flex', minHeight: '100vh', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
            <p style={{ textAlign: 'center' }}>
              Selain untuk pemanfaatan konservasi hutan dan Owa jawa, kopi juga dapat digunakan untuk mendukung kampanye lingkungan. Seperti yang dilakukan warga Gresik di Kelurahan Sidokumpul, yang meluncurkan inovasi “Bayar Kopi Pakai Sampah” melalui Kedai Kopi Sampah. Di sini, pengunjung dapat menikmati kopi khas Gresik secara cuma-cuma. Syaratnya, pengunjung harus membawa sampah plastik untuk ditukarkan menjadi voucher kopi. <strong>Menarik, bukan?</strong>
            </p>
            <div style={{ width: 140, height: 8, backgroundColor: '#FED602', marginTop: 40 }}></div>
          </Container3>
        </article>

        <ParalaxImage image={BayarImage}>
          <Caption>FOTO: KOPI BAYAR PAKAI SAMPAH</Caption>

        </ParalaxImage>

        <Container6 style={{ flexDirection: 'column' }}>
          <BgOverlay style={{ opacity: 0.75 }}></BgOverlay>

          <article >
            <DetailedArticle data-aos="fade-up"
              data-aos-anchor-placement="top-bottom">
              <p style={{ color: 'white' }}>
                Kedai Kopi Sampah merupakan bagian dari komitmen PT Pertamina Lubricant Production Unit Gresik (PUG) dengan Kelurahan Sidokumpul dalam upaya mengurangi sampah plastik. Selain itu, program ini juga bertujuan untuk menyadarkan masyarakat luas akan pentingnya pemanfaatan sampah plastik untuk didaur ulang menjadi barang yang lebih bernilai ekonomis. Hingga saat ini, sudah 897 kilogram sampah yang terkumpul, dan berkontribusi mengurangi sampah di Kelurahan Sidokumpul sebesar 0,22%. Tentu saja, itu bukanlah angka yang fantastis. Namun, mimpi-mimpi besar harus dimulai dengan satu langkah kecil.
              </p>
            </DetailedArticle>
          </article>

          <div style={{ display: 'flex', flexWrap: 'wrap', marginTop: 40 }}>
            <BoxInfo>
              <div className='titleBox'>
                <h2 style={{ textAlign: 'center', color: 'white', margin: 0, color: '#FED602' }}>Omset Per Bulan</h2>
              </div>
              <div className='angka'>  20 </div>

              <h1 style={{ textAlign: 'center', color: 'white', margin: 0, color: '#FED602' }}>Juta</h1>
            </BoxInfo>
            <BoxInfo style={{ borderRight: '3px solid #FED602', borderLeft: '3px solid #FED602' }}>
              <div className='titleBox'>
                <h2 style={{ textAlign: 'center', color: 'white', margin: 0, color: '#FED602' }}>Memberdayakan</h2>
              </div>
              <div className='angka'>10 </div>

              <h1 style={{ textAlign: 'center', color: 'white', margin: 0, color: '#FED602' }}>Orang</h1>
            </BoxInfo>
            <BoxInfo>
              <div className='titleBox'>
                <h2 style={{ textAlign: 'center', color: 'white', margin: 0, color: '#FED602' }}>Sampah Terkumpul Per Bulan</h2>
              </div>
              <div className='angka'>897 </div>

              <h1 style={{ textAlign: 'center', color: 'white', margin: 0, color: '#FED602' }}>Kilogram</h1>
            </BoxInfo>
          </div>
        </Container6>

        <Container3 style={{ display: 'flex' }}>

          <Balok>
            <div className='balok-item' style={{ margin: '40px 0 20px' }}></div>
          </Balok>

          <article style={{ flex: 1 }}>
            <h1 style={{ fontSize: 36 }}>
              Program Kemitraan Kopi untuk UMKM
          </h1>
            <p>
              Indonesia merupakan salah satu negara penghasil kopi terbaik di dunia. Kualitasnya yang unggul dan cita rasanya yang khas, menjadikan biji kopi asal Indonesia disukai penikmat kopi di berbagai negara. Meksiko, misalnya, menjadi salah satu negara tempat kopi Indonesia begitu diminati. Menurut data Kementerian Perdagangan, meskipun Meksiko merupakan salah satu negara penghasil kopi, kopi Indonesia berhasil merebut 50 persen pangsa pasar kopi impor di Meksiko, disusul Kolombia dengan pangsa pasar rata-rata sebesar 14—16 persen per bulan.
            </p>
            <p>
              Peluang tersebut kemudian dimanfaatkan oleh Teuku Dharul Bawadi untuk terjun ke industri kopi. Melalui usaha Bawadi Coffee, ia memasarkan kopi single origin Aceh. Tak hanya soal bisnis, Bawadi Coffee memiliki komitmen untuk membesarkan potensi kopi Aceh dan mengembangkan hasil tani kopi Aceh ke seluruh dunia.
            </p>
            <p>
              Saat awal mula berbisnis, Bawadi hanya bermodalkan Rp30 juta dan bekerja sama dengan lima orang petani kopi Aceh saja. Dengan semangat dan kerja keras, ia akhirnya berhasil memperluas kerja sama dengan koperasi yang memiliki 1.140 orang petani kopi dalam empat tahun. Omzetnya dari usaha kopi melonjak 200 persen sejak ia memulai usaha kecilnya.
            </p>
            <p>
              Tak hanya sukses di Tanah Air, bisnis kopi Bawadi juga sukses menembus pasar internasional. Pemuda 31 tahun ini berhasil mengenalkan kopi Aceh hingga ke Malaysia, Singapura, Thailand, Kamboja, dan Eropa. Keberhasilannya ini juga tidak terlepas dari dukungan pinjaman modal usaha Program Kemitraan Pertamina untuk menambah kapasitas produksi Bawadi Coffee.
            </p>
            <p>
              Pada 2018, Bawadi Coffee mendapatkan pinjaman modal usaha sebesar Rp150 juta. Setahun kemudian, Pertamina juga membawa Bawadi Coffee mengikuti pameran di “The 16th China-ASEAN Expo (CAEXPO 2019)” di Nanning International Convention and Exhibition Center, China, dan berhasil mendapat pesanan kopi total senilai Rp1,4 miliar.
            </p>
            <p>
              Upaya Pertamina dalam memanfaatkan kopi untuk mendukung UMKM menjadi energi positif bagi Indonesia. Energi yang memberdayakan masyarakat lokal di bidang ekonomi dan mampu mengembangkan potensi daerahnya sendiri. Bukan hal yang tak mungkin, jika di masa depan UMKM turut menjadi penyangga ekonomi nasional.
          </p>
          </article>
        </Container3>

        <div
         
          className="video"
          style={{
            position: "relative",
            paddingBottom: "56.25%" /* 16:9 */,
            paddingTop: 25,
            height: 0
          }}
        >
           <iframe
              loading="lazy"
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%"
              }}
              src="https://www.youtube.com/embed/d6faWQW5aLI?&autoplay=1&mute=1&enablejsapi=1&loop=1"
              frameBorder="0"
              allowFullScreen
              allow="autoplay; encrypted-media"
            />  

        </div>

        <div style={{ padding: 60, backgroundColor: 'black', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
          <div style={{ display: 'flex', marginBottom: 48, }}>
            <div style={{ width: 120, marginRight: 48, }}>
              <div style={{ marginBottom: 24 }}>
                <h4 style={{ textAlign: 'right', color: "white", marginBottom: 4 }}>Reporter</h4>
                <p style={{ textAlign: 'right', color: "white", margin: 0, fontSize: 14 }}>Nama orangnya</p>
              </div>
              <div style={{ marginBottom: 24 }}>
                <h4 style={{ textAlign: 'right', color: "white", marginBottom: 4 }}>Fotografer</h4>
                <p style={{ textAlign: 'right', color: "white", margin: 0, fontSize: 14 }}>Nama orangnya</p>
              </div>
              <div style={{ marginBottom: 24 }}>
                <h4 style={{ textAlign: 'right', color: "white", marginBottom: 4 }}>Videografer</h4>
                <p style={{ textAlign: 'right', color: "white", margin: 0, fontSize: 14 }}>Nama orangnya</p>
              </div>
            </div>
            <div style={{ width: 120 }}>
              <div style={{ marginBottom: 24 }}>
                <h4 style={{ textAlign: 'left', color: "white", marginBottom: 4 }}>Editor</h4>
                <p style={{ textAlign: 'left', color: "white", margin: 0, fontSize: 14 }}>Nama orangnya</p>
              </div>
              <div style={{ marginBottom: 24 }}>
                <h4 style={{ textAlign: 'left', color: "white", marginBottom: 4 }}>Desainer & <br></br>Ilustrator</h4>
                <p style={{ textAlign: 'left', color: "white", margin: 0, fontSize: 14 }}>Nama orangnya</p>
              </div>

            </div>
          </div>
          <div style={{ display: "flex", flexWrap: 'wrap', justifyContent: 'center', width: '100%' }}>
            <ImageFooter src={Logo1} style={{ margin: 10 }} />
            <ImageFooter src={Logo2} style={{ margin: 10 }} />
            <ImageFooter src={Logo3} style={{ margin: 10 }} />
          </div>
        </div>

      </div>
    </div >
  </>
}

const GlobalStyle = createGlobalStyle`
  p{
    font-family: charter, Georgia, Cambria, "Times New Roman", Times, serif;
    font-size: 20px;
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
  @media(max-width:978px){
        width: 100%;
    height: 400px;
  }
`;

const First = styled.span`
    /* color: #903; */
    float: left;
    font-family: Georgia;
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
  /* @media(max-width:400px){
    p{
      line-height: 1.1;
    }
  } */
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
  height: 100%;
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
  height: 56px;
  @media(max-width:700px){
    height: 30px;
    margin: 10px !important;
  }
`;



export default Jurnal1;



