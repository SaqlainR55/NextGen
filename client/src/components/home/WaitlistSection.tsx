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
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const waitlistSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  company: z.string().optional(),
  interest: z.string().min(1, "Please select an area of interest"),
});

type WaitlistFormValues = z.infer<typeof waitlistSchema>;

export function WaitlistSection() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const form = useForm<WaitlistFormValues>({
    resolver: zodResolver(waitlistSchema),
    defaultValues: {
      name: "",
      email: "",
      company: "",
      interest: "",
    },
  });

  const onSubmit = async (data: WaitlistFormValues) => {
    try {
      setIsSubmitting(true);
      const response = await apiRequest("POST", "/api/waitlist", data);
      const result = await response.json();
      
      toast({
        title: "Success!",
        description: result.message || "You have successfully joined our waitlist!",
      });
      
      form.reset();
    } catch (error) {
      toast({
        title: "Error",
        description: error instanceof Error ? error.message : "Failed to join waitlist",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="waitlist" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto bg-primary text-white rounded-lg overflow-hidden shadow-xl">
          <div className="grid md:grid-cols-2">
            <div className="p-8 md:p-12">
              <h2 className="text-3xl font-bold mb-4">Join Our Waitlist</h2>
              <p className="mb-6">
                Be among the first to experience our new product. Sign up for early access and exclusive updates.
              </p>
              
              {/* Waitlist Form */}
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-sm font-medium">Full Name</FormLabel>
                        <FormControl>
                          <Input
                            {...field}
                            placeholder="John Smith"
                            className="w-full px-4 py-2 rounded-md bg-white bg-opacity-10 border border-white border-opacity-20 text-white placeholder:text-white placeholder:text-opacity-50 focus:ring-2 focus:ring-white focus:ring-opacity-50"
                            disabled={isSubmitting}
                          />
                        </FormControl>
                        <FormMessage className="text-red-200" />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-sm font-medium">Email Address</FormLabel>
                        <FormControl>
                          <Input
                            {...field}
                            type="email"
                            placeholder="john@example.com"
                            className="w-full px-4 py-2 rounded-md bg-white bg-opacity-10 border border-white border-opacity-20 text-white placeholder:text-white placeholder:text-opacity-50 focus:ring-2 focus:ring-white focus:ring-opacity-50"
                            disabled={isSubmitting}
                          />
                        </FormControl>
                        <FormMessage className="text-red-200" />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="company"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-sm font-medium">Company (Optional)</FormLabel>
                        <FormControl>
                          <Input
                            {...field}
                            placeholder="Your Company"
                            className="w-full px-4 py-2 rounded-md bg-white bg-opacity-10 border border-white border-opacity-20 text-white placeholder:text-white placeholder:text-opacity-50 focus:ring-2 focus:ring-white focus:ring-opacity-50"
                            disabled={isSubmitting}
                          />
                        </FormControl>
                        <FormMessage className="text-red-200" />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="interest"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-sm font-medium">Area of Interest</FormLabel>
                        <Select
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                          disabled={isSubmitting}
                        >
                          <FormControl>
                            <SelectTrigger
                              className="w-full px-4 py-2 rounded-md bg-white bg-opacity-10 border border-white border-opacity-20 text-white focus:ring-2 focus:ring-white focus:ring-opacity-50"
                            >
                              <SelectValue placeholder="Select your area of interest" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="mechanical">Mechanical Systems</SelectItem>
                            <SelectItem value="electrical">Electrical Systems</SelectItem>
                            <SelectItem value="plumbing">Plumbing Systems</SelectItem>
                            <SelectItem value="fire">Fire Protection</SelectItem>
                            <SelectItem value="security">Security Systems</SelectItem>
                            <SelectItem value="low-voltage">Low Voltage Systems</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage className="text-red-200" />
                      </FormItem>
                    )}
                  />
                  
                  <div className="pt-2">
                    <Button
                      type="submit"
                      className="w-full bg-white text-primary font-bold py-3 px-6 rounded-md hover:bg-opacity-90 transition"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? "Submitting..." : "Join Waitlist"}
                    </Button>
                  </div>
                </form>
              </Form>
            </div>
            <div className="hidden md:block relative">
              <img 
                src="https://images.unsplash.com/photo-1581094662179-03cb8ea2eeda?auto=format&fit=crop&w=600&h=800&q=80" 
                alt="Modern building blueprint" 
                className="absolute inset-0 h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
