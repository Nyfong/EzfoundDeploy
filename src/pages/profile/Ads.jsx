import React, { useEffect } from "react";
import AdSense from "react-adsense";

const ContentFeed = () => {
  // This effect ensures that the AdSense script is only loaded once
  useEffect(() => {
    const loadAdsenseScript = () => {
      if (
        !document.querySelector(
          'script[src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"]'
        )
      ) {
        const script = document.createElement("script");
        script.src =
          "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js";
        script.async = true;
        script.crossOrigin = "anonymous";
        document.body.appendChild(script);
      }
    };

    loadAdsenseScript(); // Call the function to load the script
  }, []);

  return (
    <div>
      {/* Your content here */}
      <p>Content item 1</p>
      <AdSense.Google
        client="ca-pub-5057518625235644"
        slot="2864527634" // Ensure this slot is unique in your AdSense account
        style={{ display: "block", margin: "20px 0", minHeight: "250px" }}
        format="fluid"
      />

      <p>Content item 2</p>
      <AdSense.Google
        client="ca-pub-5057518625235644"
        slot="2864527635" // Use a different slot for each ad
        style={{ display: "block", margin: "20px 0", minHeight: "250px" }}
        format="fluid"
      />

      <p>Content item 3</p>
      <AdSense.Google
        client="ca-pub-5057518625235644"
        slot="2864527636" // Use a different slot for each ad
        style={{ display: "block", margin: "20px 0", minHeight: "250px" }}
        format="fluid"
      />
    </div>
  );
};

export default ContentFeed;
