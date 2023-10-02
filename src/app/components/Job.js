import Image from "next/image";

export default function Job(props) {
  return (
    <div
      className={`${
        props.darkMode ? "bg-neutral-500" : "bg-neutral-100"
      } relative flex flex-col items-start pt-[43px] px-[32px] pb-[35px] rounded-md mb-[49px] last-of-type:mb-0 md:mb-[54px] xl:mb-10`}
    >
      <div
        className="absolute -top-[25px] left-8 flex items-center justify-center w-[50px] h-[50px] rounded-[14px]"
        style={{ backgroundColor: `${props.job.brandColor}` }}
      >
        <Image
          src={props.job.logo}
          alt={`${props.job.company} logo`}
          width="0"
          height="0"
          sizes="100vw"
        />
      </div>
      <div className="mb-[36px]">
        <div className="flex items-end justify-start">
          <p className="m-0 text-neutral-400">{props.job.timestamp}</p>
          <span className="w-1 h-1 rounded-[50px] mx-[12px] mb-[6px] bg-neutral-400"></span>
          <p className="m-0 text-neutral-400">{props.job.contract}</p>
        </div>
        <a
          className={`${
            props.darkMode ? "text-neutral-100" : "text-neutral-500"
          } block mt-[7px] mb-[9px] text-[20px] font-bold no-underline hover:text-neutral-400`}
          href=""
        >
          {props.job.position}
        </a>
        <p className="m-0 text-neutral-400">{props.job.name}</p>
      </div>
      <p className="text-accent text-[14px] font-bold">{props.job.location}</p>
    </div>
  );
}
