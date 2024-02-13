$(document).ready(function () {
  chrome.storage.sync.get(["username", "password"], (result) => {
    document.getElementById("ft_un").value = result.username;
    document.getElementById("ft_pd").value = result.password;
    document.querySelector("form").submit();
  });
});
