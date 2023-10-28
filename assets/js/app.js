const Palestine = {
    init: function () {
        // Push the <body>
        document.body.style.marginTop = '48px';

        // Create the banner element
        var banner = document.getElementById("free-palestine-banner");

        // Create an image element
        var image = document.createElement("img");
        image.src = 'https://upload.wikimedia.org/wikipedia/commons/0/00/Flag_of_Palestine.svg';
        image.classList.add('logo');
        banner.appendChild(image);

        // Create a text element
        const textElement = `
            <p class="hero">
                <span class="desktop">WE’RE AMONGST MILLIONS WHO STAND WITH PALESTINE.</span>
                <span class="mobile">WE STAND WITH PALESTINE.</span>
            </p>`;
        banner.innerHTML += textElement;

        // Create a button
        // var btnElement = document.createElement("button");
        // btnElement.textContent = "Live Impact 🟢";
        // btnElement.id = "expand-button";
        // banner.appendChild(btnElement);

        // Append the banner to the page
        // var widget = document.getElementById("free-palestine-widget");
        // widget.appendChild(banner);

        // Add an event listener to the button
        // var expandButton = document.getElementById("expand-button");
        // expandButton.addEventListener("click", function () {
        //     var expandableElement = document.getElementById("expandable-element");
        //     expandableElement.classList.toggle("expanded");
        // });
    }
};