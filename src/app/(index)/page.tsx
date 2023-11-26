import { Text as P } from '@/components/ui/text';
import { Img } from '@/components/image';
import hero from '@/assets/images/Hero.png';
import logo from '@/assets/icons/logo.png';
import Hero from './_components/Hero';

export const metadata = {
  title: 'Home',
};
export default async function IndexPage() {
  return (
    <section className='container'>
      <Hero />
    </section>
  );
}
