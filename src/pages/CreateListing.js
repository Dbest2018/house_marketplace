import { useState } from "react";

const CreateListing = () => {
  const [listing, setListing] = useState({
    type: "rent",
    name: "",
    bedrooms: 1,
    bathrooms: 1,
    parking: false,
    furnished: false,
    address: "",
    offer: false,
    regularPrice: 0,
    discountedPrice: 0,
    images: {},
    latitude: 0,
    longtitude: 0,
  });
  return <div>CreateListing</div>;
};

export default CreateListing;
