# Brain Games

Welcome to **Brain Games** – a collection of six interactive, console-based JavaScript games designed to challenge and entertain your mind.

## Games

1. **brain-games:**
   - Simple introductory game that asks for your name and greets you.

2. **brain-calc:**
   - Solve arithmetic problems by performing basic mathematical operations on two numbers.

3. **brain-even:**
   - Determine whether a given number is even or odd.

4. **brain-gcd:**
   - Find the greatest common divisor (GCD) of two numbers.

5. **brain-prime:**
   - Identify whether a given number is prime or not.

6. **brain-progression:**
   - Complete the missing number in an arithmetic progression.

## Requirements

- **Node.js** (v14.x or later)
- **Git**

## Installation

### Windows Installation (via Chocolatey)

If you're on Windows, you can use Chocolatey to simplify the installation process:

1. **Install Chocolatey:**
   - Open PowerShell as an administrator and run the following command:
     ```powershell
     Set-ExecutionPolicy Bypass -Scope Process -Force; iex ((New-Object System.Net.WebClient).DownloadString('https://chocolatey.org/install.ps1'))
     ```

2. **Install GNU Make:**
   - Still in PowerShell, install Make using:
     ```powershell
     choco install make
     ```

3. **Clone the Repository:**
   - Open a terminal and run the following to clone the project:
     ```bash
     git clone https://github.com/Stepan19999993/fullstack-javascript-project-44
     cd fullstack-javascript-project-44
     ```

4. **Install Dependencies:**
   - Install project dependencies using Make:
     ```bash
     make install
     ```

### Ubuntu / Mac Installation

1. **Clone the Repository:**
   - Open a terminal and clone the project:
     ```bash
     git clone https://github.com/Stepan19999993/fullstack-javascript-project-44
     cd fullstack-javascript-project-44
     ```

2. **Install Dependencies:**
   - Install the necessary dependencies with:
     ```bash
     make install
     ```

## Running the Games

Each game can be executed using the following commands:

- **brain-games:**
  ```bash
  make brain-games
  ```

- **brain-calc:**
  ```bash
  make brain-calc
  ```

- **brain-even:**
  ```bash
  make brain-even
  ```

- **brain-gcd:**
  ```bash
  make brain-gcd
  ```

- **brain-prime:**
  ```bash
  make brain-prime
  ```

- **brain-progression:**
  ```bash
  make brain-progression
  ```

## Linting

To lint the project, use the following command:

```bash
make lint
```

This command runs ESLint to check your code for any style or formatting issues.

## How to Use Makefile

1. **Install Dependencies:**
   ```bash
   make install
   ```
   This installs the project's npm dependencies.
   
3. **Run a Game:**
   ```bash
   make brain-games
   ```
   Replace `brain-games` with the specific game you want to play.

4. **Lint Your Code:**
   ```bash
   make lint
   ```
   This command checks your code for style and formatting issues.

## Project Settings

Modify settings in the `src/settings.js` file:

```javascript
// Change the number of rounds in the game
const roundsCount = 3;
// ↑ Change the value to set the desired number of rounds ↑

// Enable "god mode" (no fails).
const noFailMode = false;
// ↑ Change the value to enable or disable "god mode" ↑

// Enable "cheat mode" (your answers are considered right, but you still fail).
const youAlwaysRight = false;
// ↑ Change the value to enable or disable "cheat mode" ↑
```

## Badges

[![Actions Status](https://github.com/Stepan19999993/fullstack-javascript-project-44/actions/workflows/hexlet-check.yml/badge.svg)](https://github.com/Stepan19999993/fullstack-javascript-project-44/actions)

<a href="https://codeclimate.com/github/Stepan19999993/fullstack-javascript-project-44/maintainability"><img src="https://api.codeclimate.com/v1/badges/a63658e6920252318329/maintainability"/></a>

---

Developed with ❤️ by [Stephan](https://github.com/Stephan-js)
