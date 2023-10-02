import Image from "next/image";
import filterIcon from "/public/assets/mobile/icon-filter.svg";
import filterIconDark from "/public/assets/mobile/icon-filter-dark.svg";
import searchIconMobile from "/public/assets/mobile/icon-search.svg";
import FilterTitle from "@/app/components/search/FilterTitle";
import FilterLocation from "./FilterLocation";

export default function Search(props) {
  return (
    <form
      className={`${
        props.darkMode ? "bg-neutral-500" : "bg-neutral-100"
      } flex items-center justify-between w-full h-20 px-[16px] rounded-md -translate-y-[57px] md:justify-center -md:translate-y-[70px] -xl:translate-y-[109px] `}
      // action="index.html"
      method="post"
    >
      <FilterTitle darkMode={props.darkMode} />
      <FilterLocation darkMode={props.darkMode} />
      <div className="flex items-center md:justify-end md:flex-grow md:max-w-[252px] md:mr-[15px] md:ml-5 xl:max-w-[314px] xl:mr-4 xl:ml-5">
        <label className="hidden md:block md:pb-2 md:font-bold xl:flex xl:items-center">
          <input className="md:hidden" type="checkbox" value="false" />
          <span
            className={`${
              props.darkMode
                ? "text-neutral-100 before:bg-neutral-100"
                : "text-neutral-500 before:bg-neutral-500"
            } md:relative md:flex md:items-center md:mt-[1px] before:content-[""] before:block before:w-6 before:h-6 before:rounded-[3px] before:mt-[6px] before:mr-[17px] before:bg-opacity-10 before:mix-blend-normal before:cursor-pointer`}
          >
            Full Time<span className="hidden xl:block xl:ml-1">Only</span>
          </span>
        </label>
        {props.darkMode ? (
          <Image
            className="w-5 h-5 mr-4 cursor-pointer"
            src={filterIconDark}
            alt="filter icon"
            width="0"
            height="0"
            sizes="100vw"
          />
        ) : (
          <Image
            className="w-5 h-5 mr-4 cursor-pointer"
            src={filterIcon}
            alt="filter icon"
            width="0"
            height="0"
            sizes="100vw"
          />
        )}
        <div className="flex items-center justify-center w-12 h-12 rounded-[5px] bg-accent cursor-pointer hover:bg-accent-light md:flex md:items-center md:justify-center md:w-20 md:ml-7 xl:w-[123px] xl:ml-[27px]">
          <Image
            className="w-5 h-5 md:hidden"
            src={searchIconMobile}
            alt="magnifying glass icon"
            width="0"
            height="0"
            sizes="100vw"
          />
          <span className="hidden md:block md:text-neutral-100 font-bold">
            Search
          </span>
        </div>
      </div>
    </form>
  );
}
