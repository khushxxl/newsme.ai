import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY =
  "pk_test_Z3VpZGluZy1kb3J5LTguY2xlcmsuYWNjb3VudHMuZGV2JA";

export const CLERK_SECRET_KEY =
  "sk_test_u41HrvaKo7N9GgFGrMGVrLIALRdpT29o5oIo2zvWqJ";
