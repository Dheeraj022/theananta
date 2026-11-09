import { Metadata } from 'next';
import ContactClient from './ContactClient';
import { BRAND_NAME } from '@/lib/constants';

export const metadata: Metadata = {
  title: `Contact Us | ${BRAND_NAME}`,
  description: `Contact ${BRAND_NAME}, an independent travel agency, for hotel, villa and tour enquiry assistance across Rajasthan.`,
};

export default function ContactPage() {
  return <ContactClient />;
}
