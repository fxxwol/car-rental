import { Message, NoCarsFoundContainer } from "./NoCars.styled";

const NoCarsFound = ({ message }) => {
  return (
    <NoCarsFoundContainer>
      <Message> {message || "No cars were found :("}</Message>
    </NoCarsFoundContainer>
  );
};

export default NoCarsFound;
