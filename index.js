const arrow_1 = document.querySelector(".arrow-1");
const first_span = document.querySelector(".first-span");
const first_p = document.querySelector(".first-p");
first_span.style.display = "none";

arrow_1.addEventListener("click", () => {
  if (first_span.style.display === "none") {
    first_span.style.display = "block";
    first_p.style.color = "#1E1F36";
    first_p.style.fontWeight = 700;
    arrow_1.style.transform = "rotate(180deg)";
    second_span.style.display = "none";
    second_p.style.color = "#4B4C5F"; //grey
    third_span.style.display = "none";
    third_p.style.color = "#4B4C5F";
    fourth_span.style.display = "none";
    fourth_p.style.color = "#4B4C5F";
    fifth_span.style.display = "none";
    fifth_p.style.color = "#4B4C5F";
    second_p.style.fontWeight = 400;
    third_p.style.fontWeight = 400;
    fourth_p.style.fontWeight = 400;
    fifth_p.style.fontWeight = 400;
  } else {
    first_span.style.display = "none";
    first_p.style.color = "#4B4C5F";
    first_p.style.fontWeight = 400;
    arrow_1.style.transform = "rotate(0deg)";
  }
});
const arrow_2 = document.querySelector(".arrow-2");
const second_span = document.querySelector(".second-span");
const second_p = document.querySelector(".second-p");
arrow_2.addEventListener("click", () => {
  if (second_span.style.display === "none") {
    second_span.style.display = "block";
    second_p.style.color = "#1E1F36";
    second_p.style.fontWeight = 700;
    arrow_2.style.transform = "rotate(180deg)";
    first_span.style.display = "none";
    first_p.style.color = "#4B4C5F";
    third_span.style.display = "none";
    third_p.style.color = "#4B4C5F";
    fifth_span.style.display = "none";
    fifth_p.style.color = "#4B4C5F";
    first_p.style.fontWeight = 400;
    third_p.style.fontWeight = 400;
    fourth_p.style.fontWeight = 400;
    fifth_p.style.fontWeight = 400;
  } else {
    second_span.style.display = "none";
    second_p.style.color = "#4B4C5F";
    second_p.style.fontWeight = 400;
    arrow_2.style.transform = "rotate(0deg)";
  }
});
const arrow_3 = document.querySelector(".arrow-3");
const third_span = document.querySelector(".third-span");
const third_p = document.querySelector(".third-p");
// third_span.style.display = "none";
arrow_3.addEventListener("click", () => {
  if (third_span.style.display === "none") {
    third_span.style.display = "block";
    third_p.style.color = "#1E1F36";
    third_p.style.fontWeight = 700;
    arrow_3.style.transform = "rotate(180deg)";
    first_span.style.display = "none";
    first_p.style.color = "#4B4C5F";
    second_span.style.display = "none";
    second_p.style.color = "#4B4C5F"; //grey
    fourth_span.style.display = "none";
    fourth_p.style.color = "#4B4C5F";
    fifth_span.style.display = "none";
    fifth_p.style.color = "#4B4C5F";
    second_p.style.fontWeight = 400;
    first_p.stlye.fontWeight = 400;
    fourth_p.style.fontWeight = 400;
    fifth_p.style.fontWeight = 400;
  } else {
    third_span.style.display = "none";
    third_p.style.color = "#4B4C5F";
    third_p.style.fontWeight = 400;
    arrow_3.style.transform = "rotate(0deg)";
  }
});
const arrow_4 = document.querySelector(".arrow-4");
const fourth_span = document.querySelector(".fourth-span");
const fourth_p = document.querySelector(".fourth-p");
arrow_4.addEventListener("click", () => {
  if (fourth_span.style.display === "none") {
    fourth_span.style.display = "block";
    fourth_p.style.color = "#1E1F36";
    fourth_p.style.fontWeight = 700;
    arrow_4.style.transform = "rotate(180deg)";
    first_span.style.display = "none";
    first_p.style.color = "#4B4C5F";
    second_span.style.display = "none";
    second_p.style.color = "#4B4C5F"; //grey
    third_span.style.display = "none";
    third_p.style.color = "#4B4C5F";
    fifth_span.style.display = "none";
    fifth_p.style.color = "#4B4C5F";
    second_p.style.fontWeight = 400;
    third_p.style.fontWeight = 400;
    first_p.style.fontWeight = 400;
    fifth_p.style.fontWeight = 400;
  } else {
    fourth_span.style.display = "none";
    fourth_p.style.color = "#4B4C5F";
    arrow_4.style.transform = "rotate(0deg)";
    fourth_p.style.fontWeight = 400;
  }
});
const arrow_5 = document.querySelector(".arrow-5");
const fifth_span = document.querySelector(".fifth-span");
const fifth_p = document.querySelector(".fifth-p");
arrow_5.addEventListener("click", () => {
  if (fifth_span.style.display === "none") {
    fifth_span.style.display = "block";
    fifth_p.style.color = "#1E1F36";
    fifth_p.style.fontWeight = 700;
    arrow_5.style.transform = "rotate(180deg)";
    first_span.style.display = "none";
    first_p.style.color = "#4B4C5F";
    second_span.style.display = "none";
    second_p.style.color = "#4B4C5F"; //grey
    third_span.style.display = "none";
    third_p.style.color = "#4B4C5F";
    fourth_span.style.display = "none";
    fourth_p.style.color = "#4B4C5F";
    second_p.style.fontWeight = 400;
    third_p.style.fontWeight = 400;
    fourth_p.style.fontWeight = 400;
    first_p.style.fontWeight = 400;
  } else {
    fifth_span.style.display = "none";
    fifth_p.style.color = "#4B4C5F";
    arrow_5.style.transform = "rotate(0deg)";
    fifth_p.style.fontWeight = 400;
  }
});
