import { formatPhone, telHref, smsHref } from "./phone";

/** ONE digits-only source of truth for the whole build. */
const PHONE = "9736780098";

export const site = {
  phone: formatPhone(PHONE),          // (973) 678-0098
  phoneHref: telHref(PHONE),          // tel:+19736780098
  smsBody:
    "Hi Blessed Hope! I'm asking about openings for my little one - here's their age and the days we'd need: ",
  smsHref: smsHref(
    PHONE,
    "Hi Blessed Hope! I'm asking about openings for my little one - here's their age and the days we'd need: "
  ),
};
