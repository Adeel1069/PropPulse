import "@/assets/styles/globals.css";

export const metadata = {
  title: "PropPulse | Find The Perfect Rental Properties",
  description: "Find your dream rental properties",
  keywords: "rental, find rental, rental properties, ",
};

const MainLayout = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <div>{children}</div>
      </body>
    </html>
  );
};

export default MainLayout;
