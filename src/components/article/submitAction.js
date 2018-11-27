const submitAction = (data) => {
  const {
    imageUrl,
    title,
    body,
    description,
  } = data;
  const formData = new FormData();
  formData.append('image', imageUrl);
  formData.append('description', description);
  formData.append('title', title);
  formData.append('body', body);
  return formData;
};

export default submitAction;
