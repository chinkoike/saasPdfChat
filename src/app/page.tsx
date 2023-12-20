import Image from "next/image";
import Wrap from "./components/Wrap";
import { Button, buttonVariants } from "./components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
export default function Home() {
  return (
    <>
      <Wrap className="w-full flex flex-col mx-auto justify-center items-center mt-28 mb-12 sm:mt-40 text-center">
        <div className="shadow-lg bg-white text-black p-2 px-4 rounded-full backdrop-blur border border-gray-200 transition-all max-w-fit">
          <p>Quill is now public</p>
        </div>
        <h1 className="max-w-4xl text-5xl md:text-6xl font-bold lg:text-7xl mt-8 md:mt-10">
          Chat with your <span className="text-blue-600">documents</span> in
          seconds.
        </h1>
        <p className="mt-8 text-zinc-700/60 md:mt-16 max-w-xl">
          Quill allows you to have conversations with any PDF document. Simply
          upload you file and start asking question right away.
        </p>
        <Link
          className={buttonVariants({
            size: "lg",
            className: "mt-6",
          })}
          href="/dashboard"
          target="_blank"
        >
          Get started <ArrowRight className="ml-2 h-5 w-5" />
        </Link>
      </Wrap>
      <div>
        <div className="relative isolate">
          {/*Section background */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
          >
            <div
              style={{
                clipPath:
                  "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
              }}
              className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
            />
          </div>
          {/*image section and border of image style*/}
          <div>
            <div className="mx-auto max-w-6xl px-6 lg:px-8">
              <div className="mt-16 flow-root sm:mt-24">
                <div className="-m-2 rounded-xl bg-gray-900/5 p-2 ring-1 ring-inset ring-gray-900/10 lg:-m-4 lg:rounded-2xl lg:p-4">
                  <Image
                    src="/dashboard-preview.jpg"
                    alt="product preview"
                    width={1364}
                    height={866}
                    quality={100}
                    className="rounded-md bg-white p-2 sm:p-8 md:p-20 shadow-2xl ring-1 ring-gray-900/10"
                  />
                </div>
              </div>
            </div>
          </div>
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
          >
            <div
              style={{
                clipPath:
                  "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
              }}
              className="relative left-[calc(50%-13rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-36rem)] sm:w-[72.1875rem]"
            />
          </div>
        </div>
      </div>

      <div className="mt-16 md:mt-32 p-8 pb-16">
        <div className="md:flex flex-col items-center justify-center">
          <h2 className="font-bold text-4xl md:text-6xl">
            Start chatting in minutes
          </h2>
          <p className="text-zinc-700/60 mt-4 md:mt-6 md:text-center">
            Chatting to your PDF files has never been easier than with Quill
          </p>
        </div>
        <div className="mt-16 md:mt-32 space-y-10 md:space-y-0 md:space-x-14 md:flex items-center justify-center">
          <ol>
            <li className="space-y-2  md:border-t border-slate-700/40 pt-4">
              <span className="text-blue-600 text-md font-medium">Step 1</span>
              <h2 className="text-xl md:text-2xl">Sign up for an account</h2>
              <p className="text-zinc-700/60 md:max-w-xs">
                Either starting out with a free plan or choose our{" "}
                <Link
                  className="text-blue-600 underline underline-offset-2"
                  href="/dashboard"
                  target="_blank"
                >
                  pro plan
                </Link>
              </p>
            </li>
          </ol>
          <ol>
            <li className="space-y-2  md:border-t border-slate-700/40 pt-4">
              <span className="text-blue-600 text-md font-medium">Step 2</span>
              <h2 className="text-xl md:text-2xl">Upload your PDF file</h2>
              <p className="text-zinc-700/60 md:max-w-xs">
                We'll precess your file and make it ready for you to chat with.{" "}
              </p>
            </li>
          </ol>{" "}
          <ol>
            <li className="space-y-2  md:border-t border-slate-700/40 pt-4">
              <span className="text-blue-600 text-md font-medium">Step 3</span>
              <h2 className="text-xl md:text-2xl">Start asking questions</h2>
              <p className="text-zinc-700/60 md:max-w-xs">
                it's that simple. Try out Quill today - it really takes less
                that a minute.{" "}
              </p>
            </li>
          </ol>
        </div>
      </div>
      <div>
        <div className="mx-auto max-w-6xl px-6 lg:px-8 pb-16">
          <div className="mt-0 flow-root sm:mt-24">
            <div className="-m-2 rounded-xl bg-gray-900/5 p-2 ring-1 ring-inset ring-gray-900/10 lg:-m-4 lg:rounded-2xl lg:p-4">
              <Image
                src="/file-upload-preview.jpg"
                alt="product preview"
                width={1364}
                height={866}
                quality={100}
                className="rounded-md bg-white p-2 sm:p-8 md:p-20 shadow-2xl ring-1 ring-gray-900/10"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
