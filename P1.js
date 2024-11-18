
    // Startvärde för pengar
    let money = 1000;

    // Funktion för att uppdatera pengavisningen
    function updateMoneyDisplay() {
        const moneyElement = document.getElementById("money");
        moneyElement.textContent = `Money: ${money}$`;
    }

    // Hämta alla köp- och säljknappar
    const buyButtons = document.querySelectorAll('.buysell button:nth-child(3)');
    const sellButtons = document.querySelectorAll('.buysell button:nth-child(1)');
    const quantities = document.querySelectorAll('.buysell span');

    // Funktion för att hantera köp
    buyButtons.forEach((button, index) => {
        button.addEventListener('click', () => {
            const itemPrice = 100; // Priset på varje produkt, kan ändras
            if (money >= itemPrice) {
                money -= itemPrice; // Dra av pengar
                // Öka kvantiteten av köpt produkt
                const quantitySpan = quantities[index];
                let currentQuantity = parseInt(quantitySpan.textContent);
                quantitySpan.textContent = currentQuantity + 1;
                updateMoneyDisplay();
            } else {
                alert("Inte tillräckligt med pengar!");
            }
        });
    });

    // Funktion för att hantera försäljning
    sellButtons.forEach((button, index) => {
        button.addEventListener('click', () => {
            const sellPrice = 50; // Försäljningspris per produkt
            const quantitySpan = quantities[index];
            let currentQuantity = parseInt(quantitySpan.textContent);
            if (currentQuantity > 0) {
                money += sellPrice; // Lägg till pengar
                // Minska kvantiteten av såld produkt
                quantitySpan.textContent = currentQuantity - 1;
                updateMoneyDisplay();
            } else {
                alert("Inget att sälja!");
            }
        });
    });

    // Initiera pengavisningen
    updateMoneyDisplay();
