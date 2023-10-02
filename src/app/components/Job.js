import Image from "next/image";

export default function Job(props) {
  return (
    <div
    >
      <div
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
        >
          {props.job.position}
        </a>
        <p className="m-0 text-neutral-400">{props.job.name}</p>
      </div>
      <p className="text-accent text-[14px] font-bold">{props.job.location}</p>
    </div>
  );
}
