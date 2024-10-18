import React, { useEffect } from "react";
import AdSense from "react-adsense";

const AdInitializer = ({ client }) => {
  useEffect(() => {
    // Ensure adsbygoogle is initialized only once
    if (!window.adsbygoogle) {
      window.adsbygoogle = [];
      window.adsbygoogle.push({
        google_ad_client: client,
        enable_page_level_ads: true, // Set this only once
      });
    }
  }, [client]);

  return null; // This component does not render anything
};

const AdComponent = ({ slot }) => {
  return (
    <AdSense.Google
      client="ca-pub-5057518625235644" // Use the client directly here
      slot={slot}
      style={{ display: "block", margin: "20px 0", minHeight: "150px" }}
      format="fluid"
    />
  );
};

const ContentFeed = () => {
  const adSlots = ["2864527634", "2864527635", "2864527636"];

  return (
    <div>
      <AdInitializer client="ca-pub-5057518625235644" />
      <p>Content item 1</p>
      {adSlots.map((slot, index) => (
        <AdComponent key={index} slot={slot} />
      ))}
    </div>
  );
};

export default ContentFeed;
