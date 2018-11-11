// import validator from 'validatorjs';


// const rules = {
//   body: 'required|string',
//   title: 'required|string|max:200',
//   description: 'required|string|max:300'
// };

// /**
//  * @returns object
//  * @param {object} data
//  */
// const articleValidation = (data) => {
//   const validation = new validator(data, rules);
//   const validationObj = { isValid: () => validation.passes() };
//   if (validation.fails()) {
//     validationObj.getErrors = () => validation.errors.all();
//   }
//   return Object.freeze(validationObj);
// };

// export default articleValidation;
