function Gallery() {
  const transformations = [
    {
      id: 1,
      title: 'White Air Force 1s',
      service: 'Premium Clean + Sole Whitening',
      before: null,
      after: null,
    },
    {
      id: 2,
      title: 'Black Jordan 1s',
      service: 'Deep Clean',
      before: null,
      after: null,
    },
    {
      id: 3,
      title: 'Beige Suede Boots',
      service: 'Suede Treatment',
      before: null,
      after: null,
    },
    {
      id: 4,
      title: 'White Ultraboost',
      service: 'Premium Clean',
      before: null,
      after: null,
    },
    {
      id: 5,
      title: 'Grey New Balance',
      service: 'Deep Clean',
      before: null,
      after: null,
    },
    {
      id: 6,
      title: 'White Nike Dunks',
      service: 'Premium Clean + Sole Whitening',
      before: null,
      after: null,
    },
  ]

  return (
    <div className="bg-warm-white">
      {/* Hero */}
      <section className="bg-cream py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-semibold tracking-tight text-primary">
            Gallery
          </h1>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            See the difference professional cleaning makes. Real transformations from our workshop.
          </p>
          <p className="mt-4 text-sm text-gray-500">
            Sample images shown — professional photography coming soon.
          </p>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {transformations.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
              >
                {/* Before/After Images */}
                <div className="grid grid-cols-2">
                  <div className="aspect-square bg-gray-200 flex items-center justify-center">
                    <div className="text-center">
                      <span className="inline-block px-3 py-1 bg-gray-800 text-white text-xs font-medium rounded-full mb-2">
                        Before
                      </span>
                      <p className="text-gray-400 text-xs px-4">Image placeholder</p>
                    </div>
                  </div>
                  <div className="aspect-square bg-gray-50 flex items-center justify-center">
                    <div className="text-center">
                      <span className="inline-block px-3 py-1 bg-green-600 text-white text-xs font-medium rounded-full mb-2">
                        After
                      </span>
                      <p className="text-gray-400 text-xs px-4">Image placeholder</p>
                    </div>
                  </div>
                </div>
                {/* Details */}
                <div className="p-6">
                  <h3 className="font-semibold text-primary">{item.title}</h3>
                  <p className="text-sm text-gray-500 mt-1">{item.service}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call for Submissions */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-primary">
            Want to Feature Your Shoes?
          </h2>
          <p className="mt-4 text-gray-600">
            Book a cleaning service and we may feature your transformation in our gallery.
          </p>
        </div>
      </section>
    </div>
  )
}

export default Gallery
