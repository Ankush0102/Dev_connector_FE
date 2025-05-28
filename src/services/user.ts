import { ME } from "@/urls";
import apiRequest from "./api";

export const getCurrentUser = async () => {
  const res = await apiRequest.get(ME);
  return res.data;
};
