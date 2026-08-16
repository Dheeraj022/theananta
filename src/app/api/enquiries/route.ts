import { NextResponse } from 'next/server';
import { getEnquiries } from '../enquiry/storage';

export async function GET() {
  try {
    const enquiries = await getEnquiries();
    return NextResponse.json({ success: true, data: enquiries });
  } catch (error) {
    console.error("Error fetching enquiries:", error);
    return NextResponse.json(
      { success: false, message: "Failed to fetch enquiries." },
      { status: 500 }
    );
  }
}
