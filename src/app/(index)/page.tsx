import { Text as P } from '@/components/ui/text';
import { Img } from '@/components/image';

export const metadata = {
  title: 'Home',
};
export default async function IndexPage() {
  return (
    <section>
      <P center className="mt-20 text-7xl text-primary/80">
        Start by editing src/app/(index)/page.tsx
      </P>
      <br />
      <P center>
        try to use shimmer for placeholder of image like the image below
      </P>
      <br />
      <Img
        className="h-[500px] rounded-md object-cover center-x"
        objectFit="cover"
        placeholder="shimmer"
        src={'https://images.unsplash.com/photo-1695653420624-4a23b2ffc77c'}
        width={500}
      />
    </section>
  );
}
