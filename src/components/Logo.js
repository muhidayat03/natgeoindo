
import styled from 'styled-components';
import Image from '../assets/img/logo-white.png'

export default ({ style, src, isResponsive }) => <Logo style={style} src={src} isResponsive={isResponsive}/>;
const Logo = styled.img`
  height: 60px;
  object-fit: contain;
  position: relative;

  @media(max-width: 600px){ 
    height:${({isResponsive}) => `${isResponsive ? '36px' : '100%'} !important;`} 

  }
  @media(max-width: 380px){ 
    height:${({isResponsive}) => `${isResponsive ? '30px' : '100%'} !important;`} 
  }
`;

Logo.defaultProps = {
  src: Image
};