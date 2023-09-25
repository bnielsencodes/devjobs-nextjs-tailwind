import Image from "next/image";
import logo from "/public/assets/desktop/logo.svg";
export default function Header(props) {
  return (
    <header
      className={`flex items-start justify-between pt-8 h-[136px] px-6 ${
        props.darkMode ? "bg-neutral-600" : "bg-neutral-200"
      } bg-cover bg-no-repeat md:h-40 md:px-[39px] xl:px-[165px]`}
    >
      <Image src={logo} alt="devjobs logo" width="0" height="0" sizes="100vw" />
    </header>
  );
}
