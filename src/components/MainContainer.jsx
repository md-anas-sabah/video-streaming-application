import ButtonList from "./ButtonList";
import VideoContainer from "./VideoContainer";

const MainContainer = () => {
  return (
    <div className="flex flex-col flex-1 gap-3 overflow-y-scroll">
      <ButtonList />
      <VideoContainer />
    </div>
  );
};

export default MainContainer;
