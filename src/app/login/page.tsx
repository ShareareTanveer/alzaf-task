"use client";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";

const schema = z.object({
  fullName: z.string().min(1, "Full name is required"),
  emailOrPhone: z.string().min(1, "Email or phone is required"),
  password: z.string().min(4, "Password must be at least 4 characters long"),
  confirmPassword: z.string().min(4, "Please confirm your password"),
  birthDay: z.date().optional(),
  gender: z.enum(["Male", "Female"]).optional(),
});

type FormData = z.infer<typeof schema>;

export default function Login() {
  const { toast } = useToast();
  // const router = useRouter();
  const [responseError, setResponseError] = useState<string | null>(null);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  }: any = useForm({
    resolver: zodResolver(schema),
    mode: "all",
  });

  const onSubmit = async (data: FormData): Promise<void> => {
    setResponseError(null);
    toast({
      title: "Success",
      description: "Logged In Successfully",
    });
    console.log(data);
  };

  const handleGoogleSignIn = async () => {
    // await signIn("google-oauth2");
  };

  return (
    <div className="py-12 flex justify-center items-center bg-gray-100 p-4">
      <div className="bg-white p-4 md:p-10 md:px-16 rounded-lg max-w-4xl w-full flex flex-col md:flex-row space-y-6 md:space-y-0 mb-12">
        <div className="md:w-1/2 pr-0 md:pr-5">
          <h2 className="text-2xl font-bold mb-4">Welcome to Alzaf.com</h2>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-4">
              <label className="block text-gray-800 text-md text-sm  mb-2">
                Full Name
              </label>
              <input
                {...register("fullName")}
                placeholder="Full name"
                className={`w-full p-2 border placeholder:text-sm ${
                  errors.fullName ? "border-red-500" : "border-gray-300"
                } rounded-sm`}
              />
              {errors.fullName && (
                <p className="text-red-500 text-xs mt-1">
                  {errors.fullName.message}
                </p>
              )}
            </div>
            <div className="mb-4">
              <label className="block text-gray-800 text-md text-sm  mb-2">
                Phone Number or Email
              </label>
              <input
                {...register("emailOrPhone")}
                placeholder="Phone or Email"
                className={`w-full p-2 border placeholder:text-sm ${
                  errors.emailOrPhone ? "border-red-500" : "border-gray-300"
                } rounded-sm`}
              />
              {errors.emailOrPhone && (
                <p className="text-red-500 text-xs mt-1">
                  {errors.emailOrPhone.message}
                </p>
              )}
            </div>
            <div className="mb-4">
              <label className="block text-gray-800 text-md text-sm  mb-2">
                Password
              </label>
              <input
                {...register("password")}
                type="password"
                placeholder="Please enter your password"
                className={`w-full p-2 border placeholder:text-sm ${
                  errors.password ? "border-red-500" : "border-gray-300"
                } rounded-sm`}
              />
              {errors.password && (
                <p className="text-red-500 text-xs mt-1">
                  {errors.password.message}
                </p>
              )}
            </div>
            <div className="mb-4">
              <label className="block text-gray-800 text-md text-sm  mb-2">
                Confirm Password
              </label>
              <input
                {...register("confirmPassword")}
                type="password"
                placeholder="Confirm password"
                className={`w-full p-2 border placeholder:text-sm ${
                  errors.confirmPassword ? "border-red-500" : "border-gray-300"
                } rounded-sm`}
              />
              {errors.confirmPassword && (
                <p className="text-red-500 text-xs mt-1">
                  {errors.confirmPassword.message}
                </p>
              )}
            </div>
          </form>
        </div>
        <div className="md:w-1/2 pl-0 md:pl-5">
          <h1 className="text-xl text-right mb-[1.2rem] text-orange-500 font-semibold">
            Login
          </h1>

          <div className="mb-4 grid grid-cols-1 md:grid-cols-4 gap-2 text-sm">
            <div className="md:col-span-3">
              <label className="block text-gray-800 text-sm font-medium mb-2">
                Birthday
              </label>
              <div className="grid grid-cols-3 gap-2">
                <Select {...register("birthDay.month")}>
                  <SelectTrigger className="p-3 border border-gray-300 rounded-sm">
                    <SelectValue placeholder="Month" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="none" disabled>
                      Month
                    </SelectItem>
                    {/* Add month options here */}
                    <SelectItem value="January">January</SelectItem>
                    <SelectItem value="February">February</SelectItem>
                    {/* Continue with other months */}
                  </SelectContent>
                </Select>

                <Select {...register("birthDay.day")}>
                  <SelectTrigger className="p-3 border border-gray-300 rounded-sm">
                    <SelectValue placeholder="Day" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="none" disabled>
                      Day
                    </SelectItem>
                    {/* Add day options here */}
                    <SelectItem value="1">1</SelectItem>
                    <SelectItem value="2">2</SelectItem>
                    {/* Continue with other days */}
                  </SelectContent>
                </Select>

                <Select {...register("birthDay.year")}>
                  <SelectTrigger className="p-3 border border-gray-300 rounded-sm">
                    <SelectValue placeholder="Year" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="none" disabled>
                      Year
                    </SelectItem>
                    {/* Add year options here */}
                    <SelectItem value="2022">2022</SelectItem>
                    <SelectItem value="2021">2021</SelectItem>
                    {/* Continue with other years */}
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div>
              <label className="block text-gray-800 text-sm font-medium mb-2">
                Gender
              </label>
              <Select {...register("gender")}>
                <SelectTrigger className="w-full p-3 border border-gray-300 rounded-sm ">
                  <SelectValue placeholder="Gender" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="none" disabled>
                    Gender
                  </SelectItem>
                  <SelectItem value="Male">Male</SelectItem>
                  <SelectItem value="Female">Female</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="mb-6">
            <div className="flex space-x-2">
              <Checkbox id="terms" />
              <label
                htmlFor="terms"
                className="text-sm text-gray-600 leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                I&apos;d like to receive exclusive offers and promotions via
                sms.
              </label>
            </div>
          </div>
          <button className="bg-orange-500 text-white w-full p-3 mb-2">
            Sign Up
          </button>
          <div className="text-center text-gray-500 my-2">Or</div>
          <button className="flex items-center justify-center w-full p-2 border placeholder:text-sm border-orange-400 mb-3">
            <svg
              className="mx-4"
              width="25px"
              height="25px"
              viewBox="0 0 16 16"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
            >
              <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                strokeLinecap="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                <path
                  fill="#1877F2"
                  d="M15 8a7 7 0 00-7-7 7 7 0 00-1.094 13.915v-4.892H5.13V8h1.777V6.458c0-1.754 1.045-2.724 2.644-2.724.766 0 1.567.137 1.567.137v1.723h-.883c-.87 0-1.14.54-1.14 1.093V8h1.941l-.31 2.023H9.094v4.892A7.001 7.001 0 0015 8z"
                ></path>
                <path
                  fill="#ffffff"
                  d="M10.725 10.023L11.035 8H9.094V6.687c0-.553.27-1.093 1.14-1.093h.883V3.87s-.801-.137-1.567-.137c-1.6 0-2.644.97-2.644 2.724V8H5.13v2.023h1.777v4.892a7.037 7.037 0 002.188 0v-4.892h1.63z"
                ></path>
              </g>
            </svg>
            Sign Up with Facebook
          </button>
          <button className="flex items-center justify-center w-full p-2 border placeholder:text-sm border-orange-400">
            <svg
              className="mx-4"
              width="25px"
              height="25px"
              viewBox="-0.5 0 48 48"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              fill="#000000"
            >
              <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                strokeLinecap="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                {" "}
                <title>Google-color</title> <desc>Created with Sketch.</desc>{" "}
                <defs> </defs>{" "}
                <g
                  id="Icons"
                  stroke="none"
                  strokeWidth="1"
                  fill="none"
                  fill-rule="evenodd"
                >
                  {" "}
                  <g
                    id="Color-"
                    transform="translate(-401.000000, -860.000000)"
                  >
                    {" "}
                    <g
                      id="Google"
                      transform="translate(401.000000, 860.000000)"
                    >
                      {" "}
                      <path
                        d="M9.82727273,24 C9.82727273,22.4757333 10.0804318,21.0144 10.5322727,19.6437333 L2.62345455,13.6042667 C1.08206818,16.7338667 0.213636364,20.2602667 0.213636364,24 C0.213636364,27.7365333 1.081,31.2608 2.62025,34.3882667 L10.5247955,28.3370667 C10.0772273,26.9728 9.82727273,25.5168 9.82727273,24"
                        id="Fill-1"
                        fill="#FBBC05"
                      >
                        {" "}
                      </path>{" "}
                      <path
                        d="M23.7136364,10.1333333 C27.025,10.1333333 30.0159091,11.3066667 32.3659091,13.2266667 L39.2022727,6.4 C35.0363636,2.77333333 29.6954545,0.533333333 23.7136364,0.533333333 C14.4268636,0.533333333 6.44540909,5.84426667 2.62345455,13.6042667 L10.5322727,19.6437333 C12.3545909,14.112 17.5491591,10.1333333 23.7136364,10.1333333"
                        id="Fill-2"
                        fill="#EB4335"
                      >
                        {" "}
                      </path>{" "}
                      <path
                        d="M23.7136364,37.8666667 C17.5491591,37.8666667 12.3545909,33.888 10.5322727,28.3562667 L2.62345455,34.3946667 C6.44540909,42.1557333 14.4268636,47.4666667 23.7136364,47.4666667 C29.4455,47.4666667 34.9177955,45.4314667 39.0249545,41.6181333 L31.5177727,35.8144 C29.3995682,37.1488 26.7323182,37.8666667 23.7136364,37.8666667"
                        id="Fill-3"
                        fill="#34A853"
                      >
                        {" "}
                      </path>{" "}
                      <path
                        d="M46.1454545,24 C46.1454545,22.6133333 45.9318182,21.12 45.6113636,19.7333333 L23.7136364,19.7333333 L23.7136364,28.8 L36.3181818,28.8 C35.6879545,31.8912 33.9724545,34.2677333 31.5177727,35.8144 L39.0249545,41.6181333 C43.3393409,37.6138667 46.1454545,31.6490667 46.1454545,24"
                        id="Fill-4"
                        fill="#4285F4"
                      >
                        {" "}
                      </path>{" "}
                    </g>{" "}
                  </g>{" "}
                </g>{" "}
              </g>
            </svg>
            Sign Up with Google
          </button>
        </div>
      </div>
    </div>
  );
}
