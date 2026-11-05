import type { Faq } from "@/lib/types";

export function FaqSection({ faqs, heading = "Common questions" }: { faqs: Faq[]; heading?: string }) {
  if (faqs.length === 0) return null;
  return (
    <section className="mt-10 max-w-3xl" aria-labelledby="faq-heading">
      <h2 id="faq-heading" className="text-2xl font-semibold tracking-tight text-slate-900">
        {heading}
      </h2>
      <dl className="mt-4 divide-y divide-slate-200 rounded-2xl border border-slate-200 bg-white">
        {faqs.map((faq) => (
          <div key={faq.question} className="p-4">
            <dt className="font-semibold text-slate-900">{faq.question}</dt>
            <dd className="mt-2 text-slate-700">{faq.answer}</dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
