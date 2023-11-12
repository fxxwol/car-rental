import React from "react";
import { TailSpin } from "react-loader-spinner";
import variables from "../../common/Variables";
import { LoaderWrapper } from "./Loader.styled";

function Loader() {
  return (
    <LoaderWrapper>
      <TailSpin
        height="80"
        width="80"
        color={`${variables.blueText}`}
        ariaLabel="tail-spin-loading"
        radius="1"
        visible={true}
      />
    </LoaderWrapper>
  );
}

export default Loader;
