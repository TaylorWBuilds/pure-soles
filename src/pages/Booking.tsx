import { useState, useEffect } from 'react'
import { useSearchParams, Link } from 'react-router-dom'

interface BookingFormData {
  service: string
  addons: string[]
  shoeDetails: {
    brand: string
    model: string
    material: string
    colour: string
    condition: string
    notes: string
  }
  date: string
  time: string
  deliveryMethod: string
  contact: {
    firstName: string
    lastName: string
    email: string
    phone: string
    address: string
    postcode: string
  }
}

const services = [
  { id: 'essential', name: 'Essential Clean', price: 20 },
  { id: 'deep', name: 'Deep Clean', price: 30 },
  { id: 'premium', name: 'Premium Clean', price: 40 },
  { id: 'suede', name: 'Suede & Delicate Treatment', price: 35 },
  { id: 'sole', name: 'Sole Whitening', price: 15 },
  { id: 'laces', name: 'Lace Cleaning or Replacement', price: 5 },
]

const addons = [
  { id: 'waterproof', name: 'Water-repellent coating', price: 10 },
  { id: 'deodorise', name: 'Deodorising treatment', price: 5 },
  { id: 'priority', name: 'Quick turnaround (priority)', price: 15 },
  { id: 'premium-laces', name: 'Premium lace upgrade', price: 8 },
]

const timeSlots = [
  '09:00', '09:30', '10:00', '10:30', '11:00', '11:30',
  '12:00', '12:30', '13:00', '13:30', '14:00', '14:30',
  '15:00', '15:30', '16:00', '16:30', '17:00', '17:30',
]

const deliveryMethods = [
  { id: 'dropoff', name: 'Drop-off', description: 'Bring your shoes to our location', price: 0 },
  { id: 'collection', name: 'Collection & Delivery', description: 'We collect and return your shoes', price: 8 },
]

