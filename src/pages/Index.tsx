import katanaHero from "@/assets/katana-hero.jpg";
import { Linkedin, Mail } from "lucide-react";

const Index = () => {
  return (
    <main className="h-screen bg-background text-foreground overflow-hidden flex flex-col">
      {/* Navbar */}
      <nav className="relative z-20 w-full py-4 px-6 backdrop-blur-sm bg-background/50 flex-shrink-0">
        <div className="flex justify-center">
          <img 
            src="/KatanaAiLogo.png" 
            alt="Katana AI" 
            className="h-8 md:h-10 w-auto object-contain"
          />
        </div>
      </nav>

      {/* Background Effects */}
      <div className="fixed inset-0 bg-[radial-gradient(ellipse_at_top,_var(--gradient-cyber))] opacity-30"></div>
      <div className="fixed inset-0 bg-[linear-gradient(45deg,transparent_48%,hsl(var(--primary)/0.05)_49%,hsl(var(--primary)/0.05)_51%,transparent_52%)] bg-[length:20px_20px]"></div>
      
      {/* Hero Section */}
      <section className="relative flex flex-col items-center justify-center flex-1 px-6">
        {/* Hero Image */}
        <div className="absolute inset-0 z-0">
          <img 
            src={katanaHero} 
            alt="KATANA AI Hero" 
            className="w-full h-full object-cover opacity-100"
          />
          <div className="absolute inset-0 bg-background/80"></div>
        </div>

        {/* Coming Soon Heading */}
        <div className="relative z-10 text-center">
          <h1 className="text-6xl md:text-8xl japanese-heading mb-8 animate-slide-up">
            <span className="letter-white">C</span>
            <span className="letter-white">o</span>
            <span className="letter-white">m</span>
            <span className="letter-white">i</span>
            <span className="letter-white">n</span>
            <span className="letter-white">g</span>
            <span className="letter-white"> </span>
            <span className="letter-white">S</span>
            <span className="letter-white">o</span>
            <span className="letter-red">o</span>
            <span className="letter-red">n</span>
          </h1>
          
          {/* Connect Section */}
          <div className="animate-slide-up" style={{ animationDelay: "0.3s" }}>
            <p className="text-lg md:text-xl text-white mb-6 japanese-subheading">Connect at</p>
            <div className="flex justify-center space-x-8">
              {/* LinkedIn Icon */}
              <a 
                href="https://www.linkedin.com/company/katana-ai/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 text-white hover:text-white hover:scale-110 transition-all duration-300 inline-block"
                aria-label="Connect on LinkedIn"
              >
                <Linkedin className="h-8 w-8" />
              </a>
              
              {/* Email Icon */}
              <a 
                href="mailto:workatkatana@gmail.com"
                className="p-3 text-red-500 hover:text-red-400 hover:scale-110 transition-all duration-300 inline-block"
                aria-label="Send Email"
              >
                <Mail className="h-8 w-8" />
              </a>
            </div>
          </div>
        </div>

      </section>


    </main>
  );
};

export default Index;