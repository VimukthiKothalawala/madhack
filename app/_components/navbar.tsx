import React from "react";
import { Fira_Code } from "next/font/google";
import { Brain } from "lucide-react";

// Configure the Fira Code font
const firaCode = Fira_Code({
  subsets: ["latin"],
  weight: ["400", "500", "700"], // Specify the weights you want to use
  display: "swap",
});

const Navbar = () => {
  return (
    <div className="py-3 pt-6 sticky">
      <div className={`${firaCode.className} font-bold text-4xl text-sky-600`}>
      <Brain className="size-10" />
      </div>
    </div>
  );
};

export default Navbar;
