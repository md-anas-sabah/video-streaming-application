import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { closeMenu } from "../redux/appSlice";

const WatchVideo = () => {
  const dispatch = useDispatch();

  const  id  = useParams();
  console.log(id);

  useEffect(() => {
    dispatch(closeMenu());
  }, []);

  return <div className=""></div>;
};

export default WatchVideo;
