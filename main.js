import { buttonsBlock } from "./src/js/buttonsBlock.js";
import { getClients } from "./src/js/clientsApi.js";
import { createClientItem } from "./src/js/createClientItem.js";
import { openClientModal } from "./src/js/defaultFunctions.js";
import { editClientModal } from "./src/js/editClient.js";
import { createPreloader } from "./src/js/preloader.js";
import { searchClients } from "./src/js/searchClient.js";
import { sortTable } from "./src/js/sortClient.js";

const createApp = async () => {
  document.querySelector(".table-wrapper").append(createPreloader());
  const preloader = document.querySelector(".preloader-wrapper");

  try {
    const clients = await getClients();
    searchClients(clients);
    clients.forEach((client) => {
      document.querySelector(".table-body").append(createClientItem(client));
    });
  } catch (error) {
    console.log(error);
  } finally {
    preloader.remove();
  }

  const sortingId = document.getElementById("id"),
    sortingFio = document.getElementById("fio"),
    sortingDateCreation = document.getElementById("dateCreation"),
    sortingDateChanges = document.getElementById("dateChanges");

  const sortItems = [
    sortingId,
    sortingFio,
    sortingDateCreation,
    sortingDateChanges,
  ];

  for (const item of sortItems) {
    item.addEventListener("click", () => {
      if (item.classList.contains("sort-down")) {
        item.classList.remove("sort-down");
        item.classList.add("sort-up");
      } else {
        item.classList.add("sort-down");
        item.classList.remove("sort-up");
      }
    });
  }

  const btnModal = document.querySelector(".btn-add_client"),
    btnEdit = document.querySelectorAll(".client-edit"),
    btnRemove = document.querySelectorAll(".client-remove");

  btnModal.addEventListener("click", () => {
    setTimeout(() => {
      document.querySelector(".all-modal_content").classList.add("modal-scale");
    }, 500);
  });

  btnEdit.forEach((btn) => {
    btn.addEventListener("click", () => {
      setTimeout(() => {
        document
          .querySelector(".modal-edit_content")
          .classList.add("modal-scale");
      }, 1900);
    });
  });

  btnRemove.forEach((btn) => {
    btn.addEventListener("click", () => {
      setTimeout(() => {
        document
          .querySelector(".delete-modal_content")
          .classList.add("modal-scale");
      }, 1900);
    });
  });

  openClientModal();
  buttonsBlock();
};

function containerTimeOut() {
  const mainContainer = document.querySelector(".main-container"),
    headerContainer = document.querySelector(".header-container"),
    logoContainer = document.querySelector(".logo-img"),
    searchContainer = document.querySelector(".search-div");

  headerContainer.classList.add("container-animation_header");
  logoContainer.classList.add("container-animation_logo");
  searchContainer.classList.add("container-animation_search");
  mainContainer.classList.add("container-animation_main");
  setTimeout(() => {
    headerContainer.classList.remove("container-animation_header");
    logoContainer.classList.remove("container-animation_logo");
    searchContainer.classList.remove("container-animation_search");
    mainContainer.classList.remove("container-animation_main");
    logoContainer.classList.add("container-animation_logo--start");
    setTimeout(() => {
      logoContainer.classList.remove("container-animation_logo--start");
    }, 2400);
  }, 2800);
}

containerTimeOut();
createApp();
document.addEventListener("DOMContentLoaded", sortTable);
