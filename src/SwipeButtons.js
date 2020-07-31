import React from "react";

import ReplayIcon from "@material-ui/icons/Replay";
import CloseIcon from "@material-ui/icons/Close";
import StarRateIcon from "@material-ui/icons/StarRate";
import FavoriteIcon from "@material-ui/icons/Favorite";
import FlashOnIcon from "@material-ui/icons/FlashOn";

import "./SwipeButtons.css";
import { IconButton } from "@material-ui/core";

function SwipeButtons() {
  return (
    <div className="swipeButtons">
      <IconButton>
        <ReplayIcon fontsize="large" />
      </IconButton>

      <IconButton>
        <CloseIcon fontsize="large" />
      </IconButton>

      <IconButton>
        <StarRateIcon fontsize="large" />
      </IconButton>

      <IconButton>
        <FavoriteIcon fontsize="large" />
      </IconButton>

      <IconButton>
        <FlashOnIcon fontsize="large" />
      </IconButton>
    </div>
  );
}

export default SwipeButtons;
