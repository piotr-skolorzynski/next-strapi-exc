export function allDataFilledIn(formData) {
  console.log("formdata: ", formData);
  return Object.keys(formData).every((key) => formData[key].trim().length > 0);
}
