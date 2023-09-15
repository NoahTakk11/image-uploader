import { motion } from "framer-motion";
interface Props {
  state: boolean;
}
export function Loading(props: Props): JSX.Element {
  return (
    <div
      className={`flex flex-col items-center justify-center ${
        props.state ? "block" : "hidden"
      }`}
    >
      <div className="w-[400px] h-[144px] rounded-[12px] shadow-sm border-[1px]">
        <h1 className="mt-[36px] ml-[32px] w-[100px] h-[27px] font-[Poppins] font-medium leading-[27px] tracking-[-0.035em] text-[18px] text-left text-[#4F4F4F]">
          Uploading...
        </h1>
        <div className="w-[340px] h-[6px] rounded-lg border-[1px] bg-[#F2F2F2] ml-[32px] mt-[30px]">
          <motion.div
            initial={{ x: "0%" }}
            animate={{ x: "240%" }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-[100px] h-full rounded-lg bg-[#2F80ED]"
          ></motion.div>
        </div>
      </div>
    </div>
  );
}
