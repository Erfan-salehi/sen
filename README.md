# Age Checker

A simple **Age Checker** project built with **HTML, CSS, and JavaScript**.

The user enters their age in an input field. When they click the button, JavaScript checks the entered age:

- ✅ If the age is **18 or older**, an alert displays: `سن شما مجاز است`
- ❌ If the age is **under 18**, an alert displays: `سن شما مجاز نیست`

## 🚀 Demo

You can run the project locally by opening `index.html` in your browser.

## 🛠️ Technologies

- HTML5
- CSS3
- JavaScript

## 📁 Project Structure

```text
age/
│
├── index.html
│
├── style/
│   └── style.css
│
└── js/
    └── app.js
```

## 💡 How It Works

JavaScript first selects the button and the age input:

```javascript
let button = document.getElementById('button');
let ageinput = document.getElementById('age');
```

When the user clicks the button, the entered age is checked:

```javascript
button.onclick = function () {
  if (ageinput.value >= 18) {
    alert('سن شما مجاز است');
  }

  if (ageinput.value < 18) {
    alert('سن شما مجاز نیست');
  }
};
```

### Example

If the user enters:

```text
20
```

The result will be:

```text
سن شما مجاز است
```

If the user enters:

```text
16
```

The result will be:

```text
سن شما مجاز نیست
```

## 🎯 Purpose

This project was created as a JavaScript practice project to learn:

- Selecting HTML elements with `getElementById()`
- Reading input values with `.value`
- Handling button clicks with `onclick`
- Using `if` statements
- Comparing numbers in JavaScript
- Showing messages with `alert()`

## 👨‍💻 Author

**Erfan-Salehi**

A beginner JavaScript practice project.
