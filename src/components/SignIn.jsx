import {
  Description,
  Dialog,
  DialogBackdrop,
  DialogPanel,
  DialogTitle,
  Transition
} from "@headlessui/react";
import { useState } from "react";
import { Form, Formik } from "formik";
import { SignInSchema } from "../utils/validationSchema.js";
import * as Yup from "yup";
import { login } from "../features/authSlice"
import { useDispatch, useSelector } from "react-redux";

export default function SignIn({ isOpen, close }) {

  const dispatch = useDispatch();
  const handleSubmit = (values) => {
    dispatch(login({
      username: values.email,
      password: values.password
    }))
  }



  return (
    <>
      <Dialog open={isOpen} onClose={close} className="relative z-50">
        {/* The backdrop, rendered as a fixed sibling to the panel container */}
        <DialogBackdrop className="fixed inset-0 transition-all bg-gray-500 opacity-50" />

        {/* Full-screen container to center the panel */}
        <div className="fixed inset-0 flex items-center justify-center w-screen p-4">
          {/* The actual dialog panel  */}
          <DialogPanel className="max-w-lg p-8 space-y-4 bg-white rounded-xl">
            <div className="flex flex-col justify-center flex-1 min-h-full px-6 py-12 lg:px-8">
              <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                <h2 className="text-2xl font-bold leading-9 tracking-tight text-center text-gray-900">
                  Sign in to your account
                </h2>
              </div>

              <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                <Formik
                  initialValues={{
                    email: "",
                    password: "",
                  }}
                  // validationSchema={SignInSchema}
                  onSubmit={(values) => {
                    handleSubmit(values);
                  }}
                >
                  {({
                    handleBlur,
                    handleSubmit,
                    handleChange,
                    values,
                    errors,
                    touched,
                    isValid,
                    dirty,
                  }) => {
                    return (
                      <Form onSubmit={handleSubmit}>
                        <div>
                          <label
                            htmlFor="email"
                            className="block text-sm font-medium leading-6 text-gray-900"
                          >
                            Email address
                          </label>
                          <div className="mt-2">
                            <input
                              // type="email"
                              id="email"
                              value={values.email}
                              onBlur={handleBlur}
                              onChange={handleChange}
                              name="email"
                              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            />
                          </div>
                        </div>

                        <div>
                          <div className="flex items-center justify-between">
                            <label
                              htmlFor="password"
                              className="block text-sm font-medium leading-6 text-gray-900"
                            >
                              Password
                            </label>
                            <div className="text-sm">
                              <a
                                href="#"
                                className="font-semibold text-indigo-600 hover:text-indigo-500"
                              >
                                Forgot password?
                              </a>
                            </div>
                          </div>
                          <div className="mt-2">
                            <input
                              id="password"
                              name="password"
                              type="password"
                              value={values.password}
                              onBlur={handleBlur}
                              onChange={handleChange}
                              required
                              autoComplete="current-password"
                              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                              placeholder="   Password..."
                            />
                          </div>
                        </div>

                        <div>
                          <button
                            type="submit"
                            className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                          >
                            Sign in
                          </button>
                        </div>
                      </Form>
                    );
                  }}
                </Formik>
              </div>
            </div>
          </DialogPanel>
        </div>
      </Dialog>
    </>
  );
}
