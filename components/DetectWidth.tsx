import { useState, useEffect, useLayoutEffect } from "react";
import Header from "components/Header";
import HeaderMobile from "components/HeaderMobile";

export default function DetectWidth() {
  const [windowWidth, setWindowWidth] = useState(0);

  useEffect(() => {
    setWindowWidth(document.documentElement.clientWidth);
  }, []);

  useLayoutEffect(() => {
    function updateSize() {
      setWindowWidth(document.documentElement.clientWidth);
    }
    window.addEventListener("resize", updateSize);
    updateSize();
    return () => window.removeEventListener("resize", updateSize);
  }, []);

  return <>{windowWidth < 1024 ? <HeaderMobile /> : <Header />}</>;
}
