import Link from 'next/link';

import { Text as P } from '@/components/ui/text';
import { Img } from '@/components/image';

const TopHero = () => {
  return (
    <section className="container">
      <div className="flex flex-col items-center gap-14 py-4 sm:gap-16 xl:flex-row xl:items-start xl:gap-40">
        <div className="mt-10 flex max-w-[450px] flex-col items-center xl:items-start">
          <Link className="flex gap-2 uppercase" href={'/'}>
            <Img
              height={58}
              placeholder="shimmer"
              src={'/public/images/agora.png'}
              width={172}
            />
          </Link>
          <P className="text-clamp mb-4 mt-5 font-bold uppercase md:mt-10 xl:mt-20">
            Make <span className="text-primary">art</span> <br />
            make <span className="text-primary">music</span> <br />
            make <span className="text-primary">money</span> <br />
          </P>
          <p className="text-center xl:text-left">
            Turn your passion into your livelihood, and pioneer the future of
            art and music monetization.
          </p>
          <button className="bg-secondary mt-8 border border-primary px-6 py-4 text-sm font-semibold uppercase text-primary sm:mt-11 sm:text-base xl:mt-4">
            JOIN WAITLIST for exclusive early access
          </button>
        </div>
        <div className="flex flex-col items-center">
          <Img
            className=""
            placeholder="shimmer"
            src={'/public/images/banner.png'}
            width={785}
          />
        </div>
      </div>
    </section>
  );
};

export default TopHero;
