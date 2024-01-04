const form = document.getElementById("form");
      const username = document.getElementById("username");
      const companyName = document.getElementById("companyName");
      const email = document.getElementById("email");
      const tel = document.getElementById("tel");
      const options = document.getElementById("options");

      form.addEventListener("submit", (e) => {
        e.preventDefault();

        validateInputs();
      });

      const setError = (element, message) => {
        const validationControl = element.parentElement;
        const errorDisplay = validationControl.querySelector(".error");

        errorDisplay.innerText = message;
        validationControl.classList.add("error");
        validationControl.classList.remove("success");
      };

      const setSuccess = (element) => {
        const validationControl = element.parentElement;
        const errorDisplay = validationControl.querySelector(".error");

        errorDisplay.innerText = "";
        validationControl.classList.add("success");
        validationControl.classList.remove("error");
      };

      const isValidEmail = (email) => {
        const re =
          /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
      };

      const validateInputs = () => {
        const usernameValue = username.value.trim();
        const companyNameValue = companyName.value.trim();
        const emailValue = email.value.trim();
        const telValue = tel.value.trim();
        const optionsValue = options.value.trim();

        if (usernameValue === "") {
          setError(username, "*Ве молиме внесете ги вашето име и презизме");
        } else {
          setSuccess(username);
        }

        if (companyNameValue === "") {
          setError(
            companyName,
            "*Ве молиме внесете го името на вашата компанија"
          );
        } else {
          setSuccess(companyName);
        }

        if (emailValue === "") {
          setError(email, "*Ве молиме внесете ја вашата електронска адреса");
        } else if (!isValidEmail(emailValue)) {
          setError(email, "Ве молиме внесете валидна електронска адреса");
        } else {
          setSuccess(email);
        }

        if (telValue === "") {
          setError(
            tel,
            "*Ве молиме внесете го телефонскиот број на вашата компанија"
          );
        } else {
          setSuccess(tel);
        }
      };

      marketingID.addEventListener("click", function () {
        options.innerText = marketingID.innerText;
        setSuccess(options);
      });

      codingID.addEventListener("click", function () {
        options.innerText = codingID.innerText;
        setSuccess(options);
      });

      scienceID.addEventListener("click", function () {
        options.innerText = scienceID.innerText;
        setSuccess(options);
      });

      designID.addEventListener("click", function () {
        options.innerText = designID.innerText;
        setSuccess(options);
      });

      function validateForm(event) {
        if (options.innerText === "Изберете тип на студент") {
          event.preventDefault();
          errorText.innerText = "*Ве молиме изберете тип на студент";
          options.style.borderColor = "red";
        }
      }

      var dropdownItems = document.querySelectorAll(".dropdown-item");
      dropdownItems.forEach(function (item) {
        item.addEventListener("click", function () {
          errorText.innerText = "";
          options.style.borderColor = "#09c372";
        });
      });

      form.addEventListener("submit", validateForm);