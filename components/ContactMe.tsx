import React, { useState } from 'react'
import { Formik, Form, Field, ErrorMessage, FormikHelpers } from 'formik'
import {object, string} from "yup"
import emailjs from '@emailjs/browser';

interface FormValues{
    name: string
    email: string
    message: string
}

enum SubmitState{
    Sending,
    Error,
    Success,
    Waiting
}

function ContactMe() {
    const [submitState, setSubmitState] = useState<SubmitState>(SubmitState.Waiting)

    const ContactFormSchema = object().shape({
        name: string()
            .matches(/^[aA-zZ\s]+$/, "Please enter valid name")
            .max(40, "Name must be at most 40 characters")
            .required("Required"),
        email: string()
            .email("Please enter a valid mail address")
            .required("Required"),
        message: string()
            .max(500, "Message must be at most 500 characters")
            .required("Required")
    })

    const inputClasses = "bg-white w-full py-2 px-3 rounded-lg border-[1px] focus:outline focus:outline-2 placeholder:opacity-100"
    const inputErrorClasses = (isError: boolean) => isError ? "text-red border-red-600 focus:outline-red-500": "text-black border-black focus:outline-green-700"

    const handleSubmit = async (values: FormValues) => {
        console.log(values)
        const templateParams = {
            name: values.name,
            email: values.email,
            message: values.message,
          };
        emailjs.send(process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!, process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!, templateParams, {
            publicKey: process.env.NEXT_PUBLIC_EMAIL_JS_PUBLIC_KEY
        })
            .then(
                (response) => {
                    console.log(response)
                },
                (err) => {
                    console.log(err)
                }
            )
    }

    return (
        <div className='bg-slate-900 pb-5'>
            <div className='text-right pt-5 md:pt-10  mx-auto px-4 md:px-8 lg:max-w-screen-xl md:max-w-screen-lg flex flex-row-reverse'>
                <div className='w-1/2'>
                    <h1 className='text-xl font-bold uppercase text-[#55e6a5] mb-4'>
                        Contact Me
                    </h1>
                    <h2 className='text-lg md:text-3xl lg:text-5xl leading-8 md:leading-12 capitalize mb-12 font-bold text-white'>
                        Transforming <span className='text-yellow-400'>Visions</span>
                    </h2>
                </div>
                <div className='w-1/2'>
                    <Formik
                        initialValues={{
                            name: "",
                            email: "",
                            message: ""
                        }}
                        validationSchema={ContactFormSchema}
                        onSubmit={
                            async (
                                values: FormValues,
                                {setSubmitting, resetForm}: FormikHelpers<FormValues>
                            ) => {
                                setSubmitState(SubmitState.Sending)
                                try{
                                    await handleSubmit(values)
                                    setSubmitState(SubmitState.Success)
                                } catch(error){
                                    setSubmitState(SubmitState.Error)
                                }
                                //resetForm()
                                setTimeout(()=>{
                                    setSubmitState(SubmitState.Waiting)
                                    setSubmitting(false)
                                }, 3000)
                            }
                        }
                    >
                        {
                            ({errors, touched, isValid, dirty, isSubmitting}) => (
                                <Form className='w-full '>
                                    <div>
                                        <Field id="name" name="name" placeholder="Full Name" as="input" className={inputClasses + "  h-12 " + inputErrorClasses(errors.name && touched.name ? true : false)} />
                                        <div className='text-red-600 antialiased text-right h-8'><ErrorMessage name='name' /></div>
                                    </div>
                                    <div>
                                        <Field id="email" name="email" placeholder="Email" as="input" className={inputClasses + " h-12 " + inputErrorClasses(errors.email && touched.email ? true : false)} />
                                        <div className='text-red-600 antialiased text-right h-8'><ErrorMessage name='email' /></div>
                                    </div>
                                    <div>
                                        <Field rows='6' id="message" name="message" placeholder="Message" as="textarea" className={inputClasses + " " + inputErrorClasses(errors.message && touched.message ? true : false)} />
                                        <div className='text-red-600 antialiased text-right h-8'><ErrorMessage name='message' /> </div>                               
                                    </div>
                                    <button disabled={!isValid || !dirty || isSubmitting} type='submit' className={`bg-[#55e6a5] w-full text-white text-center relative font-medium text-lg py-1 px-3 h-12 border-[3px] border-transparent focus:border-white/80 outline outline-transparent focus:outline-green-700 focus:outline-2 rounded-lg ${submitState === SubmitState.Waiting ? "disabled:bg-gray-500 hover:bg-gray-800 active:bg-gray-500 active:scale-95 disabled:active:bg-black": submitState === SubmitState.Sending ? "text-transparent" : "bg-black"}`}>
                                        {
                                            submitState === SubmitState.Waiting ? "Submit" :
                                            submitState === SubmitState.Error ? "Error":
                                            submitState === SubmitState.Success ? "Successful":
                                            "Submit"}
                                    </button>
                                </Form>
                            )
                        }
                    </Formik>
                </div>
            </div>
        </div>
    )
}

export default ContactMe
