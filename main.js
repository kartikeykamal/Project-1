
const exampleQueryButtons = document.querySelectorAll(".example_quary");
const capabilitiesQueryButtons = document.querySelectorAll(".Capabilities_quary");
const warningsQueryButtons = document.querySelectorAll(".Warnings_quary");
const ChatInput = document.querySelector(".chat_input");
const SendButton = document.querySelector(".send_btn");


const allQueryButtons = [...exampleQueryButtons, ...capabilitiesQueryButtons, ...warningsQueryButtons];

for (const button of allQueryButtons) {
    button.addEventListener("click", async (event) => {
        const targetElement = event.target;
        if (targetElement.classList.contains("example_quary") ||
            targetElement.classList.contains("Capabilities_quary") ||
            targetElement.classList.contains("Warnings_quary")) {
            event.stopPropagation();
            const ButtonText = targetElement.textContent.trim();
            ChatInput.value = ButtonText;
        }
    });
}

document.querySelectorAll('.new_chat').forEach(newChat => {
    newChat.addEventListener('click', function() {
        const chatHistory = this.nextElementSibling;
        if (chatHistory && (chatHistory.classList.contains('chat_history'))) {
            if (chatHistory.style.display === 'none' || !chatHistory.style.display) {
                chatHistory.style.display = 'flex';
            } else {
                chatHistory.style.display = 'none';
            }
        }
    });
});
