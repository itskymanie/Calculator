# Calculator Project

This is a simple, interactive calculator built with HTML, CSS, and JavaScript that supports basic arithmetic operations (addition, subtraction, multiplication, division) and includes keyboard support. The project was designed to help solidify concepts in event handling, DOM manipulation, and user interface design.

## Features

- **Basic Arithmetic Operations**: Supports addition, subtraction, multiplication, and division.
- **Keyboard Support**: Allows the user to interact with the calculator using both the on-screen buttons and keyboard.
- **Decimal Input**: Users can input decimal numbers.
- **Error Handling**: Displays a friendly message when attempting to divide by zero.
- **Clear Functionality**: Resets the calculator state when the user presses "Clear".
- **Backspace**: Users can delete their last input by pressing the backspace button.
- **Responsive Layout**: The calculator layout adapts to the screen size, providing an optimal experience across devices.

## Usage

1. Open the `index.html` file in your browser to view the calculator.
2. Click on the buttons to perform arithmetic operations.
3. You can also use the keyboard for inputs:
   - **Digits (0-9)**: Type the numbers directly.
   - **Operators (+, -, *, /)**: Type the operators or click on the on-screen buttons.
   - **Enter/Equals (=)**: Press "Enter" or "=" to calculate the result.
   - **Backspace**: Press "Backspace" to remove the last input.
   - **Escape**: Press "Escape" to clear the calculator.

## Technologies Used

- **HTML**: Structure of the calculator and buttons.
- **CSS**: Styling for the calculator interface.
- **JavaScript**: Logic for handling the calculator's operations, input, and event handling (including keyboard support).

## Lessons Learned

### 1. **Event Handling and DOM Manipulation**
   - I learned how to properly handle user inputs using `addEventListener` for both mouse events (button clicks) and keyboard events (`keydown`).
   - Manipulating the DOM with `innerText` to update the calculator display was an important skill to learn. I also learned how to dynamically update and reset values as the user interacts with the calculator.

### 2. **Keyboard Support**
   - Initially, I struggled with making the `Enter` key work correctly. I discovered that the browser’s default behavior for the `Enter` key (form submission) interfered with the functionality. Using `event.preventDefault()` was a key solution for preventing unwanted behavior.
   - I also learned how to handle the `keydown` event for different keys like digits, operators, and special keys (Backspace, Escape, etc.).

### 3. **Handling Floating Point Precision**
   - When working with floating-point numbers, I learned that JavaScript can have issues with precision. I used the `toFixed()` method to limit the number of decimal places shown in the display and avoid overflows.

### 4. **Clear Functionality and State Management**
   - I had to carefully manage the state of the calculator (the first and second numbers, the operator, etc.) to ensure that the calculator performs the correct operations and clears the display when necessary. This helped me better understand how to work with state in JavaScript applications.

### 5. **User Interface and Experience**
   - I spent time ensuring that the user interface (UI) was intuitive. I designed the calculator to respond both to mouse clicks and keyboard inputs, making the tool accessible and user-friendly.
   - Adding responsive CSS made the application adaptable to different screen sizes.

### 6. **Error Handling and Preventing Edge Cases**
   - I learned the importance of error handling. Specifically, I added checks for dividing by zero and ensuring that multiple decimals aren't entered in a single number. These edge cases helped me improve the robustness of the app.

## Challenges

- **Managing state**: One of the major challenges was keeping track of the first and second numbers, the operator, and ensuring calculations happened in the correct order. The design had to ensure that pressing operators multiple times, or entering incomplete operations, wouldn't lead to errors.
  
- **Keyboard input**: Initially, I didn't realize how easy it was to confuse keyboard events with regular clicks. Implementing keyboard support required understanding how to distinguish between `Enter`, `=` (equals), and the `Enter` key's default behavior in browsers.

## Future Improvements

- **Advanced Operations**: Adding more complex operations like square root, exponentiation, and trigonometric functions could extend the calculator's capabilities.
- **UI Enhancements**: Adding themes (light/dark mode) and improving accessibility with keyboard navigation could improve the overall user experience.
- **Mobile Optimization**: While the design is responsive, further optimizing it for touch-based devices would be beneficial, especially for mobile users.

## License

This project is open-source and available under the [MIT License](LICENSE).

---

Let me know if you'd like to make any adjustments or add additional details!