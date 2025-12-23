import { useState } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import UploadCard from "@/components/UploadCard";
import ResultsDashboard from "@/components/ResultsDashboard";

const Index = () => {
  const [showResults, setShowResults] = useState(false);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [resumeText, setResumeText] = useState("");
  const [jobDescription, setJobDescription] = useState("");

  const handleAnalyze = (resumeText: string, jobDescription: string) => {
    setResumeText(resumeText);
    setJobDescription(jobDescription);
    setIsAnalyzing(true);
  };

  const handleAnalysisComplete = () => {
    setIsAnalyzing(false);
    setShowResults(true);
  };

  const handleReset = () => {
    setShowResults(false);
    setIsAnalyzing(false);
    setResumeText("");
    setJobDescription("");
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="container mx-auto px-6 pb-16">
        {!isAnalyzing && !showResults && <Hero />}
        
        {isAnalyzing && (
          <div className="max-w-4xl mx-auto text-center py-16 animate-fade-in">
            <div className="w-16 h-16 border-4 border-primary border-t-transparent rounded-full animate-spin mx-auto mb-4" />
            <p className="text-lg text-muted-foreground">
              Analyzing your resume...
            </p>
          </div>
        )}

        {!isAnalyzing && !showResults && (
          <UploadCard onAnalyze={handleAnalyze} />
        )}
  
        {(isAnalyzing || showResults) && resumeText && jobDescription && (
          <ResultsDashboard 
            onAnalysisComplete={handleAnalysisComplete} 
            resumeText={resumeText} 
            jobDescription={jobDescription} 
            isVisible={showResults}
            onReset={handleReset}
          />
        )}
      </main>
    </div>
  );
};

export default Index;
