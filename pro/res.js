function loadjson(file) {
  return new Promise((resolve, reject) => {
    return fetch(file).then((response) => {
      if (response.ok) {
        resolve(response.json());
      } else {
        reject(new Error("error"));
      }
    });
  });
}

var newfile = loadjson("details.json");
newfile.then((data) => {
  tab1(data.tab1Details);
  tab2(data.tab2Details);
});

var child1 = document.querySelector(".tab1");
function tab1(det) {
  console.log(det.rollNumber);
  var image = document.createElement("img");
  image.src = det.image;
  child1.appendChild(image);

  var name = document.createElement("h4");
  name.textContent = det.name;
  child1.appendChild(name);

  var rollNumber = document.createElement("h4");
  rollNumber.textContent = det.rollNumber;
  child1.appendChild(rollNumber);

  var button = document.createElement("button");
  button.textContent = det.buttonName;
  button.id = "Static";
  button.setAttribute("onclick", "handleStaticClick();");
  child1.appendChild(button);
}

var child2 = document.querySelector(".tab2");
function tab2(det) {
  var image = document.createElement("img");
  image.src = det.image;
  child2.appendChild(image);

  var name = document.createElement("h4");
  name.textContent = det.name;
  child2.appendChild(name);

  var rollNumber = document.createElement("h4");
  rollNumber.textContent = det.rollNumber;
  child2.appendChild(rollNumber);

  var button = document.createElement("button");
  button.textContent = det.buttonName;
  button.id = "Dynamic";
  button.setAttribute("onclick", "handleDynamicClick();");
  child2.appendChild(button);
}

function handleStaticClick() {
  window.open("../static_res.html", "_blank");
}

function handleDynamicClick() {
  window.open("./dynamic_res.html", "_blank");
}
