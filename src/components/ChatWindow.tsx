
import { MessageSquare, Send, Star } from "lucide-react";
import { useState, useEffect } from "react";

export const ChatWindow = () => {
  const [currentMessage, setCurrentMessage] = useState(0);
  
  const demoMessages = [
    { type: 'user', text: 'How do I apply for a business license?' },
    { type: 'bot', text: 'I can help you with that! 📋 You\'ll need to visit the Business Licensing Department. Let me guide you through the requirements...' },
    { type: 'user', text: 'What documents do I need?' },
    { type: 'bot', text: 'For a business license, you\'ll typically need: ✅ Completed application form ✅ Proof of identity ✅ Business plan outline ✅ Zoning compliance certificate' }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentMessage((prev) => (prev + 1) % demoMessages.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-white rounded-2xl shadow-2xl p-6 w-full max-w-md transform hover:scale-105 transition-all duration-300 border border-gray-100">
      {/* Header */}
      <div className="flex items-center gap-3 mb-6 pb-4 border-b border-gray-100">
        <div className="bg-gradient-to-r from-blue-500 to-indigo-500 p-2 rounded-xl">
          <MessageSquare className="w-6 h-6 text-white" />
        </div>
        <div>
          <h3 className="font-semibold text-gray-900">Citizen AI</h3>
          <div className="flex items-center gap-1 text-sm text-green-500">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            Online
          </div>
        </div>
        <div className="ml-auto flex gap-1">
          {[1,2,3,4,5].map((i) => (
            <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
          ))}
        </div>
      </div>

      {/* Messages */}
      <div className="space-y-4 h-64 overflow-y-auto mb-4">
        {demoMessages.slice(0, currentMessage + 1).map((message, index) => (
          <div key={index} className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'} animate-fade-in`}>
            <div className={`max-w-[80%] p-3 rounded-2xl ${
              message.type === 'user' 
                ? 'bg-gradient-to-r from-blue-500 to-indigo-500 text-white' 
                : 'bg-gray-100 text-gray-800'
            }`}>
              <p className="text-sm">{message.text}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Input */}
      <div className="flex gap-2">
        <input 
          type="text" 
          placeholder="Ask me anything about government services..."
          className="flex-1 p-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          disabled
        />
        <button className="bg-gradient-to-r from-blue-500 to-indigo-500 text-white p-3 rounded-xl hover:from-blue-600 hover:to-indigo-600 transition-all duration-300 transform hover:scale-105">
          <Send className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
};
