
export interface FormData {
  fullName: string;
  email: string;
  phone: string;
  phoneDialCode: string;
  country: string;
  countryCode: string;
  socialMedia: {
    instagram: boolean;
    facebook: boolean;
    twitter: boolean;
    tiktok: boolean;
    youtube: boolean;
    linkedin: boolean;
  };
  howHeard: string;
  consent: boolean;
}

export const initialFormData: FormData = {
  fullName: "",
  email: "",
  phone: "",
  phoneDialCode: "+44", // Default to UK
  country: "",
  countryCode: "",
  socialMedia: {
    instagram: false,
    facebook: false,
    twitter: false,
    tiktok: false,
    youtube: false,
    linkedin: false,
  },
  howHeard: "",
  consent: false,
};

export const validateEmail = (email: string): boolean => {
  const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return emailPattern.test(email);
};

export const validateForm = (data: FormData): { isValid: boolean; errors: Partial<Record<keyof FormData, string>> } => {
  const errors: Partial<Record<keyof FormData, string>> = {};
  
  if (!data.fullName.trim()) {
    errors.fullName = "Full name is required";
  }
  
  if (!data.email.trim()) {
    errors.email = "Email address is required";
  } else if (!validateEmail(data.email)) {
    errors.email = "Please enter a valid email address";
  }
  
  if (!data.countryCode) {
    errors.country = "Country of residence is required";
  }
  
  if (!data.consent) {
    errors.consent = "Consent is required to proceed";
  }
  
  return {
    isValid: Object.keys(errors).length === 0,
    errors
  };
};

export const submitForm = async (data: FormData): Promise<{ success: boolean; message: string }> => {
  try {
    // Log the form data to console for debugging
    console.log("Submitting form data:", data);
    
    // In a real application, this would be an API call to your backend
    // For now, simulate an API call with a timeout
    return new Promise((resolve) => {
      setTimeout(() => {
        // You can add more sophisticated logic here if needed
        const success = true; // Simulate a successful submission
        
        if (success) {
          resolve({
            success: true,
            message: "Thank you for your submission! We'll be in touch soon."
          });
        } else {
          resolve({
            success: false,
            message: "There was a problem submitting your form. Please try again."
          });
        }
      }, 1500); // Simulate network delay
    });
  } catch (error) {
    console.error("Error submitting form:", error);
    return {
      success: false,
      message: "An unexpected error occurred. Please try again later."
    };
  }
};
