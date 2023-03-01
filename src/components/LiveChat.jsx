import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../redux/ChatSlice";
import { generateRandomString, generateRandomName } from "../utils/helper";
import ChatMessage from "./ChatMessage";
import SendIcon from "@mui/icons-material/Send";

const LiveChat = () => {
  const dispatch = useDispatch();
  const chatMessages = useSelector((store) => store.chat.messages);
  const [liveMessage, setLiveMessage] = useState("");
  const sendMessage = (e) => {
    e.preventDefault();
    dispatch(
      addMessage({
        name: "Md Anas Sabah",
        message: liveMessage,
      })
    );
    setLiveMessage("");
  };

  useEffect(() => {
    const i = setInterval(() => {
      // API POLLING
      console.log("API Polling");
      dispatch(
        addMessage({
          name: generateRandomName(),
          message: generateRandomString(25) + "🚀",
        })
      );
    }, 1500);

    return () => clearInterval(i);
  }, []);

  return (
    <>
      <div className="h-[400px] border-gray-200 border flex flex-col-reverse gap-2 ml-10 p-2 w-96 rounded-tl-lg rounded-tr-lg drop-shadow-xl shadow-xl overflow-y-scroll ">
        {chatMessages.map((c, index) => (
          <ChatMessage key={index} name={c.name} message={c.message} />
        ))}
      </div>
      <form
        onSubmit={sendMessage}
        className="flex flex-row rounded-bl-lg rounded-br-lg  ml-10 p-2 bg-white w-96 border-gray-200 border drop-shadow-xl shadow-xl items-center "
      >
        <input
          type="text"
          className="w-full text-md bg-white focus:outline-none p-2"
          value={liveMessage}
          onChange={(e) => setLiveMessage(e.target.value)}
        />
        <SendIcon />
      </form>
    </>
  );
};

export default LiveChat;
