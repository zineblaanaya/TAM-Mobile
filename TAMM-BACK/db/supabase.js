const {createClient} = require ('@supabase/supabase-js');

const supabaseUrl = 'https://xnxtpizhypmnaixoscim.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhueHRwaXpoeXBtbmFpeG9zY2ltIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDQ5OTE1MzQsImV4cCI6MjAyMDU2NzUzNH0.A-jYY_YXqbPcFGyGJM8jYw75YS_JWZdIVgiuQGO0knA';

const supabase = createClient(supabaseUrl, supabaseKey);

module.exports = { supabase };