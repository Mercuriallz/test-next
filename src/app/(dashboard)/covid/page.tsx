import Japan from '@/components/Anime/Main';
import Covid from '@/components/Covid/Main';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Covid',
  description: 'Covid Data',
};

export default function CovidSection() {
  return (
    <>
      <Covid />
    </>
  );
}
