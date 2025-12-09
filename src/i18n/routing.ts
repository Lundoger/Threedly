import { defineRouting } from "next-intl/routing";

export const routing = defineRouting({
  // A list of all locales that are supported
  locales: ["ua", "en"],

  // Used when no locale matches
  defaultLocale: "ua",

  // Ignore Accept-Language header & locale cookie,
  // always fall back to defaultLocale when no prefix is present
  localeDetection: false,
});
