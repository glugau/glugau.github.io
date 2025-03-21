        // Check if Font Awesome icons loaded successfully
        window.addEventListener('DOMContentLoaded', function() {
            setTimeout(function() {
                // Test if Font Awesome is loaded by checking computed style
                const testIcon = document.querySelector('.fab');
                const computedStyle = window.getComputedStyle(testIcon, ':before');
                const contentValue = computedStyle.getPropertyValue('content');
                
                // If Font Awesome failed to load (content is empty or doesn't contain the icon)
                if (contentValue === 'none' || contentValue === '') {
                    // Show fallback icons
                    document.querySelectorAll('.social-links a i').forEach(icon => {
                        icon.style.display = 'none';
                    });
                    document.querySelectorAll('.social-links a span').forEach(fallback => {
                        fallback.style.display = 'inline';
                    });
                    
                    // Show fallback theme icons
                    document.querySelector('#theme-icon i').style.display = 'none';
                    document.querySelector('#theme-icon .icon-fallback-moon').style.display = 'inline';
                }
            }, 500); // Give a little time for Font Awesome to load
        });
        
        // Theme toggling
        const themeToggle = document.getElementById('theme-toggle');
        const themeIcon = document.getElementById('theme-icon');
        const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');
        
        // Set initial theme based on system preference
        if (prefersDarkScheme.matches) {
            document.body.setAttribute('data-theme', 'dark');
            themeToggle.checked = true;
            updateThemeIcon(true);
        } else {
            document.body.setAttribute('data-theme', 'light');
            themeToggle.checked = false;
            updateThemeIcon(false);
        }
        
        function updateThemeIcon(isDark) {
            // Clear previous content
            themeIcon.innerHTML = '';
            
            if (isDark) {
                // Try Font Awesome first, with fallback
                const iconElement = document.createElement('i');
                iconElement.className = 'fas fa-sun';
                themeIcon.appendChild(iconElement);
                
                const fallbackElement = document.createElement('span');
                fallbackElement.className = 'icon-fallback-sun';
                fallbackElement.textContent = '☀️';
                fallbackElement.style.display = 'none';
                themeIcon.appendChild(fallbackElement);
            } else {
                // Try Font Awesome first, with fallback
                const iconElement = document.createElement('i');
                iconElement.className = 'fas fa-moon';
                themeIcon.appendChild(iconElement);
                
                const fallbackElement = document.createElement('span');
                fallbackElement.className = 'icon-fallback-moon';
                fallbackElement.textContent = '🌙';
                fallbackElement.style.display = 'none';
                themeIcon.appendChild(fallbackElement);
            }
        }
        
        themeToggle.addEventListener('change', function() {
            if (this.checked) {
                document.body.setAttribute('data-theme', 'dark');
                updateThemeIcon(true);
            } else {
                document.body.setAttribute('data-theme', 'light');
                updateThemeIcon(false);
            }
        });

        // Download resume as PDF
        document.getElementById('download-pdf-btn').addEventListener('click', function() {
            let link = document.createElement('a');
            link.href = './resume.pdf';
            link.target = '_blank';  // open in a new tab
            link.click();
        });

        // Set current year in footer
        document.getElementById('current-year').textContent = new Date().getFullYear();

        // Smooth scrolling for anchor links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                document.querySelector(this.getAttribute('href')).scrollIntoView({
                    behavior: 'smooth'
                });
            });
        });