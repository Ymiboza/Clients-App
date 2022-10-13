export function createLayout(client) {
  const $sectionHeader = document.querySelector(".header"),
    $sectionMain = document.querySelector(".main"),
    $container = document.querySelector(".container"),
    $containerHeader = document.querySelector(".header-container"),
    $containerMain = document.querySelector(".main-container"),
    $divLogo = document.createElement("div"),
    $searchBar = document.createElement("input"),
    $mainTitle = document.createElement("h1"),
    $clientsList = document.createElement("table"),
    $clientsListTHead = document.createElement("thead"),
    $clientsHeadTR = document.createElement("tr"),
    $clientsListTHId = document.createElement("th"),
    $clientsListTHFio = document.createElement("th"),
    $clientsListTHDateCreation = document.createElement("th"),
    $clientsListTHDateChanges = document.createElement("th"),
    $clientsListTHContact = document.createElement("th"),
    $clientsListTHAction = document.createElement("th"),
    $clientsListTBody = document.createElement("tbody"),
    $clientsBodyTR = document.createElement("tr"),
    $idTD = document.createElement("td"),
    $fioTD = document.createElement("td"),
    $dateCreationTD = document.createElement("td"),
    $dateChangesTD = document.createElement("td"),
    $contactTD = document.createElement("td"),
    $actionTD = document.createElement("td"),
    $btnAddClient = document.createElement("button"),
    $btnRemove = document.createElement("button"),
    $btnRework = document.createElement("button"),
    $divContact = document.createElement("div"),
    $linkContact = document.createElement("a");

  $divLogo.classList.add("div-logo");
  $searchBar.classList.add("search-input"),
    $mainTitle.classList.add("title", "animation-title"),
    $clientsList.classList.add(
      "table",
      "table-striped",
      "table-hover",
      "clients-table"
    ),
    $clientsListTHead.classList.add("table-head"),
    $clientsHeadTR.classList.add("table-head_tr"),
    $clientsListTHId.classList.add("table-th_id"),
    $clientsListTHFio.classList.add("table-th_fio"),
    $clientsListTHDateCreation.classList.add("table-th_creating"),
    $clientsListTHDateChanges.classList.add("table-th_changes"),
    $clientsListTHContact.classList.add("table-th_contact"),
    $clientsListTHAction.classList.add("table-th_action"),
    $clientsListTBody.classList.add("table-body"),
    $clientsBodyTR.classList.add("table-body_tr"),
    $idTD.classList.add("table-td_id"),
    $fioTD.classList.add("table-td_fio"),
    $dateCreationTD.classList.add("table-td_creation"),
    $dateChangesTD.classList.add("table-td_changes"),
    $contactTD.classList.add("table-td_contact"),
    $actionTD.classList.add("table-td_action"),
    $btnAddClient.classList.add("btn-add_client"),
    $btnRemove.classList.add("btn-remove"),
    $btnRework.classList.add("btn-rework"),
    $divContact.classList.add("div-contact"),
    $linkContact.classList.add("link-contact");

  $mainTitle.textContent = "Clients";
  $clientsListTHId.textContent = "ID";
  $clientsListTHFio.textContent = "FIO";
  $clientsListTHDateCreation.textContent = "DATE CREATION";
  $clientsListTHDateChanges.textContent = "DATE CHANGE";
  $clientsListTHContact.textContent = "CONTACT";
  $clientsListTHAction.textContent = "ACTION";

  //   $idTD.textContent = client.id;
  //   $fioTD.textContent = client.fio;
  //   $dateCreationTD.textContent = client.dateCreation;
  //   $dateChangesTD.textContent = client.dateChanges;
  //   $contactTD.textContent = client.contact;
  //   $actionTD.textContent = client.action;

  // Тут должна будет быть дата
  //   $birthDateTD.textContent =
  //     client.getBirthDate() + "(" + client.getAge() + " years)";
  //   client.getStudyPeriod() > 4
  //     ? ($admissionTD.textContent = client.admission + " (Graduated)")
  //     : ($admissionTD.textContent =
  //         client.admission + "(" + client.getStudyPeriod() + " years)");

  $containerHeader.append($divLogo, $searchBar),
    $clientsHeadTR.append(
      $clientsListTHId,
      $clientsListTHFio,
      $clientsListTHDateCreation,
      $clientsListTHDateChanges,
      $clientsListTHContact,
      $clientsListTHAction
    ),
    $clientsListTHead.append($clientsHeadTR);
  $divContact.append($linkContact),
    $contactTD.append($divContact),
    $actionTD.append($btnRemove, $btnRework),
    $clientsBodyTR.append(
      $idTD,
      $fioTD,
      $dateCreationTD,
      $dateChangesTD,
      $contactTD,
      $actionTD
    ),
    $clientsListTBody.append($clientsBodyTR),
    $clientsList.append($clientsListTHead, $clientsListTBody),
    $containerMain.append($mainTitle, $clientsList, $btnAddClient);
}
