import React from "react";
import { Inter } from "next/font/google";

const font = Inter({ subsets: ["latin"] });

const layout = ({ children }: { children: React.ReactNode }) => {
  return <main className={font.className}>{children}</main>;
};

export default layout;
