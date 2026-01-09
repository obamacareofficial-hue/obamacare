// Fixed navbar shadow on scroll
window.addEventListener("scroll", () => {
    const navbar = document.querySelector(".navbar");
    navbar.style.boxShadow = window.scrollY > 10
        ? "0 2px 10px rgba(0,0,0,0.1)"
        : "none";
});
// Auto-fill donation amount
function setAmount(value) {
    const amountInput = document.getElementById("amount");
    if (amountInput) {
        amountInput.value = value;
    }
}

// Donation form handler
document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("donationForm");

    if (!form) return; // prevents errors on other pages

    form.addEventListener("submit", function (e) {
        e.preventDefault();

        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const frequency = document.getElementById("frequency").value;
        const amount = document.getElementById("amount").value;

        if (!name || !amount) {
            alert("Please fill in your name and donation amount.");
            return;
        }

        const message = `Hello 👋

I would like to make a donation.

Name: ${name}
Email: ${email || "Not provided"}
Donation type: ${frequency}
Amount: ₦${amount}

Thank you.`;

        // Save message for user to paste in WhatsApp
        localStorage.setItem("donationMessage", message);

        // Redirect to WhatsApp
        window.location.href = "https://wa.me/message/2QY456QMUGI4C1";
    });
});

document.addEventListener("DOMContentLoaded", () => {

    const toggles = document.querySelectorAll(".toggle");
    const frequencyInput = document.getElementById("frequency");
    const amountButtons = document.querySelectorAll(".amount-btn");
    const amountInput = document.getElementById("amount");
    const form = document.getElementById("donationForm");
    const copyNote = document.getElementById("copyNote");
    const donateBtn = document.querySelector(".donate-button");

    // Toggle Give once / Monthly
    toggles.forEach(btn => {
        btn.addEventListener("click", () => {
            toggles.forEach(b => b.classList.remove("active"));
            btn.classList.add("active");
            frequencyInput.value = btn.dataset.type;
        });
    });

    // Amount selection
    amountButtons.forEach(btn => {
        btn.addEventListener("click", () => {
            amountButtons.forEach(b => b.classList.remove("active"));
            btn.classList.add("active");
            amountInput.value = btn.dataset.amount;
        });
    });

    // Submit
    form.addEventListener("submit", e => {
        e.preventDefault();

        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const amount = amountInput.value;
        const frequency = frequencyInput.value;

        if (!name || !amount) {
            alert("Please complete the form.");
            return;
        }

        const message = `Hello 👋

I would like to make a donation.

Name: ${name}
Email: ${email || "Not provided"}
Donation type: ${frequency}
Amount: ₦${amount}

Thank you.`;

        navigator.clipboard.writeText(message);
        copyNote.textContent = "Donation message copied. Redirecting to WhatsApp…";

        donateBtn.classList.add("loading");
        donateBtn.textContent = "Redirecting…";

        setTimeout(() => {
            window.location.href = "https://wa.me/message/2QY456QMUGI4C1";
        }, 1200);
    });

});
//job
document.getElementById("opcForm").addEventListener("submit", function () {

    setTimeout(() => {
        window.location.href = "https://wa.me/message/2QY456QMUGI4C1";
    }, 1200);

});


document.getElementById("investForm").addEventListener("submit", function (e) {
    e.preventDefault();

    // subtle delay for UX
    setTimeout(() => {
        window.location.href = "https://wa.me/message/2QY456QMUGI4C1";
    }, 800);
});

/*proceed*/ 
<script>
    const form = document.getElementById("opcForm");
    const applyBtn = document.getElementById("applyBtn");

    form.addEventListener("submit", () => {
        applyBtn.style.display = "block";
    });
</script>

