import { supabase, isSupabaseConfigured } from '@/lib/supabase';
import { Enquiry } from '@/types';
import fs from 'fs/promises';
import path from 'path';

const DATA_FILE_PATH = path.join(process.cwd(), 'src/data/enquiries.json');

export async function getEnquiries(): Promise<Enquiry[]> {
  // Local JSON File Fallback
  try {
    const fileContent = await fs.readFile(DATA_FILE_PATH, 'utf-8');
    const enquiries = JSON.parse(fileContent);
    return Array.isArray(enquiries) ? enquiries.sort((a, b) => new Date(b.created_at).getTime() - new Date(a.created_at).getTime()) : [];
  } catch (err) {
    console.error('Failed to read enquiries.json:', err);
    return [];
  }
}

export async function saveEnquiry(enquiry: Enquiry): Promise<boolean> {
  if (isSupabaseConfigured && supabase) {
    try {
      const { error } = await supabase
        .from('enquiries')
        .insert(enquiry);
        
      if (!error) return true;
      console.warn('Supabase saveEnquiry error, falling back to local storage:', error.message);
    } catch (e) {
      console.warn('Supabase connection error, falling back to local storage');
    }
  }

  // Local JSON File Fallback
  try {
    let enquiries: Enquiry[] = [];
    try {
      const fileContent = await fs.readFile(DATA_FILE_PATH, 'utf-8');
      enquiries = JSON.parse(fileContent);
      if (!Array.isArray(enquiries)) enquiries = [];
    } catch (err) {
      // file might not exist or be invalid JSON, start fresh
      enquiries = [];
    }
    
    enquiries.push(enquiry);
    await fs.writeFile(DATA_FILE_PATH, JSON.stringify(enquiries, null, 2), 'utf-8');
    return true;
  } catch (err) {
    console.error('Failed to write to enquiries.json:', err);
    return false;
  }
}
