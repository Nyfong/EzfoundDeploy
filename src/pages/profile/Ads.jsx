import { useEffect } from "react";

const GoogleAdSense = () => {
  useEffect(() => {
    // Create script element for Google AdSense
    const script = document.createElement("script");
    script.async = true;
    script.src =
      "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5057518625235644";
    script.crossOrigin = "anonymous";
    document.body.appendChild(script);

    // Ensure adsbygoogle is initialized after the script loads
    script.onload = () => {
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    };

    return () => {
      document.body.removeChild(script); // Cleanup on component unmount
    };
  }, []);

  return (
    <div>
      <ins
        className="adsbygoogle  rounded-lg"
        style={{ display: "block" }}
        data-ad-client="ca-pub-5057518625235644"
        data-ad-slot="5064349408" // Your Ad Slot ID
        data-ad-format="auto"
        data-full-width-responsive="true"
      />
    </div>
  );
};

export default GoogleAdSense;
