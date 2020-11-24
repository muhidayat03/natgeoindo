
import styled from 'styled-components';
import Image from '../assets/img/logo-white.png'

export default ({ style }) => <Logo style={style} />;
const Logo = styled.img`
  height: 100%;
  object-fit: contain;
  position: relative;
`;

Logo.defaultProps = {
  src: Image
};