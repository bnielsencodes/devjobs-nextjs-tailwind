import Image from "next/image";
import sunIcon from "/public/assets/desktop/icon-sun.svg";
import moonIcon from "/public/assets/desktop/icon-moon.svg";

export default function ToggleTheme(props) {
  return (
    <div className="flex items-center">
      <Image src={sunIcon} alt="sun icon" width="0" height="0" sizes="100vw" />
      <div
        className="flex items-center justify-start w-12 h-6 rounded-[32px] mr-4 ml-[15px] bg-neutral-100 box-content lg:cursor-pointer group"
        onClick={props.toggleTheme}
      >
        <div
          className={`${
            props.darkMode ? "translate-x-6" : null
          } w-[14px] h-[14px] rounded-full mx-[5px] bg-accent transition-transform duration-200 ease-linear group-hover:bg-accent-light`}
        ></div>
      </div>
      <Image
        src={moonIcon}
        alt="moon icon"
        width="0"
        height="0"
        sizes="100vw"
      />
    </div>
  );
}
