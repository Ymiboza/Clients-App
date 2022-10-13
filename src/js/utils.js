import { contactTooltip } from "./editTooltip.js";
import {
  svgEmail,
  svgFacebook,
  svgOther,
  svgTelegram,
  svgTelephone,
  svgVk,
} from "./svg.js";

export const formatDate = (data) => {
  const newDate = new Date(data),
    correctDate = {
      year: "numeric",
      month: "numeric",
      day: "numeric",
    },
    resultDate = newDate.toLocaleString("ru", correctDate); //nu?

  return resultDate;
};

export const formatTime = (data) => {
  const newDate = new Date(data),
    correctDate = {
      hour: "numeric",
      minute: "numeric",
    },
    resultTime = newDate.toLocaleString("ru", correctDate); //nu?

  return resultTime;
};

export const createContactLink = (type, value, element, svg, item) => {
  const setTooltip = contactTooltip(type, value);

  element = document.createElement("a");
  element.classList.add("contact-link");
  element.innerHTML = svg;

  if (type === "Email") {
    element.href = `mailto:${value.trim()}`;
  } else if (type === "Telephone") {
    element.href = `tel:${value.trim()}`;
    setTooltip.tooltipValue.style.color = "var(--color3)";
    setTooltip.tooltipValue.style.textDecoration = "none";
  } else element.href = value.trim();

  element.append(setTooltip.tooltip);
  item.append(element);
};

export const createContactItemType = (type, value, item) => {
  switch (type) {
    case "Telephone":
      let phone;
      createContactLink(type, value, phone, svgTelephone, item);
      break;

    case "Email":
      let email;
      createContactLink(type, value, email, svgEmail, item);
      break;

    case "Facebook":
      let facebook;
      createContactLink(type, value, facebook, svgFacebook, item);
      break;

    case "Telegram":
      let telegram;
      createContactLink(type, value, telegram, svgTelegram, item);
      break;

    case "VK":
      let vk;
      createContactLink(type, value, vk, svgVk, item);
      break;

    case "Other":
      let other;
      createContactLink(type, value, other, svgOther, item);
      break;

    default:
      break;
  }
};
