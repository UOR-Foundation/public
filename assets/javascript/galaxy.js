const galaxyContainer = document.getElementById("galaxy-container");

    for (let i = 0; i < 2; i++) {
        let galaxy = document.createElement("div");
        galaxy.className = "galaxy";

        for (let j = 0; j < 20; j++) {
            let stars = document.createElement("div");
            stars.className = "stars";

            let circle = document.createElement("div");
            circle.className = "circle";

            for (let k = 0; k < 35; k++) {
                let dot = document.createElement("div");
                dot.className = "dot";
                circle.appendChild(dot);
            }

            stars.appendChild(circle);
            galaxy.appendChild(stars);
        }

        galaxyContainer.appendChild(galaxy);
    }