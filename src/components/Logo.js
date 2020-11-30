
import styled from 'styled-components';
import Image from '../assets/img/logo-white.png'

export default ({ style, src }) => <Logo style={style} src={src} />;
const Logo = styled.img`
  height: 100%;
  object-fit: contain;
  position: relative;

  @media(max-width: 600px){
    height: 36px !important;
  }
  @media(max-width: 480px){
    height: 30px !important;
  }
`;

Logo.defaultProps = {
  src: Image
};