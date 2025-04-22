
import { useRef, useState } from "react";
import { Bell, Settings, Upload, Mic, Send } from "lucide-react";

const ChatInterface = () => {
  const [prompt, setPrompt] = useState("");
  const fileInputRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted prompt:", prompt);
    setPrompt("");
  };

  const handleFileAttachment = (e) => {
    const file = e.target.files[0];
    if (file) {
      console.log("File attached:", file.name);
    }
  };

  return (
    <div className="w-full">
      <div className="min-h-screen bg-gradient-to-br from-black to-blue-900 flex items-center justify-center p-4">
        {/* Main container */}
        <div className="w-8/12 flex flex-col">
          {/* Header */}
          <div className="bg-[#1a1a1a] rounded-t-lg p-3 flex justify-end space-x-2">
            <button className="bg-[#2a2a2a] rounded-full p-2">
              <Bell size={20} className="text-white" />
            </button>
            <button className="bg-[#2a2a2a] rounded-full p-2 border-2 border-blue-500">
              <Settings size={20} className="text-white" />
            </button>
          </div>

          {/* Chat area */}
          <div className="bg-[#222222] rounded-b-lg p-8 flex flex-col items-center">
            {/* Logo */}
            <div className="mb-6">
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-7qp6McBu5gLppC54gkLlR8SuHMgznE.png"
                alt="AdFusion Labs Logo"
                className="h-16 w-auto"
                style={{
                  clipPath: "inset(190px 305px 530px 305px)",
                  transform: "scale(3)",
                  marginTop: "20px",
                  marginBottom: "20px",
                }}
              />
            </div>

            {/* Heading */}
            <h1 className="text-white text-3xl font-light text-center mb-4">
              How can we <span className="text-blue-400">assist</span> you
              today?
            </h1>

            {/* Subheading */}
            <p className="text-gray-400 text-center max-w-lg mb-8">
              Get expert guidance powered by AI agents specializing in Sales,
              Marketing, and Negotiation. Choose the agent that suits your needs
              and start your conversation with ease.
            </p>

            {/* Upload area */}
            <input
              type="file"
              ref={fileInputRef}
              onChange={handleFileAttachment}
              className="hidden"
            />

            <div onClick={()=>fileInputRef.current?.click()} className="border cursor-pointer border-blue-500 rounded-lg p-4 mb-8 w-48 text-center">
              <div className="flex justify-center mb-2">
                <Upload className="text-blue-400" size={24} />
              </div>
              <p className="text-white text-sm font-medium mb-1">
                Upload Image
              </p>
              <p className="text-gray-500 text-xs">
                Detailed explanation of your image.
              </p>
            </div>

            {/* Input area */}
            <form onSubmit={handleSubmit} className="w-full">
              <div className="relative">
                <input
                  type="text"
                  value={prompt}
                  onChange={(e) => setPrompt(e.target.value)}
                  placeholder="Type your prompt here"
                  className="w-full bg-white rounded-full py-3 pl-4 pr-24 text-gray-800 focus:outline-none"
                />
                <div className="absolute right-1 top-1 flex space-x-1">
                  <button
                    type="button"
                    className="p-2 text-gray-500 hover:text-gray-700"
                  >
                    <Mic size={20} />
                  </button>
                  <button
                    type="submit"
                    className="bg-blue-600 text-white p-2 rounded-full hover:bg-blue-700"
                  >
                    <Send size={20} />
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatInterface;
