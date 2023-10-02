import FilterTitle from "@/app/components/search/FilterTitle";
import FilterLocation from "./FilterLocation";

export default function Search(props) {
  return (
    <form
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
      </div>
    </form>
  );
}
