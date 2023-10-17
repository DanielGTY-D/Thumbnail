import {
  KEY_API,
  ULR_API,
  client_id,
  ULR_Unplas
} from "../assets/controllers/selectores.js";

export const api = async (page) => {
  const datos = await fetch(
    `${ULR_Unplas}/photos?client_id=${client_id}&page=${page ? page : "1"}`
  );

  return datos.json();
};
// export const api = async (url, tipo) => {
//   const datos = await fetch(`${ULR_API}?key=${KEY_API}&lang=es`);

//   return datos.json();
// };
