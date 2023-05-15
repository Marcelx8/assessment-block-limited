import Image from 'next/image';

interface ContentContainerProps {
  title: string;
  backgroundImage?: string;
  className?: string;
  children: React.ReactNode;
}

const ContentContainer = ({
  title,
  backgroundImage,
  className,
  children,
}: ContentContainerProps) => {
  return (
    <>
      <div className="absolute h-[calc(50vh+1.25rem)] inset-0 z-2">
        <Image
          src={backgroundImage || '/images/bg_blocks.jpg'}
          alt="Blocks Limited Logo"
          priority
          fill={true}
          style={{ objectFit: 'cover', objectPosition: 'center', zIndex: -1 }}
        />
      </div>
      <div className="w-full mx-auto">
        <div className="w-full xs:max-w-[90vw] md:max-w-[70vw] mx-auto xs:mt-6 md:mt-10">
          <div className="flex justify-center">
            <span
              className="tracking-tight md:tracking-normal xs:text-xl md:text-4xl lg:text-5xl xl:text-6xl text-baby-powder xs:mb-6 md:mb-12"
              style={{ textShadow: '0px 2px 4px rgba(0,0,0,0.5)' }}
            >
              {title}
            </span>
          </div>
          <div
            className={`border-t-4 border-t-flame border-b-4 border-b-white bg-white text-black mb-10 drop-shadow-bottom ${className}`}
          >
            {children}
          </div>
        </div>
      </div>
    </>
  );
};

export default ContentContainer;
