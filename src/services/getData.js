import { API_KEY } from "../config/config";
export async function getData(url) {
  const newUlr = `${url}&key=${API_KEY}`; //agregar la key a la url
  try {
    const res = await fetch(newUlr, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (!res.ok) {
      throw {
        err: true,
        status: res.status,
        statusText: !res.statusText ? "Ocurrió un error" : res.statusText,
      };
    }
    const data = await res.json();
    const games = data.results;
    const nextCursor = data.next
      ? parseInt(data.next.match(/page=(\d+)/)[1])
      : null;
    return {
      games,
      nextCursor,
    };
  } catch (error) {
    console.log(error);
  }
}
