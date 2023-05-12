"use strict";

const btnSubmit = document.getElementById("submit");
const form = document.querySelector(".form");
const perInfo = document.querySelector(".per-info");

const title1 = document.querySelector(".exp-title");
const title2 = document.querySelector(".edu-title");
const title3 = document.querySelector(".acti-title");
const title4 = document.querySelector(".inter-title");
const title5 = document.querySelector(".lg-title");
const title6 = document.querySelector(".lv-title");

const viewMore1 = document.querySelector(".view-1");
const viewMore2 = document.querySelector(".view-2");
const viewMore3 = document.querySelector(".view-3");
const viewMore4 = document.querySelector(".view-4");
const viewMore5 = document.querySelector(".view-5");
const viewMore6 = document.querySelector(".view-6");

const listInfo1 = document.querySelector(".list-info-1");
const listInfo2 = document.querySelector(".list-info-2");
const listInfo3 = document.querySelector(".list-info-3");
const listInfo4 = document.querySelector(".list-info-4");
const listInfo5 = document.querySelector(".list-info-5");
const listInfo6 = document.querySelector(".list-info-6");

const arrow = document.getElementById("arrow");

const regex =
  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
btnSubmit.addEventListener("click", function () {
  const email = document.getElementById("email").value;
  if (email === "") {
    alert("Email không được để trống!");
    return;
  }
  if (!regex.test(email)) {
    alert("Email không đúng định dạng!");
    return;
  }
  form.classList.toggle("visually-hidden");
  perInfo.classList.toggle("visually-hidden");
});

title1.addEventListener("mouseover", function () {
  viewMore1.classList.remove("visually-hidden");
});

title1.addEventListener("mouseout", function () {
  viewMore1.classList.add("visually-hidden");
});

title1.addEventListener("click", function () {
  const status1 = viewMore1.innerText;
  if (status1.trim() === "VIEW MORE") {
    listInfo1.classList.remove("visually-hidden");
    viewMore1.innerHTML =
      "<i id='arrow' class='bx bxs-up-arrow'></i> VIEW LESS";
  } else {
    listInfo1.classList.add("visually-hidden");
    viewMore1.innerHTML =
      "<i id='arrow' class='bx bxs-down-arrow'></i> VIEW MORE";
  }
});

title2.addEventListener("mouseover", function () {
  viewMore2.classList.remove("visually-hidden");
});

title2.addEventListener("mouseout", function () {
  viewMore2.classList.add("visually-hidden");
});

title2.addEventListener("click", function () {
  const status2 = viewMore2.innerText;
  if (status2.trim() === "VIEW MORE") {
    listInfo2.classList.remove("visually-hidden");
    viewMore2.innerHTML =
      "<i id='arrow' class='bx bxs-up-arrow'></i> VIEW LESS";
  } else {
    listInfo2.classList.add("visually-hidden");
    viewMore2.innerHTML =
      "<i id='arrow' class='bx bxs-down-arrow'></i> VIEW MORE";
  }
});

title3.addEventListener("mouseover", function () {
  viewMore3.classList.remove("visually-hidden");
});

title3.addEventListener("mouseout", function () {
  viewMore3.classList.add("visually-hidden");
});

title3.addEventListener("click", function () {
  const status3 = viewMore3.innerText;
  if (status3.trim() === "VIEW MORE") {
    listInfo3.classList.remove("visually-hidden");
    viewMore3.innerHTML =
      "<i id='arrow' class='bx bxs-up-arrow'></i> VIEW LESS";
  } else {
    listInfo3.classList.add("visually-hidden");
    viewMore3.innerHTML =
      "<i id='arrow' class='bx bxs-down-arrow'></i> VIEW MORE";
  }
});

title4.addEventListener("mouseover", function () {
  viewMore4.classList.remove("visually-hidden");
});

title4.addEventListener("mouseout", function () {
  viewMore4.classList.add("visually-hidden");
});

title4.addEventListener("click", function () {
  const status4 = viewMore4.innerText;
  if (status4.trim() === "VIEW MORE") {
    listInfo4.classList.remove("visually-hidden");
    viewMore4.innerHTML =
      "<i id='arrow' class='bx bxs-up-arrow'></i> VIEW LESS";
  } else {
    listInfo4.classList.add("visually-hidden");
    viewMore4.innerHTML =
      "<i id='arrow' class='bx bxs-down-arrow'></i> VIEW MORE";
  }
});

title5.addEventListener("mouseover", function () {
  viewMore5.classList.remove("visually-hidden");
});

title5.addEventListener("mouseout", function () {
  viewMore5.classList.add("visually-hidden");
});

title5.addEventListener("click", function () {
  const status5 = viewMore5.innerText;
  if (status5.trim() === "VIEW MORE") {
    listInfo5.classList.remove("visually-hidden");
    viewMore5.innerHTML =
      "<i id='arrow' class='bx bxs-up-arrow'></i> VIEW LESS";
  } else {
    listInfo5.classList.add("visually-hidden");
    viewMore5.innerHTML =
      "<i id='arrow' class='bx bxs-down-arrow'></i> VIEW MORE";
  }
});

title6.addEventListener("mouseover", function () {
  viewMore6.classList.remove("visually-hidden");
});

title6.addEventListener("mouseout", function () {
  viewMore6.classList.add("visually-hidden");
});

title6.addEventListener("click", function () {
  const status6 = viewMore6.innerText;
  if (status6.trim() === "VIEW MORE") {
    listInfo6.classList.remove("visually-hidden");
    viewMore6.innerHTML =
      "<i id='arrow' class='bx bxs-up-arrow'></i> VIEW LESS";
  } else {
    listInfo6.classList.add("visually-hidden");
    viewMore6.innerHTML =
      "<i id='arrow' class='bx bxs-down-arrow'></i> VIEW MORE";
  }
});
