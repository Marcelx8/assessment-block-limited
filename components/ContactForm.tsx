'use client';

import { Formik, FormikHelpers, Field, Form } from 'formik';
import { contactFormValidationSchema } from '@/helpers/form-validation';

interface ContactFormValuesProps {
  name: string;
  email: string;
  details: string;
}

const ContactForm = () => {
  const initialValues: ContactFormValuesProps = {
    name: '',
    email: '',
    details: '',
  };

  const handleSubmit = async (
    values: ContactFormValuesProps,
    actions: FormikHelpers<ContactFormValuesProps>
  ) => {
    try {
      // await axios.post('/api/contact', values);
      actions.resetForm();
      alert('Thank you for contacting us!');
    } catch (error) {
      alert('Something went wrong. Please try again.');
    }
  };

  return (
    <Formik
      enableReinitialize
      initialValues={initialValues}
      validationSchema={contactFormValidationSchema}
      onSubmit={handleSubmit}
    >
      {(actions) => (
        <Form>
          <div className="flex flex-col md:flex-row md:space-x-4 mb-6">
            <div className="flex flex-col md:w-1/2 mb-4 md:mb-0">
              <label htmlFor="name">Name</label>
              <Field
                id="name"
                name="name"
                type="text"
                onChange={actions.handleChange}
                className="border-2 border-gray-400 focus:border-persian-green focus:outline-none p-2"
                invalid={(actions.touched.name && actions.errors.name
                  ? true
                  : false
                ).toString()}
              />
              {actions.touched.name && actions.errors.name ? (
                <div className="text-red-500 text-sm">
                  {actions.errors.name}
                </div>
              ) : null}
            </div>
            <div className="flex flex-col md:w-1/2 mb-4 md:mb-0">
              <label htmlFor="email">Email</label>
              <Field
                id="email"
                name="email"
                type="email"
                onChange={actions.handleChange}
                className="border-2 border-gray-400 focus:border-persian-green focus:outline-none p-2"
                invalid={(actions.touched.email && actions.errors.email
                  ? true
                  : false
                ).toString()}
              />
              {actions.touched.email && actions.errors.email ? (
                <div className="text-red-500 text-sm">
                  {actions.errors.email}
                </div>
              ) : null}
            </div>
          </div>
          <div className="flex flex-col md:flex-row md:space-x-4 mb-6">
            <div className="flex flex-col w-full mb-4 md:mb-0">
              <label htmlFor="details">Details</label>
              <Field
                id="details"
                name="details"
                type="text-area"
                onChange={actions.handleChange}
                className="min-h-20 border-2 border-gray-400 focus:border-persian-green focus:outline-none p-2"
                invalid={(actions.touched.details && actions.errors.details
                  ? true
                  : false
                ).toString()}
              />
              {actions.touched.details && actions.errors.details ? (
                <div className="text-red-500 text-sm">
                  {actions.errors.details}
                </div>
              ) : null}
            </div>
          </div>
          <div className="flex justify-center">
            <button
              type="submit"
              disabled={actions.isSubmitting}
              className="bg-white border-2 border-persian-green text-persian-green focus:ouline-none hover:bg-persian-green-100 ease-in-out duration-200 text-base font-bold uppercase px-8 py-2"
            >
              Submit
            </button>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default ContactForm;
