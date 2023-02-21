import MenuIcon from "@mui/icons-material/Menu";
import { YOUTUBE_SEARCH_API } from "../utils/YoutubeVideoApi";
import { Avatar } from "@mui/material";
import { BellIcon, MagnifyingGlassIcon } from "@heroicons/react/24/solid";
import { useDispatch } from "react-redux";
import { toggleMenu } from "../redux/appSlice";
import { useEffect, useState } from "react";

const Head = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestion, setSuggestion] = useState([]); 
  const [showSuggestion, setShowSuggestion] = useState(false);

  const dispatch = useDispatch();
  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };

  useEffect(() => {
    const timer = setTimeout(() => getSearchSuggestion(), 200);
    return () => {
      clearTimeout(timer);
    };
  }, [searchQuery]);

  const getSearchSuggestion = async () => {
    // console.log(searchQuery);
    const data = await fetch(YOUTUBE_SEARCH_API + searchQuery);
    const json = await data.json();
    console.log(json[1]);
    setSuggestion(json[1]);
  };

  return (
    <div className="grid grid-flow-col h-14 shadow sticky py-3 top-0 z-50 bg-white">
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
      <div className="flex flex-col col-span-10 ">
        <div className="flex col-span-10 w-full ">
          <input
            type="text"
            className="w-3/5 h-10 border border-gray-400 rounded-tl-full rounded-bl-full px-5 focus:outline-none"
            value={searchQuery}
            onChange={(e) => {
              setSearchQuery(e.target.value);
            }}
            onFocus={() => setShowSuggestion(true)}
            onBlur={() => setShowSuggestion(false)}
          />
          <MagnifyingGlassIcon className="h-10 w-10 px-2 border border-gray-400 bg-gray-300 rounded-tr-full rounded-br-full" />
        </div>
        {showSuggestion && (
          <div className=" w-3/5  bg-white rounded-xl border border-gray-100 drop-shadow-2xl">
            <ul className="flex flex-col gap-2 ">
              {suggestion.map((suggest) => {
                return (
                  <li
                    key={suggest}
                    className="hover:bg-gray-200 py-1 px-3 rounded-sm flex items-center"
                  >
                    <MagnifyingGlassIcon className="h-9 w-9 px-2" />
                    <span className="font-bold text-lg">{suggest}</span>
                  </li>
                );
              })}
            </ul>
          </div>
        )}
      </div>
      <div className="flex col-span-1 gap-3">
        <BellIcon className="h-10 w-10" />
        <Avatar style={{ height: "30px", width: "30px" }} />
      </div>
    </div>
  );
};

export default Head;
