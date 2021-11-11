import React from "react";

const useMedia = (media) => {
  const [match, setMatch] = React.useState(null);
  React.useEffect(() => {
    function changeMatch() {
      const { matches } = window.matchMedia(media);
      setMatch(matches);
    }
    changeMatch();
    // Essa função vai ocorrer toda vez que houver o resize no window.
    window.addEventListener("resize", changeMatch);
    return () => {
      window.removeEventListener("resize", changeMatch);
    };
  }, [media]);
  return match;
};

export default useMedia;
