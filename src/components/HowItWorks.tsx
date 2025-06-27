
import { MessageSquare, Star, Book } from "lucide-react";

export const HowItWorks = () => {
  const steps = [
    {
      step: 1,
      icon: MessageSquare,
      title: "Start a Conversation",
      description: "Simply type your question about any government service 💬",
      color: "from-blue-500 to-blue-600"
    },
    {
      step: 2,
      icon: Star,
      title: "Get Instant Help",
      description: "Our AI analyzes your question and provides personalized guidance ⚡",
      color: "from-indigo-500 to-indigo-600"
    },
    {
      step: 3,
      icon: Book,
      title: "Complete Your Task",
      description: "Follow step-by-step instructions or get connected to the right department ✅",
      color: "from-purple-500 to-purple-600"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50" id="how-it-works">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            How It <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Works</span> 🛠️
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Getting help with government services has never been easier
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 relative">
          {/* Connection lines */}
          <div className="hidden md:block absolute top-24 left-1/3 right-1/3 h-1 bg-gradient-to-r from-blue-200 to-indigo-200 rounded-full"></div>
          
          {steps.map((step, index) => (
            <div key={index} className="text-center group animate-fade-in">
              <div className="relative mb-8">
                <div className={`w-20 h-20 bg-gradient-to-r ${step.color} rounded-full flex items-center justify-center mx-auto shadow-lg group-hover:shadow-2xl transition-all duration-300 transform group-hover:scale-110`}>
                  <step.icon className="w-10 h-10 text-white" />
                </div>
                <div className={`absolute -top-2 -right-2 w-8 h-8 bg-gradient-to-r ${step.color} rounded-full flex items-center justify-center text-white font-bold text-sm shadow-lg`}>
                  {step.step}
                </div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">{step.title}</h3>
              <p className="text-gray-600 leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-xl font-semibold text-lg hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
            Try It Now 🚀
          </button>
        </div>
      </div>
    </section>
  );
};
