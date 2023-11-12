import React, { useEffect, useState } from "react";
import { ScrollArrow, TopBtn } from "./ScrollBtn.styled";

function ScrollBtn() {
  const [showTopBtn, setShowTopBtn] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 400) {
        setShowTopBtn(true);
      } else {
        setShowTopBtn(false);
      }
    });
  }, []);

  const goToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      {showTopBtn && (
        <TopBtn onClick={goToTop}>
          <ScrollArrow />
        </TopBtn>
      )}
    </>
  );
}

export default ScrollBtn;
