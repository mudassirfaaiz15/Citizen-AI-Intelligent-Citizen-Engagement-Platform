
import { MessageSquare, Star, Book, Contact } from "lucide-react";

export const Features = () => {
  const features = [
    {
      icon: MessageSquare,
      title: "24/7 Availability",
      description: "Get help anytime, anywhere. Our AI assistant never sleeps! 🌙",
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: Star,
      title: "Instant Answers",
      description: "Quick, accurate responses to your government service questions ⚡",
      color: "from-indigo-500 to-indigo-600"
    },
    {
      icon: Book,
      title: "Comprehensive Knowledge",
      description: "Access to all government forms, procedures, and requirements 📚",
      color: "from-purple-500 to-purple-600"
    },
    {
      icon: Contact,
      title: "Human Handoff",
      description: "Seamlessly connect with human agents when needed 🤝",
      color: "from-teal-500 to-teal-600"
    }
  ];

  return (
    <section className="py-20 bg-white" id="features">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Why Choose <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Citizen AI</span>? 🚀
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Experience the future of government services with our intelligent assistant
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 animate-fade-in">
              <div className={`w-16 h-16 bg-gradient-to-r ${feature.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <feature.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
