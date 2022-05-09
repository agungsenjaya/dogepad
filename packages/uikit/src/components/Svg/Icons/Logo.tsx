import React from "react";
import Svg from "../Svg";
import Image from 'next/image';
import { SvgProps } from "../types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Image width="20" height="20" src="/images/logo.png" {...props} />
  );
};

export default Icon;
