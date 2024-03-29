import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "@/styles/Home.module.css";
import { useRouter } from "next/router";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const router = useRouter();
  return (
    <>
      <Head>
        <title>Peworld | Hire Jobs App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="d-flex justify-content-center align-items-center vh-100 w-100">
        <div className="container w-100">
          <div className="w-100 text-center h-100">
            <div>
              <h1 className="mt-2">
                <b>
                  Selamat Datang di
                  <img
                    src="/images/logo-color-primary.png"
                    alt=""
                    className={`ms-3 ${styles.logo}`}
                  />
                </b>
              </h1>
            </div>
            <div></div>
            <h3 className="mt-5 mb-4">Daftar Sebagai</h3>
            <button
              className={` ${styles.link}`}
              onClick={() => router.push("/auth/recruiter/register")}
            >
              Recruiter
            </button>
            atau
            <button
              className={` ${styles.link}`}
              onClick={() => router.push("/auth/jobseeker/register")}
            >
              Developer
            </button>
          </div>
        </div>
      </main>
    </>
  );
}
