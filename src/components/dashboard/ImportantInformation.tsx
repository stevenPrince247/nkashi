
import React, { useState, useEffect } from "react";
import { Card } from "@/components/ui/card";
import TypewriterText from "../ui/TypewriterText";

const ImportantInformation = () => {
  const [currentStep, setCurrentStep] = useState(0);
  
  const steps = [
    'Click "Buy BPC" from dashboard',
    'Fill details and amount',
    'Complete payment for BPC code',
    'Use code for airtime & withdrawals'
  ];

  const [currentStepText, setCurrentStepText] = useState(steps[0]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentStep((prev) => {
        const nextStep = (prev + 1) % steps.length;
        setCurrentStepText(steps[nextStep]);
        return nextStep;
      });
    }, 4000);

    return () => clearInterval(interval);
  }, [steps.length]);

  return (
    <Card className="bg-gradient-to-r from-blue-500 to-purple-600 p-4 mb-4 text-white shadow-lg">
      <h3 className="text-lg font-bold mb-2 text-white">Important Information</h3>
      
      <div className="bg-white/20 rounded-lg p-3 backdrop-blur-sm">
        <h4 className="text-base font-semibold mb-2 text-white">How to Buy BPC Code</h4>
        
        <div className="space-y-2">
          {steps.map((step, index) => (
            <div 
              key={index}
              className={`flex items-center transition-all duration-500 transform ${
                index === currentStep 
                  ? 'scale-105 opacity-100 translate-x-1' 
                  : 'scale-100 opacity-70 translate-x-0'
              }`}
            >
              <div className={`w-5 h-5 rounded-full flex items-center justify-center mr-2 transition-all duration-500 ${
                index === currentStep 
                  ? 'bg-yellow-400 text-blue-900 shadow-lg' 
                  : 'bg-white/30 text-white'
              }`}>
                <span className="text-xs font-bold">{index + 1}</span>
              </div>
              <p className={`text-xs transition-all duration-500 ${
                index === currentStep ? 'font-semibold text-yellow-100' : 'text-white/90'
              }`}>
                {index === currentStep ? (
                  <TypewriterText 
                    text={currentStepText} 
                    speed={80}
                    className="text-yellow-100"
                  />
                ) : (
                  step
                )}
              </p>
            </div>
          ))}
        </div>
        
        <div className="flex space-x-1 mt-2 justify-center">
          {steps.map((_, index) => (
            <div
              key={index}
              className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
                index === currentStep ? 'bg-yellow-400' : 'bg-white/40'
              }`}
            />
          ))}
        </div>
      </div>
    </Card>
  );
};

export default ImportantInformation;
