import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { faTwitter, faFontAwesome } from "@fortawesome/free-brands-svg-icons";

// page ex. -> /level1, /level2 ...
const LevelIcon = ({ page, id, icon, success }) => {
  library.add(fas, faTwitter, faFontAwesome);

  return (
    <Link to={page} key={id} className={`challenge-item ${success}`}>
      <FontAwesomeIcon icon={icon} className={`item ${success}`}/>
    </Link>
  );
};

export default LevelIcon;
