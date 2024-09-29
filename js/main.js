function handleSubmit() {
  //Lấy giá trị của input email và chuyển sang in thường
  const emailValue = document.getElementById("email").value.toLowerCase();
  // Láy element của thẻ p hiển thị lỗi
  const errorEmail = document.getElementById("error-email");
  //DK để là 1 email
  const checkMail =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  //Dùng match để kiểm tra email vừa nhập
  const check = emailValue.match(checkMail);
  console.log(check);

  //Lấy phần chứa thông tin user
  const sectionContent = document.querySelector("#info .section-content");
  console.log(`Check section`, sectionContent);
  //Lấy element để kiểm soát submit
  const submitControl = document.querySelector(".submit-email");
  if (check) {
    sectionContent.style.display = "block";
    submitControl.style.display = "none";
  } else {
    errorEmail.innerHTML = "Vui lòng nhập đúng định dạng email";
  }
}

function handleOnMouseOver(element) {
  const viewMore = element.querySelector(".view-more");
  if (viewMore) {
    viewMore.style.display = "inline-block";
  }
}

function handleOnMouseOut(element) {
  const viewMore = element.querySelector(".view-more");
  viewMore.style.display = "none";
}

function handleViewMore(element) {
  const parentElement = element.closest(".parent");
  const viewMore = parentElement.querySelector(".view-more");

  if (viewMore) {
    viewMore.style.display = "none";
  }
  const sectionContent = parentElement.querySelectorAll(".content");
  sectionContent.forEach((contentElement) => {
    contentElement.style.display = "inline-block";
  });
}
