"use client";
import Link from "next/link";
import { CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
  CardFooter,
} from "@/components/ui/card";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import JobApplicationForm from "@/components/job-application-form";
import IconLogo from "@/components/icon-logo-component";
import { useEffect, useState } from "react";

type Job = {
  id: string | number;
  title: string;
  type: string;
  location: string;
  description: string;
  requirements: string[];
};

export default function JobsPage() {
  const [jobs, setJobs] = useState<Job[]>([]);

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const res = await fetch(
          "https://gbsu-79591085eada.herokuapp.com/clientjob"
        );
        const data = await res.json();

        const filtered = data
          .filter((job: any) => job.status === true)
          .map((job: any) => ({
            id: job.id,
            title: job.job_role,
            type: job.type,
            location: job.country,
            description: job.description,
            requirements: Array.isArray(job.skill) ? job.skill : [],
          }));

        setJobs(filtered);
      } catch (err) {
        console.error("Failed to fetch jobs:", err);
      }
    };

    fetchJobs();
  }, []);

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />

      {/* Hero Section */}
      <section className="bg-[#4A148C] py-16 md:py-24 relative overflow-hidden">
        <div className="absolute right-0 top-0 opacity-20 h-full">
          <IconLogo width={500} height={500} />
        </div>
        <div className="container px-4 md:px-6 relative z-10">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="space-y-4">
              <div className="inline-flex items-center rounded-lg bg-white/10 px-3 py-1 text-sm font-medium text-white">
                <span>Career Opportunities</span>
              </div>
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl text-white">
                Join Our Global Team
              </h1>
              <p className="max-w-[600px] text-white md:text-xl">
                Discover exciting opportunities to work with international
                clients and grow your career with Go Big Scale Up.
              </p>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Button
                  asChild
                  size="lg"
                  className="bg-white text-[#4A148C] hover:bg-white/90 font-medium"
                >
                  <Link href="#openings">View Openings</Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="bg-white text-[#4A148C] hover:bg-white/90 border-white font-semibold border-2"
                >
                  <Link href="#apply">Apply Now</Link>
                </Button>
              </div>
            </div>
            <div className="flex justify-center lg:justify-end">
              <IconLogo width={350} height={350} priority={true} />
            </div>
          </div>
        </div>
      </section>

      {/* Why Work With Us Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-[#F3E5F5] px-3 py-1 text-sm font-medium text-[#4A148C]">
                Why Work With Us
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Benefits of Joining Our Team
              </h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                We offer competitive compensation and a supportive work
                environment to help you thrive.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl gap-8 py-12 md:grid-cols-3">
            {[
              {
                title: "Work with Global Clients",
                description:
                  "Gain experience working with international businesses across various industries.",
              },
              {
                title: "Flexible Remote Work",
                description:
                  "Enjoy the freedom of working remotely with flexible scheduling options.",
              },
              {
                title: "Competitive Compensation",
                description:
                  "Earn competitive salaries with opportunities for bonuses and raises.",
              },
              {
                title: "Professional Development",
                description:
                  "Access training and development opportunities to enhance your skills.",
              },
              {
                title: "Career Growth",
                description:
                  "Clear paths for advancement and promotion within the organization.",
              },
              {
                title: "Supportive Community",
                description:
                  "Join a team that values collaboration, diversity, and mutual support.",
              },
            ].map((benefit, i) => (
              <div key={i} className="flex flex-col items-start">
                <div className="rounded-full bg-[#F3E5F5] p-2 mb-4">
                  <CheckCircle className="h-6 w-6 text-[#4A148C]" />
                </div>
                <h3 className="text-xl font-bold">{benefit.title}</h3>
                <p className="mt-2 text-muted-foreground">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Current Openings Section */}
      <section id="openings" className="py-16 md:py-24 bg-[#F3E5F5]">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-[#4A148C] px-3 py-1 text-sm font-medium text-white">
                Current Openings
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Available Positions
              </h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Explore our current job openings and find the perfect role for
                your skills and experience.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl gap-6 py-12 md:grid-cols-2">
            {jobs.map((job) => (
              <Card key={job.id} className="border-2 border-[#E0E0E0]">
                <CardHeader>
                  <CardTitle>{job.title}</CardTitle>
                  <CardDescription>
                    <div className="flex flex-wrap gap-2 mt-2">
                      <span className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold">
                        {job.type}
                      </span>
                      <span className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold">
                        {job.location}
                      </span>
                    </div>
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">
                    {job.description}
                  </p>
                  <div className="space-y-2">
                    <h4 className="text-sm font-medium">Requirements:</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      {job.requirements.map((req, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <CheckCircle className="h-4 w-4 text-[#E41B17] mt-0.5" />
                          <span>{req}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button
                    asChild
                    className="w-full bg-[#E41B17] hover:bg-[#E41B17]/90"
                  >
                    <a href="#apply">Apply Now</a>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Application Process Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-[#FFF9C4] px-3 py-1 text-sm font-medium text-[#E41B17]">
                How to Apply
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Our Application Process
              </h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                A simple, transparent process to help you find your next career
                opportunity.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl gap-8 py-12 md:grid-cols-4">
            {[
              {
                step: "1",
                title: "Submit Application",
                description:
                  "Fill out the application form and upload your resume.",
              },
              {
                step: "2",
                title: "Initial Screening",
                description:
                  "Our team reviews your application and assesses your qualifications.",
              },
              {
                step: "3",
                title: "Skills Assessment",
                description:
                  "Complete a brief assessment to showcase your skills and expertise.",
              },
              {
                step: "4",
                title: "Final Interview",
                description:
                  "Meet with our team to discuss the role and your career goals.",
              },
            ].map((item, i) => (
              <div key={i} className="flex flex-col items-center text-center">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#4A148C] text-white font-bold text-xl mb-4">
                  {item.step}
                </div>
                <h3 className="text-xl font-bold">{item.title}</h3>
                <p className="mt-2 text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Form Section */}
      <section id="apply" className="py-16 md:py-24 bg-[#FFF9C4]">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-[#E41B17] px-3 py-1 text-sm font-medium text-white">
                Apply Now
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-[#4A148C]">
                Submit Your Application
              </h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Take the first step towards your new career opportunity with Go
                Big Scale Up.
              </p>
            </div>
          </div>
          <div className="mx-auto max-w-3xl py-12">
            <JobApplicationForm />
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-[#F3E5F5] px-3 py-1 text-sm font-medium text-[#4A148C]">
                FAQs
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Frequently Asked Questions
              </h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Find answers to common questions about working with Go Big Scale
                Up.
              </p>
            </div>
          </div>
          <div className="mx-auto max-w-3xl py-12 space-y-6">
            {[
              {
                question: "What equipment do I need to work remotely?",
                answer:
                  "You'll need a reliable computer, stable internet connection, and a quiet workspace. Depending on your role, additional requirements may apply.",
              },
              {
                question: "How does the payment process work?",
                answer:
                  "We offer competitive salaries paid bi-monthly through secure international payment methods. Details will be provided during the hiring process.",
              },
              {
                question: "What are the working hours?",
                answer:
                  "Working hours vary by position and client needs. Some roles require alignment with specific time zones, while others offer more flexibility.",
              },
              {
                question: "Is there opportunity for career growth?",
                answer:
                  "We provide clear career paths, regular performance reviews, and opportunities for advancement based on your performance and goals.",
              },
              {
                question: "What support will I receive as a remote worker?",
                answer:
                  "You'll have a dedicated team lead, regular check-ins, access to training resources, and a supportive community of colleagues.",
              },
            ].map((faq, i) => (
              <div key={i} className="border-b border-gray-200 pb-6">
                <h3 className="text-lg font-bold mb-2">{faq.question}</h3>
                <p className="text-muted-foreground">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
