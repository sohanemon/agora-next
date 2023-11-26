import React from 'react';
import { Text as P } from '@/components/ui/text';
import { Img } from '@/components/image';
import Button from '@/components/ui/Button';

const Hero = () => {
    return (
        <section className="flex flex-col gap-10 p-4 xl:flex-row xl:gap-40">
            <div className="mt-10 flex flex-col items-center xl:ml-20 xl:w-[430px]">
                <p className="flex gap-2 uppercase">
                    <Img
                        className='w-7'
                        placeholder="shimmer"
                        src={'/public/logo.png'}
                    />
                    Agora
                </p>
                <P className="text-clamp mb-4 mt-20 uppercase">
                    Make <span className="text-primary">art</span> <br />
                    make <span className="text-primary">music</span> <br />
                    make <span className="text-primary">money</span> <br />
                </P>
                <p className='text-center md:text-start'>Turn your passion into your livelihood, and pioneer the future of art and music monetization.</p>
                <Button />
            </div>
            <div className='flex flex-col items-center'>
                <Img
                    className=""
                    placeholder="shimmer"
                    src={'/public/images/banner.png'}
                    width={785}
                />
            </div>
        </section>
    );
};

export default Hero;