import { useFormik } from "formik";
import { useDispatch, useSelector } from "react-redux";

import * as Yup from "yup";
import { login } from "../auth/authAction";
import { useEffect } from "react";
import { useNavigate } from "react-router";
import Header from "../components/header";
export default function SignIn() {
  const dispatch = useDispatch();
  const { isAuthenticated } = useSelector((state) => state.auth);
  const navigate = useNavigate();
  useEffect(() => {
    if (isAuthenticated) {
      // Route to = "/";
      navigate("/");
    }
  }, [navigate, isAuthenticated]);
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object().shape({
      password: Yup.string()
        .min(8, "must be at least 8 characters")
        .max(50, "Too Long!")
        .required("Required"),
      email: Yup.string().email("Invalid email").required("Required"),
    }),
    //  handle on submit
    onSubmit: (value) => {
      console.log("value from formik", value);
      dispatch(login(value));
    },
  });

  return (
    <>
      <div className="bg-cover relative bg-[url('https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/f562aaf4-5dbb-4603-a32b-6ef6c2230136/dh0w8qv-9d8ee6b2-b41a-4681-ab9b-8a227560dc75.jpg/v1/fill/w_1280,h_720,q_75,strp/the_netflix_login_background__canada__2024___by_logofeveryt_dh0w8qv-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NzIwIiwicGF0aCI6IlwvZlwvZjU2MmFhZjQtNWRiYi00NjAzLWEzMmItNmVmNmMyMjMwMTM2XC9kaDB3OHF2LTlkOGVlNmIyLWI0MWEtNDY4MS1hYjliLThhMjI3NTYwZGM3NS5qcGciLCJ3aWR0aCI6Ijw9MTI4MCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.LOYKSxIDqfPwWHR0SSJ-ugGQ6bECF0yO6Cmc0F26CQs')]">
        <Header />
        <section className="flex flex-col items-center  justify-center h-screen px-4">
          <div className="absolute inset-0 bg-black/70 "></div>

          <main className="bg-black/30 backdrop-blur-sm p-8 rounded-lg shadow-lg w-full max-w-md z-10">
            <div className="mb-6">
              <h1 className="text-center text-4xl font-bold text-red-700">
                Sign In
              </h1>
              <p className="text-gray-200 mt-2 text-center">
                Your gateway to cinematic adventures
              </p>
            </div>

            <form onSubmit={formik.handleSubmit}>
              <div className="mb-4">
                <label className="block text-gray-200 mb-2" htmlFor="email">
                  Email Address
                </label>
                <input
                  className="w-full px-4 py-2 rounded  border border-amber-50 focus:outline-none focus:ring-2 focus:ring-red-700 text-white"
                  onChange={formik.handleChange}
                  value={formik.values.email}
                  type="email"
                  id="email"
                  name="email"
                  placeholder="your.email@example.com"
                />
                {formik.touched.email && formik.errors.email ? (
                  <div className="text-red-600">{formik.errors.email}</div>
                ) : null}
              </div>

              <div className="mb-6">
                <label className="block text-gray-200 mb-2" htmlFor="password">
                  Password
                </label>
                <input
                  className="w-full px-4 py-2 rounded  border border-amber-50 focus:outline-none focus:ring-2 focus:ring-red-700 text-white"
                  onChange={formik.handleChange}
                  value={formik.values.password}
                  type="password"
                  name="password"
                  id="password"
                  placeholder="••••••••"
                />
                {formik.touched.password && formik.errors.password ? (
                  <div className="text-red-600">{formik.errors.password}</div>
                ) : null}
              </div>

              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    className="h-4 w-4 text-red-700 focus:ring-red-700 border-amber-50 rounded"
                  />
                  <label className="ml-2 block text-gray-200">
                    Remember me
                  </label>
                </div>
                <div>
                  <button
                    type="button"
                    className="text-red-500 hover:text-red-400 text-sm"
                  >
                    Forgot password?
                  </button>
                </div>
              </div>

              <button type="submit " className="w-full">
                <h2 className=" py-2 px-4 w-full border border-amber-50 rounded-md shadow-sm  text-sm font-medium text-white">
                  Sign In
                </h2>
              </button>

              <div className="mt-6 text-center">
                <p className="text-gray-400">
                  Don't have an account?{" "}
                  <a
                    href="/register"
                    className="text-red-500 hover:text-red-400"
                  >
                    Register now
                  </a>
                </p>
              </div>

              <div className="mt-8 relative">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-700"></div>
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-2 bg-gray-800 text-gray-400">
                    Or continue with
                  </span>
                </div>
              </div>

              <div className="mt-6 grid grid-cols-2 gap-3">
                <button
                  type="button"
                  onClick={() => handleSocialLogin("google")}
                  className="w-full flex justify-center py-2 px-4 border border-amber-50 rounded-md shadow-sm  text-sm font-medium text-white"
                >
                  Google
                </button>
                <button
                  type="button"
                  onClick={() => handleSocialLogin("facebook")}
                  className="w-full flex justify-center py-2 px-4 border border-amber-50 rounded-md shadow-sm  text-sm font-medium text-white"
                >
                  Facebook
                </button>
              </div>
            </form>
          </main>
        </section>
      </div>
    </>
  );
}
