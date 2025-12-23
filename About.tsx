import Navbar from "@/components/Navbar";
import { CheckCircle2 } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="container mx-auto px-6 py-16 max-w-4xl">
        <div className="animate-fade-in">
          <h1 className="text-4xl font-bold text-foreground mb-6">About ResumeAI</h1>
          <div className="prose prose-lg max-w-none text-foreground">
            <p className="text-lg text-muted-foreground mb-6">
              ResumeAI is an intelligent platform that helps job seekers optimize their resumes 
              to match job descriptions perfectly.
            </p>
            
            <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">How It Works</h2>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-success mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-medium text-foreground mb-1">Upload Your Resume</h3>
                  <p className="text-muted-foreground">
                    Simply upload your resume in PDF format and let our AI analyze it.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-success mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-medium text-foreground mb-1">Paste Job Description</h3>
                  <p className="text-muted-foreground">
                    Add the job description you're interested in applying for.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-success mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-medium text-foreground mb-1">Get Instant Analysis</h3>
                  <p className="text-muted-foreground">
                    Receive a detailed match score, missing requirements, and personalized suggestions.
                  </p>
                </div>
              </div>
            </div>

            <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">Important Note</h2>
            <p className="text-muted-foreground">
              This is a personal project made for learning GenAI application, the scores and suggestions might not be 100% accurate.
              For example: if JD says HTML needed and your resume has react, but not HTML mentioned, it might mark HTML as missing, and hence reduction in score and same in many things.
              Please use the results as a guide and not as an absolute measure of your qualifications.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default About;
