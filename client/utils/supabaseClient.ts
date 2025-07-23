import { createClient } from '@supabase/supabase-js';

export const supabase = createClient(
  'https://jimlbbxbqeruwfojtqoj.supabase.co',  // 🔁 replace with your actual Supabase project URL
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImppbWxiYnhicWVydXdmb2p0cW9qIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTMyNzExMjYsImV4cCI6MjA2ODg0NzEyNn0.4H23gb033DHIloZBhmrMEDU8oE1ZYsJvj4UPGXA1aRM'                 // 🔁 from Project Settings → API
);
