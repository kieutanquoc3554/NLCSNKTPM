const container = document.querySelector(".data-container");

// Function to generate bars
function generatebars(num = 20) {

    // For loop to generate 20 bars
    for (let i = 0; i < num; i += 1) {
        // To generate random values from 1 to 100
        const value = Math.floor(Math.random() * 100) + 1;
        // To create element "div"
        const bar = document.createElement("div");
        // To add class "bar" to "div"
        bar.classList.add("bar");
        // Provide height to the bar
        bar.style.height = `${value * 3}px`;
        // Translate the bar towards positive X axis
        bar.style.transform = `translateX(${i * 30}px)`;
        // To create element "label"
        const barLabel = document.createElement("label");
        // To add class "bar_id" to "label"
        barLabel.classList.add("bar__id");
        // Assign value to "label"
        barLabel.innerHTML = value;
        // Append "Label" to "div"
        bar.appendChild(barLabel);
        // Append "div" to "data-container div"
        container.appendChild(bar);
    }
}

// Asynchronous function to perform "Cocktail Sort"
async function CocktailSort(delay = 600) {
    let bars = document.querySelectorAll(".bar");
    // Initialize swapped with true
    let swapped = true;
    // Initialize s with zero
    let s = 0;
    // Initialize e with 20
    let e = 20;

    while (swapped == true) {
        swapped = false;

        for (var i = s; i < e - 1; i++) {

            // Assigning value of ith bar into value1
            var value1 = parseInt(bars[i].childNodes[0].innerHTML);

            // Assigning value of i+1th bar into value2
            var value2 = parseInt(bars[i + 1].childNodes[0].innerHTML);

            // To pause the execution of code for 300 milliseconds
            await new Promise((resolve) =>
                setTimeout(() => {
                    resolve();
                }, 300)
            );

            // Provide red color to the ith bar
            bars[i].style.backgroundColor = "red";

            // Provide red color to the i+1th bar
            bars[i + 1].style.backgroundColor = "red";
            if (value1 > value2) {
                var temp1 = bars[i].style.height;
                var temp2 = bars[i].childNodes[0].innerText;

                // To pause the execution of code for 300 milliseconds
                await new Promise((resolve) =>
                    setTimeout(() => {
                        resolve();
                    }, 300)
                );

                // Swap ith bar with (i+1)th bar
                bars[i].style.height = bars[i + 1].style.height;
                bars[i].childNodes[0].innerText = bars[i + 1].childNodes[0].innerText;
                bars[i + 1].style.height = temp1;
                bars[i + 1].childNodes[0].innerText = temp2;

                // Set swapped
                swapped = true;
            }

            // To pause the execution of code for 300 milliseconds
            await new Promise((resolve) =>
                setTimeout(() => {
                    resolve();
                }, 300)
            );

            // Provide skyblue color to the ith bar
            bars[i].style.backgroundColor = "#6f459e";

            // Provide skyblue color to the i+1th bar
            bars[i + 1].style.backgroundColor = "#6f459e";
        }

        if (swapped == false) {
            break;
        }

        // Set swapped false
        swapped = false;

        e = e - 1;

        for (var i = e - 1; i >= s; i--) {

            // Assigning value of ith bar into value1
            var value1 = parseInt(bars[i].childNodes[0].innerHTML);

            // Assigning value of i+1th bar into value2
            var value2 = parseInt(bars[i + 1].childNodes[0].innerHTML);

            // To pause the execution of code for 300 milliseconds
            await new Promise((resolve) =>
                setTimeout(() => {
                    resolve();
                }, 300)
            );

            // Provide red color to the ith bar
            bars[i].style.backgroundColor = "red";

            // Provide red color to the i+1th bar
            bars[i + 1].style.backgroundColor = "red";
            if (value1 > value2) {
                var temp1 = bars[i].style.height;
                var temp2 = bars[i].childNodes[0].innerText;

                // To pause the execution of code for 300 milliseconds
                await new Promise((resolve) =>
                    setTimeout(() => {
                        resolve();
                    }, 300)
                );

                // Swap ith bar with (i+1)th bar
                bars[i].style.height = bars[i + 1].style.height;
                bars[i].childNodes[0].innerText = bars[i + 1].childNodes[0].innerText;
                bars[i + 1].style.height = temp1;
                bars[i + 1].childNodes[0].innerText = temp2;

                // Set swapped
                swapped = true;
            }

            // To pause the execution of code for 300 milliseconds
            await new Promise((resolve) =>
                setTimeout(() => {
                    resolve();
                }, 300)
            );

            //Provide skyblue color to the ith bar
            bars[i].style.backgroundColor = "#6f459e";

            // Provide skyblue color to the i+1th bar
            bars[i + 1].style.backgroundColor = "#6f459e";
        }
        s = s + 1;
    }

    for (var x = 0; x < 20; x++) {
        bars[x].style.backgroundColor = "rgb(49, 226, 13)";
    }

    // To enable the button "Generate New Array" after final(sorted)
    document.getElementById("Button1").disabled = false;
    document.getElementById("Button1").style.backgroundColor = "#6f459e";

    // To enable the button "Cocktail Sort" after final(sorted)
    document.getElementById("Button2").disabled = false;
    document.getElementById("Button2").style.backgroundColor = "#6f459e";
}

// Call "generatebars()" function
generatebars();

// Function to generate new random array
function generate() {
    window.location.reload();
}

// function to disable the button
function disable() {

    // To disable the button "Generate New Array"
    document.getElementById("Button1").disabled = true;
    document.getElementById("Button1").style.backgroundColor = "#d8b6ff";

    // To disable the button "Cocktail Sort"
    document.getElementById("Button2").disabled = true;
    document.getElementById("Button2").style.backgroundColor = "#d8b6ff";
}
