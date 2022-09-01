import React from "react";
import { Footercss } from "./styles";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import GitHubIcon from "@mui/icons-material/GitHub";

const footer = () => {
  return (
    <Footercss>
      <footer>
        <ul>
          <FacebookIcon className="lista" />
          <InstagramIcon className="lista" />
          <TwitterIcon className="lista" />
          <GitHubIcon className="lista" />
        </ul>
        <br />
        <span>
          @sem fins empresariais(apenas usando infomações para estudo e prática)
        </span>
      </footer>
    </Footercss>
  );
};

export default footer;
