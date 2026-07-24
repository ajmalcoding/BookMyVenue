import api from "./axios";

export const createVenue = async (payload: any) => {
  const response = await api.post("/venues/venues/", payload);
  return response.data;
};

export const getAmenities = async () => {
  const response = await api.get("/venues/amenities/");
  return response.data;
};