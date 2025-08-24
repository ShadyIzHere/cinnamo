document.getElementById("bean-test").addEventListener("submit", function(e) {
  e.preventDefault();

  const whimsy = document.querySelector('input[name="whimsy"]:checked');
  const racist = document.querySelector('input[name="racist"]:checked');
  const nword  = document.querySelector('input[name="nword"]:checked');
  const laugh  = document.querySelector('input[name="laugh"]:checked');

  if (!whimsy || !racist || !nword || !laugh) {
    document.getElementById("result").innerText = "⚠️ Please answer all questions!";
    return;
  }

  if (whimsy.value === "yes" && racist.value === "no" && nword.value === "no" && laugh.value === "yes") {
    document.getElementById("result").innerText = "✅ You are a certified Good Bean!";
  } else {
    document.getElementById("result").innerText = "🚫 Sorry, you’re not a good bean!";
  }
});
