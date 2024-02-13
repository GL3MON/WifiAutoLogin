const btn = document.getElementById("btn");

btn.addEventListener("click", () => {
  chrome.storage.sync.set({
    username: document.getElementById("username").value,
    password: document.getElementById("password").value,
  });
  console.log("Username and password saved");
  document.body.innerHTML = "Username and password saved!";
});
