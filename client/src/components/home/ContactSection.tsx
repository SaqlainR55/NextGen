import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { apiRequest } from "@/lib/queryClient";
import { toast } from "@/hooks/use-toast";
import { z } from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().optional(),
  subject: z.string().min(2, "Subject must be at least 2 characters"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type ContactFormValues = z.infer<typeof contactSchema>;

export function ContactSection() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    },
  });

  const onSubmit = async (data: ContactFormValues) => {
    try {
      setIsSubmitting(true);
      const response = await apiRequest("POST", "/api/contact", data);
      const result = await response.json();
      
      toast({
        title: "Success!",
        description: result.message || "Your message has been sent successfully!",
      });
      
      form.reset();
    } catch (error) {
      toast({
        title: "Error",
        description: error instanceof Error ? error.message : "Failed to send message",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-16 bg-neutral-200">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Contact Us</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Have questions or ready to discuss your project? Reach out to our team for assistance.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Contact Information */}
          <div>
            <Card className="bg-white p-8 rounded-lg shadow-md mb-8">
              <CardContent className="p-0">
                <h3 className="text-xl font-bold mb-6">Get In Touch</h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="bg-primary text-white rounded-full w-10 h-10 flex items-center justify-center flex-shrink-0 mt-1">
                      <i className="fas fa-map-marker-alt"></i>
                    </div>
                    <div className="ml-4">
                      <h4 className="font-medium">Office Location</h4>
                      <p className="text-gray-600">4095 Southern Blvd, Suite #207, West Palm Beach, FL - 33406</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-primary text-white rounded-full w-10 h-10 flex items-center justify-center flex-shrink-0 mt-1">
                      <i className="fas fa-phone"></i>
                    </div>
                    <div className="ml-4">
                      <h4 className="font-medium">Phone Number</h4>
                      <p className="text-gray-600">(877)-307-8131</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-primary text-white rounded-full w-10 h-10 flex items-center justify-center flex-shrink-0 mt-1">
                      <i className="fas fa-envelope"></i>
                    </div>
                    <div className="ml-4">
                      <h4 className="font-medium">Email Address</h4>
                      <p className="text-gray-600">info@nextgenmepfp.com</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-primary text-white rounded-full w-10 h-10 flex items-center justify-center flex-shrink-0 mt-1">
                      <i className="fas fa-clock"></i>
                    </div>
                    <div className="ml-4">
                      <h4 className="font-medium">Business Hours</h4>
                      <p className="text-gray-600">Monday - Friday: 8:00 AM - 5:00 PM</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            {/* Map */}
            <Card className="bg-white p-4 rounded-lg shadow-md">
              <CardContent className="p-0">
                <div className="w-full h-64 bg-neutral-300 rounded overflow-hidden">
                  <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3567.8436911399!2d-80.11193892390901!3d26.6478216784358!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88d92e5c5cddcbf1%3A0x4ef8586944714e4e!2s4095%20Southern%20Blvd%2C%20West%20Palm%20Beach%2C%20FL%2033406!5e0!3m2!1sen!2sus!4v1710272025579!5m2!1sen!2sus" 
                    width="100%" 
                    height="100%" 
                    style={{ border: 0 }} 
                    allowFullScreen 
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
              </CardContent>
            </Card>
          </div>
          
          {/* Contact Form */}
          <Card className="bg-white p-8 rounded-lg shadow-md">
            <CardContent className="p-0">
              <h3 className="text-xl font-bold mb-6">Send Us a Message</h3>
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="block text-sm font-medium text-gray-700">Full Name</FormLabel>
                        <FormControl>
                          <Input
                            {...field}
                            placeholder="John Smith"
                            className="w-full px-4 py-2 rounded-md border border-gray-300 focus:ring-2 focus:ring-primary focus:border-primary"
                            disabled={isSubmitting}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="block text-sm font-medium text-gray-700">Email Address</FormLabel>
                        <FormControl>
                          <Input
                            {...field}
                            type="email"
                            placeholder="john@example.com"
                            className="w-full px-4 py-2 rounded-md border border-gray-300 focus:ring-2 focus:ring-primary focus:border-primary"
                            disabled={isSubmitting}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="block text-sm font-medium text-gray-700">Phone Number</FormLabel>
                        <FormControl>
                          <Input
                            {...field}
                            type="tel"
                            placeholder="(123) 456-7890"
                            className="w-full px-4 py-2 rounded-md border border-gray-300 focus:ring-2 focus:ring-primary focus:border-primary"
                            disabled={isSubmitting}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="subject"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="block text-sm font-medium text-gray-700">Subject</FormLabel>
                        <FormControl>
                          <Input
                            {...field}
                            placeholder="Project Inquiry"
                            className="w-full px-4 py-2 rounded-md border border-gray-300 focus:ring-2 focus:ring-primary focus:border-primary"
                            disabled={isSubmitting}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="block text-sm font-medium text-gray-700">Message</FormLabel>
                        <FormControl>
                          <Textarea
                            {...field}
                            rows={4}
                            placeholder="Tell us about your project or inquiry..."
                            className="w-full px-4 py-2 rounded-md border border-gray-300 focus:ring-2 focus:ring-primary focus:border-primary"
                            disabled={isSubmitting}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <div className="pt-2">
                    <Button
                      type="submit"
                      className="w-full bg-primary text-white font-bold py-3 px-6 rounded-md hover:bg-opacity-90 transition"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? "Sending..." : "Send Message"}
                    </Button>
                  </div>
                </form>
              </Form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
