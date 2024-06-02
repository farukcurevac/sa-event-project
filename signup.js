$("#formValidation").validate({
  rules: {
    name: {
      minlength: 2,
    },
    email: {
      email: true,
    },
    phone: {
      number: true,
      minlength: 6,
    },
  },
  messages: {
    name: {
      required: "Please enter your name",
      minlength: "Name at least 2 characters",
    },
    email: "Please enter your email",
    phone: "Please enter your phone",
    subject: "Please enter your subject",
    formMessage: "Please enter your message",
  },
  submitHandler: function (form) {
    form.submit();
  },
});
