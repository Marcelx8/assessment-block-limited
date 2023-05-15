import Image from 'next/image';
import ContentContainer from '@/components/ContentContainer';
import CompanyMap from '@/components/CompanyMap';
import Link from 'next/link';

const About = () => {
  const socialMedia = [
    {
      name: 'twitter',
      url: 'https://twitter.com',
      image: '/images/sm_twitter_w.png',
    },
    {
      name: 'linkedin',
      url: 'https://linkedin.com',
      image: '/images/sm_linkedin_w.png',
    },
    {
      name: 'facebook',
      url: 'https://facebook.com',
      image: '/images/sm_facebook_w.png',
    },
    {
      name: 'youtube',
      url: 'https://youtube.com',
      image: '/images/sm_youtube_w.png',
    },
  ];

  return (
    <ContentContainer title="collect | probe | satisfy">
      <section className="xs:p-8 md:p-10 flex xs:flex-col md:flex-row">
        <div className="xs:w-full md:w-1/4 xs:mb-6 md:mb-0 flex justify-center items-center">
          <Image
            alt="collect"
            className="w-full md:max-w-[350px] xs:max-w-[120px]"
            src="/images/who.png"
            sizes={'100%'}
            priority
            width={60}
            height={60}
          />
        </div>
        <div className="xs:w-full md:w-3/4 flex flex-col justify-center md:pl-16">
          <h2 className="xs:text-center md:text-left text-xl mb-4">
            We know about blocks.
          </h2>
          <p className="text-sm text-center">
            Our block data is unbeatable. It is the most accurate and
            comprehensive data available. We have gathered and analyzed data
            from various sources to ensure that we provide the most up-to-date
            and reliable information possible. Our database includes all major
            cities and regions, along with detailed data on each block,
            including size, shape, and building information. With our block
            data, you can make informed decisions for your business or research
            needs with confidence. Trust us to provide you with the most
            reliable and accurate block data available.
          </p>
        </div>
      </section>
      <section className="bg-persian-green text-white py-4 xs:px-8 md:px-10 flex xs:flex-col md:flex-row">
        <div className="xs:w-full md:w-1/2 flex xs:flex-row xs:flex-wrap md:flex-nowrap md:flex-col md:items-end justify-center md:pr-4 xs:mb-4 md:mb-0">
          {[
            'Block Limited',
            '42 Block Avenue',
            'Blockland',
            'Bremen',
            '1313',
          ].map((line, index, array) => {
            return (
              <div key={line.replaceAll('', '-')}>
                {line}
                {index !== array.length - 1 && (
                  <span className="md:hidden">,&nbsp;</span>
                )}
              </div>
            );
          })}
        </div>
        <div className="xs:w-full md:w-1/2 flex justify-start md:border-l-4 md:pl-4 border-l-white">
          <CompanyMap />
        </div>
      </section>

      <section className="xs:p-8 md:p-10 pb-6 bg-space-cadet text-white text-base text-center">
        <div className="flex justify-between items-center xs:w-full md:w-10/12 mx-auto mb-8">
          {socialMedia.map((media) => (
            <Link
              className="hover:opacity-70"
              href={media.url}
              target="_blank"
              key={media.name}
            >
              <Image
                alt="twitter"
                className="w-full xs:max-w-[40px] md:max-w-[70px]"
                src={media.image}
                sizes={'100%'}
                priority
                width={60}
                height={60}
              />
            </Link>
          ))}
        </div>
        <p className="text-white text-lg text-center">
          Find us on these social media platforms.
        </p>
      </section>
    </ContentContainer>
  );
};

export default About;
