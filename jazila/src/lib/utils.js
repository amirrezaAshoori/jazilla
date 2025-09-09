import clsx from "clsx";
import { twMerge } from "tailwind-merge";
import { toast } from "sonner";
import { z } from "zod";
import dayjs from "dayjs";
import { BaseClientUrl } from "@/configs/settings";

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

export function formatPrice(
  price,
  currency = "USD",
  notation = "standard"
) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency,
    notation,
  }).format(Number(price));
}

export function formatDate(date) {
  return dayjs(date).format("MMMM D, YYYY");
}

export function formatBytes(bytes = 0, sizeType = "normal", decimals = 2) {
  const sizes = ["Bytes", "KB", "MB", "GB", "TB"];
  const accurateSizes = ["Bytes", "KiB", "MiB", "GiB", "TiB"];
  if (bytes === 0) return "0 Byte";
  const i = Math.floor(Math.log(bytes) / Math.log(1024));
  return `${(bytes / Math.pow(1024, i)).toFixed(decimals)} ${sizeType === "accurate" ? accurateSizes[i] ?? "Bytes" : sizes[i] ?? "Bytes"
    }`;
}

export function slugify(str) {
  return str
    .toLowerCase()
    .replace(/ /g, "-")
    .replace(/[^\w-]+/g, "")
    .replace(/--+/g, "-");
}

export function unslugify(str) {
  return str.replace(/-/g, " ");
}

export function toTitleCase(str) {
  return str.replace(/\w\S*/g, (txt) => {
    return txt.charAt(0).toUpperCase() + txt.slice(1).toLowerCase();
  });
}

export function toSentenceCase(str) {
  return str
    .replace(/([A-Z])/g, " $1")
    .replace(/^./, (s) => s.toUpperCase());
}

export function truncate(str, length = 50) {
  return str.length > length ? `${str.substring(0, length)}...` : str;
}

export function isArrayOfFile(files) {
  if (!Array.isArray(files)) return false;
  return files.every((file) => file instanceof File);
}

export function absoluteUrl(path) {
  return `${BaseClientUrl}${path}`;
}

export function catchError(err) {
  if (err instanceof z.ZodError) {
    const errors = err.issues.map((issue) => issue.message);
    return toast(errors.join("\n"));
  } else if (err instanceof Error) {
    return toast(err.message);
  } else {
    return toast("Something went wrong, please try again later.");
  }
}

// Detect Mac OS
export function isMacOs() {
  if (typeof window === "undefined") return false;
  return window.navigator.userAgent.includes("Mac");
}