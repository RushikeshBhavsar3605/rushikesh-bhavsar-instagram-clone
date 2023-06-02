import Header from "@/components/Header";
import { getProviders, signIn as SignIntoProvider } from "next-auth/react";
import Head from "next/head";
import InstagramLogo from "@/public/InstagramLogo.png";
import Image from "next/image";

function signIn({ providers }) {
  return (
    <>
      <Head>
        <title>Instagram</title>
        <link rel="icon" href="/favicon.png" />
      </Head>
      <Header />

      <div className="flex flex-col items-center justify-center min-h-screen py-2 -mt-36 px-14 text-center">
        <Image className="w-80" src={InstagramLogo} alt="" />
        <div className="mt-36">
          {Object.values(providers).map((provider) => (
            <div key={provider.name}>
              <button
                className="p-3 bg-blue-500 rounded-lg text-white"
                onClick={() =>
                  SignIntoProvider(provider.id, { callbackUrl: "/" })
                }
              >
                Sign in with {provider.name}
              </button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export async function getServerSideProps() {
  const providers = await getProviders();

  return {
    props: {
      providers,
    },
  };
}

export default signIn;
