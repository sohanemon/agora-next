import React from 'react';
import { Text as P } from '@/components/ui/text';
import { Img } from '@/components/image';

const LiveDream = () => {
    return (
        <section className='container'>
            <P className="mt-20 mb-4 text-center text-clamp font-bold uppercase">LIVE YOUR DREAM</P>
            <div className='mt-32 flex flex-col sm:items-center'>
                <P className='mb-5   sm:-ml-80 md:-ml-96 text-xl font-bold sm:text-3xl'>
                    I DO WHAT I LOVE <br />
                    I LOVE WHAT I DO
                </P>
                <Img
                    placeholder='shimmer'
                    src={'/public/images/dream.png'}
                    width={515}
                />
                <P className='mt-5 ml-28 sm:ml-32 md:ml-48 text-xl font-bold sm:text-3xl'>
                    MY PASSION IS MY LIVELIHOOD <br />
                    MY LIVELIHOOD IS MY PASSION
                </P>
            </div>
            <div className='mt-20 flex flex-col items-center justify-center'>
                <div className='flex gap-14 sm:gap-28'>
                    <Img
                    className=''
                        placeholder='shimmer'
                        src={'/public/images/music2.png'}
                        width={332}
                    />
                    <P className="mb-4 mt-20 text-center text-clamp font-bold uppercase">
                        I Make <br />
                        <span className="text-primary">Music</span>
                    </P>
                </div>
                <div className='-ml-4 flex gap-12  sm:ml-4 sm:gap-28'>
                    <P className="mb-4 mt-20 text-center text-clamp font-bold uppercase">
                        I Make <br />
                        <span className="text-primary">Music</span>
                    </P>
                    <Img
                        className='-mt-3 sm:-mt-14'
                        placeholder='shimmer'
                        src={'/public/images/music.png'}
                        width={332}
                    />
                </div>
            </div>
        </section>
    );
};

export default LiveDream;