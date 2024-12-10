# **Brain Games**

Welcome to **Brain Games** – a collection of six engaging, console-based JavaScript games that will test your mind and entertain you! Dive into challenges ranging from arithmetic puzzles to identifying prime numbers.

---

## 🕹️ Games Overview

1. **`brain-games`:**  
   A warm-up game that asks for your name and greets you.

2. **`brain-calc`:**  
   Solve math problems by performing basic arithmetic operations on two numbers.

3. **`brain-even`:**  
   Determine if a given number is even or odd.

4. **`brain-gcd`:**  
   Calculate the greatest common divisor (GCD) of two numbers.

5. **`brain-prime`:**  
   Identify whether a number is prime or not.

6. **`brain-progression`:**  
   Fill in the missing number in an arithmetic progression.

---

## 🛠️ Requirements

- **Node.js** (v14.x or later)
- **Git**

---

## 📥 Installation

### Windows Installation (via Chocolatey)

For Windows users, simplify the setup process with Chocolatey:

1. **Install Chocolatey:**  
   Run the following command in PowerShell as Administrator:
   ```powershell
   Set-ExecutionPolicy Bypass -Scope Process -Force; iex ((New-Object System.Net.WebClient).DownloadString('https://chocolatey.org/install.ps1'))
   ```

2. **Install GNU Make:**  
   Still in PowerShell, run:
   ```powershell
   choco install make
   ```

3. **Clone the Repository:**  
   Use a terminal to clone the project:
   ```bash
   git clone https://github.com/Stepan19999993/fullstack-javascript-project-44
   cd fullstack-javascript-project-44
   ```

4. **Install Dependencies:**  
   Install project dependencies:
   ```bash
   make install
   ```

### Ubuntu / Mac Installation

1. **Clone the Repository:**  
   Open a terminal and run:
   ```bash
   git clone https://github.com/Stepan19999993/fullstack-javascript-project-44
   cd fullstack-javascript-project-44
   ```

2. **Install Dependencies:**  
   Install the necessary packages:
   ```bash
   make install
   ```

---

## 🚀 Running the Games

Each game is executed using a `make` command. Replace `<game>` with the specific game name:

```bash
make <game>
```

### Example Commands:

- **Start brain-games:**  
  ```bash
  make brain-games
  ```

- **Play brain-calc:**  
  ```bash
  make brain-calc
  ```

- **Play brain-even:**  
  ```bash
  make brain-even
  ```

- **Play brain-gcd:**  
  ```bash
  make brain-gcd
  ```

- **Play brain-prime:**  
  ```bash
  make brain-prime
  ```

- **Play brain-progression:**  
  ```bash
  make brain-progression
  ```

---

## 📋 Linting

To ensure code quality and consistency, run the linting tool with:

```bash
make lint
```

This command uses **ESLint** to check for style and formatting issues.

---

## ⚙️ Configurable Settings

The game logic and behavior can be customized via the `src/settings.js` file:

```javascript
// Number of rounds per game
const roundsCount = 3; // Change this value to set a different number of rounds

// Enable "God Mode" (no fails)
const noFailMode = false; // Set to true to enable God Mode

// Enable "Cheat Mode" (always right but still fail)
const youAlwaysRight = false; // Set to true to enable Cheat Mode
```

---

## 🎖️ Badges

[![Maintainability](https://api.codeclimate.com/v1/badges/1563a6739414fe9b1c03/maintainability)](https://codeclimate.com/github/Stephan-js/backend-project-44/maintainability)

---

Developed with ❤️ by [Stephan](https://github.com/Stephan-js)
