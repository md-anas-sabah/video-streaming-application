import ButtonList from "./ButtonList";
import VideoContainer from "./VideoContainer";

const MainContainer = () => {
  return (
    <div className="flex flex-col gap-3  h-[53.7rem] overflow-y-scroll">
      <ButtonList />
      <VideoContainer />
    </div>
  );
};

export default MainContainer;
