import FAQ from '../components/FAQ'

function FAQs() {
  const faqs = [
    {
      category: 'The Cleaning Process',
      questions: [
        {
          question: 'How does the cleaning process work?',
          answer: 'After booking, we\'ll arrange collection or you can drop off your shoes. Our specialists assess each pair and apply appropriate cleaning techniques for the material. Once complete, we\'ll contact you to arrange return or collection.',
        },
        {
          question: 'What cleaning products do you use?',
          answer: 'We use professional-grade, eco-friendly cleaning products specifically formulated for each material type. We avoid harsh chemicals that could damage delicate materials.',
        },
        {
          question: 'Do you clean all types of shoes?',
          answer: 'We clean most footwear including sneakers, trainers, casual shoes, and boots. We specialise in athletic and lifestyle footwear. For formal leather shoes or exotic materials, please contact us first.',
        },
      ],
    },
    {
      category: 'Turnaround & Collection',
      questions: [
        {
          question: 'How long does cleaning take?',
          answer: 'Essential cleans take 1-2 days, deep cleans 2-3 days, and premium restoration 3-4 days. Complex jobs or multiple pairs may take longer. We\'ll confirm timing when you book.',
        },
        {
          question: 'Do you offer collection and delivery?',
          answer: 'Yes, we offer collection and delivery across London and surrounding areas. Fees vary by distance and are shown during booking. You can also drop off and collect from our location.',
        },
        {
          question: 'Where are you located?',
          answer: 'We\'re based in London. Our exact address will be provided upon booking confirmation. Drop-off is available by appointment.',
        },
      ],
    },
    {
      category: 'Materials & Suitability',
      questions: [
        {
          question: 'Can you clean suede shoes?',
          answer: 'Yes, we have a specialised Suede & Delicate Treatment service. Suede requires gentle dry cleaning methods and specific products. Heavily water-damaged suede may not be fully restorable.',
        },
        {
          question: 'Will cleaning damage my shoes?',
          answer: 'We use appropriate techniques for each material and always assess condition before cleaning. However, very old or already damaged shoes may have limitations. We\'ll advise if we spot any concerns.',
        },
        {
          question: 'Can you remove all stains?',
          answer: 'We can remove most common stains, but some permanent damage (like deep ink stains or bleach marks) may not be fully removable. We\'ll set realistic expectations when assessing your shoes.',
        },
      ],
    },
    {
      category: 'Payments & Pricing',
      questions: [
        {
          question: 'How do I pay?',
          answer: 'Payment is made securely online at the time of booking via Stripe. We accept all major credit and debit cards. No payment is taken until you confirm your booking.',
        },
        {
          question: 'Are prices fixed?',
          answer: 'Prices shown are starting prices. Final costs may vary based on shoe condition, material, and any additional treatments required. We\'ll confirm the exact price before starting work.',
        },
        {
          question: 'Is there a booking fee?',
          answer: 'No booking fees. The price you see includes the cleaning service. Collection/delivery fees are shown separately during booking if applicable.',
        },
      ],
    },
    {
      category: 'Cancellations & Rescheduling',
      questions: [
        {
          question: 'Can I cancel my booking?',
          answer: 'You can cancel up to 24 hours before your scheduled collection/drop-off for a full refund. Cancellations within 24 hours may incur a fee. See our cancellation policy for details.',
        },
        {
          question: 'Can I reschedule my appointment?',
          answer: 'Yes, you can reschedule once up to 24 hours before your appointment through your account dashboard or by contacting us.',
        },
        {
          question: 'What if I\'m not happy with the results?',
          answer: 'We stand behind our work. If you\'re not satisfied, contact us within 48 hours of collection and we\'ll work to make it right.',
        },
      ],
    },
  ]

  return (
    <div className="bg-warm-white">
      {/* Hero */}
      <section className="bg-cream py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-semibold tracking-tight text-primary">
            Frequently Asked Questions
          </h1>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Everything you need to know about our services.
          </p>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-16 md:py-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          {faqs.map((category, categoryIndex) => (
            <div key={categoryIndex} className="mb-12 last:mb-0">
              <h2 className="text-xl font-semibold text-primary mb-6 pb-2 border-b border-gray-200">
                {category.category}
              </h2>
              <div className="space-y-4">
                {category.questions.map((faq, faqIndex) => (
                  <FAQ key={faqIndex} question={faq.question} answer={faq.answer} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 bg-primary text-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">
            Still have questions?
          </h2>
          <p className="mt-4 text-gray-300">
            We're happy to help. Get in touch and we'll get back to you as soon as possible.
          </p>
          <a
            href="/contact"
            className="mt-6 inline-flex items-center justify-center px-8 py-3 text-base font-medium text-primary bg-white rounded-full hover:bg-gray-100 transition-colors"
          >
            Contact Us
          </a>
        </div>
      </section>
    </div>
  )
}

export default FAQs
