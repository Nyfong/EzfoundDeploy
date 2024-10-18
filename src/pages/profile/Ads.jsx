import React, { useEffect, useState } from "react";

const GoogleAdSense = () => {
  const [error, setError] = useState(null);

  useEffect(() => {
    // Load the Google Ads script
    const script = document.createElement("script");
    script.src =
      "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5057518625235644";
    script.async = true;
    script.crossOrigin = "anonymous";

    script.onload = () => {
      // Push to adsbygoogle to display the ad
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    };

    script.onerror = () => {
      setError("Failed to load Google Ads script.");
    };

    document.body.appendChild(script);

    return () => {
      // Cleanup
      document.body.removeChild(script);
    };
  }, []);

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div style={{ margin: "20px 0", minHeight: "250px" }}>
      <ins
        className="adsbygoogle"
        style={{ display: "block" }}
        data-ad-format="fluid"
        data-ad-layout-key="-fm+f+g-6d+9i"
        data-ad-client="ca-pub-5057518625235644"
        data-ad-slot="2864527634"
      ></ins>
    </div>
  );
};

import AdSense from "react-adsense";

const ContentFeed = () => {
  return (
    <div>
      {/* Your content here */}
      {/* <p>Content item 1</p> */}
      <AdSense.Google
        client="ca-pub-5057518625235644"
        slot="2864527634"
        style={{ display: "block", margin: "20px 0", minHeight: "250px" }}
        format="fluid"
      />
      {/* <p>Content item 2</p> */}
      <AdSense.Google
        client="ca-pub-5057518625235644"
        slot="2864527634"
        style={{ display: "block", margin: "20px 0", minHeight: "250px" }}
        format="fluid"
      />
      {/* <p>Content item 3</p> */}
      <AdSense.Google
        client="ca-pub-5057518625235644"
        slot="2864527634"
        style={{ display: "block", margin: "20px 0", minHeight: "250px" }}
        format="fluid"
      />
      {/* Add more content as needed */}
    </div>
  );
};

export default ContentFeed;
