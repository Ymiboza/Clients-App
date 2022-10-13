import { addClientModal } from "./addClient.js";
import { validationModal } from "./validation.js";

export const openClientModal = () => {
  const clientModal = document.querySelector(".btn-add_client");
  clientModal.addEventListener("click", () => {
    document.body.append(addClientModal());
    validationModal();
  });
};
