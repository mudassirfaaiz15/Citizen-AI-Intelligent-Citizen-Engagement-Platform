
import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { Features } from "@/components/Features";
import { HowItWorks } from "@/components/HowItWorks";
import { About } from "@/components/About";
import { Contact } from "@/components/Contact";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <Features />
      <HowItWorks />
      <About />
      <Contact />
      
      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <div className="mb-8">
            <h3 className="text-2xl font-bold mb-4">
              Ready to experience better government services? 🚀
            </h3>
            <button className="px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-xl font-semibold text-lg hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
              Start Using Citizen AI
            </button>
          </div>
          
          <div className="border-t border-gray-700 pt-8">
            <p className="text-gray-400">
              © 2024 Citizen AI. Making government services accessible for everyone. 🏛️
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
