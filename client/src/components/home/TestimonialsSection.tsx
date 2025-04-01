import { useState, useEffect, useCallback } from "react";
import { testimonials } from "@/data/testimonials";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ChevronLeft, ChevronRight } from "lucide-react";

export function TestimonialsSection() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const showTestimonial = useCallback((index: number) => {
    setCurrentTestimonial((index + testimonials.length) % testimonials.length);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      showTestimonial(currentTestimonial + 1);
    }, 6000);
    
    return () => clearInterval(interval);
  }, [currentTestimonial, showTestimonial]);

  return (
    <section className="py-16 bg-neutral-200">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">What Our Clients Say</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            We're proud of the relationships we've built and the success we've helped our clients achieve.
          </p>
        </div>
        
        <div className="relative max-w-4xl mx-auto">
          {/* Testimonials Container */}
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500"
              style={{ transform: `translateX(-${currentTestimonial * 100}%)` }}
            >
              {testimonials.map((testimonial) => (
                <div key={testimonial.id} className="w-full flex-shrink-0 p-4">
                  <Card className="bg-white p-8 rounded-lg shadow-md">
                    <CardContent className="p-0">
                      <div className="text-yellow-400 mb-4">
                        {Array.from({ length: testimonial.rating }).map((_, i) => (
                          <i key={i} className="fas fa-star"></i>
                        ))}
                      </div>
                      <p className="text-gray-600 italic mb-6">
                        "{testimonial.content}"
                      </p>
                      <div className="flex items-center">
                        <div className="w-12 h-12 rounded-full bg-neutral-300 mr-4 flex items-center justify-center">
                          <i className="fas fa-user text-neutral-500"></i>
                        </div>
                        <div>
                          <h4 className="font-bold">{testimonial.author}</h4>
                          <p className="text-sm text-gray-500">{testimonial.position}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>
          
          {/* Testimonial Navigation */}
          <Button
            className="absolute -left-4 top-1/2 transform -translate-y-1/2 bg-primary text-white rounded-full w-10 h-10 p-0 flex items-center justify-center hover:bg-opacity-90 focus:outline-none"
            onClick={() => showTestimonial(currentTestimonial - 1)}
          >
            <ChevronLeft className="h-5 w-5" />
          </Button>
          <Button
            className="absolute -right-4 top-1/2 transform -translate-y-1/2 bg-primary text-white rounded-full w-10 h-10 p-0 flex items-center justify-center hover:bg-opacity-90 focus:outline-none"
            onClick={() => showTestimonial(currentTestimonial + 1)}
          >
            <ChevronRight className="h-5 w-5" />
          </Button>
          
          {/* Testimonial Indicators */}
          <div className="flex justify-center space-x-2 mt-6">
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 rounded-full focus:outline-none ${
                  index === currentTestimonial 
                    ? "bg-primary bg-opacity-100" 
                    : "bg-primary bg-opacity-30"
                }`}
                onClick={() => showTestimonial(index)}
              ></button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
