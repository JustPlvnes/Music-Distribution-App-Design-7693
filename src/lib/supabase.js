import { createClient } from '@supabase/supabase-js'

// Project URL and anon key for the Supabase project
const SUPABASE_URL = 'https://rehvefwoipelbosimjeu.supabase.co'
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJlaHZlZndvaXBlbGJvc2ltamV1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTc1MjM1OTgsImV4cCI6MjAzMzA5OTU5OH0.qZpbq1DP2TJUPZQnQl-wMlvzCDg7Ug5IkXjzdhMYmQI'

// Create the Supabase client
export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY, {
  auth: {
    persistSession: true,
    autoRefreshToken: true
  }
})

// Helper function to get user role from metadata
export const getUserRole = (user) => {
  if (!user) return null;
  
  // Check if role is in user metadata
  if (user.user_metadata?.role) {
    return user.user_metadata.role;
  }
  
  // Default role for new users
  return 'viewer';
}