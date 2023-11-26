import React from 'react';
import { Text as P } from '@/components/ui/text';
import { Img } from '@/components/image';

const ScreenshotView = () => {
    return (
        <section className='container'>
            <P className="mt-20 mb-4 text-center text-clamp font-bold uppercase">
                MORE SCREENSHOTS <br />
                FOR YOUR VIEWING PLEASURE
            </P>
            <div className='mt-10 grid grid-cols-1  gap-5 sm:grid-cols-2 md:grid-cols-4'>
                <div className='flex flex-col items-center'>
                    <P className='mb-3 text-center text-xl font-medium'>Wallet Page</P>
                    <Img
                        placeholder='shimmer'
                        src={'/public/images/wallet.png'}
                    />
                </div>
                <div className='flex flex-col items-center'>
                    <P className='mb-3 text-center text-xl font-medium'>Notification Page</P>
                    <Img
                        placeholder='shimmer'
                        src={'/public/images/notification.png'}
                    />
                </div>
                <div className='flex flex-col items-center'>
                    <P className='mb-3 text-center text-xl font-medium'>Top Page</P>
                    <Img
                        placeholder='shimmer'
                        src={'/public/images/top.png'}
                    />
                </div>
                <div className='flex flex-col items-center'>
                    <P className='mb-3 text-center text-xl font-medium'>Profile Page</P>
                    <Img
                        placeholder='shimmer'
                        src={'/public/images/profile.png'}
                    />
                </div>
            </div>
            <p className='mt-8 mx-auto max-w-[900px] text-center font-semibold'>
                <>
                    <span className='opacity-70'>On Agora </span>all social actions are also monetary actions.<span className='opacity-70'> People pay to participate (even if it’s just a tiny micropayment). Every engagement you have is immediately monetized!</span>
                </> <br /> <br />
                <span className='text-primary'>That means every time you get a notification, you get new money in your wallet.</span>
            </p>
            <div className='mt-16 grid grid-cols-1 gap-8 md:grid-cols-2'>
                <div className='border p-6'>
                    <P className='text-2xl font-medium'>What are sats? </P>
                    <p>It’s just another name for Bitcoin. <br />
                        1 BTC = 100,000,000 sats. </p>
                </div>
                <div className='border p-6'>
                    <P className='text-2xl font-medium'>Why does Agora use sats and Bitcoin?</P>
                    <p>
                        Because they can be sent to anyone in the world! If you’re a music producer, artist, or fan from Nigeria, Venezuela, or anywhere that isn’t well connected to the traditional financial system, paypal is expensive or sometimes can’t facilitate your transactions.
                        <br />
                        However, Bitcoin is a fast, cheap, and reliable way to send payments. With the Bitcoin Lightning network we can instantly send money anywhere in the universe and compensate artists and producers for their valuable art!
                    </p>

                </div>
            </div>
        </section>
    );
};

export default ScreenshotView;