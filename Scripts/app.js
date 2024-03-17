var bg = document.createElement("div");
bg.style.width = "1600px";
bg.style.height = "200px";
bg.style.backgroundColor = "#03468F";
bg.style.position = "absolute";
bg.style.top = "17%";
bg.style.left = "50%";
bg.style.transform = "translate(-50%, -50%)";

// Create a container for the text
var textContainer = document.createElement("div");
textContainer.style.position = "absolute";
textContainer.style.top = "10px"; // Position 20px below the top
textContainer.style.left = "50%";
textContainer.style.transform = "translateX(-50%)";

// Create the text element
var text = document.createElement("span");
text.style.fontSize = "23px";
text.style.color = "#FFFFFF";
text.style.fontFamily = "Helvetica, Arial, sans-serif";
text.style.fontWeight = "bold";
text.innerHTML = "<u> Kinematics Calculator </u> ";

// Append the text element to the container
textContainer.appendChild(text);

// Append the container to the background
bg.appendChild(textContainer);

// Append the background to the document body
document.body.append(bg);

// Button Dimensions
var bWidth = 240;
var bHeight = 40;

// Final Velocity Calculator
var vFC = document.createElement("button"); // Change to "button"
vFC.style.position = "absolute";
vFC.style.transform = "translateX(-50%)";
vFC.style.left = "10%";
vFC.style.top = "45%";
vFC.style.borderRadius = "20%";
vFC.style.width = bWidth + "px"; // Adjusted width for better visibility
vFC.style.height = bHeight + "px";
vFC.style.backgroundColor = "#000278"; // Set background color
vFC.style.border = "2px";
vFC.innerHTML = "Final Velocity Calculator";
vFC.style.color = "#FFFFFF";
bg.appendChild(vFC); // Append to background div


