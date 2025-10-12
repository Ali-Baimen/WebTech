//Task 1
document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("supportForm");
  if (!form) return;

  form.addEventListener("submit", e => {
    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();
    const msg = document.getElementById("formMsg");
    msg.classList.remove("text-success", "text-warning", "text-danger");
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)+$/;

    if (!name) {
      msg.textContent = "Please enter your name!";
      msg.classList.add("text-danger");
    } else if (!email) {
      msg.textContent = "Please enter your email!";
      msg.classList.add("text-danger");
    } else if (!emailPattern.test(email)) {
      msg.textContent = "Please enter a valid email address!";
      msg.classList.add("text-danger");
    } else if (!message) {
      msg.textContent = "Please write your message!";
      msg.classList.add("text-danger");
    } else {
      msg.textContent = "Sent!";
      msg.classList.add("text-success");
      form.reset();
    }
  });
});
//Task 2
document.addEventListener("DOMContentLoaded", () => {
  const items = document.querySelectorAll(".accordion-item");

  items.forEach(item => {
    const title = item.querySelector(".accordion-title");
    const content = item.querySelector(".accordion-content");
    content.style.maxHeight = "0";
    content.style.overflow = "hidden";
    content.style.transition = "max-height 0.4s ease";

    title.addEventListener("click", () => {
      items.forEach(other => {
        if (other !== item) {
          const otherContent = other.querySelector(".accordion-content");
          otherContent.style.maxHeight = "0";
        }
      });
      if (content.style.maxHeight === "0px" || !content.style.maxHeight) {
        content.style.maxHeight = content.scrollHeight + "px"; 
      } else {
        content.style.maxHeight = "0"; 
      }
    });
  });
});

//Task 3 
document.addEventListener("DOMContentLoaded", () => {
  const popup = document.getElementById("popup");
  const content = document.getElementById("popupContent");
  const openBtn = document.getElementById("openPopup");
  const closeBtn = document.getElementById("closePopup");
  const submitBtn = document.getElementById("submitPopup");

  Object.assign(popup.style, {
    display: "none",
    position: "fixed",
    top: "0",
    left: "0",
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0,0,0,0.6)",
    justifyContent: "center",
    alignItems: "center",
    zIndex: "9999"
  });


  Object.assign(content.style, {
    backgroundColor: "#1a1a1a",
    color: "#ffffff",
    border: "2px solid #6a0297",
    borderRadius: "10px",
    boxShadow: "0 0 20px rgba(106,2,151,0.8)",
    padding: "30px",
    textAlign: "center",
    width: "300px",
    position: "relative",
    transition: "transform 0.3s ease"
  });


  Object.assign(closeBtn.style, {
    position: "absolute",
    top: "8px",
    right: "12px",
    fontSize: "22px",
    cursor: "pointer",
    color: "#bb86fc"
  });


  document.querySelectorAll("#popup input").forEach(input => {
    Object.assign(input.style, {
      display: "block",
      width: "90%",
      margin: "10px auto",
      padding: "10px",
      borderRadius: "5px",
      border: "1px solid #6a0297",
      backgroundColor: "#222",
      color: "#fff"
    });
  });

  Object.assign(submitBtn.style, {
    backgroundColor: "#6a0297",
    border: "none",
    color: "#fff",
    fontWeight: "bold",
    padding: "10px 20px",
    borderRadius: "5px",
    cursor: "pointer",
    marginTop: "10px"
  });

  submitBtn.addEventListener("mouseover", () => {
    submitBtn.style.backgroundColor = "#9d4edd";
  });
  submitBtn.addEventListener("mouseout", () => {
    submitBtn.style.backgroundColor = "#6a0297";
  });


  openBtn.addEventListener("click", () => {
    popup.style.display = "flex";
    content.style.transform = "scale(1.05)";
    setTimeout(() => (content.style.transform = "scale(1)"), 100);
  });

  closeBtn.addEventListener("click", () => {
    popup.style.display = "none";
  });


  popup.addEventListener("click", e => {
    if (e.target === popup) popup.style.display = "none";
  });


  submitBtn.addEventListener("click", () => {
    const name = document.getElementById("nameInput").value.trim();
    const email = document.getElementById("emailInput").value.trim();
    if (!name || !email) {
      alert("Please fill in all fields!");
    } else {
      alert(`Thank you, ${name}! Subscription successful.`);
      popup.style.display = "none";
    }
  });
});

//Task 4 
document.addEventListener("DOMContentLoaded", () => {
  const btn = document.getElementById("colorBtn");

  if (!btn) {
    console.warn("colorBtn not found on this page. Add <button id=\"colorBtn\">Change Background</button> to your HTML.");
    return;
  }

  const colors = ["#0d0d0d", "#1a3c1a", "#228B22", "#32CD32", "#FFD700", "#FFF44F"];
  let i = 0;

  Object.assign(btn.style, {
    backgroundColor: "#6a0297",
    color: "#fff",
    border: "none",
    padding: "12px 24px",
    borderRadius: "8px",
    cursor: "pointer",
    fontWeight: "bold",
    margin: "20px auto",
    display: "block"
  });

  btn.addEventListener("click", () => {
    const next = colors[i];
    document.documentElement.style.setProperty("--bg", next);
    console.log("Background set to:", next);
    i = (i + 1) % colors.length;
  });
});
//Task 5
document.addEventListener("DOMContentLoaded", () => {
  const dateTimeBlock = document.getElementById("dateTimeBlock");
  if (!dateTimeBlock) return;
  Object.assign(dateTimeBlock.style, {
    marginTop: "30px",
    color: "#bb86fc",
    fontSize: "18px",
    textAlign: "center",
    fontWeight: "bold"
  });

  function updateDateTime() {
    const now = new Date();

    const options = {
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: true
    };

    const formatted = now.toLocaleString("en-US", options);
    dateTimeBlock.textContent = formatted;
  }
  updateDateTime();
  setInterval(updateDateTime, 1000);
});
