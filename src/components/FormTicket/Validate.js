const validateForm = (ticketInfo) => {
  let message;
  const regexEmail = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  const emailTest = regexEmail.test(ticketInfo.contact);
  const regexTel = /(?:\()?[0-9]{2}(?:\))?\s?[0-9]{4,5}(?:-)?[0-9]{4}$/
  const telTest = regexTel.test(ticketInfo.contact);
  let validationFulfilled = false;

  if (!ticketInfo.sector) {
    message = 'Selecione um setor';
    return { validationFulfilled, message };
  } else if (emailTest === false && telTest === false) {
    message = 'Insira um contato válido';
    return { validationFulfilled, message };
  } else if (!ticketInfo.title) {
    message = 'Insira o titulo';
    return { validationFulfilled, message };
  } else if (!ticketInfo.description) {
    message = 'Insira uma descrição';
    return { validationFulfilled, message };
  }  else {
    message = '';
    validationFulfilled = true;
    return { validationFulfilled, message };
  }
};

export default validateForm;
