import api from "./axios";

export const registerUser = async (data: any) => {
  const response = await api.post("/accounts/register/", data);
  return response.data;
};

export const loginUser = async (data: any) => {
  const response = await api.post("/accounts/login/", {
    email: data.email,
    password: data.password,
  });

  return response.data;
};