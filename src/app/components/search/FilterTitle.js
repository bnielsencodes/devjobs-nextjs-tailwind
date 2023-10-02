import Image from "next/image";
import searchIcon from "/public/assets/desktop/icon-search.svg";

export default function FilterTitle(props) {
  return (
    <div className="flex items-center justify-start flex-grow-[2] h-20 md:border-r md:border-solid md:border-inputBorder xl:flex-grow">
      <Image
        className="hidden w-6 h-6 mr-4 md:block"
        src={searchIcon}
        alt="magnifying glass icon"
        width="0"
        height="0"
        sizes="100vw"
      />
      <input
        className={`${
          props.darkMode
            ? "bg-neutral-500 text-neutral-100"
            : "bg-neutral-100 text-neutral-500"
        } w-[115px] pl-2 border-0 rounded-[3px] xl:w-[351px] truncate lg:cursor-pointer focus:w-full focus:outline focus:outline-2 outline-accent`}
        // onkeyup="searchUsers()"
        name="filter-title"
        type="search"
        placeholder="Filter by title, companies, expertise..."
        aria-label="filter by title"
      />
    </div>
  );
}
