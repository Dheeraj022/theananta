import { NextResponse } from 'next/server';
import { writeFile, mkdir } from 'fs/promises';
import { join } from 'path';
import { supabase, isSupabaseConfigured } from '@/lib/supabase';

export async function POST(request: Request) {
  try {
    const formData = await request.formData();
    const file = formData.get('file') as File | null;

    if (!file) {
      return NextResponse.json({ error: 'No file uploaded' }, { status: 400 });
    }

    const uniqueName = `${Date.now()}-${file.name.replace(/[^a-zA-Z0-9.-]/g, '_')}`;

    // 1. Try uploading to Supabase if configured
    if (isSupabaseConfigured && supabase) {
      const { data, error } = await supabase.storage
        .from('uploads')
        .upload(uniqueName, file, {
          cacheControl: '3600',
          upsert: false,
        });

      if (error) {
        console.error('Supabase storage upload error:', error);
        throw new Error('Supabase Storage Error: ' + error.message);
      }

      const { data: publicUrlData } = supabase.storage
        .from('uploads')
        .getPublicUrl(uniqueName);

      return NextResponse.json({ url: publicUrlData.publicUrl });
    }

    // 2. Fallback to Local Filesystem (Will not work in serverless/Vercel production environments)
    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);

    const uploadDir = join(process.cwd(), 'public', 'uploads');
    
    try {
      await mkdir(uploadDir, { recursive: true });
    } catch (e) {
      // Already exists
    }

    const filePath = join(uploadDir, uniqueName);
    await writeFile(filePath, buffer);
    
    const publicUrl = `/uploads/${uniqueName}`;

    return NextResponse.json({ url: publicUrl });
  } catch (error: any) {
    console.error('Upload API error:', error);
    return NextResponse.json({ error: error.message || 'Upload failed' }, { status: 500 });
  }
}
