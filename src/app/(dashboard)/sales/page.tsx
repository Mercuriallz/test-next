import SalesComponent from '@/components/Sales';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Sales',
  description: 'Sales Page Providing All Information About Sales',
};

export default function SalesPage() {
  return (
    <>
      <SalesComponent />
    </>
  );
}
