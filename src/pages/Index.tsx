import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { BookOpen, Calendar1 as Calendar, Target, TrendingUp, Users, Star, Menu, X, ArrowRight, Check as CheckCircle, Clock, Circle as BarChart3 } from 'lucide-react';

export default function Index() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  const features = [
  {
    icon: <BookOpen className="h-8 w-8 text-primary" />,
    title: "Smart Study Plans",
    description: "AI-powered study plans tailored to your learning style and schedule"
  },
  {
    icon: <Calendar className="h-8 w-8 text-primary" />,
    title: "Schedule Management",
    description: "Organize your study sessions with intelligent calendar integration"
  },
  {
    icon: <Target className="h-8 w-8 text-primary" />,
    title: "Goal Tracking",
    description: "Set and achieve academic goals with progress monitoring"
  },
  {
    icon: <TrendingUp className="h-8 w-8 text-primary" />,
    title: "Performance Analytics",
    description: "Track your learning progress with detailed insights and reports"
  }];


  const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Computer Science Student",
    content: "StudyPlan helped me organize my coursework and improved my grades significantly!",
    rating: 5
  },
  {
    name: "Mike Chen",
    role: "Medical Student",
    content: "The AI-powered study plans are incredible. It adapts to my learning pace perfectly.",
    rating: 5
  },
  {
    name: "Emma Davis",
    role: "Engineering Student",
    content: "Best study app I've ever used. The progress tracking keeps me motivated.",
    rating: 5
  }];


  const stats = [
  { number: "10K+", label: "Active Students" },
  { number: "95%", label: "Success Rate" },
  { number: "50+", label: "Universities" },
  { number: "4.9", label: "App Rating" }];


  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-background/80 backdrop-blur-md border-b border-border z-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <BookOpen className="h-8 w-8 text-primary" />
              <span className="text-xl font-heading font-bold text-foreground">StudyPlan</span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <a
                href="#features"
                onClick={(e) => {e.preventDefault();scrollToSection('features');}}
                className="text-muted-foreground hover:text-primary transition-colors cursor-pointer">

                Features
              </a>
              <a
                href="#testimonials"
                onClick={(e) => {e.preventDefault();scrollToSection('testimonials');}}
                className="text-muted-foreground hover:text-primary transition-colors cursor-pointer">

                Testimonials
              </a>
              <a
                href="#contact"
                onClick={(e) => {e.preventDefault();scrollToSection('contact');}}
                className="text-muted-foreground hover:text-primary transition-colors cursor-pointer">

                Contact
              </a>
              <Link to="/dashboard">
                <Button>Get Started</Button>
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsMenuOpen(!isMenuOpen)}>

                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </Button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen &&
          <div className="md:hidden py-4 border-t border-border">
              <div className="flex flex-col space-y-4">
                <a
                href="#features"
                onClick={(e) => {e.preventDefault();scrollToSection('features');}}
                className="text-muted-foreground hover:text-primary transition-colors cursor-pointer">

                  Features
                </a>
                <a
                href="#testimonials"
                onClick={(e) => {e.preventDefault();scrollToSection('testimonials');}}
                className="text-muted-foreground hover:text-primary transition-colors cursor-pointer">

                  Testimonials
                </a>
                <a
                href="#contact"
                onClick={(e) => {e.preventDefault();scrollToSection('contact');}}
                className="text-muted-foreground hover:text-primary transition-colors cursor-pointer">

                  Contact
                </a>
                <Link to="/dashboard">
                  <Button className="w-full">Get Started</Button>
                </Link>
              </div>
            </div>
          }
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto text-center">
          <div className="max-w-4xl mx-auto">
            <Badge variant="secondary" className="mb-6">
              Academic Success Made Simple
            </Badge>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-bold text-foreground mb-6">
              Master Your Studies with
              <span className="text-primary block">Smart Planning</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Transform your academic journey with AI-powered study plans, intelligent scheduling, and progress tracking designed for student success.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/dashboard">
                <Button size="lg" className="w-full sm:w-auto">
                  Start Learning Today
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Button variant="outline" size="lg" className="w-full sm:w-auto">
                Watch Demo
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/50">
        <div className="container mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) =>
            <div key={index} className="text-center">
                <div className="text-3xl sm:text-4xl font-heading font-bold text-primary mb-2">
                  {stat.number}
                </div>
                <div className="text-muted-foreground">{stat.label}</div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-heading font-bold text-foreground mb-4">
              Everything You Need to Excel
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Comprehensive tools designed to help students organize, plan, and achieve their academic goals.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) =>
            <Card key={index} className="text-center hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <div className="flex justify-center mb-4">
                    {feature.icon}
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-heading font-bold text-foreground mb-4">
              How StudyPlan Works
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Get started in three simple steps and transform your study routine.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="h-8 w-8 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-heading font-semibold mb-4">1. Set Your Goals</h3>
              <p className="text-muted-foreground">
                Define your academic objectives and let our AI create personalized study plans.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-6">
                <Clock className="h-8 w-8 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-heading font-semibold mb-4">2. Follow Your Schedule</h3>
              <p className="text-muted-foreground">
                Stick to your optimized study schedule with smart reminders and progress tracking.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-6">
                <BarChart3 className="h-8 w-8 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-heading font-semibold mb-4">3. Track Progress</h3>
              <p className="text-muted-foreground">
                Monitor your achievements and adjust your study plan for optimal results.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-heading font-bold text-foreground mb-4">
              What Students Say
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Join thousands of students who have transformed their academic performance.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) =>
            <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <div className="flex items-center space-x-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) =>
                  <Star key={i} className="h-5 w-5 fill-accent text-accent" />
                  )}
                  </div>
                  <CardDescription className="text-base italic">
                    "{testimonial.content}"
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
                      <Users className="h-5 w-5 text-primary-foreground" />
                    </div>
                    <div>
                      <div className="font-semibold">{testimonial.name}</div>
                      <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-primary">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-heading font-bold text-primary-foreground mb-4">
            Ready to Transform Your Studies?
          </h2>
          <p className="text-xl text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
            Join thousands of successful students and start your journey to academic excellence today.
          </p>
          <Link to="/dashboard">
            <Button size="lg" variant="secondary">
              Get Started Free
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-heading font-bold text-foreground mb-4">
            Get in Touch
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Have questions? We're here to help you succeed in your academic journey.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="outline" size="lg">
              Contact Support
            </Button>
            <Button variant="outline" size="lg">
              Schedule Demo
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 sm:px-6 lg:px-8 bg-muted/50 border-t border-border">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <BookOpen className="h-6 w-6 text-primary" />
              <span className="text-lg font-heading font-bold">StudyPlan</span>
            </div>
            <div className="text-sm text-muted-foreground">
              © 2024 StudyPlan. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </div>);

}