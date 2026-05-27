document.querySelector("#webform");
const openBtn = document.querySelector(".open_bnt");

const fullNameC = document.querySelector(".Full_name");
const phoneC = document.querySelector(".phone_number");
const emailC = document.querySelector(".e_mail");
const guestC = document.querySelector(".Guest");
const dateC = document.querySelector(".selc_Day_Calender");

const FNID = document.querySelector("#Fullname");
const PNID = document.querySelector("#phoneN");
const EID = document.querySelector("#email");
const GID = document.querySelector("#Guest");
const DID = document.querySelector("#selcDayCalender");

const popup = document.querySelector("#Confirm_reservation");
const closeBtn = document.querySelector(".close_bnt");

const timeC = document.querySelector(".Available_Times");
const timeBtns = document.querySelectorAll(".time-btn");

let selectedTime = "";
timeBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    selectedTime = btn.value;
  });
});

openBtn.addEventListener("click", () => {
  fullNameC.textContent = FNID.value;
  phoneC.textContent = PNID.value;
  emailC.textContent = EID.value;
  guestC.textContent = GID.value;
  dateC.textContent = DID.value;
  timeC.textContent = selectedTime;
});

function cancelPopup(event) {
  event.preventDefault();
  form.querySelector(":user-invalid").focus();
}
form.addEventListener("invalid", cancelPopup, true);

form.addEventListener("submit", (e) => {
  e.preventDefault();
  form.classList.add("submitted");
});

function handleSubmit(event) {
  event.preventDefault();
  const formData = new FormData(form);

  console.log("testing");

  form.reset();
}

form.addEventListener("submit", handleSubmit);

closeBtn.addEventListener("click", () => {
  popup.hidePopover();
});
