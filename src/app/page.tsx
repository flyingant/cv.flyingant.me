"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import { Open_Sans } from "next/font/google";
import {
  FaGithub,
  FaEnvelope,
  FaWeixin,
  FaLinkedin,
  FaPhone,
} from "react-icons/fa";
import Head from "next/head";
import "./page.scss";

const open_sans_light = Open_Sans({
  weight: "300",
  subsets: ["latin"],
});

declare global {
  interface Window {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    particlesJS: any;
  }
}

interface Section {
  title: string;
  content: string;
}

interface Data {
  greetings: string;
  name: string;
  title: string;
  company: string;
  email: string;
  address: string;
  github: string;
  linkedin: string;
  wechat: string;
  phone: string;
  summary: Array<string>;
  skills: Array<{
    name: string;
    keywords: Array<string>;
  }>;
  employment_history: Array<{
    company: string;
    title: string;
    startDate: string;
    endDate: string;
    website: string;
    address: string;
    description: Array<string>;
  }>;
  education: Array<{
    institution: string;
    degree: string;
    startDate: string;
    endDate: string;
  }>;
  projects: Array<{
    name: string;
    description: Array<string>;
    link: string;
    startDate: string;
    endDate: string;
  }>;
  sections: Section[];
}

export default function Page() {
  const [data, setData] = useState<Data | null>(null);
  const [notification, setNotification] = useState<string | null>(null);
  const searchParams = useSearchParams();
  const isPrintingVersion = !!searchParams.get("printing");
  // init the page
  useEffect(() => {
    // Fetch the JSON data
    fetch("/json/mayi-cv.json")
      .then((response) => response.json())
      .then((data) => {
        console.log(`%c${data.greetings}`, "color: red", );
        setData(data)
      });

    // Dynamically load the external JavaScript file
    const script = document.createElement("script");
    script.src = "./particles.min.js";
    script.async = true;
    script.onload = () => {
      // Ensure particlesJS is available after the script is loaded
      if (window.particlesJS) {
        window.particlesJS.load("particles", "./particles.json");
      }
    };
    !isPrintingVersion && document.body.appendChild(script);
    // Cleanup script when component unmounts
    return () => {
      !isPrintingVersion && document.body.removeChild(script);
    };
  }, []);

  const handleWechatClick = (wechatId: string) => {
    navigator.clipboard.writeText(wechatId).then(() => {
      setNotification("Wechat ID copied to clipboard!");
      setTimeout(() => setNotification(null), 2000); // Hide notification after 2 seconds
    });
  };

  return (
    <>
      <Head>
        <title>{data ? `${data.name} | ${data.title}` : "Loading..."}</title>
        <meta
          name="description"
          content={
            data
              ? `The CV of ${data.name}, ${data.title} at ${data.company}`
              : "Loading..."
          }
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div
        className={`w-full h-screen flex flex-col items-center justify-start ${open_sans_light.className}`}
      >
        {!isPrintingVersion && (
          <div className="container flex flex-col items-center justify-start p-4 bg-black z-50">
            <Image
              src="/images/mayi-avatar.jpg"
              alt="Logo"
              className="w-32 h-32 mb-4 rounded-full object-cover"
              width={32}
              height={32}
            />
            <h1 className="text-white mb-2">{data?.name}</h1>
            <p className="text-white mb-4">
              {data?.title} at {data?.company}
            </p>
            <div className="flex justify-center space-x-4 contact">
              <a href={`mailto:${data?.email}`} className="text-white"></a>
              <a
                href={`mailto:${data?.email}`}
                className="text-white group relative"
              >
                <FaEnvelope />
                <span className="absolute left-0 bottom-full mt-2 w-max bg-white text-black p-2 rounded opacity-0 group-hover:opacity-100 transition-opacity">
                  {data?.email}
                </span>
              </a>
              <a
                href={data?.github}
                className="text-white group relative"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub />
                <span className="absolute left-0 bottom-full mt-2 w-max bg-white text-black p-2 rounded opacity-0 group-hover:opacity-100 transition-opacity">
                  {data?.github}
                </span>
              </a>
              <a
                href={data?.linkedin}
                className="text-white group relative"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin />
                <span className="absolute left-0 bottom-full mt-2 w-max bg-white text-black p-2 rounded opacity-0 group-hover:opacity-100 transition-opacity">
                  {data?.linkedin}
                </span>
              </a>
              <a
                href="#"
                className="text-white group relative"
                onClick={() => handleWechatClick(data?.wechat ?? "")}
              >
                <FaWeixin />
                <span className="absolute left-0 bottom-full mt-2 w-max bg-white text-black p-2 rounded opacity-0 group-hover:opacity-100 transition-opacity">
                  {data?.wechat}
                </span>
              </a>
            </div>
          </div>
        )}
        {isPrintingVersion && (
          <div className="container flex flex-row items-center justify-between p-4 z-50 border-b-2 mt-4">
            <div className="flex flex-col space-y-2">
              <h1 className="mb-2">{data?.name}</h1>
              <p className="mb-4">{data?.company}</p>
              <p className="mb-4">{data?.title}</p>
            </div>
            <div className="flex flex-col justify-center contact">
              <div className="flex flex-row items-center justify-start">
                <FaEnvelope />
                <span>&nbsp;&nbsp;{data?.email}</span>
              </div>
              <div className="flex flex-row items-center justify-start">
                <FaGithub />
                <span>&nbsp;&nbsp;{data?.github}</span>
              </div>
              <div className="flex flex-row items-center justify-start">
                <FaLinkedin />
                <span>&nbsp;&nbsp;{data?.linkedin}</span>
              </div>
              <div className="flex flex-row items-center justify-start">
                <FaWeixin />
                <span>&nbsp;&nbsp;{data?.wechat}</span>
              </div>
              <div className="flex flex-row items-center justify-start">
                <FaPhone />
                <span>&nbsp;&nbsp;{data?.phone}</span>
              </div>
            </div>
          </div>
        )}
        <div className="container flex flex-col items-center justify-start p-4 z-40">
          <div className="container flex flex-col items-start justify-start mb-4 profile">
            <h2 className="pb-2 mb-4 h2-underline">Profile</h2>
            {data?.summary.map((item, idx) => (
              <p key={idx}>{item}</p>
            ))}
          </div>
          <div className="container flex flex-col items-start justify-start mb-4 skills">
            <h2 className="pb-2 mb-4 h2-underline">Skills</h2>
            {data?.skills.map((item, idx) => (
              <>
                <h3
                  key={idx}
                  className="flex flex-row items-center justify-start"
                >
                  {item.name}
                </h3>
                <p className="mb-2">{item.keywords.join(", ")}</p>
              </>
            ))}
          </div>
          <div className="container flex flex-col items-start justify-start mb-4 employment_history">
            <h2 className="pb-2 mb-4 h2-underline">Employment History</h2>
            {data?.employment_history.map(
              (item, idx: number) =>
                (
                  <div
                    key={idx}
                    className="flex flex-col items-start justify-start mb-2"
                  >
                    <h3 className="flex flex-row items-center justify-start">
                      <a
                        href={item.website}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {item.company}
                      </a>
                      <span className="mx-2">|</span>
                      <span>{item.title}</span>
                    </h3>
                    <p className="dates">
                      {item.startDate} - {item.endDate}, {item.address}
                    </p>
                    <ul className="description">
                      {item.description.map((desc, idx) => (<li key={idx}>{desc}</li>))}
                    </ul>
                  </div>
                ) as JSX.Element
            )}
          </div>
          <div className="container flex flex-col items-start justify-start mb-4 projects">
            <h2 className="pb-2 mb-4 h2-underline">Projects</h2>
            {data?.projects.map(
              (item, idx: number) =>
                (
                  <div
                    key={idx}
                    className="flex flex-col items-start justify-start mb-4"
                  >
                    <h3 className="flex flex-row items-center justify-start border-b border-dashed">
                      <a
                        href={item.link}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {item.name}
                      </a>
                    </h3>
                    <p className="dates">
                      {item.startDate} ~ {item.endDate}
                    </p>
                    <ul className="description">
                      {item.description.map((desc, idx) => (<li key={idx}>{desc}</li>))}
                    </ul>
                  </div>
                ) as JSX.Element
            )}
          </div>
          <div className="container flex flex-col items-start justify-start mb-4 education">
            <h2 className="pb-2 mb-4 h2-underline">Education</h2>
            {data?.education.map(
              (item, idx: number) =>
                (
                  <div
                    key={idx}
                    className="flex flex-col items-start justify-start"
                  >
                    <h3>{item.institution}</h3>
                    <p>{item.degree}</p>
                    <p>
                      {item.startDate} - {item.endDate}
                    </p>
                  </div>
                ) as JSX.Element
            )}
          </div>
        </div>
        {notification && (
          <div className="fixed top-4 left-1/2 transform -translate-x-1/2 bg-blue-500 text-white text-sm px-4 py-2 rounded z-50">
            {notification}
          </div>
        )}
        {!isPrintingVersion && (
          <div
            id="particles"
            className="z-10"
            style={{
              position: "fixed",
              width: "100%",
              height: "100%",
              top: 0,
              left: 0,
            }}
          ></div>
        )}
      </div>
    </>
  );
}
