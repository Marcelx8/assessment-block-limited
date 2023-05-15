import Image from 'next/image';
import ContentContainer from '@/components/ContentContainer';
import ContentBlock from '@/components/ContentBlock';

const Home = () => {
  return (
    <ContentContainer title="collect | probe | satisfy">
      <section className="xs:pb-0 xs:p-8 md:p-10">
        <div className="flex xs:flex-wrap md:flex-wrap-nowrap">
          <ContentBlock
            className="xs:w-full md:w-1/3"
            title="Integrity"
            image="shield.png"
            description="Integrity is what drives our decisions and actions."
          />
          <ContentBlock
            className="xs:w-full md:w-1/3"
            title="Knowledge"
            image="thinking.png"
            description="With our expertise, we possess a strong and comprehensive understanding of the subject matter at hand."
          />
          <ContentBlock
            className="xs:w-full md:w-1/3"
            title="Blocks"
            image="blocks.png"
            description="Our company is a trailblazer in the industry of creating and distributing high-quality blocks."
          />
        </div>
      </section>

      <section className="bg-persian-green text-white text-center xs:p-8 md:p-10">
        <div className="flex flex-col">
          <div className="flex xs:mb-6 md:mb-12">
            <div className="xs:w-full md:w-1/3 flex justify-center">
              <div className="xs:max-w-[70px] md:max-w-[120px]">
                <Image
                  alt="collect"
                  className="w-full"
                  src="/images/collect_w.png"
                  sizes={'100%'}
                  priority
                  width={60}
                  height={60}
                />
              </div>
            </div>
            <div className="xs:w-full md:w-1/3 flex justify-center">
              <div className="xs:max-w-[70px] md:max-w-[120px]">
                <Image
                  alt="probe"
                  className="w-full"
                  src="/images/probe_w.png"
                  sizes={'100%'}
                  priority
                  width={60}
                  height={60}
                />
              </div>
            </div>
            <div className="xs:w-full md:w-1/3 flex justify-center">
              <div className="xs:max-w-[70px] md:max-w-[120px]">
                <Image
                  alt="satisfy"
                  className="w-full"
                  src="/images/satisfy_w.png"
                  sizes={'100%'}
                  priority
                  width={60}
                  height={60}
                />
              </div>
            </div>
          </div>
          <p className="text-base">
            Collect, probe, satisfy - these three words sum up the core process
            of customer service.
          </p>
        </div>
      </section>

      <section className="xs:p-8 md:p-10 bg-space-cadet text-white text-base text-center">
        <div className="mx-auto md:max-w-[60%]">
          <p>
            Curiosity is a natural human trait that drives us to seek answers
            and explore the unknown.
          </p>
          <p>Trust us to be your go-to source for all your block needs.</p>
        </div>
      </section>
    </ContentContainer>
  );
};

export default Home;
