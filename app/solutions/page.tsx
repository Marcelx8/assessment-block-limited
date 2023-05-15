'use client';
import Image from 'next/image';
import ContentContainer from '@/components/ContentContainer';

const Solutions = () => {
  return (
    <ContentContainer title="collect | probe | satisfy">
      <section className="text-center xs:text-sm md:text-base xs:pb-0 xs:p-8 md:p-10">
        <span>
          Our company offers comprehensive block solutions to meet all of your
          needs. Whether you need a simple building block or a customized
          solution, we have the expertise and resources to provide you with the
          perfect solution. We specialize in creating durable and efficient
          blocks that can withstand the toughest conditions.
        </span>{' '}
        <div className="xs:h-4 md:hidden"></div>
        <span>
          Whether you need blocks for construction, landscaping, or other
          purposes, we can provide you with the perfect solution. Our highly
          skilled team of experts is dedicated to ensuring your complete
          satisfaction, so you can trust us to deliver quality solutions every
          time.
        </span>
      </section>

      <section className="p-10 pb-0 flex xs:flex-col md:flex-row">
        <div className="xs:w-full md:w-1/6 flex flex-col bg-persian-green xs:mb-3 md:mb-0">
          <div className="flex flex-col justify-center w-full h-full p-3">
            <Image
              alt="content"
              className="mx-auto sm:w-[70px] md:w-full"
              src="/images/data_w.png"
              sizes={'100%'}
              priority
              width={60}
              height={60}
            />
          </div>
          <div className="bg-space-cadet text-platinum text-center text-lg mt-auto py-3">
            <span>Gather</span>
          </div>
        </div>

        <div className="xs:w-full md:w-5/6 md:pl-10 flex flex-col justify-center xs:text-center md:text-left">
          <p className="text-sm">
            Blocks Solution is an innovative data platform for businesses that
            unifies data from multiple sources and provides actionable insights.
            It offers a range of features such as data visualization, advanced
            analytics, and data management tools. Blocks Solution can be
            integrated with existing systems and enables data-driven
            decision-making through real-time monitoring and predictive
            analytics. The platform is designed for businesses of all sizes, and
            it also supports cloud-based deployment. Blocks Solution modernizes
            data management and brings valuable insights to the forefront,
            making it easier for organizations to generate value from their
            data.
          </p>
        </div>
      </section>

      <section className="p-10 pb-0 flex xs:flex-col-reverse md:flex-row">
        <div className="xs:w-full md:w-5/6 md:pl-10 flex flex-col justify-center xs:text-center md:text-left">
          <p className="text-sm">
            The Build Blocks solution data is a comprehensive and flexible
            solution for designing, constructing, and managing building
            projects. It provides a user-friendly interface for managing project
            timelines, budgets, and resources. The solution incorporates
            advanced features such as automated workflows for approvals and
            collaboration tools for team communication. The solution provides
            real-time visibility into project status and seamlessly integrates
            with other project management tools such as BIM software. The Build
            Blocks solution data is suitable for architects, builders,
            construction companies, and project managers looking to increase
            project efficiency and reduce costs.
          </p>
        </div>
        <div className="xs:w-full md:w-1/6 flex flex-col bg-persian-green xs:mb-3 md:mb-0">
          <div className="flex flex-col justify-center w-full h-full p-3">
            <Image
              alt="content"
              className="mx-auto sm:w-[70px] md:w-full"
              src="/images/build_w.png"
              sizes={'100%'}
              priority
              width={60}
              height={60}
            />
          </div>
          <div className="bg-space-cadet text-platinum text-center text-lg mt-auto py-3">
            <span>Build</span>
          </div>
        </div>
      </section>

      <section className="p-10 flex xs:flex-col md:flex-row">
        <div className="xs:w-full md:w-1/6 flex flex-col bg-persian-green xs:mb-3 md:mb-0">
          <div className="flex flex-col justify-center w-full h-full p-3">
            <Image
              alt="content"
              className="mx-auto sm:w-[70px] md:w-full"
              src="/images/performance_w.png"
              sizes={'100%'}
              priority
              width={60}
              height={60}
            />
          </div>
          <div className="bg-space-cadet text-platinum text-center text-lg mt-auto py-3">
            <span>Performance</span>
          </div>
        </div>
        <div className="xs:w-full md:w-5/6 md:pl-10 flex flex-col justify-center xs:text-center md:text-left">
          <p className="text-sm">
            The issue of performance blocks can be resolved by identifying their
            root causes and implementing targeted solutions. This involves
            analyzing data to determine what specific factors are contributing
            to the blockage, such as outdated technology or inefficient
            processes. Once these factors are identified, improvements can be
            made to optimize performance and productivity. This may involve
            upgrading technology, streamlining workflows, or providing
            additional training to employees. By addressing performance blocks
            in a targeted manner, organizations can unlock their full potential
            and achieve greater success.
          </p>
        </div>
      </section>
    </ContentContainer>
  );
};

export default Solutions;
