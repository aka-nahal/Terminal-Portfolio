 // Fix the preloader to complete loading
 document.addEventListener('DOMContentLoaded', function() {
    // Simulate loading progress
    let progress = 0;
    const progressFill = document.getElementById('progress-fill');
    const loadingStatus = document.getElementById('loading-status');
    const preloader = document.getElementById('preloader');
    const app = document.getElementById('app');
    
    // Fast loading simulation
    const loadingInterval = setInterval(function() {
      progress += 5;
      if (progress > 100) progress = 100;
      
      progressFill.style.width = progress + '%';
      loadingStatus.textContent = 'Loading: ' + progress + '%';
      
      if (progress === 100) {
        clearInterval(loadingInterval);
        
        // Hide preloader and show app
        setTimeout(function() {
          preloader.style.opacity = '0';
          setTimeout(function() {
            preloader.style.display = 'none';
            app.classList.add('loaded');
          }, 500);
        }, 500);
      }
    }, 100);
    
    // Ensure the cross is visible
    const targetCross = document.querySelector('.target-cross');
    if (targetCross) {
      targetCross.style.display = 'block';
    }
    
    // Update time display
    function updateTime() {
      const now = new Date();
      const hours = now.getHours().toString().padStart(2, '0');
      const minutes = now.getMinutes().toString().padStart(2, '0');
      const seconds = now.getSeconds().toString().padStart(2, '0');
      document.getElementById('time').textContent = hours + ':' + minutes + ':' + seconds;
    }
    
    // Update time every second
    setInterval(updateTime, 1000);
    updateTime();
  });

  // Enhanced terminal with neofetch-style display
  document.addEventListener('DOMContentLoaded', function() {
    // Terminal functionality
    const terminalOutput = document.getElementById('terminal-output');
    const commandInput = document.getElementById('command-input');
    
    // Command history functionality
    let commandHistory = [];
    let historyIndex = -1;
    
    // Initialize terminal with welcome message and neofetch
    function initTerminal() {
      addTerminalLine("Welcome to LONE DETECTIVE ARCH OS v1.0.3");
      addTerminalLine("Type 'help' for available commands.");
      addTerminalLine("");
      showNeofetch();
    }
    
    // Neofetch-style system information display
    function showNeofetch() {
      // ASCII art logo
      const asciiLogo = [
        "                 .                    ",
        "                .:.                   ",
        "               .:::.                  ",
        "              .:::::.                 ",
        "          ***.:::::::.***            ",
        "     *******.:::::::::.*******       ",
        "   ********.:::::::::::.********     ",
        "  ********.:::::::::::::.********    ",
        " ********.:::::::'***:::.********    ",
        " ******.:::::'*********::.******     ",
        " ****.::::'*************::.**        ",
        "   .:::'*****************::.         ",
        "  .:'*********************.          ",
        " .***********************:.          ",
        " ***********************:.           ",
        " ***********************:.           ",
      
      ];
      
      // System information
      const systemInfo = [
        "<span style='color:#00FF00;'>OS:</span> LONE DETECTIVE ARCH OS v1.0.3",
        "<span style='color:#00FF00;'>Host:</span> Secure Terminal X-7",
        "<span style='color:#00FF00;'>Kernel:</span> 5.15.0-ld-secure",
        "<span style='color:#00FF00;'>Uptime:</span> 3 days, 7 hours, 14 minutes",
        "<span style='color:#00FF00;'>Packages:</span> 1,337",
        "<span style='color:#00FF00;'>Shell:</span> ld-bash 5.1.16",
        "<span style='color:#00FF00;'>Resolution:</span> " + window.innerWidth + "x" + window.innerHeight,
        "<span style='color:#00FF00;'>DE:</span> LDAOS Desktop",
        "<span style='color:#00FF00;'>WM:</span> LDWM",
        "<span style='color:#00FF00;'>Terminal:</span> ld-term",
        "<span style='color:#00FF00;'>CPU:</span> Quantum Core i9 @ 5.2GHz",
        "<span style='color:#00FF00;'>GPU:</span> CyberForce RTX 4090",
        "<span style='color:#00FF00;'>Memory:</span> 32GB / 64GB"
      ];
      
      // Combine ASCII art and system info
      let neofetchOutput = "<div style='display:flex; font-family:monospace; margin-bottom:15px;'>";
      neofetchOutput += "<pre style='color:#00FF00; margin-right:20px;'>" + asciiLogo.join("\n") + "</pre>";
      neofetchOutput += "<div style='display:flex; flex-direction:column; justify-content:center;'>";
      
      // Add color blocks
      neofetchOutput += "<div style='display:flex; margin-bottom:10px;'>";
      const colors = ["#000000", "#FF0000", "#00FF00", "#FFFF00", "#0000FF", "#FF00FF", "#00FFFF", "#FFFFFF"];
      colors.forEach(color => {
        neofetchOutput += `<div style='width:20px; height:20px; background-color:${color}; margin-right:2px;'></div>`;
      });
      neofetchOutput += "</div>";
      
      // Add system info
      systemInfo.forEach(info => {
        neofetchOutput += "<div>" + info + "</div>";
      });
      
      neofetchOutput += "</div></div>";
      
      terminalOutput.innerHTML += neofetchOutput;
      scrollToBottom();
    }
    
    // Add a line to the terminal
    function addTerminalLine(text) {
      const line = document.createElement('div');
      line.className = 'terminal-line';
      line.innerHTML = text;
      terminalOutput.appendChild(line);
      scrollToBottom();
    }
    
    // Scroll terminal to bottom
    function scrollToBottom() {
      terminalOutput.scrollTop = terminalOutput.scrollHeight;
    }
    
    // Process commands
    function processCommand(command) {
      addTerminalLine("<span class='command-prompt'>L.D.A.O.S:~$</span> <span class='command-text'>" + command + "</span>");
      
      // Add to history
      if (command.trim() !== '') {
        commandHistory.unshift(command);
        historyIndex = -1;
      }
      
      // Process command
      const cmd = command.trim().toLowerCase();
      
      if (cmd === '') {
        // Empty command, do nothing
      } else if (cmd === 'help') {
        addTerminalLine("Available commands:");
        addTerminalLine("  help       - Show this help message");
        addTerminalLine("  clear      - Clear the terminal");
        addTerminalLine("  neofetch   - Display system information");
        addTerminalLine("  date       - Show current date and time");
        addTerminalLine("  ls         - List files in current directory");
        addTerminalLine("  whoami     - Display current user");
        addTerminalLine("  exit       - Exit terminal (minimizes window)");
      } else if (cmd === 'clear') {
        terminalOutput.innerHTML = '';
      } else if (cmd === 'neofetch') {
        showNeofetch();
      } else if (cmd === 'date') {
        const now = new Date();
        addTerminalLine(now.toString());
      } else if (cmd === 'ls') {
        addTerminalLine("<span style='color:#4E9A06'>Documents</span>  <span style='color:#4E9A06'>Downloads</span>  <span style='color:#4E9A06'>Pictures</span>");
        addTerminalLine("<span style='color:#3465A4'>cases.txt</span>  <span style='color:#3465A4'>evidence.dat</span>  <span style='color:#3465A4'>notes.md</span>  <span style='color:#3465A4'>report.pdf</span>");
      } else if (cmd === 'whoami') {
        addTerminalLine("lone_detective");
      } else if (cmd === 'exit') {
        addTerminalLine("Closing terminal session...");
        // Minimize terminal window logic would go here
      } else {
        addTerminalLine("Command not found: " + command);
      }
    }
    
    // Handle command input
    commandInput.addEventListener('keydown', function(e) {
      if (e.key === 'Enter') {
        const command = commandInput.value;
        processCommand(command);
        commandInput.value = '';
      } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        if (historyIndex < commandHistory.length - 1) {
          historyIndex++;
          commandInput.value = commandHistory[historyIndex];
        }
      } else if (e.key === 'ArrowDown') {
        e.preventDefault();
        if (historyIndex > 0) {
          historyIndex--;
          commandInput.value = commandHistory[historyIndex];
        } else if (historyIndex === 0) {
          historyIndex = -1;
          commandInput.value = '';
        }
      } else if (e.key === 'Tab') {
        e.preventDefault();
        // Simple tab completion for commands
        const partialCmd = commandInput.value.toLowerCase();
        const commands = ['help', 'clear', 'neofetch', 'date', 'ls', 'whoami', 'exit'];
        
        for (const cmd of commands) {
          if (cmd.startsWith(partialCmd)) {
            commandInput.value = cmd;
            break;
          }
        }
      }
    });
    
    // Initialize terminal
    initTerminal();
    
    // Focus input when clicking on terminal
    document.querySelector('.terminal').addEventListener('click', function() {
      commandInput.focus();
    });
  });