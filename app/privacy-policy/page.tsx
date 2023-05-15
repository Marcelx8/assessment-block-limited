import ContentContainer from '@/components/ContentContainer';

const PrivacyPolicy = () => {
  return (
    <ContentContainer title="collect | probe | satisfy">
      <section className="xs:p-8 md:p-10">
        <h1 className="text-center xs:text-lg md:text-2xl xs:mb-8 md:mb-14">
          Privacy Policy for Block Limited <br />
          <span className="text-xs">* text below from ChatGTP</span>
        </h1>

        <p className="xs:text-sm md:text-base">
          At Block Limited, we understand the importance of privacy and the
          security of your personal information. We are committed to protecting
          your privacy and safeguarding the data that we collect from you.
        </p>

        <h3 className="font-bold xs:text-md md:text-lg my-4">
          Data Collection:
        </h3>

        <p className="xs:text-sm md:text-base">
          We collect data from various sources to ensure that we provide the
          most up-to-date and reliable block information possible. This data
          includes information on block size, shape, building information, and
          other relevant details.
        </p>

        <h3 className="font-bold xs:text-md md:text-lg my-4">Data Use:</h3>

        <p className="xs:text-sm md:text-base">
          We use the data we collect to provide our clients with the most
          accurate and comprehensive block data available. We do not share your
          personal information with third parties for marketing or advertising
          purposes.
        </p>

        <h3 className="font-bold xs:text-md md:text-lg my-4">Data Security:</h3>

        <p className="xs:text-sm md:text-base">
          We take the security of your personal information seriously. We use
          industry-standard measures to protect your data against unauthorized
          access, disclosure, or loss. We restrict access to your personal
          information to our employees who need to know the information to
          perform their job responsibilities.
        </p>

        <h3 className="font-bold xs:text-md md:text-lg my-4">
          Changes to the Privacy Policy:
        </h3>

        <p className="xs:text-sm md:text-base">
          We may update this privacy policy from time to time. We will post any
          updates to our website, and we encourage you to review this policy
          periodically.
        </p>

        <h3 className="font-bold xs:text-md md:text-lg my-4">Contact Us:</h3>

        <p className="xs:text-sm md:text-base">
          If you have any questions about our privacy policy or our data
          practices, please contact us at <u>support@blocklimited.com</u>.
        </p>
      </section>
    </ContentContainer>
  );
};

export default PrivacyPolicy;
