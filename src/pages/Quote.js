import { useState } from "react";
import { useForm } from "react-hook-form";
import useWeb3Forms from "@web3forms/react";
import HCaptcha from '@hcaptcha/react-hcaptcha';

const Quote = () => {
  document.title ="Get A Quote - AudioTech Rentals"; 
  document.getElementsByTagName("META")[2].content="Request a quote from AudioTech Rentals for your next event. Fill out our form with your details and desired services, and let us help you create the perfect audio experience. Contact us now!";
  const {
    register,
    handleSubmit,
    reset,
    watch,
    control,
    setValue,
    formState: { errors, isSubmitSuccessful, isSubmitting },
  } = useForm({
    mode: "onTouched",
  });
  const [isSuccess, setIsSuccess] = useState(false);
  const [message, setMessage] = useState(false);
  const onHCaptchaChange = (token) => {
    setValue("h-captcha-response", token);
  };
  // Please update the Access Key in the .env
  const apiKey = process.env.PUBLIC_ACCESS_KEY || "1bfa6dd0-3bf7-4ba1-af59-930613864844";

  const { submit: onSubmit } = useWeb3Forms({
    access_key: apiKey,
    settings: {
      from_name: "Quote Form",
      subject: "New Quote Request from your Website",
    },
    onSuccess: (msg, data) => {
      setIsSuccess(true);
      setMessage(msg);
      reset();
    },
    onError: (msg, data) => {
      setIsSuccess(false);
      setMessage(msg);
    },
  });

  return (
    <>
    
    <div className={"mx-auto my-0 prose md:prose-md text-left 2xl:max-w-screen-lg max-h-screen-lg mx-auto text-1xl"}>
      <h3>Get A Quote:</h3>
      <p className={'text-sm'}>Please write down your requested service and include any related details or questions.</p>

    </div>
      <form onSubmit={handleSubmit(onSubmit)} className="my-10 mx-auto lg:w-3/5 sm:w-4/5  ">
        
        <div className="max-h-screen-lg mx-auto my-90 content-center ">
        <input
          type="checkbox"
          id=""
          className="hidden"
          style={{ display: "none" }}
          {...register("botcheck")}></input>

        <div className="mb-5">
          <input
            type="text"
            placeholder="Full Name"
            autoComplete="false"
            className={`w-full px-4 py-3 border-2 placeholder:text-gray-800  rounded-md outline-none    focus:ring-4  ${
              errors.name
                ? "border-red-600 focus:border-red-600 ring-red-100 dark:ring-0"
                : "border-gray-300 focus:border-gray-600 ring-gray-100 dark:border-gray-600 dark:focus:border-white dark:ring-0"
            }`}
            {...register("name", {
              required: "Full name is required",
              maxLength: 80,
            })}
          />
          {errors.name && (
            <div className="mt-1 text-red-600">
              <small>{errors.name.message}</small>
            </div>
          )}
        </div>

        <div className="mb-5 ">
          <label htmlFor="email_address" className="sr-only">
            Email Address
          </label>
          <input
            id="email_address"
            type="email"
            placeholder="Email Address"
            name="email"
            autoComplete="false"
            className={`w-full px-4 py-3 border-2 placeholder:text-gray-800  rounded-md outline-none  focus:ring-4  ${
              errors.email
                ? "border-red-600 focus:border-red-600 ring-red-100 dark:ring-0"
                : "border-gray-300 focus:border-gray-600 ring-gray-100 dark:border-gray-600 dark:focus:border-white dark:ring-0"
            }`}
            {...register("email", {
              required: "Enter your email",
              pattern: {
                value: /^\S+@\S+$/i,
                message: "Please enter a valid email",
              },
            })}
          />
          {errors.email && (
            <div className="mt-1 text-red-600">
              <small>{errors.email.message}</small>
            </div>
          )}
        </div>

        <div className="mb-3">
          <textarea
            name="message"
            placeholder="Your Message"
            className={`w-full h-40 px-4 py-3 border-2 placeholder:text-gray-800 rounded-md outline-none  h-36 focus:ring-4  ${
              errors.message
                ? "border-red-600 focus:border-red-600 ring-red-100 dark:ring-0"
                : "border-gray-300 focus:border-gray-600 ring-gray-100 dark:border-gray-600 dark:focus:border-white dark:ring-0"
            }`}
            {...register("message", {
              required: "Enter your Message",
            })}
          />
          {errors.message && (
            <div className="mt-1 text-red-600">
              {" "}
              <small>{errors.message.message}</small>
            </div>
          )}
        </div>       
        <HCaptcha
         sitekey="50b2fe65-b00b-4b9e-ad62-3ba471098be2"
         reCaptchaCompat={false}
         onVerify={onHCaptchaChange} 
        /> 
        <button
          type="submit"
          className="w-full py-4 font-semibold  rounded-md bg-blue-100 hover:bg-green-200 focus:outline-none focus:ring-offset-2 focus:ring focus:ring-gray-200 px-7 ">
          {isSubmitting ? (
            <svg
              className="w-5  h-5 mx-auto text-white dark:text-black animate-spin"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24">
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"></circle>
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
          ) : (
            "Send Message"
          )}

        </button>                

        </div>

      </form>

      {isSubmitSuccessful && isSuccess && (
        <div className="mt-3 text-sm text-center text-green-500">
          {message || "Success. Message sent successfully"}
        </div>
      )}
      {isSubmitSuccessful && !isSuccess && (
        <div className="mt-3 text-sm text-center text-red-500">
          {message || "Something went wrong. Please try later."}
        </div>
      )}
    </>
  );
}
export default Quote;