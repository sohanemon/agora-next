import BottomHero from './_components/BottomHero';
import LiveDream from './_components/LiveDream';
import ProfitOverview from './_components/ProfitOverview';
import QAndA from './_components/QAndA';
import ScreenshotView from './_components/ScreenshotView';
import Hero from './_components/TopHero';
import TopHero from './_components/TopHero';

export const metadata = {
  title: 'Home',
};
export default async function IndexPage() {
  return (
    <>
      <TopHero />
      <QAndA />
      <ProfitOverview />
      <LiveDream />
      <ScreenshotView />
      <BottomHero />
    </>
  );
}
