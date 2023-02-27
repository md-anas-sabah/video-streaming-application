import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { closeMenu } from "../redux/appSlice";
import CommentContainer from "./CommentContainer";
import LiveChat from "./LiveChat";

const WatchVideo = () => {
  const dispatch = useDispatch();

  const [searchParams] = useSearchParams();
  console.log(searchParams.get("v"));

  useEffect(() => {
    dispatch(closeMenu());
  }, []);

  return (
    <div className="h-[53.7rem] w-full overflow-y-scroll flex flex-col ">
      <div className="px-10 py-6 flex w-full">
        <div className="">
          <iframe
            width="1000"
            height="500"
            src={
              "https://www.youtube.com/embed/" +
              searchParams.get("v") +
              "?autoplay=1"
            }
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>
        <div className="w-full">
          <LiveChat />
        </div>
      </div>

      <CommentContainer />
    </div>
  );
};

export default WatchVideo;
