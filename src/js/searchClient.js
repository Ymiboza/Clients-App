import { findClient } from "./clientsApi.js";
import { createClientItem } from "./createClientItem.js";
import { editClientModal } from "./editClient.js";
import { svgFindEdit } from "./svg.js";

export const searchClients = (clients) => {
  const findList = document.querySelector(".find-list"),
    input = document.querySelector(".search-input"),
    form = document.querySelector(".search-form"),
    button = document.querySelector(".search-submit");

  button.addEventListener("click", (e) => {
    e.preventDefault();
    input.classList.toggle("search-input_on");
    findList.classList.add("hide");
  });

  clients.forEach((client) => {
    const findItem = document.createElement("li"),
      findLink = document.createElement("a"),
      findIconEdit = document.createElement("div"),
      findSvgEdit = svgFindEdit,
      editOpen = editClientModal(client);

    findItem.classList.add("find-item");
    findLink.classList.add("find-link");
    findIconEdit.classList.add("find-icon_edit");

    findLink.textContent = `${client.name} ${client.surname} ${client.lastName}`;
    findLink.href = "#";
    findIconEdit.innerHTML = findSvgEdit;
    findLink.addEventListener("click", () => {
      document.body.append(editOpen.editModal);
      setTimeout(() => {
        editOpen.editModalContent.classList.add("modal-scale");
      }, 500);
      findList.classList.add("hide");
      input.value = "";
      rewriteTable(input.value);
    });
    findLink.addEventListener("mouseover", () => {
      findIconEdit.classList.remove("hide");
    });
    findLink.addEventListener("mouseout", () => {
      findIconEdit.classList.add("hide");
    });

    findItem.append(findLink, findIconEdit);
    findList.append(findItem);
  });

  const rewriteTable = async (str) => {
    const response = await findClient(str),
      tbody = document.querySelector(".table-body");
    tbody.innerHTML = "";

    for (const client of response) {
      tbody.append(createClientItem(client));
    }
  };

  input.addEventListener("input", async () => {
    const value = input.value.trim(),
      foundItems = document.querySelectorAll(".find-link");

    if (value !== "") {
      rewriteTable(value);
      foundItems.forEach((link) => {
        if (link.innerText.search(value) === -1) {
          link.classList.add("hide");
          document.querySelectorAll(".find-icon_edit").forEach((el) => {
            el.classList.add("hide");
          });
          link.innerHTML = link.innerText;
        } else {
          link.classList.remove("hide");
          document.querySelector(".find-list").classList.remove("hide");
          const str = link.innerText;
          link.innerHTML = insertMark(
            str,
            link.innerText.search(value),
            value.length
          );
        }
      });
    } else {
      foundItems.forEach((link) => {
        const tbody = document.querySelector(".table-body");
        tbody.innerHTML = "";

        clients.forEach((client) => {
          tbody.append(createClientItem(client));
        });
        link.classList.remove("hide");
        findList.classList.add("hide");
        link.innerHTML = link.innerText;
      });
    }
  });

  const insertMark = (str, pos, len) =>
    str.slice(0, pos) +
    "<mark class='mark'>" +
    str.slice(pos, pos + len) +
    "</mark>" +
    str.slice(pos + len);
};
