import React, { useEffect } from "react";
import AdSense from "react-adsense";

const AdComponent = ({ client, slot }) => {
  // Load the AdSense script only once
  useEffect(() => {
    const loadAdSenseScript = () => {
      const existingScript = document.querySelector(
        'script[src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"]'
      );
      if (!existingScript) {
        const script = document.createElement("script");
        script.src =
          "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js";
        script.async = true;
        script.crossOrigin = "anonymous";
        document.body.appendChild(script);
      }
    };

    loadAdSenseScript();

    // Ensure adsbygoogle array is initialized
    window.adsbygoogle = window.adsbygoogle || [];
    window.adsbygoogle.push({
      google_ad_client: client,
      enable_page_level_ads: true,
    });
  }, [client]);

  return (
    <AdSense.Google
      client={client}
      slot={slot}
      style={{ display: "block", margin: "20px 0", minHeight: "250px" }}
      format="fluid"
    />
  );
};

const ContentFeed = () => {
  return (
    <div>
      <p>Content item 1</p>
      <AdComponent
        client="ca-pub-5057518625235644"
        slot="2864527634" // Unique slot for the first ad
      />
      <p>Content item 2</p>
      <AdComponent
        client="ca-pub-5057518625235644"
        slot="2864527635" // Unique slot for the second ad
      />
      <p>Content item 3</p>
      <AdComponent
        client="ca-pub-5057518625235644"
        slot="2864527636" // Unique slot for the third ad
      />
    </div>
  );
};

export default ContentFeed;
