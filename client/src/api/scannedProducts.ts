import { api } from "./client";

export const fetchByBarcode = (barcode: string) =>
  api(`/scanned-products/barcode/${barcode}`);
