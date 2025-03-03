
import React, { useState, useRef, useEffect } from "react";
import { cn } from "@/lib/utils";
import { Country } from "@/utils/countryData";

interface CountryDropdownProps {
  id: string;
  countries: Country[];
  selectedCountry: Country | null;
  onSelect: (country: Country) => void;
  label?: string;
  error?: string;
  placeholder?: string;
  required?: boolean;
  className?: string;
}

const CountryDropdown: React.FC<CountryDropdownProps> = ({
  id,
  countries,
  selectedCountry,
  onSelect,
  label,
  error,
  placeholder = "Select a country",
  required = false,
  className
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const dropdownRef = useRef<HTMLDivElement>(null);
  
  // Filter countries based on search term
  const filteredCountries = countries.filter(country =>
    country.name.toLowerCase().includes(searchTerm.toLowerCase())
  );
  
  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);
  
  const handleSelect = (country: Country) => {
    onSelect(country);
    setIsOpen(false);
    setSearchTerm("");
  };
  
  return (
    <div className={cn("form-field", className)}>
      {label && (
        <label htmlFor={id} className="form-field-label">
          {label}
          {required && <span className="text-destructive ml-1">*</span>}
        </label>
      )}
      
      <div ref={dropdownRef} className="relative">
        <div
          className={cn(
            "form-field-input flex items-center cursor-pointer",
            error && "border-destructive focus:ring-destructive/40 focus:border-destructive"
          )}
          onClick={() => setIsOpen(!isOpen)}
        >
          {selectedCountry ? (
            <div className="flex items-center gap-2 w-full">
              <img 
                src={selectedCountry.flagUrl} 
                alt={`${selectedCountry.name} flag`}
                className="w-5 h-auto object-contain"
              />
              <span>{selectedCountry.name}</span>
            </div>
          ) : (
            <span className="text-gray-400">{placeholder}</span>
          )}
          <svg 
            className={`ml-auto h-5 w-5 transition-transform ${isOpen ? 'rotate-180' : ''}`} 
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
        </div>
        
        {isOpen && (
          <div className="absolute z-50 w-full mt-1 bg-white rounded-md shadow-lg max-h-60 overflow-y-auto border border-gray-200">
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
                    onClick={() => handleSelect(country)}
                  >
                    <img 
                      src={country.flagUrl} 
                      alt={`${country.name} flag`}
                      className="w-5 h-auto object-contain"
                    />
                    <span>{country.name}</span>
                  </li>
                ))
              ) : (
                <li className="px-3 py-2 text-gray-500">No countries found</li>
              )}
            </ul>
          </div>
        )}
      </div>
      
      {error && <p className="mt-1.5 text-sm text-destructive">{error}</p>}
    </div>
  );
};

export default CountryDropdown;
