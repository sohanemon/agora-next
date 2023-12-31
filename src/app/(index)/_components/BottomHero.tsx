import { Text as P } from '@/components/ui/text';
import { Img } from '@/components/image';

const BottomHero = () => {
  return (
    <section className="container">
      <div className="mt-20 flex flex-col gap-14 py-4 xl:flex-row xl:gap-11">
        <div className="mt-10 flex flex-col xl:w-[580px]">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between xl:flex-col xl:items-start xl:justify-normal">
            <P className="text-clamp mt-20 font-bold uppercase">
              FIND NEw <span className="text-primary">art</span> <br />
              FIND NEw <span className="text-primary">music</span> <br />
              FIND NEw <span className="text-primary">fans</span> <br />
            </P>
            <div>
              <button className="bg-secondary mt-14 w-full border border-primary px-6 py-4 font-semibold uppercase  text-primary xl:hidden">
                JOIN WAITLIST NOW
              </button>
            </div>
          </div>
          <p className="my-4">
            Sign up for the waitlist and send us your music and art. Once we
            launch, your creations will start generating revenue through
            micropayments.
          </p>
          <p>Any questions? Join our telegram group and ask away!</p>

          <button className="bg-secondary mt-14 hidden w-full border border-primary px-6 py-4 uppercase text-primary xl:block">
            JOIN WAITLIST NOW
          </button>
        </div>
        <div className="flex flex-col items-center">
          <Img
            className=""
            placeholder="shimmer"
            src={'/public/images/bottom.png'}
            width={785}
          />
        </div>
      </div>
    </section>
  );
};

export default BottomHero;
