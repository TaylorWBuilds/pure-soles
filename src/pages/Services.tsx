import { Link } from 'react-router-dom'

function Services() {
  const services = [
    {
      id: 'essential',
      name: 'Essential Clean',
      description: 'A surface-level clean ideal for shoes in relatively good condition that just need a refresh. Perfect for regular maintenance.',
      price: 20,
      duration: '1-2 days',
      includes: [
        'Surface dirt removal',
        'Upper cleaning',
        'Sole wipe down',
        'Lace cleaning',
        'Basic conditioning',
      ],
      suitable: ['Canvas sneakers', 'Leather shoes', 'Synthetic materials'],
    },
    {
      id: 'deep',
      name: 'Deep Clean',
      description: 'A thorough cleaning for moderately dirty shoes. Goes deeper into materials to lift embedded dirt and stains.',
      price: 30,
      duration: '2-3 days',
      includes: [
        'Deep dirt extraction',
        'Stain treatment',
        'Full upper restoration',
        'Sole deep clean',
        'Insole freshening',
        'Lace replacement or deep clean',
        'Conditioning treatment',
      ],
      suitable: ['Heavily worn sneakers', 'Canvas shoes', 'Mesh running shoes', 'Knit uppers'],
    },
    {
      id: 'premium',
      name: 'Premium Clean',
      description: 'Our most comprehensive service for heavily worn or neglected shoes. Complete restoration to bring your favourites back to life.',
      price: 40,
      duration: '3-4 days',
      popular: true,
      includes: [
        'Complete deep clean',
        'Advanced stain removal',
        'Odour elimination',
        'Colour restoration',
        'Sole whitening treatment',
        'Lace replacement',
        'Premium conditioning',
        'Water-repellent finish',
      ],
      suitable: ['All shoe types', 'Heavily stained shoes', 'Long-term wear restoration'],
    },
    {
      id: 'suede',
      name: 'Suede & Delicate Treatment',
      description: 'Specialised cleaning for delicate materials requiring gentle, expert handling.',
      price: 35,
      priceNote: 'from',
      duration: '3-4 days',
      includes: [
        'Gentle dry cleaning',
        'Nap restoration',
        'Stain removal',
        'Waterproofing treatment',
        'Colour revival',
      ],
      suitable: ['Suede shoes', 'Nubuck', 'Delicate leathers'],
      note: 'Not suitable for heavily water-damaged suede',
    },
    {
      id: 'sole',
      name: 'Sole Whitening',
      description: 'Restore yellowed or stained midsoles to their original brightness.',
      price: 15,
      priceNote: 'from',
      duration: '2-3 days',
      includes: [
        'Midsole deep clean',
        'Yellowing treatment',
        'Edge restoration',
      ],
      suitable: ['Rubber midsoles', 'Phylon soles', 'Most sneaker types'],
      note: 'Results vary depending on sole condition',
    },
    {
      id: 'laces',
      name: 'Lace Cleaning or Replacement',
      description: 'Freshen up your laces with a deep clean or get brand new replacements.',
      price: 5,
      duration: 'Same day',
      includes: [
        'Deep lace cleaning',
        'Or replacement with new laces',
      ],
      suitable: ['All lace types'],
    },
  ]

  const addOns = [
    { name: 'Water-repellent coating', price: 10 },
    { name: 'Deodorising treatment', price: 5 },
    { name: 'Quick turnaround (priority)', price: 15 },
    { name: 'Premium lace upgrade', price: 8 },
  ]

  return (
    <div className="bg-warm-white">
      {/* Hero */}
      <section className="bg-cream py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-semibold tracking-tight text-primary">
            Services & Pricing
          </h1>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Professional shoe cleaning and restoration services tailored to your needs.
          </p>
          <p className="mt-4 text-sm text-gray-500">
            Prices shown are indicative and subject to confirmation before booking.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <div
                key={service.id}
                className={`relative bg-white rounded-2xl shadow-sm border overflow-hidden ${
                  service.popular ? 'border-primary ring-1 ring-primary' : 'border-gray-100'
                }`}
              >
                {service.popular && (
                  <div className="bg-primary text-white text-center py-2 text-sm font-medium">
                    Most Popular
                  </div>
                )}
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-primary">{service.name}</h3>
                  <p className="mt-3 text-gray-600 text-sm leading-relaxed">{service.description}</p>
                  
                  <div className="mt-6 flex items-baseline">
                    <span className="text-sm text-gray-500 mr-1">{service.priceNote}</span>
                    <span className="text-3xl font-semibold text-primary">£{service.price}</span>
                  </div>
                  <p className="text-sm text-gray-500">{service.duration} turnaround</p>

                  <div className="mt-6 pt-6 border-t border-gray-100">
                    <h4 className="text-sm font-medium text-primary mb-3">Includes:</h4>
                    <ul className="space-y-2">
                      {service.includes.map((item, index) => (
                        <li key={index} className="flex items-start text-sm text-gray-600">
                          <svg className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {service.suitable && (
                    <div className="mt-4">
                      <h4 className="text-sm font-medium text-primary mb-2">Suitable for:</h4>
                      <p className="text-sm text-gray-500">{service.suitable.join(' • ')}</p>
                    </div>
                  )}

                  {service.note && (
                    <p className="mt-3 text-xs text-amber-600 bg-amber-50 px-3 py-2 rounded-lg">
                      {service.note}
                    </p>
                  )}

                  <Link
                    to={`/booking?service=${service.id}`}
                    className={`mt-6 block w-full text-center py-3 rounded-full font-medium transition-colors ${
                      service.popular
                        ? 'bg-primary text-white hover:bg-secondary'
                        : 'bg-gray-100 text-primary hover:bg-gray-200'
                    }`}
                  >
                    Book This Service
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Add-ons */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-primary">
              Optional Add-ons
            </h2>
            <p className="mt-3 text-gray-600">
              Enhance your cleaning service with these extras.
            </p>
          </div>
          <div className="bg-cream rounded-2xl p-8">
            <div className="grid sm:grid-cols-2 gap-4">
              {addOns.map((addon, index) => (
                <div
                  key={index}
                  className="flex justify-between items-center p-4 bg-white rounded-xl"
                >
                  <span className="text-gray-800">{addon.name}</span>
                  <span className="font-semibold text-primary">+£{addon.price}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24 bg-primary text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">
            Ready to book?
          </h2>
          <p className="mt-4 text-lg text-gray-300 max-w-xl mx-auto">
            Choose your service and select a convenient time for collection or drop-off.
          </p>
          <Link
            to="/booking"
            className="mt-8 inline-flex items-center justify-center px-10 py-4 text-base font-medium text-primary bg-white rounded-full hover:bg-gray-100 transition-colors"
          >
            Book Now
          </Link>
        </div>
      </section>
    </div>
  )
}

export default Services
