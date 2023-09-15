import { useRef } from "react";
import check from "../assets/check.svg";

interface Props {
  image: string;
  url: string;
  state: boolean;
}
export default function AfterLoader(props: Props): JSX.Element {
  const textRef = useRef<HTMLParagraphElement>(null);

  const copyText = () => {
    if (textRef.current) {
      const text = textRef.current.innerText;
      navigator.clipboard.writeText(text);
      alert("Url copied to clipboard! This file is temporary");
    }
  };
  return (
    <div
      className={`flex items-center justify-center flex-col w-[400px] h-[470px] shadow-md border-[1px] rounded-[12px] ${
        props.state ? "block" : "hidden"
      }`}
    >
      <div className="flex items-center justify-center flex-col w-[340px] h-[400px]">
        <img src={check} alt="" />
        <h2 className="w-[198px] h-[27px] font-[Poppins] font-medium text-[18px] leading-[27px]  text-center trackng-[0.035em] text-[#828282] mb-[30px] mx-[110px]">
          Uploaded Successfully!
        </h2>
        <div className="flex items-center justify-center flex-col w-[338px] h-[218px] rounded-[12px] border-[1px] border-dashed border-[#97BEF4]">
          <img
            className="object-cover w-full h-full"
            src={props.image}
            alt=""
          />
        </div>
      </div>
      <div className="w-[338px] h-[34px] rounded-[8px] border-[1px] border-[#E0E0E0] bg-[#F6F8FB] mt-[25px] mb-[33px]">
        <p
          ref={textRef}
          className="truncate w-[240px] h-[30px] text-[8px] text-center font-[Poppins] font-medium leading-[12px] whitespace-nowrap float-left my-3 mx-1"
        >
          {props.url}
        </p>
        <button
          onClick={copyText}
          className="bg-[#2F80ED] w-[74px] h-[32px] text-slate-50 rounded-[8px] text-[8px] font-[Noto Sans] font-medium leading-[16px] text-center float-right"
        >
          Copy Link
        </button>
      </div>
    </div>
  );
}
