import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  collection,
  getDocs,
  query,
  where,
  orderBy,
  limit,
  startAfter,
} from "firebase/firestore";
import { db } from "../firebase.config";
import { toast } from "react-toastify";
import Spinner from "../components/Spinner";

const Category = () => {
  const [listings, setListings] = useState(null);
  const [loading, setLoading] = useState(true);

  const params = useParams();

  useEffect(() => {
    const fetchListings = async () => {
      try {
        const listingsRef = collection(db, "listings");

        const q = query(
          listingsRef,
          where("type", "==", params.categoryName),
          orderBy("timestamp", "desc"),
          limit(10)
        );

        const querySnap = await getDocs(q);

        const collectionlistings = [];

        querySnap.forEach((doc) => {
          return collectionlistings.push({
            id: doc.id,
            data: doc.data(),
          });
        });

        setListings(collectionlistings);
        setLoading(false);
      } catch (error) {}
    };

    fetchListings();
  }, []);

  return <div>Category</div>;
};

export default Category;
