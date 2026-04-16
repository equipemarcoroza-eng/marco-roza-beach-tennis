export const PHONE = "5544997731080";
export const PHONE_DISPLAY = "(44) 99773-1080";
export const INSTAGRAM = "https://instagram.com/equipemarcoroza";
export const INSTAGRAM_HANDLE = "@equipemarcoroza";
export const ADDRESS = "Av. Nóbrega 62, Centro, Maringá - PR";
export const BRAND = "Equipe Marco Roza Beach Tennis";

export const waLink = (msg: string) =>
  `https://wa.me/${PHONE}?text=${encodeURIComponent(msg)}`;
