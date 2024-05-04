const Welcome = () => {
  return "<p>Welcome visitors!</p>";
};

const div = document.createElement("div");
div.innerHTML += Welcome();
document.body.appendChild(div);
