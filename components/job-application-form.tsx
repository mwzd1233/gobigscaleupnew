"use client";

import React, { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { CheckCircle, Upload, AlertCircle, LinkIcon } from "lucide-react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

interface Job {
  id: number;
  job_role: string;
}

export default function JobApplicationForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [jobs, setJobs] = useState<Job[]>([]);

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [resumeOption, setResumeOption] = useState<"link" | "text" | "file">(
    "link"
  );
  const [file, setFile] = useState<File | null>(null);
  const [error, setError] = useState<string | null>(null);
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    async function loadJobs() {
      try {
        const resp = await fetch(
          "https://gobigscaleup-fb65e002836f.herokuapp.com/clientjob"
        );
        const data = (await resp.json()) as Job[];
        setJobs(data);
      } catch (err) {
        console.error("Failed to load jobs", err);
      }
    }
    loadJobs();
  }, []);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    try {
      const formData = new FormData();

      // Collect all fields manually
      const elements = e.currentTarget.elements as any;
      formData.append("name", elements.name.value);
      formData.append("dob", elements.dob.value);
      formData.append("nationality", elements.nationality.value);
      formData.append("email", elements.email.value);
      formData.append("phone", elements.phone.value);
      formData.append("address", elements.address.value);
      formData.append("linkedin_url", elements.linkedin_url.value);
      formData.append("cv_url", elements.cv_url.value);
      formData.append("position", elements.position.value);
      formData.append("location", elements.location.value);
      formData.append("experience", elements.experience.value);
      formData.append("coverLetter", elements.coverLetter?.value || "");

      // Handle file
      if (resumeOption === "file") {
        if (!file) throw new Error("Please upload your CV PDF.");
        formData.append("resume", file);
      }

      // Send formData
      const res = await fetch(
        "https://gobigscaleup-fb65e002836f.herokuapp.com/ai/upload-cv",
        {
          method: "POST",
          body: formData,
        }
      );

      if (!res.ok) {
        const msg = (await res.json()).error || "Submission failed";
        throw new Error(msg);
      }

      setIsSubmitted(true);
      formRef.current?.reset();
      setFile(null);
      setResumeOption("link");
    } catch (err: any) {
      setError(err.message || "Something went wrong");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted)
    return (
      <div className="p-6 bg-white rounded-lg border space-y-4 text-center">
        <div className="mx-auto w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
          <CheckCircle className="text-green-600 w-6 h-6" />
        </div>
        <h3 className="text-xl font-bold">Application Received!</h3>
        <p>Thank you for applying. We’ll be in touch soon.</p>
        <Button onClick={() => setIsSubmitted(false)}>Submit Another</Button>
      </div>
    );

  return (
    <form
      ref={formRef}
      onSubmit={handleSubmit}
      className="p-6 bg-white rounded-lg space-y-6"
    >
      {error && (
        <Alert variant="destructive">
          <AlertCircle />
          <AlertTitle>Error</AlertTitle>
          <AlertDescription>{error}</AlertDescription>
        </Alert>
      )}
      {/* personal fields */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <Label htmlFor="name">Full Name</Label>
          <Input id="name" name="name" required />
        </div>
        <div>
          <Label htmlFor="dob">Date of Birth</Label>
          <Input id="dob" name="dob" type="date" required />
        </div>
        <div>
          <Label htmlFor="nationality">Nationality</Label>
          <Input id="nationality" name="nationality" required />
        </div>
        <div>
          <Label htmlFor="email">Email</Label>
          <Input id="email" name="email" type="email" required />
        </div>
        <div>
          <Label htmlFor="phone">Phone</Label>
          <Input id="phone" name="phone" type="tel" required />
        </div>
        <div>
          <Label htmlFor="address">Address</Label>
          <Input id="address" name="address" required />
        </div>
        <div>
          <Label htmlFor="linkedin_url">LinkedIn URL</Label>
          <Input id="linkedin_url" name="linkedin_url" type="url" />
        </div>
        <div>
          <Label htmlFor="cv_url">Profile/Portfolio URL</Label>
          <Input id="cv_url" name="cv_url" type="url" />
        </div>
      </div>

      {/* dropdowns */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div>
          <Label>Position</Label>
          <Select name="position" required>
            <SelectTrigger>
              <SelectValue placeholder="Select" />
            </SelectTrigger>
            <SelectContent>
              {jobs.map((job) => (
                <SelectItem key={job.id} value={job.id.toString()}>
                  {job.job_role}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <div>
          <Label>Location</Label>
          <Select name="location" required>
            <SelectTrigger>
              <SelectValue placeholder="Select" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="philippines">Philippines</SelectItem>
              <SelectItem value="vietnam">Vietnam</SelectItem>
              <SelectItem value="thailand">Thailand</SelectItem>
              <SelectItem value="indonesia">Indonesia</SelectItem>
              <SelectItem value="malaysia">Malaysia</SelectItem>
              <SelectItem value="malaysia">Singapore</SelectItem>
              <SelectItem value="other">Other</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div>
          <Label>Experience</Label>
          <Select name="experience" required>
            <SelectTrigger>
              <SelectValue placeholder="Select" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="0-1">0‑1 yrs</SelectItem>
              <SelectItem value="1-3">1‑3 yrs</SelectItem>
              <SelectItem value="3-5">3‑5 yrs</SelectItem>
              <SelectItem value="5-10">5‑10 yrs</SelectItem>
              <SelectItem value="10+">10+ yrs</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      {/* resume option */}
      <div className="space-y-2">
        <Label>Resume/CV</Label>
        <div className="flex gap-2">
          {["link", "text", "file"].map((opt) => (
            <Button
              key={opt}
              type="button"
              variant={resumeOption === opt ? "default" : "outline"}
              size="sm"
              onClick={() => setResumeOption(opt as any)}
            >
              {opt === "link" && <LinkIcon className="mr-2 w-4 h-4" />}
              {opt === "file" && <Upload className="mr-2 w-4 h-4" />}
              {opt === "text" && <Upload className="mr-2 w-4 h-4 rotate-180" />}
              {opt === "link"
                ? "Link"
                : opt === "file"
                ? "Upload PDF"
                : "Describe"}
            </Button>
          ))}
        </div>

        {resumeOption === "link" && (
          <Input
            name="resumeLink"
            type="url"
            placeholder="https://drive.google.com/..."
            required
          />
        )}
        {resumeOption === "text" && (
          <Textarea
            name="resumeText"
            placeholder="Summarize your experience..."
            required
            className="min-h-[120px]"
          />
        )}
        {resumeOption === "file" && (
          <Input
            type="file"
            accept="application/pdf"
            onChange={(e) => setFile(e.target.files?.[0] ?? null)}
            required
          />
        )}
      </div>

      <div className="space-y-2">
        <Label htmlFor="coverLetter">Cover Letter (Optional)</Label>
        <Textarea
          name="coverLetter"
          placeholder="Why this role?"
          className="min-h-[120px]"
        />
      </div>

      <Button type="submit" disabled={isSubmitting} className="w-full">
        {isSubmitting ? "Submitting..." : "Submit Application"}
      </Button>
    </form>
  );
}
