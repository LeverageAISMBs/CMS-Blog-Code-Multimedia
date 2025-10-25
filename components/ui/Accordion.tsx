
import React, { useState, createContext, useContext } from 'react';
import { cn } from '../../lib/utils';

interface AccordionContextType {
  type: 'single' | 'multiple';
  collapsible: boolean;
  value: string | string[];
  onValueChange: (value: string) => void;
}

const AccordionContext = createContext<AccordionContextType | null>(null);

const useAccordion = () => {
  const context = useContext(AccordionContext);
  if (!context) {
    throw new Error('useAccordion must be used within an Accordion provider');
  }
  return context;
};

interface AccordionProps {
  type: 'single' | 'multiple';
  collapsible?: boolean;
  defaultValue?: string | string[];
  children: React.ReactNode;
}

export const Accordion: React.FC<AccordionProps> = ({
  type = 'single',
  collapsible = false,
  defaultValue = type === 'single' ? '' : [],
  children,
}) => {
  const [value, setValue] = useState<string | string[]>(defaultValue);

  const onValueChange = (itemValue: string) => {
    if (type === 'single') {
      setValue(collapsible && value === itemValue ? '' : itemValue);
    } else {
      const newValues = Array.isArray(value) ? [...value] : [];
      const index = newValues.indexOf(itemValue);
      if (index > -1) {
        newValues.splice(index, 1);
      } else {
        newValues.push(itemValue);
      }
      setValue(newValues);
    }
  };

  return (
    <AccordionContext.Provider value={{ type, collapsible, value, onValueChange }}>
      <div className="w-full">{children}</div>
    </AccordionContext.Provider>
  );
};

const AccordionItemContext = createContext<string>('');

export const AccordionItem = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement> & { value: string }>(
  ({ className, value, ...props }, ref) => (
    <AccordionItemContext.Provider value={value}>
      <div ref={ref} className={cn('border-b', className)} {...props} />
    </AccordionItemContext.Provider>
  )
);
AccordionItem.displayName = 'AccordionItem';

export const AccordionTrigger = React.forwardRef<HTMLButtonElement, React.ButtonHTMLAttributes<HTMLButtonElement>>(
  ({ className, children, ...props }, ref) => {
    const { value, onValueChange } = useAccordion();
    const itemValue = useContext(AccordionItemContext);
    const isOpen = Array.isArray(value) ? value.includes(itemValue) : value === itemValue;

    return (
      <button
        ref={ref}
        onClick={() => onValueChange(itemValue)}
        aria-expanded={isOpen}
        className={cn(
          'flex flex-1 items-center justify-between py-4 font-medium transition-all hover:underline [&[data-state=open]>svg]:rotate-180',
          className
        )}
        {...props}
      >
        {children}
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4 shrink-0 transition-transform duration-200">
            <path d="m6 9 6 6 6-6"></path>
        </svg>
      </button>
    );
  }
);
AccordionTrigger.displayName = 'AccordionTrigger';

export const AccordionContent = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, children, ...props }, ref) => {
    const { value } = useAccordion();
    const itemValue = useContext(AccordionItemContext);
    const isOpen = Array.isArray(value) ? value.includes(itemValue) : value === itemValue;

    if (!isOpen) {
      return null;
    }

    return (
      <div
        ref={ref}
        className={cn('overflow-hidden text-sm transition-all pb-4', className)}
        {...props}
      >
        <div className="pt-0 text-muted-foreground">{children}</div>
      </div>
    );
  }
);
AccordionContent.displayName = 'AccordionContent';
