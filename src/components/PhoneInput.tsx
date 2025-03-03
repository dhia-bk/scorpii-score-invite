
import React, { useState } from "react";
import { cn } from "@/lib/utils";
import { Country, countries } from "@/utils/countryData";

interface PhoneInputProps {
  id: string;
  label: string;
  value: string;
  countryCode: string;
  onChange: (value: string) => void;
  onCountryChange: (dialCode: string) => void;
  required?: boolean;
  placeholder?: string;
  error?: string;
  className?: string;
}

const PhoneInput: React.FC<PhoneInputProps> = ({
  id,
  label,
  value,
  countryCode,
  onChange,
  onCountryChange,
  required = false,
  placeholder = "Enter phone number",
  error,
  className
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  
  // Get selected country
  const selectedCountry = countries.find(c => c.dial_code === countryCode) || countries[0];
  
  // Filter countries based on search term
  const filteredCountries = countries.filter(country =>
    country.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    country.dial_code.includes(searchTerm)
  );
  
  const handleCountrySelect = (country: Country) => {
    onCountryChange(country.dial_code);
    setIsOpen(false);
    setSearchTerm("");
  };
  
  return (
    <div className={cn("form-field", className)}>
      <label htmlFor={id} className="form-field-label">
        {label}
        {required && <span className="text-destructive ml-1">*</span>}
      </label>
      
      <div className="flex">
        <div className="relative">
          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            className="h-full flex items-center gap-1 px-3 border border-r-0 border-gray-200 rounded-l-md bg-gray-50 hover:bg-gray-100 transition-colors"
          >
            <span className="text-lg">{selectedCountry.flag}</span>
            <span className="text-sm">{selectedCountry.dial_code}</span>
            <svg 
              className={`h-4 w-4 transition-transform ${isOpen ? 'rotate-180' : ''}`} 
              xmlns="http://www.w3.org/2000/svg" 
              viewBox="0 0 20 20" 
              fill="currentColor"
            >
              <path 
                fillRule="evenodd" 
                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" 
                clipRule="evenodd" 
              />
            </svg>
          </button>
          
          {isOpen && (
            <div className="absolute z-50 left-0 mt-1 w-64 bg-white rounded-md shadow-lg max-h-60 overflow-y-auto border border-gray-200">
              <div className="sticky top-0 p-2 bg-white border-b border-gray-200">
                <input
                  type="text"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  placeholder="Search countries..."
                  className="w-full px-3 py-2 border border-gray-200 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-scorpii-accent/30 focus:border-scorpii-accent"
                  onClick={(e) => e.stopPropagation()}
                />
              </div>
              
              <ul className="py-1">
                {filteredCountries.length > 0 ? (
                  filteredCountries.map((country) => (
                    <li
                      key={country.code}
                      className="flex items-center gap-2 px-3 py-2 hover:bg-gray-100 cursor-pointer"
                      onClick={() => handleCountrySelect(country)}
                    >
                      <span className="text-xl">{country.flag}</span>
                      <span className="text-sm">{country.dial_code}</span>
                      <span className="text-sm text-gray-600">{country.name}</span>
                    </li>
                  ))
                ) : (
                  <li className="px-3 py-2 text-gray-500">No countries found</li>
                )}
              </ul>
            </div>
          )}
        </div>
        
        <input
          id={id}
          type="tel"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          className={cn(
            "flex-1 form-field-input rounded-l-none",
            error && "border-destructive focus:ring-destructive/40 focus:border-destructive"
          )}
        />
      </div>
      
      {error && <p className="mt-1.5 text-sm text-destructive">{error}</p>}
    </div>
  );
};

export default PhoneInput;
