import Hero from './_components/Hero';
import QAndA from './_components/QAndA';

export const metadata = {
  title: 'Home',
};
export default async function IndexPage() {
  return (
    <section className=''>
      <Hero />
      <QAndA/>
    </section>
  );
}
