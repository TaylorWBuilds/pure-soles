import { Link } from 'react-router-dom'
import ServiceCard from '../components/ServiceCard'
import FAQ from '../components/FAQ'

function Home() {
  const services = [
    {
      id: 'essential',
      name: 'Essential Clean',
      description: 'Surface cleaning for everyday shoes in good condition.',
      price: 20,
      duration: '1-2 days',
    },
    {
      id: 'deep',
      name: 'Deep Clean',
      description: 'Thorough cleaning for moderately dirty shoes.',
      price: 30,
      duration: '2-3 days',
    },
    {
      id: 'premium',
      name: 'Premium Clean',
      description: 'Complete restoration for heavily worn shoes.',
      price: 40,
      duration: '3-4 days',
      popular: true,
    },
  ]

  const benefits = [
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: 'Expert Care',
      description: 'Specialised techniques for every material and brand.',
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: 'Quick Turnaround',
      description: 'Most services completed within 2-4 days.',
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      title: 'Convenient Collection',
      description: 'Collection and delivery available across London.',
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      title: 'Safe & Secure',
      description: 'Fully insured with secure payment options.',
    },
  ]

  const steps = [
    {
      step: '01',
      title: 'Book Your Service',
      description: 'Choose your cleaning package, select a convenient time, and tell us about your shoes.',
    },
    {
      step: '02',
      title: 'We Clean & Restore',
      description: 'Our specialists carefully clean and restore your footwear using premium products.',
    },
    {
      step: '03',
      title: 'Collect Fresh Kicks',
      description: 'Your freshly cleaned shoes are returned, ready to wear with confidence.',
    },
  ]

  const faqs = [
    {
      question: 'How long does the cleaning process take?',
      answer: 'Turnaround time depends on the service level. Essential cleans are typically 1-2 days, whilst premium restoration can take 3-4 days. We\'ll confirm exact timing when you book.',
    },
    {
      question: 'Which materials can you clean?',
      answer: 'We clean leather, canvas, mesh, knit, suede, nubuck, and most synthetic materials. For delicate materials like suede, we use specialised techniques and products.',
    },
    {
      question: 'Do you offer collection and delivery?',
      answer: 'Yes, we offer collection and delivery across London. You can also drop off your shoes at our location. Options and fees are shown during booking.',
    },
  ]

  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-cream overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28 lg:py-36">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="text-center lg:text-left">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-primary leading-tight">
                Give your shoes a
                <span className="block mt-2">fresh start</span>
              </h1>
              <p className="mt-6 text-lg md:text-xl text-gray-600 max-w-xl mx-auto lg:mx-0 leading-relaxed">
                Professional shoe cleaning and restoration that brings your favourite pairs back to life. Quality care for every step.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Link
                  to="/booking"
                  className="inline-flex items-center justify-center px-8 py-4 text-base font-medium text-white bg-primary rounded-full hover:bg-secondary transition-all hover:shadow-lg"
                >
                  Book a Clean
                  <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
                <Link
                  to="/services"
                  className="inline-flex items-center justify-center px-8 py-4 text-base font-medium text-primary bg-white border border-gray-200 rounded-full hover:bg-gray-50 transition-colors"
                >
                  View Services
                </Link>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-gray-100 to-gray-200 rounded-3xl flex items-center justify-center overflow-hidden">
                <div className="text-center p-8">
                  <svg className="w-32 h-32 mx-auto text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={0.5} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                  </svg>
                  <p className="mt-4 text-gray-400 text-sm">Premium shoe imagery coming soon</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-primary">
              Why Pure Soles?
            </h2>
            <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
              We treat every pair with the care and attention they deserve.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="text-center p-6 rounded-2xl bg-cream hover:shadow-lg transition-shadow"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/5 text-primary mb-4">
                  {benefit.icon}
                </div>
                <h3 className="text-lg font-semibold text-primary">{benefit.title}</h3>
                <p className="mt-2 text-gray-600 text-sm leading-relaxed">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-20 md:py-28 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-primary">
              Our Services
            </h2>
            <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
              From everyday refreshes to complete restorations, we have the perfect package for your footwear.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
          <div className="text-center mt-12">
            <Link
              to="/services"
              className="inline-flex items-center text-primary font-medium hover:underline"
            >
              View all services
              <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Before & After */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-primary">
              Transformations
            </h2>
            <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
              See the difference professional cleaning makes.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {/* Before/After Card 1 */}
            <div className="rounded-2xl overflow-hidden bg-gray-100">
              <div className="grid grid-cols-2">
                <div className="aspect-square bg-gray-200 flex items-center justify-center">
                  <div className="text-center">
                    <span className="inline-block px-3 py-1 bg-gray-800 text-white text-xs font-medium rounded-full mb-2">
                      Before
                    </span>
                    <p className="text-gray-400 text-sm px-4">Sample image placeholder</p>
                  </div>
                </div>
                <div className="aspect-square bg-gray-50 flex items-center justify-center">
                  <div className="text-center">
                    <span className="inline-block px-3 py-1 bg-green-600 text-white text-xs font-medium rounded-full mb-2">
                      After
                    </span>
                    <p className="text-gray-400 text-sm px-4">Sample image placeholder</p>
                  </div>
                </div>
              </div>
              <div className="p-6 bg-white">
                <h3 className="font-semibold text-primary">White Leather Sneakers</h3>
                <p className="text-sm text-gray-500 mt-1">Premium Clean Service</p>
              </div>
            </div>
            {/* Before/After Card 2 */}
            <div className="rounded-2xl overflow-hidden bg-gray-100">
              <div className="grid grid-cols-2">
                <div className="aspect-square bg-gray-200 flex items-center justify-center">
                  <div className="text-center">
                    <span className="inline-block px-3 py-1 bg-gray-800 text-white text-xs font-medium rounded-full mb-2">
                      Before
                    </span>
                    <p className="text-gray-400 text-sm px-4">Sample image placeholder</p>
                  </div>
                </div>
                <div className="aspect-square bg-gray-50 flex items-center justify-center">
                  <div className="text-center">
                    <span className="inline-block px-3 py-1 bg-green-600 text-white text-xs font-medium rounded-full mb-2">
                      After
                    </span>
                    <p className="text-gray-400 text-sm px-4">Sample image placeholder</p>
                  </div>
                </div>
              </div>
              <div className="p-6 bg-white">
                <h3 className="font-semibold text-primary">Suede Trainers</h3>
                <p className="text-sm text-gray-500 mt-1">Suede Treatment + Deep Clean</p>
              </div>
            </div>
          </div>
          <div className="text-center mt-12">
            <Link
              to="/gallery"
              className="inline-flex items-center text-primary font-medium hover:underline"
            >
              View full gallery
              <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 md:py-28 bg-primary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">
              How It Works
            </h2>
            <p className="mt-4 text-lg text-gray-300 max-w-2xl mx-auto">
              Getting your shoes professionally cleaned is simple.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
            {steps.map((step, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-white/10 text-2xl font-bold mb-6">
                  {step.step}
                </div>
                <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                <p className="text-gray-300 leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Preview */}
      <section className="py-20 md:py-28 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-primary">
              Clear, Simple Pricing
            </h2>
            <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
              No hidden fees. Just straightforward prices for quality service.
            </p>
          </div>
          <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-primary">Service</th>
                  <th className="px-6 py-4 text-right text-sm font-semibold text-primary">Starting From</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                <tr className="hover:bg-gray-50 transition-colors">
                  <td className="px-6 py-4 text-gray-800">Essential Clean</td>
                  <td className="px-6 py-4 text-right font-medium text-primary">£20</td>
                </tr>
                <tr className="hover:bg-gray-50 transition-colors">
                  <td className="px-6 py-4 text-gray-800">Deep Clean</td>
                  <td className="px-6 py-4 text-right font-medium text-primary">£30</td>
                </tr>
                <tr className="hover:bg-gray-50 transition-colors bg-primary/5">
                  <td className="px-6 py-4 text-gray-800 font-medium">Premium Clean</td>
                  <td className="px-6 py-4 text-right font-semibold text-primary">£40</td>
                </tr>
                <tr className="hover:bg-gray-50 transition-colors">
                  <td className="px-6 py-4 text-gray-800">Suede & Delicate Treatment</td>
                  <td className="px-6 py-4 text-right font-medium text-primary">from £35</td>
                </tr>
                <tr className="hover:bg-gray-50 transition-colors">
                  <td className="px-6 py-4 text-gray-800">Sole Whitening</td>
                  <td className="px-6 py-4 text-right font-medium text-primary">from £15</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-center text-sm text-gray-500 mt-6">
            Prices shown are indicative and subject to confirmation before booking.
          </p>
        </div>
      </section>

      {/* FAQs Preview */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-primary">
              Frequently Asked Questions
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Quick answers to common questions.
            </p>
          </div>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <FAQ key={index} question={faq.question} answer={faq.answer} />
            ))}
          </div>
          <div className="text-center mt-12">
            <Link
              to="/faqs"
              className="inline-flex items-center text-primary font-medium hover:underline"
            >
              View all FAQs
              <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-28 bg-primary text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">
            Ready for fresher shoes?
          </h2>
          <p className="mt-4 text-lg text-gray-300 max-w-xl mx-auto">
            Book your cleaning service today and give your favourite pairs the care they deserve.
          </p>
          <div className="mt-8">
            <Link
              to="/booking"
              className="inline-flex items-center justify-center px-10 py-4 text-base font-medium text-primary bg-white rounded-full hover:bg-gray-100 transition-colors"
            >
              Book Now
              <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home
