import Image from "next/image";
import locationIcon from "/public/assets/desktop/icon-location.svg";

export default function FilterLocation(props) {
  return (
    <div className="hidden md:flex md:items-center md:justify-start md:flex-grow-[2] md:h-20 md:border-r md:border-solid md:border-inputBorder lg:flex-grow lg:min-w-[300px]">
      <Image
        className="w-6 h-6 mr-4"
        src={locationIcon}
        alt="location marker icon"
        width="0"
        height="0"
        sizes="100vw"
      />
      <input
        className={` ${
          props.darkMode
            ? "bg-neutral-500 text-neutral-100"
            : "bg-neutral-100 text-neutral-500"
        } border-0 rounded-[3px] cursor-pointer md:w-full`}
        // onkeyup="searchUsers()"
        name="filter-location"
        type="search"
        placeholder="Filter by location..."
        aria-label="filter by location"
      />
    </div>
  );
}
