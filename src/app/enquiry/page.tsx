import { Metadata } from 'next';
import EnquiryClient from './EnquiryClient';
import { BRAND_NAME } from '@/lib/constants';

export const metadata: Metadata = {
  title: `Send an Enquiry | ${BRAND_NAME}`,
  description: `Send your travel enquiry to ${BRAND_NAME}, an independent travel agency, for hotels, villas, desert camping, and tour packages in Rajasthan.`,
};

export default function EnquiryPage() {
  return <EnquiryClient />;
}
