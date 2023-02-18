const VideoCard = ({ info }) => {
  //   console.log(info);
  const { snippet, statistics } = info;
  const { channelTitle, title, thumbnails, publishedAt } = snippet;

  return (
    <div className="flex flex-col w-96  cursor-pointer">
      <div className="rounded-lg aspect-video overflow-hidden">
        <img
          src={thumbnails.medium.url}
          alt="thumbnails"
          className=" object-cover"
        />
      </div>
      <ul className="flex flex-col justify-center px-4 py-2">
        <li className="text-lg font-bold truncate"> {title}</li>
        <li className="font-semibold text-gray-500 truncate">
          {" "}
          {channelTitle}{" "}
        </li>
        <li className="-mt-1 text-gray-500">
          {statistics.viewCount} • {publishedAt.slice(0, 10)}
        </li>
      </ul>
    </div>
  );
};

export default VideoCard;
