var bg = document.createElement("div");
bg.style.width = "1600px";
bg.style.height = "500px";
bg.style.backgroundColor = "#03468F";
bg.style.position = "absolute";
bg.style.top = "50%";
bg.style.left = "50%";
bg.style.transform = "translate(-50%, -50%)";

// Create a container for the text
var textContainer = document.createElement("div");
textContainer.style.position = "absolute";
textContainer.style.top = "20px"; // Position 20px below the top
textContainer.style.left = "50%";
textContainer.style.transform = "translateX(-50%)";

// Create the text element
var text = document.createElement("span");
text.style.fontSize = "20px";
text.style.color = "#FFFFFF";
text.style.fontFamily = "Helvetica, Arial, sans-serif";
text.style.fontWeight = "bold";
text.innerHTML = "Kinematics Calculator";

// Append the text element to the container
textContainer.appendChild(text);

// Append the container to the background
bg.appendChild(textContainer);

// Append the background to the document body
document.body.append(bg);
