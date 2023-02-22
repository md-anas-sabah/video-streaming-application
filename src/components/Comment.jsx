import { Avatar } from "@mui/material";

const Comment = ({ data }) => {
  const { name, text } = data;
  return (
    <div className="flex mt-4 p-3 gap-3 bg-gray-100 rounded-lg">
      <div className="">
        <Avatar style={{ height: "35px", width: "35px" }} />
      </div>
      <div>
        <p className="font-bold"> {name} </p>
        <p>{text}</p>
      </div>
    </div>
  );
};

export default Comment;
