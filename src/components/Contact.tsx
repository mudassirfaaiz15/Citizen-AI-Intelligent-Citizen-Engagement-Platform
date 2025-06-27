
import { MessageSquare, Contact as ContactIcon, Book } from "lucide-react";

export const Contact = () => {
  return (
    <section className="py-20 bg-white" id="contact">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Get In <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Touch</span> 📞
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Have questions about Citizen AI? We're here to help!
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {[
            {
              icon: MessageSquare,
              title: "Live Chat",
              description: "Chat with our support team",
              action: "Start Chat",
              color: "from-blue-500 to-blue-600"
            },
            {
              icon: ContactIcon,
              title: "Email Support",
              description: "support@citizenai.gov",
              action: "Send Email",
              color: "from-indigo-500 to-indigo-600"
            },
            {
              icon: Book,
              title: "Help Center",
              description: "Browse our knowledge base",
              action: "Visit Help Center",
              color: "from-purple-500 to-purple-600"
            }
          ].map((item, index) => (
            <div key={index} className="text-center p-8 bg-gray-50 rounded-2xl hover:bg-white hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 animate-fade-in">
              <div className={`w-16 h-16 bg-gradient-to-r ${item.color} rounded-2xl flex items-center justify-center mx-auto mb-6`}>
                <item.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
              <p className="text-gray-600 mb-4">{item.description}</p>
              <button className={`px-6 py-2 bg-gradient-to-r ${item.color} text-white rounded-lg font-medium hover:shadow-lg transition-all duration-300 transform hover:scale-105`}>
                {item.action}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
