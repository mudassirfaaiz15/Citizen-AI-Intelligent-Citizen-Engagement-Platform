
import { Star, Book, MessageSquare } from "lucide-react";

export const About = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-50" id="about">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              About <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Citizen AI</span> 🏛️
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              Citizen AI is a revolutionary public service chatbot designed to make government services more accessible, efficient, and user-friendly for everyone.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed mb-8">
              Our mission is to bridge the gap between citizens and government services through intelligent automation, providing 24/7 support and guidance for all your public service needs. 🤖✨
            </p>
            
            <div className="space-y-4">
              {[
                { icon: Star, text: "Trusted by thousands of citizens" },
                { icon: Book, text: "Comprehensive government knowledge base" },
                { icon: MessageSquare, text: "Natural language processing" }
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full flex items-center justify-center">
                    <item.icon className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-gray-700 font-medium">{item.text}</span>
                </div>
              ))}
            </div>
          </div>
          
          <div className="animate-fade-in delay-300">
            <div className="bg-white rounded-2xl p-8 shadow-2xl border border-gray-100">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Project Stats 📊</h3>
              <div className="grid grid-cols-2 gap-6">
                {[
                  { number: "50K+", label: "Citizens Helped" },
                  { number: "95%", label: "Success Rate" },
                  { number: "24/7", label: "Availability" },
                  { number: "100+", label: "Services Covered" }
                ].map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent mb-2">
                      {stat.number}
                    </div>
                    <div className="text-gray-600 text-sm">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
