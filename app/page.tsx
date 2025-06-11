import Link from "next/link"
import Image from "next/image"
import { CheckCircle, Users, BarChart, HeadphonesIcon, ClipboardList } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import ContactForm from "@/components/contact-form"
import IconLogo from "@/components/icon-logo-component"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />

      {/* Hero Section */}
      <section className="bg-[#E41B17] py-16 md:py-24 relative overflow-hidden">
        <div className="absolute right-0 top-0 opacity-20 h-full">
          <IconLogo width={500} height={500} />
        </div>
        <div className="container px-4 md:px-6 relative z-10">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="space-y-4">
              <div className="inline-flex items-center rounded-lg bg-white/10 px-3 py-1 text-sm font-medium text-white">
                <span>Affordable Talent Solutions</span>
              </div>
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl text-white">
                Scale Your Business With Southeast Asian Talent
              </h1>
              <p className="max-w-[600px] text-white md:text-xl">
                Connect your business with high-quality, affordable talent from Southeast Asia. Scale your operations
                without scaling your costs.
              </p>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Button asChild size="lg" className="bg-white text-[#E41B17] hover:bg-white/90 font-medium">
                  <Link href="#services">Explore Services</Link>
                </Button>
                <Button asChild size="lg" className="bg-white text-[#E41B17] hover:bg-white/90 font-semibold shadow-md">
                  <Link href="#contact">Contact Us</Link>
                </Button>
              </div>
            </div>
            <div className="flex justify-center lg:justify-end">
              <IconLogo width={350} height={350} priority={true} />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 md:py-24 bg-white">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-[#F3E5F5] px-3 py-1 text-sm font-medium text-[#4A148C]">
                Our Services
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Specialized Outsourcing Solutions
              </h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                We provide top-tier talent from Southeast Asia across various business functions to help your business
                scale efficiently.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
            <div className="grid gap-6">
              <Card className="border-2 border-[#F3E5F5]">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="rounded-full bg-[#F3E5F5] p-2">
                      <BarChart className="h-6 w-6 text-[#4A148C]" />
                    </div>
                    <div className="space-y-1">
                      <h3 className="font-bold">Accounting & Finance</h3>
                      <p className="text-sm text-muted-foreground">
                        Bookkeepers, accountants, and financial analysts to keep your finances in order.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card className="border-2 border-[#F3E5F5]">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="rounded-full bg-[#F3E5F5] p-2">
                      <HeadphonesIcon className="h-6 w-6 text-[#4A148C]" />
                    </div>
                    <div className="space-y-1">
                      <h3 className="font-bold">Customer Service</h3>
                      <p className="text-sm text-muted-foreground">
                        Support representatives and customer success managers to delight your customers.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
            <div className="grid gap-6">
              <Card className="border-2 border-[#F3E5F5]">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="rounded-full bg-[#F3E5F5] p-2">
                      <Users className="h-6 w-6 text-[#4A148C]" />
                    </div>
                    <div className="space-y-1">
                      <h3 className="font-bold">Marketing & Sales</h3>
                      <p className="text-sm text-muted-foreground">
                        Digital marketers, content creators, and sales representatives to grow your business.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card className="border-2 border-[#F3E5F5]">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="rounded-full bg-[#F3E5F5] p-2">
                      <ClipboardList className="h-6 w-6 text-[#4A148C]" />
                    </div>
                    <div className="space-y-1">
                      <h3 className="font-bold">Administration</h3>
                      <p className="text-sm text-muted-foreground">
                        Virtual assistants, data entry specialists, and administrative support to streamline operations.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
          <div className="flex justify-center">
            <Button asChild className="bg-[#E41B17] hover:bg-[#E41B17]/90">
              <Link href="#contact">Get Started</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 md:py-24 bg-[#F3E5F5]">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="space-y-4">
              <div className="inline-block rounded-lg bg-[#4A148C] px-3 py-1 text-sm font-medium text-white">
                Why Choose Us
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Scale Your Business Without Breaking the Bank
              </h2>
              <p className="max-w-[600px] text-muted-foreground md:text-xl">
                Our talent pool from Southeast Asia offers the perfect balance of quality, affordability, and expertise.
              </p>
              <ul className="space-y-2">
                {[
                  "Up to 70% cost savings compared to local hiring",
                  "English-proficient professionals",
                  "Timezone flexibility for global operations",
                  "Fully vetted and skilled talent",
                  "Seamless integration with your team",
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-[#E41B17]" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <div className="flex flex-col gap-2 min-[400px]:flex-row pt-4">
                <Button asChild className="bg-[#4A148C] hover:bg-[#4A148C]/90">
                  <Link href="#contact">Schedule a Consultation</Link>
                </Button>
              </div>
            </div>
            <div className="flex justify-center lg:justify-end">
              <IconLogo width={350} height={350} />
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-[#FFF9C4] px-3 py-1 text-sm font-medium text-[#E41B17]">
                Our Process
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">How It Works</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                A simple, streamlined process to connect your business with the right talent.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl gap-8 py-12 md:grid-cols-3">
            {[
              {
                step: "1",
                title: "Consultation",
                description: "We understand your needs and requirements through a detailed consultation.",
              },
              {
                step: "2",
                title: "Talent Matching",
                description: "We match you with pre-vetted professionals who fit your specific requirements.",
              },
              {
                step: "3",
                title: "Seamless Integration",
                description: "We help integrate the talent into your team and provide ongoing support.",
              },
            ].map((item, i) => (
              <div key={i} className="flex flex-col items-center text-center">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#E41B17] text-white font-bold text-xl mb-4">
                  {item.step}
                </div>
                <h3 className="text-xl font-bold">{item.title}</h3>
                <p className="mt-2 text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 md:py-24 bg-[#4A148C] text-white">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-white/10 px-3 py-1 text-sm font-medium">Success Stories</div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">What Our Clients Say</h2>
              <p className="max-w-[900px] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed opacity-90">
                Hear from businesses that have successfully scaled with our talent solutions.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl gap-6 py-12 md:grid-cols-2 lg:gap-12">
            {[
              {
                quote:
                  "Go Big Scale Up helped us expand our customer service team with highly skilled professionals at a fraction of the cost. Our customer satisfaction scores have never been higher.",
                name: "Sarah Johnson",
                title: "CEO, TechStart Inc.",
              },
              {
                quote:
                  "The marketing specialists we hired through Go Big Scale Up transformed our digital presence. They understand our brand and deliver exceptional results consistently.",
                name: "Michael Chen",
                title: "Marketing Director, GrowthWave",
              },
            ].map((testimonial, i) => (
              <Card key={i} className="bg-white/10 border-0">
                <CardContent className="p-6">
                  <div className="space-y-4">
                    <p className="italic text-white">{testimonial.quote}</p>
                    <div>
                      <p className="font-bold text-white">{testimonial.name}</p>
                      <p className="text-sm text-white/80">{testimonial.title}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Logos Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-[#F3E5F5] px-3 py-1 text-sm font-medium text-[#4A148C]">
                Trusted By
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Companies We've Helped</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                We've partnered with leading companies to provide top-tier talent solutions.
              </p>
            </div>
          </div>
          <div className="divide-y rounded-lg border">
            <div className="grid w-full grid-cols-3 items-stretch justify-center divide-x md:grid-cols-3">
              <div className="mx-auto flex w-full items-center justify-center p-4 sm:p-8">
                <Image
                  src="/images/company-logo-1.png"
                  width="140"
                  height="70"
                  alt="Company Logo"
                  className="aspect-[2/1] overflow-hidden rounded-lg object-contain object-center"
                />
              </div>
              <div className="mx-auto flex w-full items-center justify-center p-4 sm:p-8">
                <Image
                  src="/images/company-logo-2.png"
                  width="140"
                  height="70"
                  alt="Company Logo"
                  className="aspect-[2/1] overflow-hidden rounded-lg object-contain object-center"
                />
              </div>
              <div className="mx-auto flex w-full items-center justify-center p-8">
                <Image
                  src="/images/company-logo-3.png"
                  width="140"
                  height="70"
                  alt="Company Logo"
                  className="aspect-[2/1] overflow-hidden rounded-lg object-contain object-center"
                />
              </div>
            </div>
            <div className="grid w-full grid-cols-3 items-stretch justify-center divide-x md:grid-cols-3">
              <div className="mx-auto flex w-full items-center justify-center p-4 sm:p-8">
                <Image
                  src="/images/company-logo-1.png"
                  width="140"
                  height="70"
                  alt="Company Logo"
                  className="aspect-[2/1] overflow-hidden rounded-lg object-contain object-center"
                />
              </div>
              <div className="mx-auto flex w-full items-center justify-center p-4 sm:p-8">
                <Image
                  src="/images/company-logo-2.png"
                  width="140"
                  height="70"
                  alt="Company Logo"
                  className="aspect-[2/1] overflow-hidden rounded-lg object-contain object-center"
                />
              </div>
              <div className="mx-auto flex w-full items-center justify-center p-4 sm:p-8">
                <Image
                  src="/images/company-logo-3.png"
                  width="140"
                  height="70"
                  alt="Company Logo"
                  className="aspect-[2/1] overflow-hidden rounded-lg object-contain object-center"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-[#FFF9C4]">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-[#4A148C]">
                Ready to Scale Your Business?
              </h2>
              <p className="max-w-[600px] text-muted-foreground md:text-xl">
                Get in touch with us today to discuss how our talent solutions can help your business grow.
              </p>
              <div className="flex flex-col gap-2 min-[400px]:flex-row pt-4">
                <Button
                  asChild
                  size="lg"
                  className="bg-[#E41B17] hover:bg-[#E41B17]/90 text-white font-semibold shadow-md"
                >
                  <Link href="#contact">Get Started Now</Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="border-[#4A148C] text-[#4A148C] hover:bg-[#4A148C]/10 font-medium border-2"
                >
                  <Link href="/jobs">Looking for Work?</Link>
                </Button>
              </div>
            </div>
            <div className="flex justify-center lg:justify-end">
              <IconLogo width={300} height={300} />
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 md:py-24 bg-white">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-[#F3E5F5] px-3 py-1 text-sm font-medium text-[#4A148C]">
                Get In Touch
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Contact Us</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Have questions or ready to get started? Reach out to our team.
              </p>
            </div>
          </div>
          <div className="mx-auto max-w-3xl py-12">
            <ContactForm />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
