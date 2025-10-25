
import React from 'react';
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from '../components/ui/Accordion';

const faqs = [
    {
        question: "What is the Kibo Multimedia CMS?",
        answer: "It is a modern, component-based content management system designed for developers and content creators to manage images, videos, and rich text with ease."
    },
    {
        question: "Is this built with a specific framework?",
        answer: "Yes, the Kibo CMS is built using React, TypeScript, and Tailwind CSS. It leverages a component architecture inspired by libraries like shadcn/ui and kibo-ui."
    },
    {
        question: "Can I customize the components?",
        answer: "Absolutely. The system is designed to be composable and extensible. You can modify existing components or create new ones to fit your project's specific requirements."
    },
    {
        question: "Do you offer enterprise support?",
        answer: "Yes, we offer comprehensive enterprise support plans that include dedicated technical assistance, custom feature development, and service level agreements (SLAs). Please contact our sales team for more information."
    }
]

const FAQPage: React.FC = () => {
  return (
    <div className="space-y-8">
      <div className="text-center">
        <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">Frequently Asked Questions</h1>
        <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed mt-4">
          Have questions? We've got answers.
        </p>
      </div>
      <div className="max-w-3xl mx-auto">
        <Accordion type="single" collapsible>
            {faqs.map((faq, index) => (
                <AccordionItem value={`item-${index + 1}`} key={index}>
                    <AccordionTrigger>{faq.question}</AccordionTrigger>
                    <AccordionContent>{faq.answer}</AccordionContent>
                </AccordionItem>
            ))}
        </Accordion>
      </div>
    </div>
  );
};

export default FAQPage;
