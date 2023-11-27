import React from 'react';

import { Text as P } from '@/components/ui/text';
import { Img } from '@/components/image';

const QAndA = () => {
  const QandAData = [
    {
      que: 'So what do you do on Agora?',
      ans: 'You create polls around your art and music, and get feedback from your friends and fans.',
    },
    {
      que: 'How do these polls work?',
      ans: 'Producers upload their music and accompanying art. People vote which art best matches the music.',
    },
    {
      que: 'So how do you make money with polls?',
      ans: 'Every vote is a micropayment, so you make money whenever people participate!',
    },
    {
      que: 'Wait, what are micropayments?',
      ans: 'Payments less than $0.5 USD. You can vote on art with micropayments as small as $0.004 USD on Agora!',
    },
  ];
  return (
    <section className="container my-16">
      <P center className="mb-16 text-clamp font-bold">
        Q&A
      </P>
      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
        {QandAData.map(({ que, ans }, i) => (
          <div key={i} className="border p-6">
            <P className="mb-1 text-2xl font-medium">{que}</P>
            <p className="opacity-70">{ans}</p>
          </div>
        ))}
      </div>
      <div>
        <div className="text-center">
          <P className="mb-1 mt-14 text-xl font-medium">
            Here’s what Agora will look like
          </P>
          <p className="opacity-70">
            Below are some screenshots of our closed launch.{' '}
          </p>
        </div>
        <div className="mt-10 flex flex-col justify-center gap-10 sm:flex-row md:gap-20">
          <div className="flex flex-col items-center">
            <P className="mb-3 text-center text-xl font-medium">Vote Page</P>
            <Img placeholder="shimmer" src={'/public/images/vote.png'} />
          </div>
          <div className="flex flex-col items-center">
            <P className="mb-3 text-center text-xl font-medium">
              Poll Results Page
            </P>
            <Img placeholder="shimmer" src={'/public/images/result.png'} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default QAndA;
