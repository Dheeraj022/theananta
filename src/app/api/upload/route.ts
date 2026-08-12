import { NextResponse } from 'next/server';
import { writeFile, mkdir } from 'fs/promises';
import { join } from 'path';

export async function POST(request: Request) {
  try {
    const formData = await request.formData();
    const file = formData.get('file') as File | null;

    if (!file) {
      return NextResponse.json({ error: 'No file uploaded' }, { status: 400 });
    }

    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);

    // Save path: public/uploads
    const uploadDir = join(process.cwd(), 'public', 'uploads');
    
    // Ensure the directory exists
    try {
      await mkdir(uploadDir, { recursive: true });
    } catch (e) {
      // Already exists
    }

    const uniqueName = `${Date.now()}-${file.name.replace(/[^a-zA-Z0-9.-]/g, '_')}`;
    const filePath = join(uploadDir, uniqueName);
    
    await writeFile(filePath, buffer);
    
    const publicUrl = `/uploads/${uniqueName}`;

    return NextResponse.json({ url: publicUrl });
  } catch (error: any) {
    console.error('Upload API error:', error);
    return NextResponse.json({ error: error.message || 'Upload failed' }, { status: 500 });
  }
}
