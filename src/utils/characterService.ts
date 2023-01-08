import { Character } from "../types/Character";
import { api } from "./api";

const params = {
  ts: 1,
  apikey: import.meta.env.VITE_PUBLIC_KEY,
  hash: import.meta.env.VITE_HASH,
  limit: 20,
};

export async function getAllCharacters(limit?: number) {
  if (limit) {
    params["limit"] = limit;
  }

  const { data } = await api.get("/characters", { params });

  return data.data.results as Character[];
}

export async function getCharacterByName(name: string, limit?: number) {
  if (limit) {
    params["limit"] = limit;
  }

  const { data } = await api.get(`/characters?nameStartsWith=${name}`, {
    params,
  });

  return data.data.results as Character[];
}
