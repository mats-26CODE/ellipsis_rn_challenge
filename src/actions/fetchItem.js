import axios from "axios";
import { updateItem, itemLoading } from "../features/itemSlice";

// export const fetchItem = ({ dispatch }) => {
//   const url =
//     "https://github.com/mstrutt/product-list/blob/master/products.json";

//   axios
//     .get(`${url}`)
//     .then((response) => {
//       const fetchedItemData = response.data;
//       dispatch(
//         updateItem({
//           itemData: fetchedItemData,
//         })
//       );
//     })
//     .catch((error) => {
//       console.log(`Error: ${error}`);
//     });
// };

export const fetchItem = ({ dispatch }) => {
  const data = [
    {
      name: "hero Product",
      detail: "Lorem ipsum dolor sit amet",
      price: "99",
      hero: "OMG This just came out today!",
      image: "http://placehold.it/940x300/999/CCC",
    },
    {
      name: "Product 1",
      detail: "Lorem ipsum dolor sit amet",
      price: "99",
      info: "This is the latest and greatest product from Derp corp.",
      image: "http://placehold.it/300x300/999/CCC",
    },
    {
      name: "Product 2",
      detail: "Lorem ipsum dolor sit amet",
      price: "99",
      offer: "BOGOF",
      image: "http://placehold.it/300x300/999/CCC",
    },
    {
      name: "Product 3",
      detail: "Lorem ipsum dolor sit amet",
      price: "99",
      image: "http://placehold.it/300x300/999/CCC",
    },
    {
      name: "Product 4",
      detail: "Lorem ipsum dolor sit amet",
      price: "99",
      offer: "No srsly GTFO",
      image: "http://placehold.it/300x300/999/CCC",
    },
    {
      name: "Product 5",
      detail: "Lorem ipsum dolor sit amet",
      price: "99",
      image: "http://placehold.it/300x300/999/CCC",
    },
    {
      name: "Product 6",
      detail: "Lorem ipsum dolor sit amet",
      price: "99",
      info: "This is the latest and greatest product from Derp corp.",
      offer: "info with offer",
      image: "http://placehold.it/300x300/999/CCC",
    },
  ];

  return dispatch(
    updateItem({
      itemData: data,
    })
  );
};