function Booking() {
  const [searchParams] = useSearchParams()
  const [currentStep, setCurrentStep] = useState(1)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [bookingComplete, setBookingComplete] = useState(false)
  const [bookingReference, setBookingReference] = useState('')

  const [formData, setFormData] = useState<BookingFormData>({
    service: '',
    addons: [],
    shoeDetails: {
      brand: '',
      model: '',
      material: '',
      colour: '',
      condition: '',
      notes: '',
    },
    date: '',
    time: '',
    deliveryMethod: '',
    contact: {
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      address: '',
      postcode: '',
    },
  })

  useEffect(() => {
    const serviceParam = searchParams.get('service')
    if (serviceParam && services.find(s => s.id === serviceParam)) {
      setFormData(prev => ({ ...prev, service: serviceParam }))
    }
  }, [searchParams])

  const steps = [
    { number: 1, title: 'Service' },
    { number: 2, title: 'Shoe Details' },
    { number: 3, title: 'Date & Time' },
    { number: 4, title: 'Delivery' },
    { number: 5, title: 'Contact' },
    { number: 6, title: 'Confirm' },
  ]

  const selectedService = services.find(s => s.id === formData.service)
  const selectedAddons = addons.filter(a => formData.addons.includes(a.id))
  const selectedDelivery = deliveryMethods.find(d => d.id === formData.deliveryMethod)
  
  const subtotal = (selectedService?.price || 0) + selectedAddons.reduce((sum, a) => sum + a.price, 0)
  const deliveryCost = selectedDelivery?.price || 0
  const total = subtotal + deliveryCost

  const handleServiceSelect = (serviceId: string) => {
    setFormData(prev => ({ ...prev, service: serviceId }))
  }

  const handleAddonToggle = (addonId: string) => {
    setFormData(prev => ({
      ...prev,
      addons: prev.addons.includes(addonId)
        ? prev.addons.filter(id => id !== addonId)
        : [...prev.addons, addonId],
    }))
  }

  const handleShoeDetailsChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      shoeDetails: { ...prev.shoeDetails, [field]: value },
    }))
  }

  const handleContactChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      contact: { ...prev.contact, [field]: value },
    }))
  }

  const canProceed = () => {
    switch (currentStep) {
      case 1:
        return formData.service !== ''
      case 2:
        return formData.shoeDetails.brand && formData.shoeDetails.model && formData.shoeDetails.material
      case 3:
        return formData.date && formData.time
      case 4:
        return formData.deliveryMethod !== ''
      case 5:
        return formData.contact.firstName && formData.contact.lastName && 
               formData.contact.email && formData.contact.phone
      case 6:
        return true
      default:
        return false
    }
  }

  const handleSubmit = async () => {
    setIsSubmitting(true)
    // Simulated booking submission
    setTimeout(() => {
      const ref = 'PS-' + Date.now().toString(36).toUpperCase()
      setBookingReference(ref)
      setBookingComplete(true)
      setIsSubmitting(false)
    }, 2000)
  }

  // Generate next 14 days for date selection
  const getAvailableDates = () => {
    const dates = []
    const today = new Date()
    for (let i = 1; i <= 14; i++) {
      const date = new Date(today)
      date.setDate(today.getDate() + i)
      // Skip Sundays
      if (date.getDay() !== 0) {
        dates.push(date.toISOString().split('T')[0])
      }
    }
    return dates
  }

  if (bookingComplete) {
    return (
      <div className="min-h-screen bg-cream flex items-center justify-center py-16 px-4">
        <div className="max-w-md w-full bg-white rounded-2xl shadow-sm border border-gray-100 p-8 text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-6">
            <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h1 className="text-2xl font-semibold text-primary">Booking Request Received</h1>
          <p className="mt-4 text-gray-600">
            Thank you for your booking request. We'll confirm your appointment shortly.
          </p>
          <div className="mt-6 p-4 bg-gray-50 rounded-xl">
            <p className="text-sm text-gray-500">Your Reference</p>
            <p className="text-2xl font-mono font-semibold text-primary mt-1">{bookingReference}</p>
          </div>
          <p className="mt-6 text-xs text-gray-400">
            This is a demonstration booking. Payment integration and email confirmations will be configured before launch.
          </p>
          <Link
            to="/"
            className="mt-8 inline-block w-full py-3 bg-primary text-white font-medium rounded-full hover:bg-secondary transition-colors"
          >
            Return Home
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="bg-warm-white min-h-screen">
      {/* Header */}
      <section className="bg-cream py-8 md:py-12 border-b border-gray-100">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl md:text-4xl font-semibold tracking-tight text-primary text-center">
            Book a Clean
          </h1>
          
          {/* Progress Steps */}
          <div className="mt-8 flex justify-between items-center">
            {steps.map((step, index) => (
              <div key={step.number} className="flex items-center">
                <div className={`flex items-center justify-center w-8 h-8 rounded-full text-sm font-medium ${
                  currentStep >= step.number
                    ? 'bg-primary text-white'
                    : 'bg-gray-200 text-gray-500'
                }`}>
                  {step.number}
                </div>
                <span className={`hidden sm:block ml-2 text-sm ${
                  currentStep >= step.number ? 'text-primary font-medium' : 'text-gray-400'
                }`}>
                  {step.title}
                </span>
                {index < steps.length - 1 && (
                  <div className={`hidden sm:block w-8 lg:w-16 h-0.5 mx-2 ${
                    currentStep > step.number ? 'bg-primary' : 'bg-gray-200'
                  }`} />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Form Content */}
      <section className="py-8 md:py-12">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Step 1: Service Selection */}
          {currentStep === 1 && (
            <div>
              <h2 className="text-xl font-semibold text-primary mb-6">Select Your Service</h2>
              <div className="grid sm:grid-cols-2 gap-4 mb-8">
                {services.map((service) => (
                  <button
                    key={service.id}
                    onClick={() => handleServiceSelect(service.id)}
                    className={`p-4 rounded-xl border-2 text-left transition-all ${
                      formData.service === service.id
                        ? 'border-primary bg-primary/5'
                        : 'border-gray-200 hover:border-gray-300'
                    }`}
                  >
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="font-medium text-primary">{service.name}</h3>
                        <p className="text-sm text-gray-500 mt-1">From £{service.price}</p>
                      </div>
                      {formData.service === service.id && (
                        <svg className="w-5 h-5 text-primary" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                      )}
                    </div>
                  </button>
                ))}
              </div>

              {formData.service && (
                <>
                  <h3 className="text-lg font-semibold text-primary mb-4">Optional Add-ons</h3>
                  <div className="space-y-3">
                    {addons.map((addon) => (
                      <button
                        key={addon.id}
                        onClick={() => handleAddonToggle(addon.id)}
                        className={`w-full p-4 rounded-xl border text-left flex justify-between items-center transition-all ${
                          formData.addons.includes(addon.id)
                            ? 'border-primary bg-primary/5'
                            : 'border-gray-200 hover:border-gray-300'
                        }`}
                      >
                        <span className="font-medium text-primary">{addon.name}</span>
                        <span className="text-primary">+£{addon.price}</span>
                      </button>
                    ))}
                  </div>
                </>
              )}
            </div>
          )}

          {/* Step 2: Shoe Details */}
          {currentStep === 2 && (
            <div>
              <h2 className="text-xl font-semibold text-primary mb-6">Tell Us About Your Shoes</h2>
              <div className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Brand *
                    </label>
                    <input
                      type="text"
                      value={formData.shoeDetails.brand}
                      onChange={(e) => handleShoeDetailsChange('brand', e.target.value)}
                      placeholder="e.g., Nike, Adidas"
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Model *
                    </label>
                    <input
                      type="text"
                      value={formData.shoeDetails.model}
                      onChange={(e) => handleShoeDetailsChange('model', e.target.value)}
                      placeholder="e.g., Air Force 1, UltraBoost"
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Material *
                    </label>
                    <select
                      value={formData.shoeDetails.material}
                      onChange={(e) => handleShoeDetailsChange('material', e.target.value)}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none bg-white"
                    >
                      <option value="">Select material</option>
                      <option value="leather">Leather</option>
                      <option value="suede">Suede</option>
                      <option value="canvas">Canvas</option>
                      <option value="mesh">Mesh/Knit</option>
                      <option value="synthetic">Synthetic</option>
                      <option value="mixed">Mixed Materials</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Colour
                    </label>
                    <input
                      type="text"
                      value={formData.shoeDetails.colour}
                      onChange={(e) => handleShoeDetailsChange('colour', e.target.value)}
                      placeholder="e.g., White, Black/Red"
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Condition
                  </label>
                  <select
                    value={formData.shoeDetails.condition}
                    onChange={(e) => handleShoeDetailsChange('condition', e.target.value)}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none bg-white"
                  >
                    <option value="">Select condition</option>
                    <option value="good">Good - Light wear</option>
                    <option value="moderate">Moderate - Some dirt and scuffs</option>
                    <option value="heavy">Heavy - Significant dirt or stains</option>
                    <option value="poor">Poor - Heavily worn, needs restoration</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Additional Notes
                  </label>
                  <textarea
                    value={formData.shoeDetails.notes}
                    onChange={(e) => handleShoeDetailsChange('notes', e.target.value)}
                    rows={3}
                    placeholder="Any specific stains, damage, or areas of concern?"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none resize-none"
                  />
                </div>
              </div>
            </div>
          )}

          {/* Step 3: Date & Time */}
          {currentStep === 3 && (
            <div>
              <h2 className="text-xl font-semibold text-primary mb-6">Select Date & Time</h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-3">Date</label>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                    {getAvailableDates().map((date) => {
                      const d = new Date(date)
                      const dayName = d.toLocaleDateString('en-GB', { weekday: 'short' })
                      const dayNum = d.getDate()
                      const month = d.toLocaleDateString('en-GB', { month: 'short' })
                      
                      return (
                        <button
                          key={date}
                          onClick={() => setFormData(prev => ({ ...prev, date }))}
                          className={`p-3 rounded-xl text-center transition-all ${
                            formData.date === date
                              ? 'bg-primary text-white'
                              : 'bg-white border border-gray-200 hover:border-primary'
                          }`}
                        >
                          <div className="text-xs">{dayName}</div>
                          <div className="text-lg font-semibold">{dayNum}</div>
                          <div className="text-xs">{month}</div>
                        </button>
                      )
                    })}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-3">Time</label>
                  <div className="grid grid-cols-3 gap-2">
                    {timeSlots.map((time) => (
                      <button
                        key={time}
                        onClick={() => setFormData(prev => ({ ...prev, time }))}
                        disabled={!formData.date}
                        className={`p-3 rounded-xl text-center text-sm transition-all ${
                          formData.time === time
                            ? 'bg-primary text-white'
                            : 'bg-white border border-gray-200 hover:border-primary disabled:opacity-50 disabled:cursor-not-allowed'
                        }`}
                      >
                        {time}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
              <p className="mt-4 text-xs text-gray-500">
                Available slots are illustrative. Real-time availability will be connected before launch.
              </p>
            </div>
          )}

          {/* Step 4: Delivery Method */}
          {currentStep === 4 && (
            <div>
              <h2 className="text-xl font-semibold text-primary mb-6">Choose Delivery Method</h2>
              <div className="space-y-4">
                {deliveryMethods.map((method) => (
                  <button
                    key={method.id}
                    onClick={() => setFormData(prev => ({ ...prev, deliveryMethod: method.id }))}
                    className={`w-full p-6 rounded-xl border-2 text-left transition-all ${
                      formData.deliveryMethod === method.id
                        ? 'border-primary bg-primary/5'
                        : 'border-gray-200 hover:border-gray-300'
                    }`}
                  >
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="font-semibold text-primary">{method.name}</h3>
                        <p className="text-sm text-gray-500 mt-1">{method.description}</p>
                      </div>
                      <span className="font-semibold text-primary">
                        {method.price === 0 ? 'Free' : `+£${method.price}`}
                      </span>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Step 5: Contact Details */}
          {currentStep === 5 && (
            <div>
              <h2 className="text-xl font-semibold text-primary mb-6">Your Contact Details</h2>
              <div className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      First Name *
                    </label>
                    <input
                      type="text"
                      value={formData.contact.firstName}
                      onChange={(e) => handleContactChange('firstName', e.target.value)}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Last Name *
                    </label>
                    <input
                      type="text"
                      value={formData.contact.lastName}
                      onChange={(e) => handleContactChange('lastName', e.target.value)}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      value={formData.contact.email}
                      onChange={(e) => handleContactChange('email', e.target.value)}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Phone *
                    </label>
                    <input
                      type="tel"
                      value={formData.contact.phone}
                      onChange={(e) => handleContactChange('phone', e.target.value)}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none"
                    />
                  </div>
                </div>

                {formData.deliveryMethod === 'collection' && (
                  <>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Collection Address *
                      </label>
                      <input
                        type="text"
                        value={formData.contact.address}
                        onChange={(e) => handleContactChange('address', e.target.value)}
                        placeholder="Street address"
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Postcode *
                      </label>
                      <input
                        type="text"
                        value={formData.contact.postcode}
                        onChange={(e) => handleContactChange('postcode', e.target.value)}
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none"
                      />
                    </div>
                  </>
                )}
              </div>
            </div>
          )}

          {/* Step 6: Review & Confirm */}
          {currentStep === 6 && (
            <div>
              <h2 className="text-xl font-semibold text-primary mb-6">Review Your Booking</h2>
              
              <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden">
                {/* Service Summary */}
                <div className="p-6 border-b border-gray-100">
                  <h3 className="text-sm font-medium text-gray-500 mb-3">Service</h3>
                  <p className="font-semibold text-primary">{selectedService?.name}</p>
                  {selectedAddons.length > 0 && (
                    <p className="text-sm text-gray-500 mt-1">
                      + {selectedAddons.map(a => a.name).join(', ')}
                    </p>
                  )}
                </div>

                {/* Shoe Details */}
                <div className="p-6 border-b border-gray-100">
                  <h3 className="text-sm font-medium text-gray-500 mb-3">Shoe Details</h3>
                  <p className="text-primary">{formData.shoeDetails.brand} {formData.shoeDetails.model}</p>
                  <p className="text-sm text-gray-500">
                    {formData.shoeDetails.material} • {formData.shoeDetails.colour || 'Not specified'}
                  </p>
                </div>

                {/* Date & Time */}
                <div className="p-6 border-b border-gray-100">
                  <h3 className="text-sm font-medium text-gray-500 mb-3">Date & Time</h3>
                  <p className="text-primary">
                    {formData.date && new Date(formData.date).toLocaleDateString('en-GB', {
                      weekday: 'long',
                      day: 'numeric',
                      month: 'long',
                    })} at {formData.time}
                  </p>
                </div>

                {/* Delivery */}
                <div className="p-6 border-b border-gray-100">
                  <h3 className="text-sm font-medium text-gray-500 mb-3">Delivery</h3>
                  <p className="text-primary">{selectedDelivery?.name}</p>
                </div>

                {/* Contact */}
                <div className="p-6 border-b border-gray-100">
                  <h3 className="text-sm font-medium text-gray-500 mb-3">Contact</h3>
                  <p className="text-primary">{formData.contact.firstName} {formData.contact.lastName}</p>
                  <p className="text-sm text-gray-500">{formData.contact.email}</p>
                  <p className="text-sm text-gray-500">{formData.contact.phone}</p>
                </div>

                {/* Pricing */}
                <div className="p-6 bg-gray-50">
                  <div className="flex justify-between text-sm mb-2">
                    <span className="text-gray-600">Service</span>
                    <span className="text-primary">£{selectedService?.price || 0}</span>
                  </div>
                  {selectedAddons.length > 0 && (
                    <div className="flex justify-between text-sm mb-2">
                      <span className="text-gray-600">Add-ons</span>
                      <span className="text-primary">£{selectedAddons.reduce((sum, a) => sum + a.price, 0)}</span>
                    </div>
                  )}
                  {deliveryCost > 0 && (
                    <div className="flex justify-between text-sm mb-2">
                      <span className="text-gray-600">Delivery</span>
                      <span className="text-primary">£{deliveryCost}</span>
                    </div>
                  )}
                  <div className="flex justify-between text-lg font-semibold mt-4 pt-4 border-t border-gray-200">
                    <span className="text-primary">Total</span>
                    <span className="text-primary">£{total}</span>
                  </div>
                </div>
              </div>

              <p className="mt-4 text-xs text-gray-400 text-center">
                This is a demonstration booking. Payment integration will be added before launch.
              </p>
            </div>
          )}

          {/* Navigation Buttons */}
          <div className="mt-8 flex justify-between">
            {currentStep > 1 ? (
              <button
                onClick={() => setCurrentStep(prev => prev - 1)}
                className="px-6 py-3 text-primary font-medium hover:bg-gray-100 rounded-full transition-colors"
              >
                Back
              </button>
            ) : (
              <Link
                to="/services"
                className="px-6 py-3 text-gray-500 font-medium hover:text-primary transition-colors"
              >
                Cancel
              </Link>
            )}

            {currentStep < 6 ? (
              <button
                onClick={() => setCurrentStep(prev => prev + 1)}
                disabled={!canProceed()}
                className="px-8 py-3 bg-primary text-white font-medium rounded-full hover:bg-secondary transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Continue
              </button>
            ) : (
              <button
                onClick={handleSubmit}
                disabled={isSubmitting}
                className="px-8 py-3 bg-primary text-white font-medium rounded-full hover:bg-secondary transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'Processing...' : 'Confirm Booking'}
              </button>
            )}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Booking
