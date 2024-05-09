// pages/_app.tsx
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS CSS
import { AppProps } from "next/app";

function Aos({ Component, pageProps }: AppProps) {
  useEffect(() => {
    AOS.init({
      offset: 300, // Offset (in pixels) from the original trigger point
      duration: 1300, // Duration of the animation (in milliseconds)
      once: true, // Whether animation should only happen once - while scrolling down
      // Add more global settings here if needed
    });
  }, []);

  return <Component {...pageProps} />;
}

export default Aos;
