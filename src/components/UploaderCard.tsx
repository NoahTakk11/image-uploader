import { ChangeEvent } from "react";
import image from "../assets/image.svg";

interface Props {
  state: boolean;
  buttonOnChange: () => void;
  inputOnChange: (event: ChangeEvent<HTMLInputElement>) => void;
}
export default function UploaderCard(props: Props): JSX.Element {
  return (
    <div
      className={`flex items-center justify-center flex-col w-[400px] h-[470px] shadow-md border-[1px] rounded-[12px] ${
        props.state ? "block" : "hidden"
      }`}
    >
      <div className="flex items-center justify-center flex-col w-[340px] h-[400px]">
        <h1 className="w-[165px] h-[27px] font-[Poppins] font-medium text-[18px] text-center trackng-[0.035em] text-[#4F4F4F] mb-[16px] mx-[110px] mt-[36px]">
          Upload your image
        </h1>
        <h2 className="w-[121px] h-[15px] font-[Poppins] font-medium text-[10px] leading-[15px]  text-center trackng-[0.035em] text-[#828282] mb-[30px] mx-[110px]">
          File should be Jpeg, Png,...
        </h2>
        <div
          id="drop-zone"
          className="flex items-center justify-center flex-col w-[338px] h-[218px] rounded-[12px] border-[1px] border-dashed border-[#97BEF4]"
        >
          <img src={image} alt="" />
        </div>
        <p className="w-[14px] h-[18px] font-[Poppins] font-medium text-[10px] leading-[18px]  text-center trackng-[0.035em] text-[#BDBDBD] mb-[22px] mt-[19px]">
          Or
        </p>
      </div>
      <div>
        <input
          type="file"
          id="input-imagen"
          accept="image/*"
          onChange={props.inputOnChange}
          className="hidden"
        />
        <button
          id="btn"
          onClick={props.buttonOnChange}
          className="bg-[#2F80ED] w-[101px] h-[32px] text-slate-50 rounded-[8px] text-[12px] font-[Noto Sans] font-medium leading-[16px] text-center mb-[36px]"
        >
          Choose a file
        </button>
      </div>
    </div>
  );
}
