// src/supabase.js
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://xxxxx.supabase.co'; // استبدليه برابط مشروعك
const supabaseKey = 'your-anon-key-here';        // المفتاح من settings > API

export const supabase = createClient(supabaseUrl, supabaseKey);
