import MenuIcon from "@mui/icons-material/Menu";
import { Avatar } from "@mui/material";
import { BellIcon, MagnifyingGlassIcon } from "@heroicons/react/24/solid";
import { useDispatch } from "react-redux";
import { toggleMenu } from "../redux/appSlice";

const Head = () => {
  const dispatch = useDispatch();
  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };

  return (
    <div className="grid grid-flow-col h-14 shadow items-center sticky top-0 z-50 bg-white">
      <div className="flex col-span-1 ml-6 gap-4">
        <MenuIcon
          className="cursor-pointer"
          fontSize="large"
          onClick={() => toggleMenuHandler()}
        />
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/YouTube_Logo_2017.svg/2560px-YouTube_Logo_2017.svg.png"
          alt="logo"
          className="h-8"
        />
      </div>
      <div className="flex items-center col-span-10 justify-center">
        <input
          type="text"
          className="w-1/2 h-10 border border-gray-400 rounded-tl-full rounded-bl-full p-3 focus:outline-none"
        />
        <MagnifyingGlassIcon className="h-10 w-10 px-2 border border-gray-400 bg-gray-300 rounded-tr-full rounded-br-full" />
      </div>
      <div className="flex col-span-1 items-center gap-3">
        <BellIcon className="h-10 w-10" />
        <Avatar />
      </div>
    </div>
  );
};

export default Head;
