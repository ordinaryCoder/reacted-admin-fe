const auth = () => {
  const token = localStorage.getItem("access-key");

  if (!token) {
    res.redirect("/login");
  }
};
