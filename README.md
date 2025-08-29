## 1. Difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?

- **getElementById**  
  - Selects one element by its `id`.  
  - Returns a single element (or `null` if not found).  
  - Example:  
    ```javascript
    const heading = document.getElementById("main-heading");
    ```

- **getElementsByClassName**  
  - Selects multiple elements with the same class.  
  - Returns an **HTMLCollection** (live collection, not a real array).  
  - Example:  
    ```javascript
    const items = document.getElementsByClassName("list-item");
    ```

- **querySelector**  
  - Selects the **first element** that matches a CSS selector.  
  - Example:  
    ```javascript
    const button = document.querySelector(".btn");
    ```

- **querySelectorAll**  
  - Selects **all elements** that match a CSS selector.  
  - Returns a **NodeList**, which supports `forEach`.  
  - Example:  
    ```javascript
    const buttons = document.querySelectorAll(".btn");
    ```
    
## 2. How do you create and insert a new element into the DOM?

Steps:
1. **Create** the element → `document.createElement()`  
2. **Customize** it → add text, classes, or attributes  
3. **Insert** it → attach it with `appendChild`, `prepend`, or `insertBefore`  

Example:
```javascript
const newDiv = document.createElement("div");
newDiv.textContent = "Hello, I am Abrar!";
document.body.appendChild(newDiv);
```

## 3. What is Event Bubbling and how does it work?

Event bubbling means that when an event happens on an element, it first runs on that element, then moves up (or “bubbles”) to its parent, then to the parent’s parent, and so on, until it reaches the `document`.

**Example:**  
If you click a button inside a `div`, the event first triggers on the button, then on the `div`, then on the `body`, and finally on the `document`.


## 4. What is Event Delegation in JavaScript? Why is it useful?

Event delegation is a technique where you attach one event listener to a parent element, and that listener handles events from its child elements by using event bubbling.

**Why it’s useful:**
- Saves memory → fewer event listeners.  
- Works even for child elements added dynamically later.  

**Example:**
```javascript
document.getElementById("menu").addEventListener("click", function(e) {
  if (e.target.tagName === "LI") {
    console.log("Clicked on item: " + e.target.textContent);
  }
});
```

## 5. What is the difference between preventDefault() and stopPropagation()?

- **preventDefault()**  
  This method stops the browser’s default behavior for an event.  
  For example, when you submit a form, the browser normally reloads the page. Using `preventDefault()` stops that.  

  **Example:**
  ```javascript
  document.querySelector("form").addEventListener("submit", function(e) {
    e.preventDefault(); // The form won't reload the page
  });
  ```
 - **stopPropagation()**
  This method stops the event from bubbling up to parent elements.
  For example, if you click a button inside a div, and both have click listeners, stopPropagation() prevents the parent div listener from firing.

  **Example:**

  ```document.getElementById("child").addEventListener("click", function(e) {
    e.stopPropagation(); // Stops the event here, parent won't handle it
  });
  ```
