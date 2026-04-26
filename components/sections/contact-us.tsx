"use client"

import { useState } from "react"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"
import { toast } from "sonner"
import { Mail, Phone, Coffee, Send } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"

const formSchema = z.object({
  firstName: z.string().min(1, "First name is required"),
  lastName: z.string().min(1, "Last name is required"),
  email: z.string().email("Invalid email address"),
  subject: z.string().min(1, "Subject is required"),
  message: z.string().min(10, "Message must be at least 10 characters long"),
})

type FormData = z.infer<typeof formSchema>

const Contact = () => {
  const [isLoading, setIsLoading] = useState(false)

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      subject: "",
      message: "",
    },
  })

  const onSubmit = (data: FormData) => {
    setIsLoading(true)
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false)
      toast.success("Message sent!", {
        description: `We'll reach out to you as soon as possible: ${data.email}`,
      })
      form.reset()
    }, 1000)
  }

  return (
    <section id="contact-us" className="py-16 px-4">
      <div className="container max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center mb-6">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-amber-400 via-amber-500 to-orange-500 rounded-full blur-lg opacity-30 animate-pulse" />
              <Coffee className="w-14 h-14 text-amber-700 relative animate-bounce" />
            </div>
          </div>
          <h1 className="section-title anim-fade-down d-100 font-display mb-5">
            Contact Us
          </h1>
          <p className="text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto text-lg">
            Have questions about our AI-powered coffee quality system? We'd love to hear from you. Reach out to discuss collaborations, feedback, or partnership opportunities.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-neutral-900 dark:text-white">Contact Information</h2>
              <p className="text-neutral-600 dark:text-neutral-400">
                Connect with our team for any inquiries related to the coffee quality enhancement system.
              </p>
            </div>

            <div className="space-y-4">
              {/* Phone */}
              <div className="group flex items-start gap-4 p-4 rounded-xl bg-gradient-to-br from-amber-50 to-orange-50 dark:from-neutral-900/50 dark:to-neutral-950/50 border border-amber-100 dark:border-amber-900/20 hover:border-amber-300 dark:hover:border-amber-700/50 transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                <div className="flex-shrink-0 p-3 rounded-lg bg-gradient-to-br from-orange-500 to-red-600 shadow-lg group-hover:shadow-xl transition-all duration-300">
                  <Phone className="w-6 h-6 text-white animate-bounce" />
                </div>
                <div>
                  <h3 className="font-semibold text-neutral-900 dark:text-white mb-1">Phone</h3>
                  <p className="text-neutral-600 dark:text-neutral-400">+94 70 511 3340</p>
                </div>
              </div>

              {/* Email */}
              <div className="group flex items-start gap-4 p-4 rounded-xl bg-gradient-to-br from-amber-50 to-orange-50 dark:from-neutral-900/50 dark:to-neutral-950/50 border border-amber-100 dark:border-amber-900/20 hover:border-amber-300 dark:hover:border-amber-700/50 transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                <div className="flex-shrink-0 p-3 rounded-lg bg-gradient-to-br from-amber-500 to-yellow-600 shadow-lg group-hover:shadow-xl transition-all duration-300">
                  <Mail className="w-6 h-6 text-white animate-bounce" style={{ animationDelay: '0.1s' }} />
                </div>
                <div>
                  <h3 className="font-semibold text-neutral-900 dark:text-white mb-1">Email</h3>
                  <a href="mailto:ceyloncoffee3340@gmail.com" className="text-amber-700 dark:text-amber-400 hover:underline">
                    ceyloncoffee3340@gmail.com
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="rounded-2xl bg-gradient-to-br from-white to-amber-50 dark:from-neutral-900 dark:to-neutral-950 border-2 border-amber-100 dark:border-amber-900/30 p-8 shadow-xl hover:shadow-2xl transition-all duration-300">
              <h2 className="text-2xl font-bold text-neutral-900 dark:text-white mb-6">Send us a Message</h2>
              <div className="grid gap-5">
                <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                  <FormField
                    control={form.control}
                    name="firstName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="font-semibold text-neutral-700 dark:text-neutral-300">First Name</FormLabel>
                        <FormControl>
                          <Input placeholder="John" className="rounded-lg border-amber-100 focus:border-amber-500 focus:ring-amber-500 dark:border-amber-900/30 dark:focus:border-amber-600 bg-white dark:bg-neutral-950" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="lastName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="font-semibold text-neutral-700 dark:text-neutral-300">Last Name</FormLabel>
                        <FormControl>
                          <Input placeholder="Doe" className="rounded-lg border-amber-100 focus:border-amber-500 focus:ring-amber-500 dark:border-amber-900/30 dark:focus:border-amber-600 bg-white dark:bg-neutral-950" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="font-semibold text-neutral-700 dark:text-neutral-300">Email</FormLabel>
                      <FormControl>
                        <Input placeholder="john@example.com" type="email" className="rounded-lg border-amber-100 focus:border-amber-500 focus:ring-amber-500 dark:border-amber-900/30 dark:focus:border-amber-600 bg-white dark:bg-neutral-950" {...field} />
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
                      <FormLabel className="font-semibold text-neutral-700 dark:text-neutral-300">Subject</FormLabel>
                      <FormControl>
                        <Input placeholder="How can we help?" className="rounded-lg border-amber-100 focus:border-amber-500 focus:ring-amber-500 dark:border-amber-900/30 dark:focus:border-amber-600 bg-white dark:bg-neutral-950" {...field} />
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
                      <FormLabel className="font-semibold text-neutral-700 dark:text-neutral-300">Message</FormLabel>
                      <FormControl>
                        <Textarea placeholder="Tell us about your inquiry..." className="min-h-[140px] rounded-lg border-amber-100 focus:border-amber-500 focus:ring-amber-500 dark:border-amber-900/30 dark:focus:border-amber-600 bg-white dark:bg-neutral-950 resize-none" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <Button 
                  type="submit" 
                  disabled={isLoading}
                  className="mt-4 w-full bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700 text-white font-semibold rounded-lg py-3 flex items-center justify-center gap-2 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5"
                >
                  <Send className="w-5 h-5" />
                  {isLoading ? "Sending..." : "Send Message"}
                </Button>
              </div>
            </form>
          </Form>
        </div>
      </div>
    </section>
  )
}

export default Contact
