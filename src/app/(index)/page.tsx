import Hero from './_components/TopHero';
import QAndA from './_components/QAndA';
import TopHero from './_components/TopHero';
import BottomHero from './_components/BottomHero';
import ProfitOverview from './_components/ProfitOverview';

export const metadata = {
  title: 'Home',
};
export default async function IndexPage() {
  return (
    <section className=''>
      <TopHero />
      <QAndA />
      <ProfitOverview />
      <BottomHero />
    </section>
  );
}
