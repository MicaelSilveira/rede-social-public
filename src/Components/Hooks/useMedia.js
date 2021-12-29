import React from "react";

const useMedia = (media) => {
  const [math, setMath] = React.useState(null);
  React.useEffect(() => {
    function changeMath() {
      const { matches } = window.matchMedia(media);
      setMath(matches);
    }
    window.addEventListener("resize", changeMath);
    return () => {
      window.removeEventListener("resize", changeMath);
    };
  }, [media]);
  return math;
};

export default useMedia;
