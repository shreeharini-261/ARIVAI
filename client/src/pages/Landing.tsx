import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Heart, Calendar, Brain, Salad, Flower2, BookOpen } from "lucide-react";

export default function Landing() {
  const features = [
    {
      icon: Calendar,
      title: "Smart Cycle Tracking",
      description: "Track your menstrual cycle with intelligent phase detection and predictions"
    },
    {
      icon: Brain,
      title: "AI Wellness Companion",
      description: "Get personalized advice based on your symptoms and current cycle phase"
    },
    {
      icon: Salad,
      title: "Phase-Based Nutrition",
      description: "Discover healthy recipes tailored to your body's changing needs"
    },
    {
      icon: Flower2,
      title: "Mindfulness & Meditation",
      description: "Curated meditation videos for relaxation and stress relief"
    },
    {
      icon: BookOpen,
      title: "Educational Content",
      description: "Learn about reproductive health, PMS, pregnancy, and more"
    },
    {
      icon: Heart,
      title: "Symptom Tracking",
      description: "Log symptoms and moods to understand your patterns better"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b border-border">
        <div className="container mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
              <Heart className="w-5 h-5 text-primary-foreground" />
            </div>
            <span className="font-serif text-xl font-semibold text-foreground">ARIVAI</span>
          </div>
          <a href="/api/login" data-testid="button-login-header">
            <Button variant="default">
              Sign In
            </Button>
          </a>
        </div>
      </header>

      <main className="pt-16">
        <section className="relative py-24 lg:py-32 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-background" />
          <div className="container mx-auto px-6 relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
                Your AI-Powered{" "}
                <span className="text-primary">Menstrual Wellness</span>{" "}
                Companion
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed">
                ARIVAI goes beyond simple tracking. Experience personalized wellness guidance, 
                phase-based nutrition tips, mindfulness resources, and an AI companion that 
                understands your unique cycle.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="/api/login" data-testid="button-get-started">
                  <Button size="lg" className="text-lg px-8">
                    Get Started Free
                  </Button>
                </a>
                <Button size="lg" variant="outline" className="text-lg px-8" data-testid="button-learn-more">
                  Learn More
                </Button>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-card/30">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">
                Everything You Need for Menstrual Wellness
              </h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Comprehensive features designed to support you through every phase of your cycle
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {features.map((feature, index) => (
                <Card 
                  key={index} 
                  className="bg-card border-card-border hover-elevate transition-all duration-200"
                  data-testid={`card-feature-${index}`}
                >
                  <CardContent className="p-6">
                    <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center mb-4">
                      <feature.icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="font-semibold text-lg text-foreground mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-muted-foreground">
                      {feature.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div>
                  <h2 className="font-serif text-3xl font-bold text-foreground mb-6">
                    Understand Your Cycle Phases
                  </h2>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <div className="w-4 h-4 rounded-full bg-[#8B4B5B] mt-1" />
                      <div>
                        <h4 className="font-medium text-foreground">Menstrual Phase</h4>
                        <p className="text-sm text-muted-foreground">Days 1-5: Rest and gentle self-care</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-4 h-4 rounded-full bg-[#7A6A63] mt-1" />
                      <div>
                        <h4 className="font-medium text-foreground">Follicular Phase</h4>
                        <p className="text-sm text-muted-foreground">Days 6-12: Rising energy and creativity</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-4 h-4 rounded-full bg-[#6D4D4F] mt-1" />
                      <div>
                        <h4 className="font-medium text-foreground">Ovulation Phase</h4>
                        <p className="text-sm text-muted-foreground">Days 13-15: Peak energy and fertility</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-4 h-4 rounded-full bg-[#5A4A44] mt-1" />
                      <div>
                        <h4 className="font-medium text-foreground">Luteal Phase</h4>
                        <p className="text-sm text-muted-foreground">Days 16-28: Winding down, self-reflection</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="relative">
                  <div className="aspect-square rounded-full border-8 border-card bg-gradient-to-br from-[#8B4B5B] via-[#6D4D4F] to-[#7A6A63] opacity-80" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <Calendar className="w-16 h-16 text-foreground mx-auto mb-2" />
                      <span className="text-foreground font-medium">Your Cycle</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-primary/10">
          <div className="container mx-auto px-6 text-center">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-6">
              Start Your Wellness Journey Today
            </h2>
            <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
              Join thousands of women who trust ARIVAI for personalized menstrual health guidance
            </p>
            <a href="/api/login" data-testid="button-signup-cta">
              <Button size="lg" className="text-lg px-8">
                Create Free Account
              </Button>
            </a>
          </div>
        </section>
      </main>

      <footer className="py-8 border-t border-border">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <Heart className="w-5 h-5 text-primary" />
              <span className="font-serif text-lg text-foreground">ARIVAI</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Your trusted menstrual wellness companion
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
