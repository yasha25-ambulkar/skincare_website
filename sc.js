document.getElementById("skinTypeForm").addEventListener("submit", function(event) {
    event.preventDefault();
    
    clearError(); // Clear previous errors
    
    const skinType = document.getElementById("skinType").value;
    const errorElement = document.getElementById("skinTypeError");

    // Validate if a skin type is selected
    if (skinType === "") {
        showError("skinTypeError", "Please select your skin type.");
        return;
    }

    // Display personalized skincare tips if validation passes
    displaySkincareTips(skinType);
});

function showError(elementId, message) {
    const errorElement = document.getElementById(elementId);
    errorElement.textContent = message;
    errorElement.style.display = "block"; // Show error message
}

function clearError() {
    const errorElements = document.querySelectorAll(".error");
    errorElements.forEach(element => element.style.display = "none"); // Hide error messages
}

function displaySkincareTips(skinType) {
    let tips = "";
    let imageSrc = "";
    
    switch (skinType) {
        case "oily":
            tips = `
                <h2>Oily Skin Tips:</h2>
                <ul>
                    <li>Use a gentle, oil-free cleanser.</li>
                    <li>Exfoliate regularly to remove excess oils.</li>
                    <li>Consider using products with salicylic acid.</li>
                    <li>Avoid heavy moisturizers; go for lightweight options.</li>
                </ul>
                <h3>Recommended Products:</h3>
                <ul>
                    <li>Oil-Free Moisturizer</li>
                    <li>Salicylic Acid Cleanser</li>
                    <li>Clay Mask</li>
                </ul>
            `;
            imageSrc = "https://via.placeholder.com/500x300.png?text=Oily+Skin+Care";
            break;
        case "dry":
            tips = `
                <h2>Dry Skin Tips:</h2>
                <ul>
                    <li>Use a hydrating, creamy cleanser.</li>
                    <li>Apply a rich moisturizer to lock in moisture.</li>
                    <li>Avoid hot water when washing your face.</li>
                    <li>Use a humidifier in dry environments.</li>
                </ul>
                <h3>Recommended Products:</h3>
                <ul>
                    <li>Rich Hydrating Cleanser</li>
                    <li>Intensive Moisturizer</li>
                    <li>Hydrating Serum</li>
                </ul>
            `;
            imageSrc = "https://via.placeholder.com/500x300.png?text=Dry+Skin+Care";
            break;
        case "combination":
            tips = `
                <h2>Combination Skin Tips:</h2>
                <ul>
                    <li>Use a gentle, non-stripping cleanser.</li>
                    <li>Apply a balanced moisturizer suitable for all skin types.</li>
                    <li>Focus on controlling oil in the T-zone with mattifying products.</li>
                    <li>Use a nourishing moisturizer for dry areas.</li>
                </ul>
                <h3>Recommended Products:</h3>
                <ul>
                    <li>Gentle Foaming Cleanser</li>
                    <li>Lightweight Hydrating Gel</li>
                    <li>Mattifying Primer</li>
                </ul>
            `;
            imageSrc = "https://via.placeholder.com/500x300.png?text=Combination+Skin+Care";
            break;
        case "sensitive":
            tips = `
                <h2>Sensitive Skin Tips:</h2>
                <ul>
                    <li>Use fragrance-free, hypoallergenic skincare products.</li>
                    <li>Avoid exfoliants with strong acids.</li>
                    <li>Moisturize frequently to maintain the skin's barrier.</li>
                    <li>Test products on a small patch of skin before use.</li>
                </ul>
                <h3>Recommended Products:</h3>
                <ul>
                    <li>Hypoallergenic Moisturizer</li>
                    <li>Soothing Face Mask</li>
                    <li>Fragrance-Free Cleanser</li>
                </ul>
            `;
            imageSrc = "https://via.placeholder.com/500x300.png?text=Sensitive+Skin+Care";
            break;
    }

    // Insert skincare tips and image
    document.getElementById("skincareTips").innerHTML = tips;
    const imageElement = document.createElement("img");
}   
