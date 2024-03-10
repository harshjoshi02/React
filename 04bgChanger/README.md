# React Project

## Background Color Changer Using React and Tailwind CSS

In buttons, event handler that is onClick requires the function, in onClick we can't just  give the reference of the function,

**onClick={setColor}**

in this case we have gave the reference of the function setColor. This won't work because its required to pass the argument (that is color name) in the setColor function so that color state can be changed on click of button.

**onClick={setColor()}** / **onClick={setColor("red")}**

in this case instead of giving function to onClick we have directly executed the function that means onClick will get the return value of the function, so this won't work

hence the correct way is to give the call back function.

**onClick={() => setColor("red")}**

in this case, we are calling the function inside the function.

**so ultimately we gave the function to the onClick as required and in that function, the function that is setColor("red") change the color state**