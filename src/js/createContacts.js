import { svgCrossCloseNormal } from "./svg.js";
import { svgCrossCloseHover } from "./svg.js";

export const createContacts = () => {
  const contact = document.createElement("div"),
    contactType = document.createElement("div"),
    contactName = document.createElement("button"),
    contactList = document.createElement("ul"),
    contactPhone = document.createElement("li"),
    contactVK = document.createElement("li"),
    contactFb = document.createElement("li"),
    contactEmail = document.createElement("li"),
    contactTelega = document.createElement("li"),
    contactOther = document.createElement("li"),
    contactInput = document.createElement("input"),
    contactDelete = document.createElement("button"),
    contactDeleteSvgNormal = document.createElement("span"),
    contactDeleteSvgHover = document.createElement("span"),
    contactDeleteTooltip = document.createElement("span");

  contact.classList.add("contact");
  contactType.classList.add("contact-type");
  contactName.classList.add("contact-name");
  contactList.classList.add("contact-list", "list-reset");
  contactPhone.classList.add("contact-item");
  contactVK.classList.add("contact-item");
  contactFb.classList.add("contact-item");
  contactEmail.classList.add("contact-item");
  contactTelega.classList.add("contact-item");
  contactOther.classList.add("contact-item");
  contactInput.classList.add("contact-input");
  contactDelete.classList.add("contact-delete", "btn-reset");
  contactDeleteSvgNormal.classList.add(
    "contact-delete_svg",
    "contact-delete_svg--normal",
    "contact-delete_svg--active"
  );
  contactDeleteSvgHover.classList.add(
    "contact-delete_svg",
    "contact-delete_svg--hover"
  );
  contactDeleteTooltip.classList.add("contact-tooltip", "site-tooltip");

  contactName.textContent = "Telephone";
  contactDeleteTooltip.textContent = "Remove contact";
  contactPhone.textContent = "Telephone";
  contactVK.textContent = "VK";
  contactFb.textContent = "Facebook";
  contactEmail.textContent = "Email";
  contactTelega.textContent = "Telegram";
  contactOther.textContent = "Other";
  contactInput.placeholder = "Enter contact details";
  contactInput.type = "text";
  contactDeleteSvgNormal.innerHTML = svgCrossCloseNormal;
  contactDeleteSvgHover.innerHTML = svgCrossCloseHover;

  contactDelete.addEventListener("mousemove", () => {
    contactDeleteSvgNormal.classList.remove("contact-delete_svg--active");
    contactDeleteSvgHover.classList.add("contact-delete_svg--active");
  });

  contactDelete.addEventListener("mouseleave", () => {
    contactDeleteSvgNormal.classList.add("contact-delete_svg--active");
    contactDeleteSvgHover.classList.remove("contact-delete_svg--active");
  });

  contactDelete.addEventListener("click", (e) => {
    e.preventDefault();
    contact.remove();
    document
      .querySelector(".modal-btn_contact")
      .classList.add("modal-btn_contact--active");
  });

  contactName.addEventListener("click", (e) => {
    e.preventDefault();
    contactList.classList.toggle("contact-list_active");
    contactName.classList.toggle("contact-list_active");
  });

  contactList.addEventListener("mouseleave", () => {
    contactList.classList.remove("contact-list_active");
    contactName.classList.remove("contact-list_active");
  });

  const setType = (type) => {
    type.addEventListener("click", () => {
      contactName.textContent = type.textContent;
      contactList.classList.remove("contact-list_active");
      contactName.classList.remove("contact-list_active");
    });
  };

  const typeArray = [
    contactEmail,
    contactFb,
    contactPhone,
    contactOther,
    contactTelega,
    contactVK,
  ];

  typeArray.forEach((type) => {
    setType(type);
  });

  contactDelete.append(
    contactDeleteTooltip,
    contactDeleteSvgNormal,
    contactDeleteSvgHover
  );
  contactList.append(
    contactPhone,
    contactVK,
    contactFb,
    contactEmail,
    contactTelega,
    contactOther
  );
  contactType.append(contactName, contactList);
  contact.append(contactType, contactInput, contactDelete);

  return {
    contact,
    contactName,
    contactInput,
    contactDelete,
  };
};
