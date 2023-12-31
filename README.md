# Brain Games

Welcome to Brain Games - a collection of six interactive console-based JavaScript games to challenge and entertain your mind.

## Games

1. **brain-games:**
   - Simply asks for your name and greets you.

2. **brain-calc:**
   - Perform basic arithmetic operations on two numbers.

3. **brain-even:**
   - Determine if a given number is even or odd.

4. **brain-gcd:**
   - Find the greatest common divisor (GCD) of two numbers.

5. **brain-prime:**
   - Identify whether a given number is prime or not.

6. **brain-progression:**
   - Determine the missing number in a sequence.

## Requirements

- JavaScript (Node.js)
- Git

## Installation

### For Windows

If you're using Windows, you can use Chocolatey to simplify the installation process.

1. **Install Chocolatey:**
   - Open PowerShell as an administrator.
   - Run the following command to install Chocolatey:
     ```powershell
     Set-ExecutionPolicy Bypass -Scope Process -Force; iex ((New-Object System.Net.WebClient).DownloadString('https://chocolatey.org/install.ps1'))
     ```
   - Install GNU Make:
     ```powershell
     choco install make
     ```

2. **Restart PowerShell:**
   - Close and reopen PowerShell to make sure it recognizes the newly installed Chocolatey.

3. **Copy Repository to Your PC:**
   - Open a PowerShell window.
   - Run the following command to clone the repository to your local machine:
     ```PowerShell
     git clone https://github.com/Stepan19999993/fullstack-javascript-project-44
     ```
   - Change into the project directory:
     ```PowerShell
     cd fullstack-javascript-project-44
     ```

4. **Install Project Dependencies:**
   - Run the following command to install the project dependencies:
     ```powershell
     make install
     ```

5. ** 

### For Ubuntu

If you're using Ubuntu, you can follow these manual installation steps:

1. **Copy Repository to Your PC:**
   - Open a terminal window.
   - Run the following command to clone the repository to your local machine:
     ```bash
     git clone https://github.com/Stepan19999993/fullstack-javascript-project-44.git
     ```
   - Change into the project directory:
     ```bash
     cd fullstack-javascript-project-44
     ```

2. **Install Project Dependencies:**
   - Run the following command to install the project dependencies:
     ```bash
     make install
     ```

## Game Commands

### Running Games

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

### Linting

To lint the project, use the following command:

```bash
make lint
```

This command runs ESLint to check your code for any style or formatting issues.

### Additional Makefile Commands

- **Install Dependencies:**
  ```bash
  make install
  ```
  This command installs project dependencies using npm.

## How to Use Makefile

1. **Install Dependencies:**
   ```bash
   make install
   ```
   This command installs the necessary project dependencies.

2. **Run a Game:**
   ```bash
   make brain-games
   ```
   Replace `brain-games` with the specific game you want to play.

3. **Lint Your Code:**
   ```bash
   make lint
   ```
   This command checks your code for style and formatting issues.

Feel free to use these commands to navigate and interact with the Brain Games project.

## Project Settings

Modify settings in the `bin/settings.js` file:

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

### Test and maintainability:
[![Actions Status](https://github.com/Stepan19999993/fullstack-javascript-project-44/actions/workflows/support-check.yml/badge.svg)](https://github.com/Stepan19999993/fullstack-javascript-project-44/actions)
<a href="https://codeclimate.com/github/Stepan19999993/fullstack-javascript-project-44/maintainability"><img src="https://api.codeclimate.com/v1/badges/a63658e6920252318329/maintainability"/></a>

