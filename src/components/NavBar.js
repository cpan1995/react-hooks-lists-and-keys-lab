import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];
  const linksaTag = links.map(element => {
    return <a key={element} href={`#${element}`}>{element}</a>
  })
  return (
    <nav>
      {linksaTag}
    </nav>
  )
  
}

export default NavBar;
