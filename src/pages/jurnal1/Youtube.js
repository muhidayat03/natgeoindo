 
import React, { useState, useEffect, useRef, createRef } from 'react';


const Youtube = props => {
  const [showVideo, setShowVideo] = useState(false);

  const yt_container = createRef();
  const videoObserver = new IntersectionObserver(onVideoIntersection, {
    rootMargin: '100px',
    threshold: 0
  });
  useEffect(() => { 
    if (window && 'IntersectionObserver' in window) {
      if (yt_container && yt_container.current) {
        videoObserver.observe(yt_container.current);
      }
    } else {
      setShowVideo(true);
    }
  }, [yt_container]);

  function onVideoIntersection(entries) {
    if (!entries || entries.length <= 0) {
      return;
    }

    if (entries[0].isIntersecting) {
      setShowVideo(true);
      videoObserver.disconnect();
    }
  }

  return <div
    ref={yt_container}
    className="video"
    style={{
      position: "relative",
      paddingBottom: "56.25%" /* 16:9 */,
      paddingTop: 25,
      height: 0
    }}
  >
    {
      showVideo ? <iframe
        title='video'
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
      /> : undefined
    }

  </div>
}





export default Youtube;

