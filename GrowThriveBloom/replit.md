# Overview

This is a modern self-improvement and personal development website for Francesawoman - a brand focused on empowering women through practical advice, planning tools, and life-changing resources. The application is built as a landing page featuring product offerings including free and premium planning tools, a newsletter subscription system, and content sections for blog and podcast promotion.

# User Preferences

Preferred communication style: Simple, everyday language.

# System Architecture

## Frontend Architecture
The client-side is built with React 18 using TypeScript and modern React patterns:
- **Routing**: Uses Wouter for lightweight client-side routing
- **State Management**: TanStack Query (React Query v5) for server state management
- **UI Framework**: Shadcn/ui component library with Radix UI primitives
- **Styling**: Tailwind CSS with custom CSS variables for theming
- **Forms**: React Hook Form with Zod validation via @hookform/resolvers
- **Build Tool**: Vite for development and production builds

## Backend Architecture
The server is built with Node.js and Express in a modern ESM setup:
- **Framework**: Express.js with TypeScript
- **Architecture Pattern**: RESTful API design with route handlers
- **Middleware**: Custom logging middleware for API requests
- **Error Handling**: Centralized error handling middleware
- **Development**: Hot reload with Vite integration in development mode

## Data Storage Solutions
The application uses a dual-storage approach:
- **Development**: In-memory storage (MemStorage class) for rapid prototyping
- **Production Ready**: Drizzle ORM configured for PostgreSQL via Neon Database
- **Schema Management**: Drizzle Kit for migrations and schema management
- **Session Storage**: PostgreSQL session store with connect-pg-simple

## Database Schema
Current schema includes:
- **Users Table**: Basic user management with username/password authentication
- **Newsletter Subscribers Table**: Email collection with subscription timestamps
- **Schema Validation**: Drizzle-zod integration for type-safe database operations

## Component Architecture
The frontend follows a modular component structure:
- **Page Components**: Single-page application with home and 404 pages
- **Section Components**: Reusable sections (Hero, About, Offers, etc.)
- **UI Components**: Shadcn/ui component system with Radix UI primitives
- **Custom Hooks**: useCountdown for countdown timers, useToast for notifications

## Styling and Theming
- **Design System**: Custom color palette with CSS variables for light/dark themes
- **Typography**: Google Fonts integration (Playfair Display, Inter, Fira Code)
- **Responsive Design**: Mobile-first approach with Tailwind responsive utilities
- **Component Variants**: Class Variance Authority for consistent component styling

# External Dependencies

## Core Framework Dependencies
- **@neondatabase/serverless**: Serverless PostgreSQL database connection
- **drizzle-orm**: Type-safe database ORM
- **@tanstack/react-query**: Server state management
- **wouter**: Lightweight React router
- **express**: Node.js web framework

## UI and Styling Dependencies
- **@radix-ui/***: Comprehensive set of UI primitives for accessibility
- **tailwindcss**: Utility-first CSS framework
- **class-variance-authority**: Component variant management
- **clsx**: Conditional className utility

## Development Tools
- **vite**: Build tool and development server
- **typescript**: Type safety and development experience
- **drizzle-kit**: Database schema management and migrations
- **@replit/vite-plugin-runtime-error-modal**: Development error overlay

## Form and Validation
- **react-hook-form**: Form state management
- **@hookform/resolvers**: Form validation integration
- **zod**: Schema validation library
- **drizzle-zod**: Integration between Drizzle and Zod

## Additional Libraries
- **date-fns**: Date manipulation and formatting
- **lucide-react**: Icon library
- **react-icons**: Additional icon sets
- **embla-carousel-react**: Carousel component functionality