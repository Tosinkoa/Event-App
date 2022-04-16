import { BsEye, BsEyeSlash } from "react-icons/bs";
import React, { useState } from "react";
import { Formik, Form } from "formik";
import Layout from "../components/Layout";
import Link from "next/link";
import { MdHomeWork } from "react-icons/md";
import PhoneInput from "react-phone-number-input";
import MyInput from "../components/Formik";
import { useRegisterUserMutation } from "@/store/fetcherApi";
import { useRouter } from "next/router";
import * as Yup from "yup";
import "react-phone-number-input/style.css";

function Signup() {
  const router = useRouter();
  const [phone, setPhone] = useState();
  const [phoneError, setPhoneError] = useState("");
  const [showPassword, setShowPassword] = useState("password");
  const [registerUser] = useRegisterUserMutation();

  //-----------Initial Input Values----------
  const initialValues = { firstName: "", lastName: "", email: "", username: "", password: "", secPassword: "" };

  //---------Validate All Inputs---------------
  const validation = Yup.object({
    firstName: Yup.string()
      .required("First name is required")
      .min(2, "First name must be a min of 2 chars")
      .max(20, "First name must be a max of 20 chars"),
    lastName: Yup.string()
      .required("Last name is required")
      .min(2, "Last name must be a min of 2 chars")
      .max(20, "Last name must be a max of 20 chars"),
    email: Yup.string()
      .required("Email is required")
      .email("Please enter a valid email")
      .min(4)
      .max(40, "Email must be a max of 40 chars"),
    username: Yup.string()
      .required("Username is required")
      .min(2, "Username must be a min of 2 chars")
      .max(20, "Username must be a max of 20 chars"),
    password: Yup.string()
      .required("Password is required")
      .min(6, "Password must be a min of 6 chars")
      .max(20, "Password must be a ,max of 20 chars"),
    secPassword: Yup.string()
      .oneOf([Yup.ref("password"), null], "Passwords did not match")
      .required("Please confirm your password"),
  });

  //------------Submitting Form---------------
  const submitForm = async (values) => {
    if (phone === "") {
      setPhoneError("Phone number is required");
    } else {
      setPhoneError("");
    }
    const allValues = { ...values, phone };
    console.log("Phone:", phone);
    console.log("allValue:", allValues);

    const result = await registerUser(allValues);

    router.push("/");
  };

  //--------Show Password Toggle----------
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
            <p className="auth_form_header_text">Create an account</p>
            <Formik initialValues={initialValues} validationSchema={validation} onSubmit={submitForm}>
              {() => (
                <Form>
                  <div className="mt-5 flex space-x-3">
                    <div>
                      {/*_________First Name_______*/}
                      <MyInput
                        label="First Name"
                        placeholder="Enter your first name"
                        type="text"
                        className="auth_form"
                        name="firstName"
                      />
                    </div>
                    <div>
                      {/*_________Last Name_______*/}
                      <MyInput
                        placeholder="Enter last name"
                        type="text"
                        className="auth_form"
                        label="Last Name"
                        name="lastName"
                      />
                    </div>
                  </div>
                  {/* <div className="mt-2">
                  </div> */}
                  <div className="mt-2">
                    {/*_________Username_______*/}
                    <MyInput
                      placeholder="Enter your username"
                      type="text"
                      className="auth_form"
                      label="Username"
                      name="username"
                    />
                  </div>
                  <div className="mt-2">
                    {/*_________Email_______*/}
                    <MyInput
                      placeholder="Enter email adress"
                      type="email"
                      className="auth_form"
                      label="Email"
                      name="email"
                    />
                  </div>
                  <div className="mylabel">Phone</div>
                  <div className="mt-2">
                    {/*_________Phone_______*/}
                    <PhoneInput
                      country="US"
                      name="phone"
                      className="auth_form"
                      placeholder="Enter your phone number"
                      onChange={setPhone}
                      value={phone}
                    />
                    <p className="form_error">{phoneError}</p>
                  </div>
                  <div className="mt-2 w-full relative">
                    <div className="absolute right-4 top-12">
                      <button
                        type="button"
                        onClick={showPasswordHandler}
                        className="border-none  flex  bottom-3 cursor-pointer"
                      >
                        {showPassword === "password" && <BsEye />}
                        {showPassword === "text" && <BsEyeSlash />}
                      </button>
                    </div>
                    {/*_________Password_______*/}
                    <MyInput
                      placeholder="Enter your password"
                      type={showPassword}
                      className="auth_form"
                      name="password"
                      label="Password"
                    />
                  </div>
                  <div className="mt-2 w-full relative">
                    <div className="absolute right-4 top-12">
                      <button
                        type="button"
                        onClick={showPasswordHandler}
                        className="border-none  flex  bottom-3 cursor-pointer"
                      >
                        {showPassword === "password" && <BsEye />}
                        {showPassword === "text" && <BsEyeSlash />}
                      </button>
                    </div>
                    {/*_________Confirm Password_______*/}
                    <MyInput
                      placeholder="Confirm your password"
                      type={showPassword}
                      className="auth_form"
                      name="secPassword"
                      label="Confirm password"
                    />
                  </div>

                  <div className="mt-8">
                    <button type="submit" className="authformbutton">
                      Create account
                    </button>
                  </div>
                </Form>
              )}
            </Formik>

            <p className="auth_question">
              Already have an account?{" "}
              <span role="link" className="auth_switch">
                <Link href="/login">Login here</Link>
              </span>
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Signup;
