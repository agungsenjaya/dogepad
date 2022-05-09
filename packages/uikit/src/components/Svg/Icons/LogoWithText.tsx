import React from "react";
import Svg from "../Svg";
import Image from 'next/image';
import { SvgProps } from "../types";

interface LogoProps extends SvgProps {
  isDark: boolean;
}

const Logo: React.FC<LogoProps> = ({ isDark, ...props }) => {
  const textColor = isDark ? "#FFFFFF" : "#000000";
  return (
    // <Svg viewBox="0 0 1281 199" {...props}>
    // </Svg>
      <Image width="128" height="33" src="/images/logotext.png" {...props} />
  );
};

export default React.memo(Logo, (prev, next) => prev.isDark === next.isDark);
