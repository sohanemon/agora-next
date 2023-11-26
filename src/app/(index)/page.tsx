import Hero from './_components/TopHero';
import QAndA from './_components/QAndA';
import TopHero from './_components/TopHero';
import BottomHero from './_components/BottomHero';
import ProfitOverview from './_components/ProfitOverview';
import ScreenshotView from './_components/ScreenshotView';
import LiveDream from './_components/LiveDream';

export const metadata = {
  title: 'Home',
};
export default async function IndexPage() {
  return (
    <>
      <TopHero />
      <QAndA />
      <ProfitOverview />
      <LiveDream/>
      <ScreenshotView />
      <BottomHero />
    </>
  );
}
