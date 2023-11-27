import React from 'react';
import { Text as P } from '@/components/ui/text';
import { Img } from '@/components/image';
import Link from 'next/link';

const TopHero = () => {
    return (
        <section className="container">
            <div className="flex flex-col items-center gap-14 py-4 xl:flex-row xl:items-start sm:gap-16 xl:gap-40">
                <div className="mt-10 max-w-[450px] flex flex-col items-center xl:items-start">
                    <Link className="flex gap-2 uppercase" href={'/'}>
                        <Img
                            className='w-7'
                            placeholder="shimmer"
                            src={'/public/logo.png'}
                        />
                        Agora
                    </Link>
                    <P className="mb-4 mt-5 text-clamp font-bold uppercase md:mt-10 xl:mt-20">
                        Make <span className="text-primary">art</span> <br />
                        make <span className="text-primary">music</span> <br />
                        make <span className="text-primary">money</span> <br />
                    </P>
                    <p className='text-center xl:text-left'>Turn your passion into your livelihood, and pioneer the future of art and music monetization.</p>
                    <button className='mt-8 text-sm text-primary bg-secondary border border-primary px-6 py-4 uppercase sm:text-base sm:mt-11 xl:mt-4'>JOIN WAITLIST for exclusive early access</button>

                </div>
                <div className='flex flex-col items-center'>
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