import WhatshotIcon from "@mui/icons-material/Whatshot";
import MusicNoteIcon from "@mui/icons-material/MusicNote";
import MovieIcon from "@mui/icons-material/Movie";
import LiveTvIcon from "@mui/icons-material/LiveTv";
import SportsEsportsIcon from "@mui/icons-material/SportsEsports";
import FeedIcon from "@mui/icons-material/Feed";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import TipsAndUpdatesIcon from "@mui/icons-material/TipsAndUpdates";
import DiamondIcon from "@mui/icons-material/Diamond";
import { useSelector } from "react-redux";

const Sidebar = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);

  if (!isMenuOpen)
    return (
      <div className="p-6 shadow w-24 h-[53.7rem]">
        <ul className="flex flex-col gap-4 mt-6">
          <li className="">
            <WhatshotIcon fontSize="large" />
          </li>
          <li className="">
            <MusicNoteIcon fontSize="large" />
          </li>
          <li className="">
            <MovieIcon fontSize="large" />
          </li>
          <li className="">
            <LiveTvIcon fontSize="large" />
          </li>
          <li className="">
            <SportsEsportsIcon fontSize="large" />
          </li>
          <li className="">
            <FeedIcon fontSize="large" />
          </li>
          <li className="">
            <EmojiEventsIcon fontSize="large" />
          </li>
          <li className="">
            <TipsAndUpdatesIcon fontSize="large" />
          </li>
          <li className="">
            <DiamondIcon fontSize="large" />
          </li>
        </ul>
      </div>
    ); // Early Return pattern

  return (
    <div className="p-6 shadow w-60 ">
      <h1 className="font-bold text-2xl font-roboto">Explore</h1>
      <ul className="flex flex-col gap-4 mt-6">
        <li className="flex gap-2 font-roboto font-bold text-xl">
          <WhatshotIcon fontSize="large" />
          Trending
        </li>
        <li className="flex gap-2 font-roboto font-bold text-lg">
          <MusicNoteIcon fontSize="large" />
          Music
        </li>
        <li className="flex gap-2 font-roboto font-bold text-lg">
          <MovieIcon fontSize="large" />
          Movies
        </li>
        <li className="flex gap-2 font-roboto font-bold text-lg">
          <LiveTvIcon fontSize="large" />
          Live
        </li>
        <li className="flex gap-2 font-roboto font-bold text-lg">
          <SportsEsportsIcon fontSize="large" />
          Gaming
        </li>
        <li className="flex gap-2 font-roboto font-bold text-lg">
          <FeedIcon fontSize="large" />
          News
        </li>
        <li className="flex gap-2 font-roboto font-bold text-lg">
          <EmojiEventsIcon fontSize="large" />
          Sports
        </li>
        <li className="flex gap-2 font-roboto font-bold text-lg">
          <TipsAndUpdatesIcon fontSize="large" />
          Learning
        </li>
        <li className="flex gap-2 font-roboto font-bold text-lg">
          <DiamondIcon fontSize="large" />
          Fashion & Beauty
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
