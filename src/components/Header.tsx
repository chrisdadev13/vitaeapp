import React from "react";
import Logo from "./logo";
import SectionMap from "./sectionMap"; 

const Header: React.FC<{section: number}> = ({section}) => {
  return(
    <div id="container" className="w-full p-5 flex items-center lg:justify-center">
      <div className="mr-10">
        <Logo />
      </div>
      <div className="lg:block hidden">
        <SectionMap currentSection={section}/>
      </div>
    </div>
  )
}

export default Header;
