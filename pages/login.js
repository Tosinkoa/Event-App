import { BsEye, BsEyeSlash } from "react-icons/bs";
import MyInput from "../components/Formik";
import { Formik, Form } from "formik";
import Link from "next/link";
import Layout from "../components/Layout";
import { MdHomeWork } from "react-icons/md";
import React, { useState } from "react";
import { useLoginUserMutation } from "@/store/fetcherApi";
import { useRouter } from "next/router";
import * as Yup from "yup";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Login() {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState("password");
  const [loginUser] = useLoginUserMutation();

  //------------Submitting Form---------------
  const submitForm = async (values) => {
    const result = await loginUser(values);
    if (result?.error?.status !== undefined) {
      toast.error(result.error.data.errors[0].msg);
    } else {
      router.push("/");
    }
  };

  const validation = Yup.object({
    username: Yup.string().required("Username is required"),
    password: Yup.string().required("Password is required"),
  });

  const showPasswordHandler = () => {
    if (showPassword === "password") {
      setShowPassword("text");
    } else {
      setShowPassword("password");
    }
  };

  return (
    <Layout>
      <div className="auth_background">
        <div className="auth_sec_background">
          <div className="auth_logo_header">
            <div className="auth_logo_background">
              <MdHomeWork className="text-4xl mt-10 mr-2 text-indigo-900" />
              <span className="auth_logo_text">Events</span>
            </div>
          </div>
          <div className="auth_form_header">
            <p className="auth_form_header_text">Login to your account</p>
            <Formik initialValues={{ username: "", password: "" }} onSubmit={submitForm} validationSchema={validation}>
              {() => (
                <Form>
                  <div className="mt-5 ">
                    {/* -------Username------- */}
                    <MyInput
                      placeholder="Enter your username"
                      type="username"
                      className="auth_form"
                      name="username"
                      label="Username"
                    />
                  </div>
                  <div className="mt-2 w-full relative">
                    <div className="absolute right-4 top-12">
                      <button
                        type="button"
                        onClick={showPasswordHandler}
                        className="border-none flex  bottom-3 cursor-pointer"
                      >
                        {showPassword === "password" && <BsEye />}
                        {showPassword === "text" && <BsEyeSlash />}
                      </button>
                    </div>
                    {/* -------Password------- */}
                    <MyInput
                      placeholder="Enter your password"
                      type={showPassword}
                      className="auth_form"
                      name="password"
                      label="Password"
                    />
                  </div>
                  <div className="mt-8">
                    <button type="submit" className="authformbutton">
                      Login
                    </button>
                  </div>
                </Form>
              )}
            </Formik>
            <p className="auth_question">
              Don't have an account?
              <span role="link" className="auth_switch">
                <Link href="/register">Signup here</Link>
              </span>
            </p>
            <div>
              <ToastContainer />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Login;
