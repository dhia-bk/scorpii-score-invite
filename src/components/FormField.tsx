
import React from "react";
import { cn } from "@/lib/utils";

interface FormFieldProps {
  id: string;
  label: string;
  type?: "text" | "email" | "tel" | "textarea";
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  required?: boolean;
  placeholder?: string;
  error?: string;
  className?: string;
}

const FormField: React.FC<FormFieldProps> = ({
  id,
  label,
  type = "text",
  value,
  onChange,
  required = false,
  placeholder,
  error,
  className
}) => {
  const formControlId = `form-field-${id}`;
  
  const renderInput = () => {
    if (type === "textarea") {
      return (
        <textarea
          id={formControlId}
          name={id}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          className={cn(
            "form-field-input min-h-24 resize-none",
            error && "border-destructive focus:ring-destructive/40 focus:border-destructive"
          )}
          required={required}
        />
      );
    }
    
    return (
      <input
        id={formControlId}
        name={id}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className={cn(
          "form-field-input",
          error && "border-destructive focus:ring-destructive/40 focus:border-destructive"
        )}
        required={required}
      />
    );
  };
  
  return (
    <div className={cn("form-field", className)}>
      <label htmlFor={formControlId} className="form-field-label">
        {label}
        {required && <span className="text-destructive ml-1">*</span>}
      </label>
      {renderInput()}
      {error && <p className="mt-1.5 text-sm text-destructive">{error}</p>}
    </div>
  );
};

export default FormField;
