import { GlobeIcon } from "@heroicons/react/solid";

function Footer() {
  return (
    <footer
      style={{
        display: "grid",
        gridTemplateColumns: "100%",
        gridTemplateRows: "0.1fr 1fr",
        borderTopWidth: "1px",
        backgroundColor: "rgba(209, 213, 219, 1)",
      }}
      className="text-gray-500"
    >
      <div style={{ borderBottomWidth: "1px" }} className="px-8 py-3">
        <p>Singapore</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:gap-y-4 grid-flow-row-dense px-8 py-3 ">
        <div className="flex justify-center items-center md:col-span-2 lg:col-span-1 lg:col-start-2 ">
          <GlobeIcon className="h-5 mr-1 text-green-700" /> Carbon Neutral since
          2021
        </div>
        <div className="advert md:justify-self-start">
          <p>Advert</p>
          <p>Business</p>
          <p>How search works</p>
        </div>
        <div className="advert  md:ml-auto">
          <p>Privacy</p>
          <p>Terms</p>
          <p>Settings</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
