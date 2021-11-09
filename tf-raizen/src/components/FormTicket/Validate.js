const validateForm = (ticketInfo) => {
  let message;
  let validationFulfilled = false;

  if (!ticketInfo.title) {
    message = 'Insira o titulo';
    return { validationFulfilled, message };
  } else if (!ticketInfo.sector) {
    message = 'Selecione um setor';
    return { validationFulfilled, message };
  } else if (!ticketInfo.description) {
    message = 'Insira uma descrição';
    return { validationFulfilled, message };
  } else if (!ticketInfo.contact) {
    message = 'Insira um contato';
    return { validationFulfilled, message };
  } else {
    message = '';
    validationFulfilled = true;
    return { validationFulfilled, message };
  }
};

export default validateForm;
