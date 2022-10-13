import { createContacts } from "./createContacts.js";
import { svgContactHover, svgContactNormal } from "./svg.js";

export const createClientModal = () => {
  const modalTitle = document.createElement("h2"),
    modalClose = document.createElement("button"),
    form = document.createElement("form"),
    inputName = document.createElement("input"),
    inputSurname = document.createElement("input"),
    inputLastName = document.createElement("input"),
    labelName = document.createElement("label"),
    labelSurname = document.createElement("label"),
    labelLastName = document.createElement("label"),
    spanName = document.createElement("span"),
    spanSurname = document.createElement("span"),
    btnContact = document.createElement("button"),
    btnContactSvgNormal = document.createElement("span"),
    btnContactSvgHover = document.createElement("span"),
    btnSave = document.createElement("button"),
    btnCancel = document.createElement("button"),
    blockContacts = document.createElement("div"),
    formName = document.createElement("div"),
    formSurname = document.createElement("div"),
    formLastName = document.createElement("div"),
    errorBlock = document.createElement("p"),
    unacceptableLetter = document.createElement("span"),
    writeName = document.createElement("span"),
    writeSurname = document.createElement("span"),
    writeLastName = document.createElement("span"),
    requiredValue = document.createElement("span"),
    requiredContacts = document.createElement("span"),
    saveSpinner = document.createElement("div"),
    unitSpinner1 = document.createElement("div"),
    unitSpinner2 = document.createElement("div"),
    unitSpinner3 = document.createElement("div"),
    unitSpinner4 = document.createElement("div"),
    unitSpinner5 = document.createElement("div"),
    unitSpinner6 = document.createElement("div"),
    unitSpinner7 = document.createElement("div"),
    unitSpinner8 = document.createElement("div"),
    unitSpinner9 = document.createElement("div"),
    unitSpinner10 = document.createElement("div");

  modalTitle.classList.add("modal-title", "animation-modal_title");
  modalClose.classList.add("modal-btn_close", "btn-reset");
  form.classList.add("modal-form");
  inputName.classList.add("modal-input", "form-control", "input-name");
  inputSurname.classList.add("modal-input", "form-control", "input-surname");
  inputLastName.classList.add("modal-input", "form-control", "input-lastName");
  formName.classList.add("form-item");
  formSurname.classList.add("form-item");
  formLastName.classList.add("form-item");
  labelName.classList.add("modal-label", "label-name");
  labelSurname.classList.add("modal-label", "label-surname");
  labelLastName.classList.add("modal-label", "label-lastName");
  spanName.classList.add("modal-label", "modal-span", "span-name");
  spanSurname.classList.add("modal-label", "modal-span", "span-surname");
  btnContact.classList.add("modal-btn_contact", "modal-btn_contact--active");
  btnSave.classList.add("modal-btn_save", "btn-reset", "site-btn");
  btnCancel.classList.add("modal-btn_cancel", "btn-reset");
  btnContactSvgNormal.classList.add(
    "btn-contact_svg",
    "btn-contact_svg--normal",
    "btn-contact_svg--active"
  );
  btnContactSvgHover.classList.add("btn-contact_svg", "btn-contact_svg--hover");
  blockContacts.classList.add("modal-contact");

  saveSpinner.classList.add("spinner-wrapper");
  unitSpinner1.classList.add("spinner-block");
  unitSpinner2.classList.add("spinner-block");
  unitSpinner3.classList.add("spinner-block");
  unitSpinner4.classList.add("spinner-block");
  unitSpinner5.classList.add("spinner-block");
  unitSpinner6.classList.add("spinner-block");
  unitSpinner7.classList.add("spinner-block");
  unitSpinner8.classList.add("spinner-block");
  unitSpinner9.classList.add("spinner-block");
  unitSpinner10.classList.add("spinner-block");

  errorBlock.classList.add("modal-error");
  unacceptableLetter.id = "unacceptableLetter";
  writeName.id = "writeName";
  writeSurname.id = "writeSurname";
  writeLastName.id = "writeLastName";
  requiredValue.id = "requiredValue";
  requiredContacts.id = "requiredContacts";

  labelName.for = "input-name";
  labelSurname.for = "input-surname";
  labelLastName.for = "input-lastName";
  inputName.id = "input-name";
  inputSurname.id = "input-surname";
  inputLastName.id = "input-lastName";
  inputName.type = "text";
  inputSurname.type = "text";
  inputLastName.type = "text";
  inputName.placeholder = "Name";
  inputSurname.placeholder = "Surname";
  inputLastName.placeholder = "Last name";

  modalTitle.textContent = "New client";
  labelName.textContent = "Name";
  labelSurname.textContent = "Surname";
  labelLastName.textContent = "Last name";
  btnContact.textContent = "ADD contact";
  btnSave.textContent = "Save";
  btnCancel.textContent = "Cancel";
  spanName.textContent = "*";
  spanSurname.textContent = "*";
  btnContactSvgNormal.innerHTML = svgContactNormal;
  btnContactSvgHover.innerHTML = svgContactHover;

  labelName.append(spanName);
  labelSurname.append(spanSurname);
  formName.append(labelName, inputName);
  formSurname.append(labelSurname, inputSurname);
  formLastName.append(labelLastName, inputLastName);
  btnContact.append(btnContactSvgNormal, btnContactSvgHover);
  blockContacts.append(btnContact);
  errorBlock.append(
    unacceptableLetter,
    writeName,
    writeSurname,
    writeLastName,
    requiredValue,
    requiredContacts
  );
  saveSpinner.append(
    unitSpinner1,
    unitSpinner2,
    unitSpinner3,
    unitSpinner4,
    unitSpinner5,
    unitSpinner6,
    unitSpinner7,
    unitSpinner8,
    unitSpinner9,
    unitSpinner10
  );
  btnSave.append(saveSpinner);
  form.append(
    formName,
    formSurname,
    formLastName,
    blockContacts,
    errorBlock,
    btnSave,
    btnCancel
  );

  btnContact.addEventListener("click", (e) => {
    e.preventDefault();
    const contactsItems = document.getElementsByClassName("contact");

    if (contactsItems.length < 9) {
      const contactItem = createContacts();
      blockContacts.prepend(contactItem.contact);
      if (contactsItems.length >= 6) {
        document.querySelector(".all-modal_content").style.top = "65%";
      } else {
        document.querySelector(".all-modal_content").style.top = "50%";
      }
    } else {
      const contactItem = createContacts();
      blockContacts.prepend(contactItem.contact);
      btnContact.classList.remove("modal-btn_contact--active");
    }
  });

  btnContact.addEventListener("mousemove", () => {
    btnContactSvgNormal.classList.remove("btn-contact_svg--active");
    btnContactSvgHover.classList.add("btn-contact_svg--active");
  });

  btnContact.addEventListener("mouseleave", () => {
    btnContactSvgNormal.classList.add("btn-contact_svg--active");
    btnContactSvgHover.classList.remove("btn-contact_svg--active");
  });

  return {
    form,
    modalClose,
    modalTitle,
    btnCancel,
    inputName,
    inputSurname,
    inputLastName,
    labelName,
    labelSurname,
    labelLastName,
    blockContacts,
    btnContact,
    btnSave,
  };
};
