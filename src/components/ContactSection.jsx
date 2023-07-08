import { useRef } from "react";
import { useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

const ContactSection = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const form = useRef()

  const onSubmit =  (data, e) => {
    e.preventDefault()
    console.log(e)
    console.log(data)
    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID, form.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(
        (result) => {
          console.log({ result });
          toast.success('Your email has been sent!📨', {
            position: "bottom-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
            });
          
          reset();
        },
        (error) => {
          console.log({error});
          toast.error('There was an error, please try again', {
            position: "bottom-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
            });
        }
      );
  };

  return (
    <section
      id="contact"
      className="mt-20 mb-8 mx-7 sm:mx-14 flex flex-col items-center"
    >
      <h2 className="text-center text-4xl sm:text-5xl font-bold my-3 sm:my-10">Contact</h2>
      <div className="bg-zinc-200/40  p-10 sm:mx-auto rounded-lg shadow-xl w-full sm:w-2/3">
        <form ref={form} onSubmit={handleSubmit(onSubmit)}>
          <div className="pb-4">
            <label className="text-base sm:text-xl font-bold ">Name</label>
            <input
              type="text"
              name="name"
              {...register("name", {
                required: true,
              })}
              className="w-full rounded-md px-2 py-1 mt-2 text-black"
            />
            <div className="text-red-700 font-semibold">
              {errors.name?.type === "required" && <p>Please add your name</p>}
            </div>
          </div>

          <div className="pb-4">
            <label className="texl-base sm:text-xl font-bold">Email</label>
            <input
              type="text"
              name="email"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/,
                  message: "Email is not valid",
                },
              })}
              className=" w-full rounded-md mb-2 px-2 py-1 text-black"
            />
            <div className="">
              {errors.email && (
                <p className="text-red-700 font-semibold">
                  {errors.email.message}
                </p>
              )}
            </div>
          </div>

          <div className="mb-3">
            <label className="texl-base sm:text-xl font-bold">Message</label>
            <textarea
              {...register("message", { required: true, min: 20 })}
              className=" w-full rounded-md px-2 py-1 mt-1 text-black"
            />
            <div className="text-red-700 font-semibold">
              {errors.message?.type === "required" && (
                <p className="text-red-700 font-semibold">Please add a Message</p>
              )}
              {errors.message?.type === "min" && (
                <p className="text-red-700 font-semibold">Please add a longer message</p>
              )}
            </div>
          </div>

          <div className="div">
            <button className="px-9 py-4 font-bold mx-auto flex justify-center  bg-fuchsia-700 rounded-3xl hover:text-xl dark:bg-purple-900 dark:shadow-lg dark:shadow-indigo-500/50 text-stone-100">
              Send Message
            </button>
          </div>
        </form>
      </div>
      <ToastContainer />
    </section>
  );
};

export default ContactSection;
