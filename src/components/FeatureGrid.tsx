import { Brain, Zap, Shield, Rocket } from "lucide-react";

const features = [
  {
    icon: Brain,
    title: "Neural Intelligence",
    description: "Advanced neural networks that learn and adapt to your unique needs"
  },
  {
    icon: Zap,
    title: "Lightning Fast",
    description: "Process complex tasks in milliseconds with our optimized AI engine"
  },
  {
    icon: Shield,
    title: "Enterprise Security",
    description: "Military-grade encryption keeps your data secure and private"
  },
  {
    icon: Rocket,
    title: "Scale Infinitely",
    description: "From startup to enterprise, KATANA AI grows with your business"
  }
];

const FeatureGrid = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto animate-slide-up" style={{ animationDelay: "0.5s" }}>
      {features.map((feature, index) => (
        <div
          key={feature.title}
          className="group p-6 bg-card/20 rounded-xl border border-border/30 backdrop-blur-sm hover:bg-card/40 transition-all duration-500 hover:scale-105"
          style={{ animationDelay: `${0.6 + index * 0.1}s` }}
        >
          <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/30 transition-colors duration-300">
            <feature.icon className="h-6 w-6 text-primary" />
          </div>
          <h3 className="text-lg font-semibold text-foreground mb-2 font-inter">{feature.title}</h3>
          <p className="text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
        </div>
      ))}
    </div>
  );
};

export default FeatureGrid;