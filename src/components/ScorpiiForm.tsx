
import React, { useState } from "react";
import { toast } from "@/components/ui/use-toast";
import { Toaster } from "@/components/ui/toaster";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import FormField from "./FormField";
import SocialMediaCheckbox from "./SocialMediaCheckbox";
import AnimatedLogo from "./AnimatedLogo";
import { FormData, initialFormData, validateForm, submitForm } from "@/utils/formUtils";
import { countries } from "@/utils/countryData";
import CountryDropdown from "./CountryDropdown";
import PhoneInput from "./PhoneInput";

const ScorpiiForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [errors, setErrors] = useState<Partial<Record<keyof FormData, string>>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  
  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    // Clear error when user starts typing
    if (errors[name as keyof FormData]) {
      setErrors((prev) => ({
        ...prev,
        [name]: undefined,
      }));
    }
  };
  
  const handlePhoneChange = (value: string) => {
    setFormData((prev) => ({
      ...prev,
      phone: value,
    }));
  };
  
  const handlePhoneCountryChange = (dialCode: string) => {
    setFormData((prev) => ({
      ...prev,
      phoneDialCode: dialCode,
    }));
  };
  
  const handleCountryChange = (country: any) => {
    setFormData((prev) => ({
      ...prev,
      country: country.name,
      countryCode: country.code,
    }));
    // Clear country error
    if (errors.country) {
      setErrors((prev) => ({
        ...prev,
        country: undefined,
      }));
    }
  };
  
  const handleSocialMediaChange = (platform: keyof FormData["socialMedia"], checked: boolean) => {
    setFormData((prev) => ({
      ...prev,
      socialMedia: {
        ...prev.socialMedia,
        [platform]: checked,
      },
    }));
  };
  
  const handleConsentChange = (checked: boolean) => {
    setFormData((prev) => ({
      ...prev,
      consent: checked,
    }));
    // Clear consent error when user checks the box
    if (errors.consent) {
      setErrors((prev) => ({
        ...prev,
        consent: undefined,
      }));
    }
  };
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate form
    const validation = validateForm(formData);
    if (!validation.isValid) {
      setErrors(validation.errors);
      
      // Show error toast
      toast({
        title: "Form validation failed",
        description: "Please check the form for errors and try again.",
        variant: "destructive",
      });
      
      return;
    }
    
    // Submit form
    setIsSubmitting(true);
    try {
      const result = await submitForm(formData);
      if (result.success) {
        setFormSubmitted(true);
        // Show success toast
        toast({
          title: "Form submitted successfully",
          description: result.message,
        });
      } else {
        // Show error toast
        toast({
          title: "Error submitting form",
          description: result.message,
          variant: "destructive",
        });
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      // Show error toast
      toast({
        title: "Error submitting form",
        description: "An unexpected error occurred. Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };
  
  if (formSubmitted) {
    return (
      <div className="form-container animate-scale-in">
        <AnimatedLogo />
        <div className="text-center py-10 px-6">
          <div className="mb-4">
            <Badge className="mx-auto bg-scorpii-success text-white">Success</Badge>
          </div>
          <h2 className="text-2xl font-semibold mb-4">Thank You!</h2>
          <p className="mb-6 text-muted-foreground">
            Your application to join Scorpii Score has been submitted. We'll be in touch soon with more details.
          </p>
          <div className="inline-flex items-center justify-center p-3 bg-scorpii-accent/10 rounded-full mb-6">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-scorpii-accent"
            >
              <path d="M12 13V15" />
              <path d="M12 9h.01" />
              <path d="M3 12a9 9 0 1 0 18 0 9 9 0 0 0-18 0 Z" />
            </svg>
          </div>
          <p className="text-sm text-muted-foreground mb-6">
            As an early adopter, you'll permanently earn the 'pioneer' badge which will stay with your profile forever.
          </p>
          <Button
            className="btn-primary"
            onClick={() => setFormSubmitted(false)}
          >
            Submit Another Response
          </Button>
        </div>
      </div>
    );
  }
  
  // Find the selected country for the dropdown
  const selectedCountry = formData.countryCode ? 
    countries.find(c => c.code === formData.countryCode) || null : null;
  
  return (
    <div className="form-container">
      <AnimatedLogo />
      
      <div className="py-4">
        <h1 className="text-2xl font-semibold mb-2 animate-fade-in">Scorpii Score Early User Invitation</h1>
        <p className="text-muted-foreground mb-6 animate-fade-in delay-75">
          Scorpii Score, a social, competitive mobile app where users predict the scores of football matches will launch to the world in 2025. Before then we would like to invite you to join an exclusive group of early adopters.
        </p>
        
        <div className="bg-scorpii-light p-4 rounded-lg mb-6 animate-slide-up">
          <h3 className="font-medium mb-2">In Scorpii Score you can:</h3>
          <ul className="space-y-2 ml-5 list-disc text-sm text-muted-foreground">
            <li>Predict the scores of any football game from over 1,000 football leagues in the world</li>
            <li>Gain points for your accuracy, allowing you to overtake your friends in our league tables</li>
            <li>Share and discuss football content in our community zone</li>
            <li>See the latest stats on your own performance and the teams you're predicting on in our stats zone</li>
          </ul>
        </div>
        
        <div className="mb-8 animate-slide-up delay-100">
          <div className="flex items-center mb-2">
            <Badge variant="outline" className="mr-2 border-scorpii-accent text-scorpii-accent">
              Pioneer
            </Badge>
            <p className="text-sm font-medium">Early Adopter Benefits</p>
          </div>
          <p className="text-sm text-muted-foreground">
            As an early adopter you will permanently earn the 'pioneer' badge which will stay with your profile forever, as we scale to 100,000 users and beyond.
          </p>
        </div>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="animate-slide-up delay-150">
            <h3 className="text-sm font-medium text-muted-foreground uppercase tracking-wide mb-4">
              Required Information
            </h3>
            
            <FormField
              id="fullName"
              label="1. Full name"
              type="text"
              value={formData.fullName}
              onChange={handleInputChange}
              required
              placeholder="Enter your full name"
              error={errors.fullName}
              className="mb-4"
            />
            
            <FormField
              id="email"
              label="2. Email address"
              type="email"
              value={formData.email}
              onChange={handleInputChange}
              required
              placeholder="Enter your email address"
              error={errors.email}
              className="mb-4"
            />
            
            <PhoneInput
              id="phone"
              label="3. Please provide your phone number if you would be happy to be added to an exclusive WhatsApp group of other Scorpii Score early adopters"
              value={formData.phone}
              countryCode={formData.phoneDialCode}
              onChange={handlePhoneChange}
              onCountryChange={handlePhoneCountryChange}
              placeholder="Enter your phone number (optional)"
              className="mb-4"
            />
            
            <CountryDropdown
              id="country"
              label="4. Please state your country of residence"
              countries={countries}
              selectedCountry={selectedCountry}
              onSelect={handleCountryChange}
              required
              placeholder="Select your country of residence"
              error={errors.country}
              className="mb-4"
            />
          </div>
          
          <div className="animate-slide-up delay-200">
            <h3 className="text-sm font-medium mb-3">
              5. Have you followed our community on social media? Tick all that apply
            </h3>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-6">
              <SocialMediaCheckbox
                id="instagram"
                platform="Instagram"
                handle="@scorpiiscore"
                checked={formData.socialMedia.instagram}
                onChange={(checked) => handleSocialMediaChange("instagram", checked)}
              />
              
              <SocialMediaCheckbox
                id="facebook"
                platform="Facebook"
                handle="ScorpiiScore"
                checked={formData.socialMedia.facebook}
                onChange={(checked) => handleSocialMediaChange("facebook", checked)}
              />
              
              <SocialMediaCheckbox
                id="twitter"
                platform="X"
                handle="@ScorpiiScore"
                checked={formData.socialMedia.twitter}
                onChange={(checked) => handleSocialMediaChange("twitter", checked)}
              />
              
              <SocialMediaCheckbox
                id="tiktok"
                platform="TikTok"
                handle="@ScorpiiScore"
                checked={formData.socialMedia.tiktok}
                onChange={(checked) => handleSocialMediaChange("tiktok", checked)}
              />
              
              <SocialMediaCheckbox
                id="youtube"
                platform="YouTube"
                handle="ScorpiiScore"
                checked={formData.socialMedia.youtube}
                onChange={(checked) => handleSocialMediaChange("youtube", checked)}
              />
              
              <SocialMediaCheckbox
                id="linkedin"
                platform="LinkedIn"
                handle="Scorpii Score"
                checked={formData.socialMedia.linkedin}
                onChange={(checked) => handleSocialMediaChange("linkedin", checked)}
              />
            </div>
            
            <FormField
              id="howHeard"
              label="6. How did you hear about us?"
              type="textarea"
              value={formData.howHeard}
              onChange={handleInputChange}
              placeholder="Enter your answer"
              className="mb-6"
            />
          </div>
          
          <div className="border-t pt-6 animate-slide-up delay-300">
            <div className="flex items-start space-x-2 mb-8">
              <Checkbox
                id="consent"
                checked={formData.consent}
                onCheckedChange={handleConsentChange}
                className="mt-1 data-[state=checked]:bg-scorpii-accent data-[state=checked]:border-scorpii-accent"
              />
              <div className="grid gap-1.5 leading-none">
                <Label
                  htmlFor="consent"
                  className={`text-sm leading-normal peer-disabled:cursor-not-allowed peer-disabled:opacity-70 ${
                    errors.consent ? "text-destructive" : ""
                  }`}
                >
                  7. I consent to my personal details being securely stored to contact me with updates about Scorpii Score, to invite me to participate in the app's early release and to participate in consultations. I may withdraw this permission at any time by contacting callum@calgra.com
                </Label>
                {errors.consent && (
                  <p className="text-sm text-destructive mt-1">{errors.consent}</p>
                )}
              </div>
            </div>
            
            <div className="flex items-center justify-end">
              <Button
                type="submit"
                className="btn-primary"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Submitting..." : "Submit"}
              </Button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ScorpiiForm;
