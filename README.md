# Pure Soles

Premium shoe cleaning and restoration services website.

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm

### Installation

```bash
npm install
```

### Development

Run the development server:

```bash
npm run dev
```

Open your browser and navigate to `http://localhost:5173`

### Build for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## Project Structure

```
pure-soles/
├── src/
│   ├── components/     # Reusable UI components
│   │   ├── Layout.tsx
│   │   ├── Navbar.tsx
│   │   ├── Footer.tsx
│   │   ├── ServiceCard.tsx
│   │   └── FAQ.tsx
│   ├── pages/          # Page components
│   │   ├── Home.tsx
│   │   ├── Services.tsx
│   │   ├── Gallery.tsx
│   │   ├── FAQs.tsx
│   │   ├── Contact.tsx
│   │   ├── Booking.tsx
│   │   ├── Dashboard.tsx
│   │   ├── Login.tsx
│   │   └── Register.tsx
│   ├── App.tsx         # Main app with routing
│   ├── main.tsx        # Entry point
│   └── index.css       # Global styles with Tailwind
├── public/             # Static assets
├── index.html          # HTML template
└── package.json        # Dependencies and scripts
```

## Tech Stack

- **Framework**: React 19 with TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **Routing**: React Router v7

## Pages

- **Home** - Landing page with hero, services preview, gallery preview, FAQs, and CTA
- **Services & Prices** - Detailed service descriptions and pricing
- **Gallery** - Before/after transformation showcase
- **FAQs** - Frequently asked questions organized by category
- **Contact** - Contact form and business information
- **Booking** - Multi-step booking wizard
- **Dashboard** - Customer account area (demonstration)
- **Login/Register** - Authentication pages (demonstration)

## Current Status

### Phase 1: Complete ✓

The visual foundation is built. All pages are functional with:
- Responsive design (mobile, tablet, desktop)
- Premium, minimalist styling
- Working navigation
- Form validation (client-side)
- Multi-step booking flow

### What's Still Demonstrative

The following features are front-end only and not yet connected to a backend:

- **Authentication**: Login/Register forms collect data but don't create accounts
- **Booking**: Submits to a simulated confirmation page
- **Contact Form**: Shows success message but doesn't send emails
- **Dashboard**: Displays mock data, not real user bookings
- **Payments**: Not yet integrated

### Next Steps

**Phase 2**: Add working front-end interactions
**Phase 3**: Connect to Supabase for authentication and database
**Phase 4**: Implement real booking system with availability
**Phase 5**: Integrate Stripe payments
**Phase 6**: Testing and hardening
**Phase 7**: Deploy to Cloudflare

## Notes for Launch

Before going live, update these placeholder values:

1. **Contact Information**
   - Email: `hello@puresoles.co.uk`
   - Phone: `+44 1234 567 890`
   - Location: London, United Kingdom

2. **Social Media Links**
   - Instagram
   - Twitter
   - Facebook

3. **Images**
   - Replace hero image placeholder
   - Add real before/after gallery photos
   - Update service imagery

4. **Pricing**
   - Confirm all service prices
   - Update add-on pricing if needed

5. **Legal Pages**
   - Create Privacy Policy page
   - Create Terms of Service page
   - Create Cancellation Policy page

## License

Private project for Pure Soles business.
