import { useEffect } from "react";
import ChatMessage from "./ChatMessage";

const LiveChat = () => {
  useEffect(() => {
    const i = setInterval(() => {
      // API POLLING
      console.log("API Polling");
    }, 2000);

    return () => clearInterval(i);
  }, []);

  return (
    <div className="h-[500px] border-gray-200 border flex flex-col gap-2 ml-10 p-2 w-96 rounded-lg drop-shadow-xl shadow-xl overflow-y-scroll  ">
      <ChatMessage name="Zoro" message="King of hell" />
      <ChatMessage name="Zoro" message="King of hell" />
      <ChatMessage name="Zoro" message="King of hell" />
      <ChatMessage name="Zoro" message="King of hell" />
      <ChatMessage name="Zoro" message="King of hell" />
      <ChatMessage
        name="Zoro"
        message="King of hell and right-wing of the pirate king🚀"
      />
      <ChatMessage name="Zoro" message="King of hell" />
      <ChatMessage name="Zoro" message="King of hell" />
      <ChatMessage name="Zoro" message="King of hell" />
      <ChatMessage name="Zoro" message="King of hell" />
      <ChatMessage name="Zoro" message="King of hell" />
      <ChatMessage name="Zoro" message="King of hell" />
      <ChatMessage name="Zoro" message="King of hell" />
      <ChatMessage name="Zoro" message="King of hell" />
      <ChatMessage name="Zoro" message="King of hell" />
      <ChatMessage name="Zoro" message="King of hell" />
      <ChatMessage name="Zoro" message="King of hell" />
      <ChatMessage name="Zoro" message="King of hell" />
      <ChatMessage name="Zoro" message="King of hell" />
    </div>
  );
};

export default LiveChat;
