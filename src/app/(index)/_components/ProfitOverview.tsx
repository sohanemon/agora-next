import React from 'react';

import { Text as P } from '@/components/ui/text';
import { Img } from '@/components/image';

const ProfitOverview = () => {
  return (
    <section className="container">
      <P className="mb-4 mt-20 text-center text-[32px] font-bold uppercase md:text-[40px]">
        Micro <span className="text-primary">payments</span> <br />
        Macro <span className="text-primary">Profit</span>
      </P>
      <p className="mb-2 text-center text-xl font-semibold">
        Over <span className="text-primary">$500 million USD</span> in
        micropayments sent in 2023
      </p>
      <p className="text-center text-xl font-semibold">
        Creators have been able to earn over{' '}
        <span className="text-primary">$6,000 per post</span> with
        micropayments!
      </p>
      <div className="mt-8 flex flex-col border p-6 md:items-center">
        <p className="pb-1 font-medium ">Are micropayments something new?</p>
        <p className="max-w-[800px] opacity-70 md:text-center">
          Yes! Traditional payment processors like paypal or visa don’t offer
          micropayments because of their high fees. Recent innovations in the
          Bitcoin Lightning network have enabled us to utilize micropayments in
          Agora!
        </p>
      </div>
      <div className="mt-8 flex justify-center ">
        <Img placeholder="shimmer" src="/images/bitcoin.png" width={582} />
      </div>
    </section>
  );
};

export default ProfitOverview;
