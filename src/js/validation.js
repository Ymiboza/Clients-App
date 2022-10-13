export const validationModal = () => {
  const inputName = document.querySelector(".input-name"),
    labelName = document.querySelector(".label-name"),
    spanName = document.querySelector(".span-name"),
    inputSurname = document.querySelector(".input-surname"),
    labelSurname = document.querySelector(".label-surname"),
    spanSurname = document.querySelector(".span-surname"),
    inputLastName = document.querySelector(".input-lastName"),
    labelLastName = document.querySelector(".label-lastName");

  inputName.addEventListener("input", () => {
    if (inputName.value.length > 0) {
      labelName.classList.add("visible");
      spanName.classList.add("visible");
    } else labelName.classList.remove("visible");
  });
  inputSurname.addEventListener("input", () => {
    if (inputSurname.value.length > 0) {
      labelSurname.classList.add("visible");
      spanSurname.classList.add("visible");
    } else labelSurname.classList.remove("visible");
  });
  inputLastName.addEventListener("input", () => {
    if (inputLastName.value.length > 0) {
      labelLastName.classList.add("visible");
    } else labelLastName.classList.remove("visible");
  });
};

export const validationClientForm = () => {
  const userName = document.getElementById("input-name"),
    userSurname = document.getElementById("input-surname"),
    userLastName = document.getElementById("input-lastName"),
    unacceptableLetter = document.getElementById("unacceptableLetter"),
    writeName = document.getElementById("writeName"),
    writeSurname = document.getElementById("writeName"),
    writeLastName = document.getElementById("writeLastName"),
    requiredValue = document.getElementById("requiredValue"),
    validateArray = [
      unacceptableLetter,
      writeName,
      writeSurname,
      writeLastName,
      requiredValue,
    ];
  const regexpRu = /[^а-яА-ЯёЁ]+$/g;
  const regexpEn = /[^a-zA-Z]+$/g;
  const regexpNumber = /[^0-9]+$/g;

  const onInputValue = (input) => {
    input.addEventListener("input", () => {
      input.classList.remove("invalid-modal-input");
      for (const item of validateArray) {
        item.textContent = "";
      }
    });

    input.oncut =
      input.oncopy =
      input.onpaste =
        () => {
          input.classList.remove("invalid-modal-input");
          for (const item of validateArray) {
            item.textContent = "";
          }
        };

    input.onchange = () => {
      input.classList.remove("invalid-modal-input");

      if (userName.value && userSurname.value && userLastName.value) {
        for (const item of validateArray) {
          item.textContent = "";
        }
      }
    };
  };
  onInputValue(userName);
  onInputValue(userSurname);
  onInputValue(userLastName);

  const checkRequiredName = (input, message, name) => {
    if (!input.value) {
      input.classList.add("invalid-modal-input");
      message.textContent = `Add ${name} client`;
      return false;
    } else {
      message.textContent = "";
    }
    if (input.value.length > 15) {
      input.classList.add("invalid-modal-input");
      message.textContent = `${name} to long`;
      return false;
    } else {
      message.textContent = "";
    }
    if (input.value.length < 3) {
      input.classList.add("invalid-modal-input");
      message.textContent = `${name} to short`;
      return false;
    } else {
      message.textContent = "";
    }
    // if (regexpNumber) {
    //   input.classList.add("invalid-modal-input");
    //   message.textContent = `${name} have unacceptable symbols`;
    //   return false;
    // } else {
    //   message.textContent = "";
    // }
    return true;
  };

  const checkByRegexp = (input, regexpRu, regexpEn) => {
    if (regexpRu.test(input.value) && regexpEn.test(input.value)) {
      input.classList.add("invalid-modal-input");
      unacceptableLetter.textContent = "Unacceptable symbols";
      return false;
    } else return true;
  };

  if (!checkRequiredName(userName, writeName, "Name")) {
    return false;
  }
  if (!checkRequiredName(userSurname, writeSurname, "Surname")) {
    return false;
  }
  if (!checkRequiredName(userLastName, writeLastName, "Last name")) {
    return false;
  }
  if (!checkByRegexp(userName, regexpRu, regexpEn)) {
    return false;
  }
  if (!checkByRegexp(userSurname, regexpRu, regexpEn)) {
    return false;
  }
  if (!checkByRegexp(userLastName, regexpRu, regexpEn)) {
    return false;
  }

  return true;
};

export const validationClientContacts = (contactType, contactInput) => {
  const writeValue = document.getElementById("writeName"),
    onlyNumbers = /[^0-9]+$/g,
    onlyEmail = /[^a-zA-Z|@|.]+$/g;

  const onInputValue = (input) => {
    input,
      addEventListener("input", () => {
        input.classList.remove("incorrect-contact_name");
        writeValue.textContent = "";
      });

    input.oncut =
      input.oncopy =
      input.onpaste =
        () => {
          input.classList.remove("incorrect-contact_name");
          writeValue.textContent = "";
        };
  };

  const showErrorMessage = (message, block, input) => {
    block.textContent = message;
    input.classList.add("incorrect-contact_name");
  };

  onInputValue(contactInput);

  if (!contactInput.value) {
    showErrorMessage("Fill in all contact fields", writeValue, contactInput);
    return false;
  }

  switch (contactType.innerHTML) {
    case "Telephone":
      if (onlyNumbers.test(contactInput.value)) {
        showErrorMessage("Only numbers are allowed", writeValue, contactInput);
        return false;
      } else if (contactInput.value.length !== 11) {
        showErrorMessage("Number must be 11 digits", writeValue, contactInput);
        return false;
      }
      return true;
    case "Email":
      if (onlyEmail.test(contactInput.value)) {
        showErrorMessage("Incorrect email", writeValue, contactInput);
        return false;
      }
      return true;
    default:
      return true;
  }
};
