import React from 'react';

import { useScrollYPosition } from 'react-use-scroll-position';



const ScrollWrapper = (props) => {
  const scrollY = useScrollYPosition();
  return <div style={{ cursor: 'pointer', position: "fixed", bottom: 32, right: 32, zIndex: 100 }}>
    {scrollY > 20 && scrollY && scrollY <= document.documentElement.scrollHeight - window.innerHeight - 50 &&
      // <TopMenu></TopMenu>
      <div>
        {props.children}
      </div>
    }
  </div>
}






export default ScrollWrapper;