import { ChakraProvider, DarkMode } from "@chakra-ui/react";
import { AppProps } from "next/app";
import "@fontsource/inter";
import { NextSeo } from "next-seo";
import "../styles/globals.css";

const MyApp = ({ Component, pageProps }: AppProps) => {
  const metadata = {
    title: "built on egiftcard",
    description: "",
    image: "",
  };
  return (
    <ChakraProvider>
      <DarkMode>
        <NextSeo
          defaultTitle={metadata.title}
          description={metadata.description}
          openGraph={{
            title: metadata.title,
            description: metadata.description,
            type: "website",
            locale: "en_US",
            // url: "https://egiftcard.cc",
            site_name: "built on egiftcard",
          }}
          twitter={{
            handle: "@egiftcard",
            site: "@egiftcard",
            cardType: "summary_large_image",
          }}
          // canonical=""
        />
        <Component {...pageProps} />
      </DarkMode>
    </ChakraProvider>
  );
};

export default MyApp;
