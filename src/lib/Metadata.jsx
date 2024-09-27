// Metadata.jsx
import React from "react";
import { Helmet } from "react-helmet-async";

export const Metadata = ({
  title,
  description,
  author,
  keywords,
  thumbnail,
}) => {
  return (
    <Helmet>
      <title>{`CSTAD | ${title || "Easy Found"}`}</title>
      <meta name="title" content={title || "TechDeals"} />
      <meta
        name="description"
        content={description || "Add default description here"}
      />
      <meta name="author" content={author} />
      <meta name="keywords" content={keywords || "Add default keywords here"} />
      <meta
        name="thumbnail"
        content={thumbnail || "Add default thumbnail here"}
      />
      <meta property="og:url" content={"example.url"} />
      <meta property="og:type" content={"ServiceListing website"} />
      <meta property="og:title" content={title || "Easy Found"} />
      <meta
        property="og:description"
        content={description || "Add default description here"}
      />
      <meta
        property="og:image"
        content={thumbnail || "Add default thumbnail here"}
      />
      // you can add more meta to imporove SEO
    </Helmet>
  );
};
