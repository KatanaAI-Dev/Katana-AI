import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { Mail, ArrowRight } from "lucide-react";

const EmailSignup = () => {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      toast({
        title: "Successfully joined the waitlist!",
        description: "We'll notify you when KATANA AI launches.",
      });
      setEmail("");
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <div className="w-full max-w-md mx-auto animate-slide-up" style={{ animationDelay: "0.4s" }}>
      <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
        <div className="relative flex-1">
          <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="pl-10 bg-card/50 border-border/50 focus:border-primary focus:ring-1 focus:ring-primary transition-all duration-300"
            required
          />
        </div>
        <Button
          type="submit"
          disabled={isSubmitting}
          className="group bg-primary hover:bg-primary/90 text-primary-foreground font-medium transition-all duration-300 animate-glow-pulse"
        >
          {isSubmitting ? (
            "Joining..."
          ) : (
            <>
              Join Waitlist
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
            </>
          )}
        </Button>
      </form>
      <p className="text-sm text-muted-foreground mt-3 text-center">
        Join 10,000+ developers waiting for the future of AI
      </p>
    </div>
  );
};

export default EmailSignup;