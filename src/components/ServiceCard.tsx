import { Link } from 'react-router-dom'

interface Service {
  id: string
  name: string
  description: string
  price: number
  duration: string
  popular?: boolean
}

interface ServiceCardProps {
  service: Service
  showBookButton?: boolean
}

function ServiceCard({ service, showBookButton = true }: ServiceCardProps) {
  return (
    <div className={`relative bg-white rounded-2xl p-8 shadow-sm border transition-all hover:shadow-md ${
      service.popular ? 'border-primary' : 'border-gray-100'
    }`}>
      {service.popular && (
        <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
          <span className="inline-block px-4 py-1 bg-primary text-white text-xs font-medium rounded-full">
            Most Popular
          </span>
        </div>
      )}
      <h3 className="text-xl font-semibold text-primary">{service.name}</h3>
      <p className="mt-3 text-gray-600 text-sm leading-relaxed">{service.description}</p>
      <div className="mt-6 flex items-baseline">
        <span className="text-3xl font-semibold text-primary">£{service.price}</span>
      </div>
      <p className="mt-1 text-sm text-gray-500">{service.duration} turnaround</p>
      {showBookButton && (
        <Link
          to={`/booking?service=${service.id}`}
          className={`mt-6 block w-full text-center py-3 rounded-full font-medium transition-colors ${
            service.popular
              ? 'bg-primary text-white hover:bg-secondary'
              : 'bg-gray-100 text-primary hover:bg-gray-200'
          }`}
        >
          Select Service
        </Link>
      )}
    </div>
  )
}

export default ServiceCard
