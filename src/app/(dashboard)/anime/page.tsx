import Japan from '@/components/Anime/Main';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Japan Section',
  description: 'This Page Inform you Anything About Japan',
};

export default function JapanSection() {
  return (
    <>
      <Japan />
    </>
  );
}
