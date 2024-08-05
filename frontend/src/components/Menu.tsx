import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import SearchBar from "./SearchBar";
const Menu = () => {
  return (
    <details className="block md:hidden" >
      <summary className="btn btn-ghost m-1">
        <GiHamburgerMenu className="text-secondary" size={30} />
      </summary>
      <ul className="mt-4 w-screen absolute left-0 bg-base-100 p-1 shadow">
        <li>
          <SearchBar></SearchBar>
        </li>
        <li>
          <a>Item 1</a>
        </li>
        <li>
          <a>Item 2</a>
        </li>
      </ul>
    </details>
 
  );
};

export default Menu;
