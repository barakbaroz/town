import female_baby_he from "./female_baby_he.pdf";
import female_baby_ar from "./female_baby_ar.pdf";
import female_baby_sp from "./female_baby_sp.pdf";

import female_teen_he from "./female_teen_he.pdf";
import female_teen_ar from "./female_teen_ar.pdf";
import female_teen_sp from "./female_teen_sp.pdf";

import male_baby_he from "./male_baby_he.pdf";
import male_baby_ar from "./male_baby_ar.pdf";
import male_baby_sp from "./male_baby_sp.pdf";

import male_teen_he from "./male_teen_he.pdf";
import male_teen_ar from "./male_teen_ar.pdf";
import male_teen_sp from "./male_teen_sp.pdf";

import generic_baby_ru from "./generic_baby_ru.pdf";
import generic_baby_en from "./generic_baby_en.pdf";

import generic_teen_ru from "./generic_teen_ru.pdf";
import generic_teen_en from "./generic_teen_en.pdf";

const instructions = {
  "male_0-3_he": male_baby_he,
  "male_3-8_he": male_teen_he,
  "male_9-18_he": male_teen_he,

  "male_0-3_ar": male_baby_ar,
  "male_3-8_ar": male_teen_ar,
  "male_9-18_ar": male_teen_ar,

  "male_0-3_sp": male_baby_sp,
  "male_3-8_sp": male_teen_sp,
  "male_9-18_sp": male_teen_sp,

  "female_0-3_he": female_baby_he,
  "female_3-8_he": female_teen_he,
  "female_9-18_he": female_teen_he,

  "female_0-3_ar": female_baby_ar,
  "female_3-8_ar": female_teen_ar,
  "female_9-18_ar": female_teen_ar,

  "female_0-3_sp": female_baby_sp,
  "female_3-8_sp": female_teen_sp,
  "female_9-18_sp": female_teen_sp,

  "male_0-3_ru": generic_baby_ru,
  "male_3-8_ru": generic_teen_ru,
  "male_9-18_ru": generic_teen_ru,

  "female_0-3_ru": generic_baby_ru,
  "female_3-8_ru": generic_teen_ru,
  "female_9-18_ru": generic_teen_ru,

  "male_0-3_en": generic_baby_en,
  "male_3-8_en": generic_teen_en,
  "male_9-18_en": generic_teen_en,

  "female_0-3_en": generic_baby_en,
  "female_3-8_en": generic_teen_en,
  "female_9-18_en": generic_teen_en,
};

export default instructions;
