import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://ynbgoxevxsgjmflxwldw.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InluYmdveGV2eHNnam1mbHh3bGR3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODgxMTQ2NjEsImV4cCI6MjAwMzY5MDY2MX0.C5zqxChDkW6-9HjFk4L3GsAogbIYnUGUgg-Bv_AEDdk";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
