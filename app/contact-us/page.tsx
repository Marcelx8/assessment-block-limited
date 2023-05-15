import ContactForm from '@/components/ContactForm';
import ContentContainer from '@/components/ContentContainer';

const ContactUs = () => {
  return (
    <ContentContainer title="collect | probe | satisfy">
      <section className="xs:p-8 md:p-10">
        <h1 className="text-center text-2xl xs:mb-8 md:mb-14">Contact Us</h1>
        <div className="">
          <ContactForm />
        </div>
      </section>
    </ContentContainer>
  );
};

export default ContactUs;
