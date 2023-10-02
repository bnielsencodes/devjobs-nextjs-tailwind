import FilterTitle from "@/app/components/search/FilterTitle";
export default function Search(props) {
  return (
    <form
    >
      <FilterTitle darkMode={props.darkMode} />
    </form>
  );
}
