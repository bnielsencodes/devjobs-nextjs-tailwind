export default function MoreButton(props) {
  return (
    <input
      className={` ${
        props.darkMode ? "text-neutral-100" : "text-neutral-500"
      } w-[141px] h-12 border-0 rounded-[5px] bg-accent text-base font-bold hover:bg-accent cursor-pointer`}
      type="button"
      value="Load More"
    />
  );
}
