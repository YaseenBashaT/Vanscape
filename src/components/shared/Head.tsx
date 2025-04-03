
import { Helmet } from "react-helmet-async";

interface HeadProps {
  title?: string;
  description?: string;
  canonicalUrl?: string;
  ogImage?: string;
  ogType?: "website" | "article";
  twitterCard?: "summary" | "summary_large_image";
}

const Head = ({
  title = "Vanscape | Find Your Perfect Van Rental",
  description = "Discover and book the perfect van for your next adventure. Choose from budget, camper, and luxury options.",
  canonicalUrl = "https://vanscape.example.com",
  ogImage = "/og-image.jpg",
  ogType = "website",
  twitterCard = "summary_large_image",
}: HeadProps) => {
  const fullTitle = title.includes("Vanscape") ? title : `${title} | Vanscape`;
  
  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonicalUrl} />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content={ogType} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:image" content={ogImage} />
      
      {/* Twitter */}
      <meta name="twitter:card" content={twitterCard} />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
    </Helmet>
  );
};

export default Head;
