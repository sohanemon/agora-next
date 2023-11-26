import React from 'react';
import { Text as P } from '@/components/ui/text';
import { Img } from '@/components/image';

const Hero = () => {
    return (
        <section className="flex">
            <div className="w-[410px]">
                <p className="uppercase">Agora</p>
                <P className="mt-20 text-5xl uppercase">
                    Make <span className="text-primary">art</span> <br />
                    make <span className="text-primary">music</span> <br />
                    make <span className="text-primary">money</span> <br />
                </P>
                <p>Turn your passion into your livelihood, and pioneer the future of art and music monetization.</p>
            </div>
            <div>
                <Img
                    className=""
                    placeholder="shimmer"
                    src={'/public/images/hero.png'}
                    width={785}
                />
            </div>
        </section>
    );
};

export default Hero;