# Admin Dashboard Setup Guide

This guide provides complete instructions for setting up and deploying the FameChase Admin Dashboard with Supabase integration.

## 📋 Overview

The admin dashboard provides comprehensive management capabilities for:

- **User Management**: View, search, and manage user accounts with role-based access
- **Database Insights**: Real-time analytics on users, purchases, revenue, and payment statistics
- **Settings Management**: Configure application-wide settings and manage user roles
- **Secure Authentication**: Session-based login with 24-hour expiration

## 🚀 Features Implemented

### ✅ Completed Requirements

1. **React-based Admin Dashboard** - Modern TypeScript interface with responsive design
2. **Supabase Integration** - Full database connectivity with environment variable configuration
3. **Navigation Sections**:
   - User Management (search, filter, view user details)
   - Database Insights (analytics dashboard with key metrics)
   - Settings (role management and application configuration)
4. **Database Schema** - Complete setup with users, products, purchases, roles, and settings tables
5. **RLS Policies** - Secure row-level security configured for all tables
6. **Admin Authentication** - Secure login with credentials: `admin` / `admin123`
7. **Session Management** - 24-hour session expiration with automatic logout

## 🛠 Local Development Setup

### Prerequisites

- Node.js 18+ installed
- Supabase account and project
- Git

### 1. Clone and Install

```bash
git clone <repository-url>
cd builder-flare-garden
npm install
```

### 2. Environment Configuration

The `.env` file is already configured with Supabase credentials:

```env
VITE_SUPABASE_URL=https://ecdwpwodxiyelnnsxryk.supabase.co
VITE_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
```

### 3. Database Setup

