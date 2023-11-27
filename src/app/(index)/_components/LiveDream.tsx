import React from 'react';
import { Text as P } from '@/components/ui/text';
import { Img } from '@/components/image';

const LiveDream = () => {
    return (
        <section className='container'>
            <P className="mb-4 mt-20 text-center text-clamp font-bold uppercase">LIVE YOUR DREAM</P>
            <div className='mt-32 flex flex-col sm:items-center'>
                <P className='mb-5 text-lg font-bold sm:-ml-80 sm:text-2xl md:text-3xl md:-ml-96'>
                    I DO WHAT I LOVE <br />
                    I LOVE WHAT I DO
                </P>
                <Img
                    placeholder='shimmer'
                    src={'/public/images/dream.png'}
                    width={515}
                />
                <P className='ml-12 mt-5 text-lg font-bold sm:ml-32 sm:text-3xl md:ml-48'>
                    MY PASSION IS MY LIVELIHOOD <br />
                    MY LIVELIHOOD IS MY PASSION
                </P>
            </div>
            <div className='mt-20 flex justify-center'>
                <div className='grid grid-cols-2 items-center'>
                    <div className=''>
                        <Img
                            className=''
                            placeholder='shimmer'
                            src={'/public/images/music2.png'}
                            width={332}
                        />
                    </div>
                    <div>
                        <P className="text-center text-clamp font-bold uppercase">
                            I Make <br />
                            <span className="text-primary">Music</span>
                        </P>
                    </div>
                    <div className=''>
                        <P className="mb-4 text-center text-clamp font-bold uppercase">
                            I Make <br />
                            <span className="text-primary">Music</span>
                        </P>
                    </div>
                    <div>
                        <Img
                            className='-ml-3 -mt-3 sm:-mt-14'
                            placeholder='shimmer'
                            src={'/public/images/music.png'}
                            width={332}
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default LiveDream;