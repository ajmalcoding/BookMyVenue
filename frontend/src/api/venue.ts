import api from "./axios";

export const createVenue = async (payload: any) => {
  const response = await api.post("/venues/venues/", payload);
  return response.data;
};

export const getAmenities = async () => {
  const response = await api.get("/venues/amenities/");
  return response.data;
};

export const getMyVenues = async () => {
  const response = await api.get("/venues/venues/my/");
  return response.data;
};

export const updateVenue = async (slug: string, payload: FormData) => {
  const response = await api.patch(`/venues/venues/${slug}/`, payload);
  return response.data;
};

export interface VenueFilters {
  search?: string;
  category?: string;
  min_price?: number;
  max_price?: number;
  capacity_min?: number;
  capacity_max?: number;
  amenities?: string;
  ordering?: string;
}

export const getVenues = async (filters: VenueFilters = {}) => {
  const params = new URLSearchParams();

  Object.entries(filters).forEach(([key, value]) => {
    if (
      value !== undefined &&
      value !== null &&
      value !== ""
    ) {
      params.append(key, String(value));
    }
  });

  const response = await api.get(`/venues/venues/?${params.toString()}`);

  return response.data;
};