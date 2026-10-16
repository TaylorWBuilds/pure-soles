import { Link } from 'react-router-dom'

function Dashboard() {
  // Mock user data (will be replaced with Supabase auth later)
  const user = {
    firstName: 'John',
    lastName: 'Smith',
    email: 'john@example.com',
  }

  // Mock bookings (will be replaced with real data later)
  const bookings = [
    {
      id: 'PS-ABC123',
      date: '2026-10-20',
      time: '10:00',
      service: 'Premium Clean',
      shoes: 'Nike Air Force 1',
      status: 'confirmed',
      total: 48,
    },
    {
      id: 'PS-XYZ789',
      date: '2026-10-10',
      time: '14:30',
      service: 'Deep Clean',
      shoes: 'Adidas UltraBoost',
      status: 'completed',
      total: 30,
    },
  ]

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'confirmed':
        return 'bg-green-100 text-green-700'
      case 'completed':
        return 'bg-gray-100 text-gray-700'
      case 'pending':
        return 'bg-amber-100 text-amber-700'
      case 'cancelled':
        return 'bg-red-100 text-red-700'
      default:
        return 'bg-gray-100 text-gray-700'
    }
  }

  return (
    <div className="bg-warm-white min-h-screen">
      {/* Header */}
      <section className="bg-cream py-8 md:py-12">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl md:text-4xl font-semibold tracking-tight text-primary">
            My Account
          </h1>
          <p className="mt-2 text-gray-600">
            Welcome back, {user.firstName}
          </p>
        </div>
      </section>

      <section className="py-8 md:py-12">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-4 gap-8">
            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-2xl border border-gray-100 p-6">
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-semibold text-primary">
                      {user.firstName[0]}{user.lastName[0]}
                    </span>
                  </div>
                  <h2 className="font-semibold text-primary">{user.firstName} {user.lastName}</h2>
                  <p className="text-sm text-gray-500">{user.email}</p>
                </div>

                <nav className="mt-6 space-y-1">
                  <a href="#" className="block px-4 py-2 rounded-lg bg-primary/5 text-primary font-medium">
                    My Bookings
                  </a>
                  <a href="#" className="block px-4 py-2 rounded-lg text-gray-600 hover:bg-gray-50 transition-colors">
                    Profile Settings
                  </a>
                  <button className="w-full text-left px-4 py-2 rounded-lg text-gray-600 hover:bg-gray-50 transition-colors">
                    Sign Out
                  </button>
                </nav>
              </div>
            </div>

            {/* Main Content */}
            <div className="lg:col-span-3">
              {/* Quick Actions */}
              <div className="mb-8">
                <Link
                  to="/booking"
                  className="inline-flex items-center px-6 py-3 bg-primary text-white font-medium rounded-full hover:bg-secondary transition-colors"
                >
                  Book a Clean
                  <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>

              {/* Bookings */}
              <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden">
                <div className="px-6 py-4 border-b border-gray-100">
                  <h2 className="text-lg font-semibold text-primary">My Bookings</h2>
                </div>

                {bookings.length === 0 ? (
                  <div className="p-8 text-center">
                    <p className="text-gray-500">You haven't made any bookings yet.</p>
                    <Link to="/booking" className="mt-4 inline-block text-primary font-medium hover:underline">
                      Book your first clean
                    </Link>
                  </div>
                ) : (
                  <div className="divide-y divide-gray-100">
                    {bookings.map((booking) => (
                      <div key={booking.id} className="p-6">
                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                          <div>
                            <div className="flex items-center gap-3 mb-2">
                              <span className="font-mono text-sm text-gray-500">{booking.id}</span>
                              <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(booking.status)}`}>
                                {booking.status.charAt(0).toUpperCase() + booking.status.slice(1)}
                              </span>
                            </div>
                            <h3 className="font-semibold text-primary">{booking.service}</h3>
                            <p className="text-sm text-gray-500 mt-1">{booking.shoes}</p>
                          </div>
                          <div className="mt-4 sm:mt-0 text-right">
                            <p className="text-primary font-semibold">£{booking.total}</p>
                            <p className="text-sm text-gray-500">
                              {new Date(booking.date).toLocaleDateString('en-GB', {
                                day: 'numeric',
                                month: 'short',
                                year: 'numeric',
                              })} at {booking.time}
                            </p>
                          </div>
                        </div>
                        
                        {booking.status === 'confirmed' && (
                          <div className="mt-4 pt-4 border-t border-gray-100 flex gap-3">
                            <button className="text-sm text-primary font-medium hover:underline">
                              Reschedule
                            </button>
                            <button className="text-sm text-red-600 font-medium hover:underline">
                              Cancel
                            </button>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Info Box */}
              <div className="mt-6 p-4 bg-amber-50 rounded-xl border border-amber-100">
                <p className="text-xs text-amber-700">
                  <strong>Note:</strong> This is a demonstration dashboard. Real user authentication and booking data will be implemented in Phase 3.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Dashboard
