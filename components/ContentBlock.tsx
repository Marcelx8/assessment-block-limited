import Image from 'next/image';

interface ContentBlockProps {
  title: string;
  image: string;
  description: string;
  className?: string;
}

const ContentBlock = ({
  title,
  image,
  description,
  className,
}: ContentBlockProps) => {
  return (
    <div
      key={title}
      className={`flex flex-col justify-start text-center px-4 xs:mb-6 ${className}`}
    >
      <h2 className="text-lg xs:mb-2 md:mb-6">{title}</h2>
      <div className="mx-auto xs:max-w-[70px] md:max-w-[120px] xs:mb-2 md:mb-4">
        <div className="rounded-full xs:border-2 md:border-4 border-black p-3">
          <Image
            alt={title.toLowerCase()}
            className="w-full"
            src={`/images/${image}`}
            sizes={'100%'}
            priority
            width={60}
            height={60}
          />
        </div>
      </div>
      <p className="text-sm">{description}</p>
    </div>
  );
};

export default ContentBlock;
