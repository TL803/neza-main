    const brands = [
        { name: "BAIC", slug: "baic", url: "https://example.com/baic" },
        { name: "GEELY", slug: "geely", url: "https://example.com/geely" },
        { name: "CHERY", slug: "chery", url: "https://example.com/chery" },
    ];

    const container = document.getElementById("cards-container");

    brands.forEach(brand => {
        const card = document.createElement("a");
        card.href = brand.url;
        card.style.textDecoration = "none";
        card.style.color = "inherit";

        card.innerHTML = `
            <div style="background-color: #f5f5f5; border-radius: 12px; padding: 20px; width: 120px; height: 120px; display: flex; flex-direction: column; justify-content: center; align-items: center; text-align: center;">
                <div style="font-family: 'Arial', sans-serif; font-weight: bold; font-size: 24px; color: #666; letter-spacing: -1px; margin-bottom: 10px;">
                    ${brand.name}
                </div>
                <div style="font-family: 'Arial', sans-serif; font-size: 16px; color: #888;">
                    ${brand.slug.charAt(0).toUpperCase() + brand.slug.slice(1)}
                </div>
            </div>
        `;

        container.appendChild(card);
    });