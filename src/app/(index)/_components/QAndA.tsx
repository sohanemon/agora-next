import { Text as P } from '@/components/ui/text'; 
import React from 'react';

const QAndA = () => {
    const QandAData=[
        {
            que:"So what do you do on Agora?",
            ans:"You create polls around your art and music, and get feedback from your friends and fans."
        },
        {
            que: "How do these polls work?",
            ans: "Producers upload their music and accompanying art. People vote which art best matches the music."
        },
        {
            que: "So how do you make money with polls?",
            ans: "Every vote is a micropayment, so you make money whenever people participate!"
        },
        {
            que: "Wait, what are micropayments?",
            ans: "Payments less than $0.5 USD. You can vote on art with micropayments as small as $0.004 USD on Agora!"
        },
    ]
    return (
        <section className='container mt-16'>
            <P center className='text-clamp'>Q&A</P>
            <div>

            </div>
        </section>
    );
};

export default QAndA;