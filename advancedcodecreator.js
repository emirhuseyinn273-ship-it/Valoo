import { createLogger } from 'logging';
import * as fs from 'fs';
import * as path from 'path';

const logger = createLogger('AdvancedCodeCreator');

/**
 * Creates a Valorant account capture site with user authentication and skin display.
 * @param {string} siteName - The name of the site.
 * @returns {string} - The generated advanced code for the site.
 */
function generateValorantCaptureSite(siteName) {
    const codePrefix = '[destroyerr1558 Advanced Code Creator] Elbette! ';

    const code = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${siteName}</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            background-color: #282c34;
            color: #61dafb;
            margin: 0;
            padding: 0;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
        }
        .container {
            text-align: center;
        }
        input, button {
            padding: 10px;
            margin: 5px;
            font-size: 16px;
        }
        .skins {
            margin-top: 20px;
        }
        .skin {
            display: inline-block;
            margin: 5px;
            padding: 10px;
            background-color: #333;
            border-radius: 8px;
            color: #61dafb;
        }
    </style>
</head>
<body>
    <div class="container">
        <h1>${siteName}</h1>
        <input type="text" id="username" placeholder="Username">
        <input type="password" id="password" placeholder="Password">
        <button onclick="login()">Login</button>
        <div class="skins" id="skins">
        </div>
    </div>

    <script>
        function login() {
            const username = document.getElementById('username').value;
            const password = document.getElementById('password').value;

            // Dummy skin data for demonstration
            const skins = {
                "user123": ["Phantom - Agent", "Vandal - Dragon Tattoo", "Ghost - Panther"],
                "user456": ["Bulldog - Funny Bunny", "Operator - Gorillaz", "Spectre - Penance"]
            };

            if (skins[username] && password === 'pass1234') {
                const skinList = skins[username];
                const skinDiv = document.getElementById('skins');
                skinDiv.innerHTML = ''; // Clear previous skins
                skinList.forEach(skin => {
                    const skinElement = document.createElement('div');
                    skinElement.className = 'skin';
                    skinElement.textContent = skin;
                    skinDiv.appendChild(skinElement);
                });
            } else {
                alert('Invalid credentials!');
            }
        }
    </script>
</body>
</html>
    `;

    return `${codePrefix}${code}`;
}

export { generateValorantCaptureSite };
