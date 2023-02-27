import { Avatar } from "@mui/material";

const ChatMessage = ({ name, message }) => {
  return (
    <div className="flex align-middle">
      <div className="">
        <Avatar style={{ height: "25px", width: "25px" }} />
      </div>
      <div className="flex gap-1 ml-2">
        <span className="font-bold text-gray-400"> {name} </span>
        <span> {message} </span>
      </div>
    </div>
  );
};

export default ChatMessage;
