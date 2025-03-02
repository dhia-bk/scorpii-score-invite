
export interface FormData {
  fullName: string;
  email: string;
  phone: string;
  country: string;
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
  country: "",
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
  
  if (!data.country.trim()) {
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
  // Simulate an API call with a timeout
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Form submitted:", data);
      resolve({
        success: true,
        message: "Thank you for your submission! We'll be in touch soon."
      });
    }, 1500);
  });
};
