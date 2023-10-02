import FilterTitle from "@/app/components/search/FilterTitle";
import FilterLocation from "./FilterLocation";

export default function Search(props) {
  return (
    <form
    >
      <FilterTitle darkMode={props.darkMode} />
      <FilterLocation darkMode={props.darkMode} />
    </form>
  );
}
