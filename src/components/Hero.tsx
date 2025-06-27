
import { MessageSquare, ArrowDown } from "lucide-react";
import { ChatWindow } from "./ChatWindow";

export const Hero = () => {
  return (
    <section className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50 flex items-center justify-center px-4 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-blue-200 rounded-full opacity-20 animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-24 h-24 bg-indigo-200 rounded-full opacity-30 animate-pulse delay-1000"></div>
      
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Left content */}
        <div className="text-center md:text-left space-y-8 animate-fade-in">
          <div className="space-y-4">
            <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">
              🤖 Government AI Assistant
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight">
              <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                Citizen AI
              </span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Your Smart Assistant for Government Services 🏛️
            </p>
            <p className="text-lg text-gray-500 max-w-md">
              Get instant help with forms, permits, benefits, and more. Available 24/7 to serve you better.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <button className="group px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-xl font-semibold text-lg hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
              <div className="flex items-center gap-2">
                <MessageSquare className="w-5 h-5" />
                Start Chat Now
              </div>
            </button>
            <button className="px-8 py-4 border-2 border-gray-300 text-gray-700 rounded-xl font-semibold text-lg hover:border-blue-500 hover:text-blue-600 transition-all duration-300 hover:bg-blue-50">
              Learn More
            </button>
          </div>
        </div>
        
        {/* Right content - Chat Window */}
        <div className="flex justify-center animate-fade-in delay-300">
          <ChatWindow />
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ArrowDown className="w-6 h-6 text-gray-400" />
      </div>
    </section>
  );
};
