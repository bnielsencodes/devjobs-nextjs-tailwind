import { useState, useEffect } from "react";
import Image from "next/image";
import desktopImage from "/public/assets/desktop/bg-pattern-header.svg";
import tabletImage from "/public/assets/tablet/bg-pattern-header.svg";
import mobileImage from "/public/assets/mobile/bg-pattern-header.svg";
import logo from "/public/assets/desktop/logo.svg";
export default function Header(props) {
  // store the width of the viewport in pixels
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  // dynamic header bg image based on screen width
  const bgImg =
    windowWidth >= 1440
      ? desktopImage
      : windowWidth < 1440 && windowWidth >= 768
      ? tabletImage
      : mobileImage;
  // set windowWidth state on screen size change
  useEffect(() => {
    const handleWindowResize = () => {
      setWindowWidth(window.innerWidth);
    };
    // add event listener
    window.addEventListener("resize", handleWindowResize);
    // remove event listener
    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  return (
    <header
      className={`flex items-start justify-between pt-8 h-[136px] px-6 ${
        props.darkMode ? "bg-neutral-600" : "bg-neutral-200"
      } bg-cover bg-no-repeat md:h-40 md:px-[39px] xl:px-[165px]`}
      style={{
        backgroundImage: `url(${bgImg.src})`,
      }}
    >
      <Image src={logo} alt="devjobs logo" width="0" height="0" sizes="100vw" />
    </header>
  );
}
