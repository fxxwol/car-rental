import React from "react";
import {
  FavHeroSection,
  FavImgWrap,
  FavSubs,
  FavTextContainer,
  FavTile,
} from "./FavHero.styled";
function FavHero() {
  return (
    <FavHeroSection>
      <FavImgWrap />
      <div>
        <FavTextContainer>
          <FavTile>Explore Your Favorites</FavTile>
          <FavSubs>
            Imagine a garage filled with your dream rides. That's exactly what
            you've got here! Take a leisurely scroll through your favorite cars,
            each one handpicked by you.
          </FavSubs>
        </FavTextContainer>
      </div>
    </FavHeroSection>
  );
}

export default FavHero;
