export const buttonsBlock = () => {
  const buttonEdit = document.querySelectorAll(".client-edit"),
    buttonRemove = document.querySelectorAll(".client-remove");

  buttonEdit.forEach((but) => {
    but.addEventListener("click", () => {
      const buttonLocked = document.createElement("div");
      buttonLocked.classList.add("button-locked");
      document.body.append(buttonLocked);
      setTimeout(() => {
        buttonLocked.remove(document.body);
      }, 1500);
    });
  });
  buttonRemove.forEach((but) => {
    but.addEventListener("click", () => {
      const buttonLocked = document.createElement("div");
      buttonLocked.classList.add("button-locked");
      document.body.append(buttonLocked);
      setTimeout(() => {
        buttonLocked.remove(document.body);
      }, 1500);
    });
  });
};
