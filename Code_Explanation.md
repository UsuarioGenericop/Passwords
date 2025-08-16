# JavaScript Code Explanation - Password Verification System

## Overview

This code creates a password verification system with three dropdown selectors that users can use to input a 3-digit code. The system checks if the combination matches predefined passwords.

## Complete Code Breakdown

### 1. Container Creation

```javascript
// Create a div container for the selectors
const selectorContainer = document.createElement("div");
selectorContainer.className = "selector-container";
document.body.appendChild(selectorContainer);
```

**Purpose**: Creates a container div to organize all selectors
**What it does**:

- Creates a new `<div>` element
- Assigns CSS class "selector-container" for styling
- Adds the container to the webpage body

### 2. Creating Three Selectors

```javascript
// Create three selectors
const selectors = [];
for (let i = 0; i < 3; i++) {
  const selector = document.createElement("select");
  selector.className = "selector";
  selector.id = `selector-${i + 1}`;
```

**Purpose**: Dynamically creates three dropdown selectors
**What it does**:

- Creates an empty array to store selectors
- Loops 3 times (i = 0, 1, 2)
- Each iteration creates a new `<select>` element
- Assigns unique IDs: "selector-1", "selector-2", "selector-3"
- Gives each selector the class "selector"

### 3. Adding Options to Each Selector

```javascript
// Add options 0-9 to each selector
for (let j = 0; j <= 9; j++) {
  const option = document.createElement("option");
  option.value = j;
  option.textContent = j;
  selector.appendChild(option);
}
```

**Purpose**: Populates each selector with numbers 0-9
**What it does**:

- For each selector, adds 10 options
- Options range from 0 to 9
- Each option has matching value and display text
- Options are appended to their respective selector

### 4. Event Listeners for Selection Changes

```javascript
// Add event listener to detect selection changes
selector.addEventListener("change", function () {
  const value = this.value;
  const selectorNumber = this.id;
  console.log(`${selectorNumber}: ${value}`);
});
```

**Purpose**: Monitors when users change their selection
**What it does**:

- Listens for "change" events on each selector
- When selection changes, logs which selector and what value
- Example output: "selector-1: 5" when user selects 5 in first dropdown

### 5. Adding Selectors to Container

```javascript
  selectors.push(selector);
  selectorContainer.appendChild(selector);
}
```

**Purpose**: Places selectors on the webpage
**What it does**:

- Adds each selector to the selectors array
- Appends each selector to the container div
- Makes selectors visible on the webpage

### 6. Password Verification System

```javascript
const numero1 = document.querySelector("#selector1");
const numero2 = document.querySelector("#selector2");
const numero3 = document.querySelector("#selector3");

const verificar1 = document.querySelector("#verificar1");
const resultado1 = document.querySelector("#resultado1");

verificar1.addEventListener("click", function concatenar() {
  var resultado = numero1.value + numero2.value + numero3.value;
  console.log(resultado);

  if (resultado == 911) {
    resultado1.innerHTML = "Password 1 correcta";
  } else if (resultado == 714) {
    resultado1.innerHTML = "Password 2 correcta";
  } else {
    resultado1.innerHTML = "Password incorrecta";
  }
});
```

**Purpose**: Verifies if the 3-digit combination matches correct passwords
**What it does**:

- Gets references to the three selectors and UI elements
- Listens for clicks on the verify button
- Concatenates the three selected numbers into one string
- Checks if the combination equals:
  - "911" → Shows "Password 1 correcta"
  - "714" → Shows "Password 2 correcta"
  - Any other combination → Shows "Password incorrecta"

## How It Works

1. **Page Load**: Three dropdown selectors are created and displayed
2. **User Input**: User selects numbers from each dropdown
3. **Verification**: User clicks verify button
4. **Password Check**: System combines the three numbers and checks against valid passwords
5. **Result Display**: Shows whether the password is correct or not

## Valid Passwords

- **Password 1**: 911
- **Password 2**: 714

## Technical Features

- **Dynamic Creation**: Selectors are created entirely with JavaScript
- **Event Handling**: Real-time monitoring of user selections
- **Password Validation**: Simple string concatenation and comparison
- **User Feedback**: Clear messages for correct/incorrect passwords
- **Modular Design**: Easy to add more passwords or modify logic

## Use Cases

- Simple access control systems
- Educational password validation examples
- Basic security demonstration
- User input validation practice
