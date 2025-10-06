import React, { useRef, useState } from "react";
import emailjs from "emailjs-com";
import { VscArrowRight } from "react-icons/vsc";
import { toast } from "react-toastify";
import { FaPhoneAlt } from "react-icons/fa";
import Tag from "./Tag";

const ContactForm = () => {
  const form = useRef();
  const [loading, setLoading] = useState(false);

  // Validation function
  const validateForm = () => {
    const formData = new FormData(form.current);
    const name = formData.get("user_name")?.trim();
    const email = formData.get("user_email")?.trim();
    const phone = formData.get("user_phone")?.trim();
    const location = formData.get("user_location")?.trim();

    if (!name) {
      toast.error("Please enter your name.");
      return false;
    }

    if (!email || !/\S+@\S+\.\S+/.test(email)) {
      toast.error("Please enter a valid email address.");
      return false;
    }

    if (!phone || !/^\d{10}$/.test(phone)) {
      toast.error("Please enter a valid 10-digit phone number.");
      return false;
    }

    if (!location) {
      toast.error("Please enter your location.");
      return false;
    }

    return true;
  };

  // Send EmailJS email
  const sendEmail = (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return; // Stop form submission if validation fails
    }

    setLoading(true);

    console.log("Submit button clicked!");
    // const formData = new FormData(form.current);
    // for (let [key, value] of formData.entries()) {
    //   console.log(key, value);
    // }

    // Send email to owner
    emailjs
      .sendForm(
        "service_4q40sk4", // Your EmailJS service ID
        "template_9tcgpsk", // Owner template
        form.current,
        "Sf8eGfaeLcd_8TYOd" // Your public key
      )
      .then((response) => {
        // console.log("Email sent to owner successfully!", response);

        // Send confirmation email to user
        return emailjs.sendForm(
          "service_4q40sk4",
          "template_t9bd8d9", // User confirmation template
          form.current,
          "Sf8eGfaeLcd_8TYOd"
        );
      })
      .then((res) => {
        // console.log("Confirmation email sent!", res);
        toast.success("Your query has been submitted successfully!");
        form.current.reset(); // Reset form after success
      })
      .catch((err) => {
        console.error("Error occurred:", err);
        toast.error("Failed to send email. Please try again.");
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-white p-2 sm:p-4 xl:p-14">
      <div className="w-full max-w-7xl p-2 sm:p-4 xl:p-6 flex flex-col xl:flex-row space-y-6 xl:space-x-7 xl:space-y-0 items-stretch">
        
        {/* Section 1: Form */}
        <div className="w-full xl:w-1/2 bg-[#F5F5F5] p-4 sm:p-6 xl:p-12 rounded-lg shadow-md flex flex-col justify-between">
          {/* Header Badge */}
          <div><Tag text="Get inspection" /></div>

          {/* Heading */}
          <p className="font-inter font-semibold text-[48px] leading-[58px] text-[#222222] mt-8 mb-12">
            Your satisfaction is our top priority!
          </p>

          {/* Form */}
          <form
            ref={form}
            onSubmit={sendEmail}
            className="space-y-4 xl:space-y-8 flex-1"
          >
            {/* Name & Email */}
            <div className="flex flex-col sm:flex-row space-y-3 sm:space-x-4 sm:space-y-0">
              <div className="w-full sm:w-1/2">
                <label className="block text-gray text-xs sm:text-sm font-medium mb-2">
                  Name
                </label>
                <input
                  type="text"
                  name="user_name"
                  placeholder="Enter here"
                  className="w-full p-3 rounded-lg focus:outline-none focus:ring-1 focus:ring-gray"
                  required
                />
              </div>
              <div className="w-full sm:w-1/2">
                <label className="block text-gray text-xs sm:text-sm font-medium mb-2">
                  Email
                </label>
                <input
                  type="email"
                  name="user_email"
                  placeholder="Enter here"
                  className="w-full p-3 rounded-lg focus:outline-none focus:ring-1 focus:ring-gray"
                  required
                />
              </div>
            </div>

            {/* Phone & Truck Brand */}
            <div className="flex flex-col sm:flex-row space-y-3 sm:space-x-4 sm:space-y-0">
              <div className="w-full sm:w-1/2">
                <label className="block text-gray text-xs sm:text-sm font-medium mb-2">
                  Phone
                </label>
                <input
                  type="tel"
                  name="user_phone"
                  placeholder="Enter here"
                  className="w-full p-3 rounded-lg focus:outline-none focus:ring-1 focus:ring-gray"
                  required
                />
              </div>
              <div className="w-full sm:w-1/2">
                <label className="block text-gray text-xs sm:text-sm font-medium mb-2">
                  Truck brand
                </label>
                <input
                  type="text"
                  name="truck_brand"
                  placeholder="Enter here"
                  className="w-full p-3 rounded-lg focus:outline-none focus:ring-1 focus:ring-gray"
                />
              </div>
            </div>

            {/* Location */}
            <div>
              <label className="block text-gray text-xs sm:text-sm font-medium mb-2">
                Location
              </label>
              <input
                type="text"
                name="user_location"
                placeholder="Enter here"
                className="w-full p-3 rounded-lg focus:outline-none focus:ring-1 focus:ring-gray"
                required
              />
            </div>

            {/* Message */}
            <div>
              <label className="block text-gray text-xs sm:text-sm font-medium mb-2">
                Message
              </label>
              <textarea
                name="user_message"
                placeholder="Enter your message here"
                rows="4"
                className="w-full p-3 rounded-lg focus:outline-none focus:ring-1 focus:ring-gray resize-none"
                required
              ></textarea>
            </div>

            {/* Submit Button */}
            <div className="flex justify-start ">
              <button
                type="submit"
                className="group relative flex justify-center items-center gap-3 rounded-lg bg-black px-6 py-3 font-semibold text-sm text-white transition-all duration-300 ease-in-out"
              >
                <span className="flex justify-center items-center overflow-hidden">
                  <span className="scale-110 flex text-red left-4 transition-all duration-500 ease-in-out group-hover:translate-x-[100%]">
                    <VscArrowRight />
                  </span>
                </span>
                <span className="capitalize whitespace-nowrap font-semibold text-md group-hover:translate-x-[-30%] bg-transparent transition-all duration-500 ease-in-out">
                  {loading ? "Sending" : "Submit"}
                </span>
                <span className="absolute right-5 flex justify-center items-center overflow-hidden">
                  <span className="translate-x-[-100%] scale-110 flex text-red left-4 transition-all duration-500 ease-in-out group-hover:translate-x-0">
                    <VscArrowRight />
                  </span>
                </span>
              </button>
            </div>
          </form>
        </div>

        {/* Section 2: Images */}
        <div className="w-full xl:w-1/2 flex flex-col space-y-4 xl:space-y-6">
          {/* Top Image (Fixed Size) */}
          <div className="relative bg-gray rounded-lg shadow-md h-[250px] overflow-hidden">
            <img
              src="/contact/formImg1.avif"
              alt="Truck servicing"
              className="absolute inset-0 opacity-80 w-full h-full object-cover rounded-lg"
            />
            <div className="relative z-10 p-6 py-12 flex flex-col justify-start gap-5 h-full">
              <h2 className="text-[18px] xl:text-[26px] font-semibold flex flex-col gap-1 text-white mb-2 xl:mb-4">
                <span>Looking for truck servicing in USA?</span>
                <span className="text-[16px] xl:text-[24px]">Contact us now!</span>
              </h2>
              <a
                href="tel:317-771-5095"
                className="group relative flex items-center justify-center gap-3 rounded-lg bg-red-gradient px-6 py-3 font-semibold text-sm text-white transition-all duration-300 ease-in-out w-60"
              >
                <span className="flex justify-center items-center overflow-hidden">
                  <span className="scale-110 flex text-white left-4 transition-all duration-500 ease-in-out group-hover:translate-x-[100%]">
                    <FaPhoneAlt />
                  </span>
                </span>
                <span className="capitalize whitespace-nowrap font-semibold text-base group-hover:translate-x-[-30%] bg-transparent transition-all duration-500 ease-in-out">
                317-771-5095
                </span>
                <span className="absolute right-5 flex justify-center items-center overflow-hidden">
                  <span className="translate-x-[-100%] scale-110 flex text-white left-4 transition-all duration-500 ease-in-out group-hover:translate-x-0">
                    <FaPhoneAlt />
                  </span>
                </span>
              </a>
            </div>
          </div>

          {/* Bottom Image (Stretches) */}
          <div className="flex-1 rounded-lg shadow-md overflow-hidden">
            <img
              src="/contact/formImg2.avif"
              alt="Truck servicing"
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;