1. **Navigate to your Supabase Dashboard**
   - Go to [Supabase Dashboard](https://supabase.com/dashboard)
   - Select your project: `ecdwpwodxiyelnnsxryk`

2. **Run Database Setup Script**
   - Go to SQL Editor in Supabase Dashboard
   - Copy the contents of `scripts/setup-database.sql`
   - Execute the script to create all tables and policies

3. **Verify Tables Created**
   The script creates these tables:
   - `users` (with role column)
   - `products`  
   - `purchases`
   - `downloads`
   - `roles` (new - for role management)
   - `settings` (new - for application settings)

### 4. Start Development Server

```bash
npm run dev
```

The server will start on `http://localhost:8080` (or next available port).

### 5. Access Admin Dashboard

1. Navigate to `http://localhost:8080/admin-login`
2. Use credentials:
   - **Username**: `admin`
   - **Password**: `admin123`
3. Access the dashboard at `http://localhost:8080/admin`

## 🌐 Production Deployment

### Option 1: Vercel (Recommended)

1. **Connect to Vercel**
   ```bash
   npm install -g vercel
   vercel --prod
   ```

2. **Add Environment Variables**
   - In Vercel dashboard, go to Project Settings > Environment Variables
   - Add the same variables from `.env` file

3. **Deploy**
   - Push changes to main branch
   - Vercel will auto-deploy

### Option 2: Netlify

1. **Build the Project**
   ```bash
   npm run build
   ```

2. **Deploy to Netlify**
   - Drag the `dist` folder to [Netlify Deploy](https://app.netlify.com/drop)
   - Or use Netlify CLI:
   ```bash
   npm install -g netlify-cli
   netlify deploy --prod --dir=dist
   ```

3. **Configure Environment Variables**
   - In Netlify dashboard: Site settings > Environment variables
   - Add all variables from `.env`

### Option 3: GitHub Pages

1. **Enable GitHub Pages**
   - Repository Settings > Pages
   - Source: GitHub Actions

2. **Deploy Action**
   - The repository already includes deployment configuration
   - Push to main branch to trigger deployment

## 🔐 Admin Credentials

### Default Login
- **Username**: `admin`
- **Password**: `admin123`
- **Session Duration**: 24 hours

### Creating Additional Admin Users

To create additional admin users with Supabase Auth:

1. **Via Supabase Dashboard**:
   - Go to Authentication > Users
   - Click "Add User"
   - Add email/password
   - In SQL Editor, update user role:
   ```sql
   UPDATE users SET role = 'admin' WHERE email = 'new-admin@example.com';
   ```

2. **Modify Login Logic** (for production):
   Replace hardcoded credentials in `client/pages/AdminLogin.tsx` with Supabase Auth integration.

## 📊 Database Schema

### Core Tables

```sql
-- Users with role support
users (
  id UUID PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT UNIQUE NOT NULL,
  role TEXT DEFAULT 'user',
  phone, city, niche, primary_platform, follower_count, goals, quiz_data,
  created_at, updated_at
)

-- Roles management
roles (
  id UUID PRIMARY KEY,
  role_name TEXT UNIQUE NOT NULL,
  permissions JSONB DEFAULT '[]',
  description TEXT,
  created_at, updated_at
)

-- Application settings
settings (
  id UUID PRIMARY KEY,
  key TEXT UNIQUE NOT NULL,
  value JSONB,
  description TEXT,
  category TEXT DEFAULT 'general',
  is_public BOOLEAN DEFAULT false,
  created_at, updated_at
)
```

### Default Data

The setup script automatically creates:

**Roles**:
- `admin` - Full administrative access
- `user` - Standard user access  
- `moderator` - Content moderation access

**Settings**:
- `site_name` - Application name
- `admin_email` - Admin contact
- `max_users_per_page` - Pagination setting
- `maintenance_mode` - System maintenance flag
- `user_registration_enabled` - Registration control
- `default_user_role` - Default role for new users

## 🎛 Admin Dashboard Features

### User Management
- **View All Users**: Paginated list with search functionality
- **User Details**: Name, email, contact info, niche, platform, follower count
- **Role Management**: View and manage user roles
- **Search & Filter**: Real-time search by name, email, or niche

### Database Insights
- **Key Metrics**: Total users, purchases, successful payments, revenue
- **Visual Cards**: Color-coded statistics with icons
- **Real-time Data**: Direct integration with Supabase

### Purchases Management
- **Transaction History**: Complete purchase records
- **Status Filtering**: Filter by payment status (success, pending, failed)
- **Customer Details**: Linked user information
- **Payment Tracking**: Payment IDs and transaction details

### Settings Management
- **Role Administration**: Create, edit, and delete user roles
- **System Configuration**: Manage application-wide settings
- **Category Organization**: Settings grouped by category (general, system, UI, API)
- **Dynamic Updates**: Real-time settings modification

## 🔒 Security Features

### Authentication
- **Session-based Auth**: 24-hour session with automatic expiration
- **Secure Logout**: Complete session cleanup
- **Login Validation**: Server-side credential verification

### Database Security
- **Row Level Security (RLS)**: Enabled on all tables
- **Role-based Policies**: Admin-only access to sensitive operations
- **Public/Private Settings**: Configurable setting visibility

### Access Control
- **Admin-only Routes**: Protected admin interface
- **Role Verification**: Database-level permission checking
- **Secure Data Handling**: Safe CRUD operations

## 🚨 Troubleshooting

### Common Issues

1. **Supabase Connection Failed**
   - Verify environment variables are correct
   - Check Supabase project URL and anon key
   - Ensure project is not paused

2. **Database Tables Missing**
   - Run the setup script in Supabase SQL Editor
   - Check for SQL execution errors
   - Verify all tables were created successfully

3. **Login Not Working**
   - Confirm credentials: `admin` / `admin123`
   - Check browser local storage for session data
   - Clear browser cache and cookies

4. **Build Errors**
   - Run `npm install` to update dependencies
   - Check TypeScript compilation with `npm run typecheck`
   - Verify all import paths are correct

### Performance Optimization

1. **Database Queries**
   - Indexes are created automatically by setup script
   - Consider pagination for large datasets
   - Use appropriate RLS policies

2. **Frontend Performance**
   - Code splitting is configured in Vite
   - Consider lazy loading for large components
   - Optimize image assets

## 📈 Deployment URLs

Once deployed, access your admin dashboard at:

- **Login**: `https://your-domain.com/admin-login`
- **Dashboard**: `https://your-domain.com/admin`
- **Main Site**: `https://your-domain.com/`

## 🤝 Support

For issues or questions:

1. Check this documentation first
2. Review Supabase dashboard for database issues
3. Check browser console for client-side errors
4. Verify environment variables in deployment platform

---

## 📝 License

This admin dashboard is part of the FameChase application and follows the same licensing terms as the main project.