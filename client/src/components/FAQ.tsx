import { ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";

const faqs = [
  {
    question: "How quickly will I see results with the Glow Up Planner?",
    answer: "Most users report seeing positive changes in their productivity and mindset within the first week of using the planner. Consistent daily use for 21 days helps establish lasting habits."
  },
  {
    question: "What's the difference between the Free and Premium versions?",
    answer: "The Free version includes basic daily planning and habit tracking (19 pages). The Premium version adds monthly goal planning, vision boards, reflection exercises, progress dashboards, and bonus worksheets (78 pages total)."
  },
  {
    question: "Is there really a 30-day money-back guarantee?",
    answer: "Absolutely! If you're not completely satisfied with your Premium Glow Up Planner within 30 days, we'll refund your money, no questions asked. We're confident you'll love it."
  },
  {
    question: "Can I print the digital planner multiple times?",
    answer: "Yes! Once you purchase the planner, you can print it as many times as you want for personal use. Many customers print a fresh copy each month or quarter."
  },
  {
    question: "Do I need special software to use the planner?",
    answer: "No! The planner comes as a PDF file that works with any PDF reader. You can use it digitally on your tablet/computer or print it out for handwritten planning."
  },
  {
    question: "Is my payment information secure?",
    answer: "Yes, we use industry-standard SSL encryption and secure payment processors. Your payment information is never stored on our servers and is processed through trusted payment gateways."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 bg-muted">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-4" data-testid="faq-title">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-muted-foreground" data-testid="faq-subtitle">
              Get answers to the most common questions about the Glow Up Planner
            </p>
          </div>
          
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-card rounded-xl border border-border overflow-hidden" data-testid={`faq-item-${index}`}>
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-muted/50 transition-colors"
                  data-testid={`faq-question-${index}`}
                >
                  <span className="font-semibold text-foreground pr-4">{faq.question}</span>
                  {openIndex === index ? (
                    <ChevronUp className="w-5 h-5 text-primary flex-shrink-0" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-primary flex-shrink-0" />
                  )}
                </button>
                {openIndex === index && (
                  <div className="px-6 pb-4">
                    <p className="text-muted-foreground leading-relaxed" data-testid={`faq-answer-${index}`}>
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <p className="text-muted-foreground mb-4">Still have questions?</p>
            <button className="bg-primary text-primary-foreground px-6 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-all">
              Contact Support
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}