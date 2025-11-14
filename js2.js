        // ==================== DATA MODELS ====================
        const gameData = {
            landingPage: {
                threats: [
                    { name: "Neural Hijacking", icon: "🧠", description: "AI-powered attacks targeting cognitive patterns and behavioral data" },
                    { name: "Advanced Phishing", icon: "🎣", description: "Sophisticated social engineering with deepfakes and voice cloning" },
                    { name: "Password Breaches", icon: "🔓", description: "Credential stuffing and mass data leaks compromising millions" },
                    { name: "Digital Impersonation", icon: "👤", description: "Identity theft using AI-generated content and stolen data" }
                ],
                
                modulesPreview: [
                    { icon: "🔐", name: "Password Security", topics: 4, color: "#00D9FF" },
                    { icon: "🎣", name: "Phishing Detection", topics: 4, color: "#FF00D9" },
                    { icon: "🛡️", name: "Digital Defense", topics: 4, color: "#00FF88" },
                    { icon: "🧠", name: "Neural Hijacking Prevention", topics: 4, color: "#FF6B00" },
                    { id: "id-password-security", icon: "🔓", name: "ID & Password Breaches", topics: 3, color: "#FF8C00" }
                ]
            },
            modules: [
                {
                    id: "password-security",
                    name: "Password Security Fortress",
                    icon: "🔐",
                    color: "#00D9FF",
                    story: "In 2025, password breaches exposed 5 billion credentials. Are yours safe?",
                    lessons: [
                        {
                            title: "Creating Unbreakable Passwords",
                            duration: "8 min",
                            quizQuestions: [
                                {
                                    question: "Which password is strongest?",
                                    options: ["Password123!", "MyDog2024", "T7$mK9@pL2nQ5", "johnsmith1990"],
                                    correct: 2,
                                    explanation: "Option 3 uses random characters, numbers, and symbols with no dictionary words."
                                },
                                {
                                    question: "How long should a strong password be?",
                                    options: ["8 characters", "12 characters", "16+ characters", "No limit needed"],
                                    correct: 2,
                                    explanation: "Security experts recommend 16+ characters for maximum protection."
                                }
                            ]
                        },
                        {
                            title: "Password Manager Mastery",
                            duration: "10 min",
                            quizQuestions: [
                                {
                                    question: "What is the main benefit of a password manager?",
                                    options: ["Remembers passwords for you", "Generates strong passwords", "Encrypts your passwords", "All of the above"],
                                    correct: 3,
                                    explanation: "Password managers provide all these benefits, making them essential security tools."
                                }
                            ]
                        },
                        {
                            title: "Multi-Factor Authentication",
                            duration: "12 min",
                            quizQuestions: [
                                {
                                    question: "Which MFA method is most secure?",
                                    options: ["SMS codes", "Email codes", "Authenticator app", "Security questions"],
                                    correct: 2,
                                    explanation: "Authenticator apps are more secure than SMS, which can be intercepted."
                                }
                            ]
                        },
                        {
                            title: "Defending Against Credential Attacks",
                            duration: "15 min",
                            quizQuestions: [
                                {
                                    question: "What is credential stuffing?",
                                    options: ["Creating too many passwords", "Using leaked passwords on multiple sites", "Sharing passwords with friends", "Writing passwords down"],
                                    correct: 1,
                                    explanation: "Credential stuffing uses leaked username/password pairs to access accounts on other sites."
                                }
                            ]
                        }
                    ]
                },
                {
                    id: "phishing-detection",
                    name: "Phishing Detection Academy",
                    icon: "🎣",
                    color: "#FF00D9",
                    story: "A colleague's email seems urgent. But something feels off. Can you spot the trap?",
                    lessons: [
                        {
                            title: "Spotting Email Red Flags",
                            duration: "10 min",
                            quizQuestions: [
                                {
                                    question: "Which is a common phishing red flag?",
                                    options: ["Urgent deadline", "Personalized greeting", "Company logo", "Proper grammar"],
                                    correct: 0,
                                    explanation: "Urgency is a classic phishing tactic to pressure victims into acting quickly."
                                }
                            ]
                        },
                        {
                            title: "URL Inspection Techniques",
                            duration: "8 min",
                            quizQuestions: [
                                {
                                    question: "Which domain is suspicious?",
                                    options: ["amazon.com", "amaz0n.com", "www.amazon.com", "amazon.co.uk"],
                                    correct: 1,
                                    explanation: "The zero (0) replacing the 'o' is a common phishing technique called typosquatting."
                                }
                            ]
                        },
                        {
                            title: "Social Engineering Tactics",
                            duration: "12 min",
                            quizQuestions: [
                                {
                                    question: "What is pretexting in phishing?",
                                    options: ["Sending random emails", "Creating a false scenario to gain trust", "Using technical jargon", "Spoofing email addresses"],
                                    correct: 1,
                                    explanation: "Pretexting involves creating a believable scenario to manipulate the victim."
                                }
                            ]
                        },
                        {
                            title: "Advanced Phishing Defense",
                            duration: "15 min",
                            quizQuestions: [
                                {
                                    question: "How can you verify a suspicious email?",
                                    options: ["Click the link to check", "Reply to the sender", "Contact the company through official channels", "Forward to friends"],
                                    correct: 2,
                                    explanation: "Always verify through official channels, never through the suspicious email itself."
                                }
                            ]
                        }
                    ]
                },
                // --- NEW MODULE 1: Digital Defense Fundamentals ---
                {
                    id: "digital-defense",
                    name: "Digital Defense Fundamentals",
                    icon: "🛡️",
                    color: "#00FF88",
                    story: "Your personal data is under constant surveillance. Learn the basic, indispensable strategies to lock down your devices and privacy.",
                    lessons: [
                        {
                            title: "Securing Your Home Network",
                            duration: "10 min",
                            quizQuestions: [
                                {
                                    question: "What is the most critical first step to securing a Wi-Fi router?",
                                    options: ["Disable broadcasting the SSID", "Change the default password", "Enable a Guest Network", "Install a firewall"],
                                    correct: 1,
                                    explanation: "The default password is easy for hackers to guess or find online. Changing it is mandatory."
                                }
                            ]
                        },
                        {
                            title: "Software Updates and Patching",
                            duration: "8 min",
                            quizQuestions: [
                                {
                                    question: "What is the primary purpose of a software security patch?",
                                    options: ["To add new features to the software", "To fix known security vulnerabilities", "To improve the user interface", "To speed up the software"],
                                    correct: 1,
                                    explanation: "Patches fix vulnerabilities that hackers exploit to gain unauthorized access."
                                }
                            ]
                        },
                        {
                            title: "Privacy Settings Mastery",
                            duration: "12 min",
                            quizQuestions: [
                                {
                                    question: "Which type of data tracking is most invasive to your privacy?",
                                    options: ["First-party cookies", "Third-party cookies", "Session cookies", "Flash cookies"],
                                    correct: 1,
                                    explanation: "Third-party cookies track your activity across different websites, creating a highly detailed profile."
                                }
                            ]
                        },
                        {
                            title: "Mobile Device Security",
                            duration: "15 min",
                            quizQuestions: [
                                {
                                    question: "Why should you avoid using public, unsecured Wi-Fi for sensitive tasks?",
                                    options: ["It slows down your connection", "Your screen can be viewed by others", "It allows eavesdropping via Man-in-the-Middle attacks", "The hotspot provider can steal your phone"],
                                    correct: 2,
                                    explanation: "Unsecured public Wi-Fi is vulnerable to Man-in-the-Middle attacks, where a hacker intercepts your data."
                                }
                            ]
                        }
                    ]
                },
                // --- NEW MODULE 2: Neural Hijacking Prevention ---
                {
                    id: "neural-hijacking",
                    name: "Neural Hijacking Prevention",
                    icon: "🧠",
                    color: "#FF6B00",
                    story: "AI is the new frontier of cyber warfare. Learn how to protect your cognitive and behavioral data from advanced, intelligent adversaries.",
                    lessons: [
                        {
                            title: "Understanding Deepfake Threats",
                            duration: "10 min",
                            quizQuestions: [
                                {
                                    question: "What is the biggest threat posed by AI-generated 'deepfake' voice and video?",
                                    options: ["They look too realistic in movies", "They allow for sophisticated digital impersonation and fraud", "They require too much computing power", "They can't be used for criminal activity"],
                                    correct: 1,
                                    explanation: "Deepfakes enable convincing impersonation, making social engineering attacks extremely effective."
                                }
                            ]
                        },
                        {
                            title: "Biometric Security Best Practices",
                            duration: "8 min",
                            quizQuestions: [
                                {
                                    question: "Which is a general vulnerability of biometric authentication (e.g., fingerprint, face ID)?",
                                    options: ["It's always faster than a password", "The biometric data can be stolen and replicated", "It can only be used on expensive phones", "It doesn't work in the dark"],
                                    correct: 1,
                                    explanation: "Once biometric data is compromised, it cannot be changed, unlike a password."
                                }
                            ]
                        },
                        {
                            title: "Defending Against Behavioral Profiling",
                            duration: "12 min",
                            quizQuestions: [
                                {
                                    question: "What is 'Behavioral Profiling' used by cyber adversaries?",
                                    options: ["Predicting your online purchases", "Analyzing typing speed, mouse movement, and usage patterns", "Tracking your heart rate", "Guessing your favorite color"],
                                    correct: 1,
                                    explanation: "Behavioral profiling builds a model of how you interact with devices, which can be used to bypass security checks."
                                }
                            ]
                        },
                        {
                            title: "Protecting Data from AI Analysis",
                            duration: "15 min",
                            quizQuestions: [
                                {
                                    question: "What technique can help 'poison' AI training data to disrupt profiling?",
                                    options: ["Using all caps in every email", "Deleting your browser history frequently", "Using privacy-enhancing browser extensions and tools", "Never buying anything online"],
                                    correct: 2,
                                    explanation: "Tools that introduce noise or use anonymizing techniques can make your data less useful for AI profiling and analysis."
                                }
                            ]
                        }
                    ]
                },
                {
                    id: "id-password-security",
                    name: "ID & Password Security",
                    icon: "🔓",
                    color: "#FF8C00",
                    story: "ID and password security occur when attackers gain unauthorized access to stored credentials via data leaks, credential stuffing, or insecure storage. This module covers how breaches happen, how attackers reuse credentials, and practical steps to detect and recover from a compromise.",
                    lessons: [
                        {
                            title: "Theory: How Breaches Happen",
                            duration: "8 min",
                            quizQuestions: [
                                {
                                    question: "What is a common source of leaked credentials?",
                                    options: ["Using a password manager", "Data leaks from third-party services", "Enabling MFA", "Strong unique passwords"],
                                    correct: 1,
                                    explanation: "Data breaches at third-party services frequently expose username/password pairs that attackers reuse elsewhere."
                                }
                            ]
                        },
                        {
                            title: "Attack Vectors & Credential Stuffing",
                            duration: "10 min",
                            quizQuestions: [
                                {
                                    question: "What does credential stuffing involve?",
                                    options: ["Brute-forcing single account", "Using leaked credential lists across many sites", "Encrypting password databases", "Monitoring network traffic"],
                                    correct: 1,
                                    explanation: "Credential stuffing uses lists of leaked credentials to attempt logins across multiple services."
                                }
                            ]
                        },
                        {
                            title: "Responding After a Breach",
                            duration: "10 min",
                            quizQuestions: [
                                {
                                    question: "If a service you use is breached, what's the best immediate action?",
                                    options: ["Ignore the notice", "Change the password and enable MFA", "Share credentials with colleagues", "Use the same password on other sites"],
                                    correct: 1,
                                    explanation: "Changing the password and enabling multi-factor authentication reduces the risk of account takeover."
                                }
                            ]
                        }
                    ]
                }
            ],
            phishingScenarios: [
                {
                    id: 1,
                    from: "security@paypa1-verify.com",
                    subject: "URGENT: Verify your account now",
                    body: "Your account has been locked due to suspicious activity. Click here to verify immediately or your account will be permanently deleted within 24 hours.",
                    isPhishing: true,
                    redFlags: [
                        "Misspelled domain (paypa1 vs paypal)",
                        "Urgent language and threats",
                        "Generic greeting",
                        "Suspicious link"
                    ],
                    explanation: "This is a classic phishing attempt using urgency, fear tactics, and domain spoofing."
                },
                {
                    id: 2,
                    from: "team@github.com",
                    subject: "Your pull request was merged",
                    body: "Hi Sarah, John Doe merged your pull request #1234 'Fix login bug' into the main branch. View details in your repository.",
                    isPhishing: false,
                    redFlags: [],
                    explanation: "This is legitimate: proper domain, personalized content, specific details, and no urgency or suspicious links."
                },
                {
                    id: 3,
                    from: "admin@yourbank-secure.net",
                    subject: "Account Alert: Unusual Activity Detected",
                    body: "We noticed unusual activity on your account. Please verify your identity by clicking the link below and entering your account credentials.",
                    isPhishing: true,
                    redFlags: [
                        "Wrong domain (banks use specific domains)",
                        "Asking for credentials via email",
                        "Vague 'unusual activity'",
                        "Pressure to act immediately"
                    ],
                    explanation: "Banks never ask for credentials via email. The domain is fake and designed to steal your login."
                }
            ],
            achievements: [
                { name: "First Steps", icon: "🎯", description: "Complete your first lesson", points: 10, requirement: 1, type: 'lessons' },
                { name: "Phish Slayer", icon: "🎣", description: "Identify 10 phishing emails correctly", points: 50, requirement: 10, type: 'phishing' },
                { name: "Password Master", icon: "🔐", description: "Pass all password security lessons", points: 50, requirement: 4, type: 'password-module' },
                { name: "Week Warrior", icon: "🔥", description: "7-day learning streak", points: 100, requirement: 7, type: 'streak' },
                { name: "Neural Defender", icon: "🧠", description: "Complete Neural Hijacking module", points: 200, requirement: 4, type: 'neural-module' }, // Updated requirement to 4 lessons
                { name: "Security Champion", icon: "🏆", description: "Reach 1000+ security points", points: 500, requirement: 1000, type: 'points' }
            ],
            leaderboard: [
                { rank: 1, username: "CyberGuardian", score: 2450, badges: 12 },
                { rank: 2, username: "DigitalDefender", score: 2280, badges: 11 },
                { rank: 3, username: "PhishHunter", score: 2150, badges: 10 },
                { rank: 4, username: "SecurityNinja", score: 1920, badges: 9 },
                { rank: 5, username: "CyberSentinel", score: 1875, badges: 9 }
            ]
        };

        // User Progress State
        const userProgress = {
            totalScore: 0,
            passwordPoints: 0,
            phishingPoints: 0,
            achievementPoints: 0,
            modulesCompleted: 0,
            challengesWon: 0,
            currentStreak: 0,
            lessonsCompleted: [],
            phishingCorrect: 0,
            unlockedAchievements: [],
            moduleProgress: {}
        };

        let currentModule = null;
        let currentLesson = null;
        let currentQuestionIndex = 0;
        let currentQuizScore = 0;
        let currentPhishingIndex = 0;
        let currentPhishingScore = 0;
        let selectedAnswer = null;

        // ==================== INITIALIZATION ====================
        function init() {
            // Ensure module progress is initialized for all modules (even if 0)
            gameData.modules.forEach(module => {
                if (!userProgress.moduleProgress[module.id]) {
                    userProgress.moduleProgress[module.id] = 0;
                }
            });

            createNeuralBackground();
            renderLandingPage();
            updateAllScores();
        }

        function createNeuralBackground() {
            const bg = document.getElementById('neuralBg');
            const dotCount = 30;
            
            for (let i = 0; i < dotCount; i++) {
                const dot = document.createElement('div');
                dot.className = 'neural-dot';
                dot.style.left = Math.random() * 100 + '%';
                dot.style.top = Math.random() * 100 + '%';
                dot.style.animationDelay = Math.random() * 3 + 's';
                bg.appendChild(dot);
            }
        }

        // ==================== NAVIGATION ====================
        function navigateTo(page) {
            document.querySelectorAll('.page-section').forEach(section => {
                section.classList.remove('active');
            });
            document.getElementById(page).classList.add('active');
            
            document.querySelectorAll('.nav-link').forEach(link => {
                link.classList.remove('active');
            });

            // Update active nav link
            const navLinks = document.querySelectorAll('.nav-link');
            // Nav links are Home[0], Dashboard[1], Achievements[2], Leaderboard[3]
            if (page === 'landing') navLinks[0].classList.add('active');
            else if (page === 'dashboard' || page === 'moduleView' || page === 'lessonView' || page === 'phishingQuiz' || page === 'passwordChecker') navLinks[1].classList.add('active');
            else if (page === 'achievements') navLinks[2].classList.add('active');
            else if (page === 'leaderboard') navLinks[3].classList.add('active');

            // Render page-specific content
            if (page === 'dashboard') renderDashboard();
            else if (page === 'achievements') renderAchievements();
            else if (page === 'leaderboard') renderLeaderboard();
            else if (page === 'phishingQuiz') startPhishingQuiz();

            window.scrollTo(0, 0);
        }

        // ==================== LANDING PAGE ====================
        function renderLandingPage() {
            // Render threats (create DOM nodes so we can attach click handlers)
            const threatsGrid = document.getElementById('threatsGrid');
            threatsGrid.innerHTML = '';
            gameData.landingPage.threats.forEach(threat => {
                const card = document.createElement('div');
                card.className = 'threat-card';
                card.addEventListener('click', () => showThreatModal(threat));

                card.innerHTML = `
                    <div class="threat-icon">${threat.icon}</div>
                    <div class="threat-name">${threat.name}</div>
                    <div class="threat-desc">${threat.description}</div>
                `;

                threatsGrid.appendChild(card);
            });

            // Render modules preview (create DOM nodes and attach listeners to avoid inline onclick quoting issues)
            const modulesPreview = document.getElementById('modulesPreview');
            modulesPreview.innerHTML = '';
            gameData.landingPage.modulesPreview.forEach(mod => {
                const card = document.createElement('div');
                card.className = 'module-card';
                const targetId = mod.id || mod.name.toLowerCase().replace(/\s/g, '-');
                card.addEventListener('click', () => openModule(targetId));

                card.innerHTML = `
                    <div class="module-icon">${mod.icon}</div>
                    <div class="module-name">${mod.name}</div>
                    <div class="module-topics">${mod.topics} learning topics</div>
                `;

                modulesPreview.appendChild(card);
            });
        }

        // ==================== DASHBOARD ====================
        function renderDashboard() {
            updateAllScores();
            renderChallenges();
            renderRecommendedModule();
            renderAllModules();
        }

        function renderChallenges() {
            const challenges = [
                { title: "Phishing Email Detection", difficulty: "easy", points: 30, action: () => navigateTo('phishingQuiz') },
                { title: "Password Strength Test", difficulty: "medium", points: 50, action: () => navigateTo('passwordChecker') },
                { 
                    title: "Digital Defense Quiz", 
                    difficulty: "hard", 
                    points: 100, 
                    action: () => {
                        const module = gameData.modules.find(m => m.id === 'digital-defense');
                        if (module) {
                            // Start the first lesson of the Digital Defense module
                            currentModule = module;
                            startLesson(0); 
                        } else {
                            alert('Module not found!');
                        }
                    } 
                }
            ];

            const challengesList = document.getElementById('challengesList');
            challengesList.innerHTML = challenges.map((challenge, index) => {
                // Simplified way to track if challenge is 'complete' for demonstration purposes
                let isComplete = false;
                if (challenge.title.includes('Phishing') && userProgress.phishingCorrect >= gameData.phishingScenarios.length) isComplete = true;
                // Password challenge is "completed" once, but can be done again
                if (challenge.title.includes('Password') && userProgress.challengesWon > 0) isComplete = false; 

                return `
                    <div class="challenge-item">
                        <div class="challenge-info">
                            <h4>${challenge.title} ${isComplete ? ' (Done)' : ''}</h4>
                            <div class="challenge-meta">
                                <span class="difficulty-badge difficulty-${challenge.difficulty}">${challenge.difficulty.toUpperCase()}</span>
                                <span>⏱️ 10-15 min</span>
                            </div>
                        </div>
                        <button class="points-badge" onclick="startChallenge(${index})" ${isComplete && challenge.title.includes('Phishing') ? 'disabled' : ''}>
                            +${challenge.points} pts
                        </button>
                    </div>
                `;
            }).join('');

            window.startChallenge = function(index) {
                challenges[index].action();
            };
        }

        function renderRecommendedModule() {
            // Recommend the module with the lowest progress
            let recommended = gameData.modules[0];
            let lowestProgress = userProgress.moduleProgress[recommended.id] || 0;

            gameData.modules.forEach(module => {
                const progress = userProgress.moduleProgress[module.id] || 0;
                if (progress < lowestProgress) {
                    lowestProgress = progress;
                    recommended = module;
                }
            });
            
            const progress = lowestProgress;
            
            document.getElementById('recommendedModule').innerHTML = `
                <div class="challenge-item">
                    <div class="challenge-info">
                        <h4>${recommended.icon} ${recommended.name}</h4>
                        <div class="challenge-meta">
                            <span>📚 ${recommended.lessons.length} lessons</span>
                            <span>Progress: ${progress}%</span>
                        </div>
                    </div>
                    <button class="btn-secondary" onclick="openModule('${recommended.id}')">
                        Start Learning
                    </button>
                </div>
            `;
        }

        function renderAllModules() {
            const allModules = document.getElementById('allModules');
            allModules.innerHTML = gameData.modules.map(module => {
                const progress = userProgress.moduleProgress[module.id] || 0;
                return `
                    <div class="module-card" onclick="openModule('${module.id}')">
                        <div class="module-icon">${module.icon}</div>
                        <div class="module-name">${module.name}</div>
                        <div class="module-topics">${module.lessons.length} lessons</div>
                        <div class="progress-bar" style="margin-top: 15px;">
                            <div class="progress-fill" style="width: ${progress}%; background: ${module.color};"></div>
                        </div>
                    </div>
                `;
            }).join('');
        }

        // ==================== MODULE VIEW ====================
        function openModule(moduleId) {
            currentModule = gameData.modules.find(m => m.id === moduleId);
            if (!currentModule) {
                // Handle cases where preview link uses simplified name
                if (moduleId === 'password-security') currentModule = gameData.modules[0];
                else if (moduleId === 'phishing-detection') currentModule = gameData.modules[1];
                else if (moduleId === 'digital-defense-fundamentals') currentModule = gameData.modules[2];
                else if (moduleId === 'neural-hijacking-prevention') currentModule = gameData.modules[3];
                if (!currentModule) return;
                moduleId = currentModule.id;
            }

            const progress = userProgress.moduleProgress[moduleId] || 0;
            
            document.getElementById('moduleHeader').innerHTML = `
                <div class="module-title">
                    <span>${currentModule.icon}</span>
                    <span>${currentModule.name}</span>
                </div>
                <div class="story-card">${currentModule.story}</div>
                <div class="progress-bar">
                    <div class="progress-fill" style="width: ${progress}%; background: ${currentModule.color};"></div>
                </div>
                <div style="text-align: center; margin-top: 10px; font-size: 14px; color: var(--text-dim);">
                    ${progress}% Complete
                </div>
            `;

            const lessonsGrid = document.getElementById('lessonsGrid');
            lessonsGrid.innerHTML = currentModule.lessons.map((lesson, index) => {
                const lessonKey = `${moduleId}-${index}`;
                const completed = userProgress.lessonsCompleted.includes(lessonKey);
                
                return `
                    <div class="lesson-card">
                        <div class="lesson-title">${lesson.title}</div>
                        <div class="lesson-meta">
                            <span>⏱️ ${lesson.duration}</span>
                            <span>📝 ${lesson.quizQuestions.length} questions</span>
                        </div>
                        ${completed ? '<div class="lesson-status">✓ Completed</div>' : ''}
                        <button class="btn-primary" onclick="startLesson(${index})" style="width: 100%;">
                            ${completed ? 'Review Lesson' : 'Start Lesson'}
                        </button>
                    </div>
                `;
            }).join('');

            navigateTo('moduleView');
        }

        function backToModule() {
            if (currentModule) {
                openModule(currentModule.id);
            }
        }

        // ==================== LESSON & QUIZ ====================
        function startLesson(lessonIndex) {
            currentLesson = currentModule.lessons[lessonIndex];
            currentQuestionIndex = 0;
            currentQuizScore = 0;
            selectedAnswer = null;

            document.getElementById('lessonTitle').textContent = currentLesson.title;
            renderQuizQuestion();
            navigateTo('lessonView');
        }

        function renderQuizQuestion() {
            const question = currentLesson.quizQuestions[currentQuestionIndex];
            const totalQuestions = currentLesson.quizQuestions.length;

            document.getElementById('quizProgress').textContent = `Question ${currentQuestionIndex + 1} of ${totalQuestions}`;
            document.getElementById('quizScore').textContent = currentQuizScore;

            document.getElementById('quizContent').innerHTML = `
                <div class="question-card">
                    <div class="question-text">${question.question}</div>
                    <div class="options-list">
                        ${question.options.map((option, index) => `
                            <button class="option-btn" onclick="selectAnswer(${index})" id="option-${index}">
                                ${option}
                            </button>
                        `).join('')}
                    </div>
                    <div id="feedback" class="hidden"></div>
                </div>
                <div class="text-center mt-30">
                    <button class="btn-primary" onclick="submitAnswer()" id="submitBtn">Submit Answer</button>
                </div>
            `;
        }

        function selectAnswer(index) {
            selectedAnswer = index;
            document.querySelectorAll('.option-btn').forEach((btn, i) => {
                btn.classList.remove('selected');
                if (i === index) btn.classList.add('selected');
            });
        }

        function submitAnswer() {
            if (selectedAnswer === null) {
                alert('Please select an answer');
                return;
            }

            const question = currentLesson.quizQuestions[currentQuestionIndex];
            const isCorrect = selectedAnswer === question.correct;
            
            // Score tracking based on module
            let pointsEarned = 20;
            if (isCorrect) {
                currentQuizScore += pointsEarned;
                if (currentModule.id === 'password-security') userProgress.passwordPoints += pointsEarned;
                else if (currentModule.id === 'phishing-detection') userProgress.phishingPoints += pointsEarned;
                else if (currentModule.id === 'digital-defense') userProgress.passwordPoints += pointsEarned; // For simplicity, grouping new modules' points
                else if (currentModule.id === 'neural-hijacking') userProgress.phishingPoints += pointsEarned; // For simplicity, grouping new modules' points
                else userProgress.passwordPoints += pointsEarned; // Default fallback
            }

            // Show feedback
            document.querySelectorAll('.option-btn').forEach((btn, i) => {
                btn.disabled = true;
                if (i === question.correct) {
                    btn.classList.add('correct');
                } else if (i === selectedAnswer && !isCorrect) {
                    btn.classList.add('incorrect');
                }
            });

            const feedbackDiv = document.getElementById('feedback');
            feedbackDiv.className = `feedback-box ${isCorrect ? 'correct' : 'incorrect'}`;
            feedbackDiv.innerHTML = `
                <h4>${isCorrect ? '✓ Correct!' : '✗ Incorrect'}</h4>
                <p>${question.explanation}</p>
            `;
            feedbackDiv.classList.remove('hidden');

            document.getElementById('submitBtn').textContent = 'Next Question';
            document.getElementById('submitBtn').onclick = nextQuestion;
        }

        function nextQuestion() {
            currentQuestionIndex++;
            selectedAnswer = null;

            if (currentQuestionIndex < currentLesson.quizQuestions.length) {
                renderQuizQuestion();
            } else {
                completeLesson();
            }
        }

        function completeLesson() {
            const lessonKey = `${currentModule.id}-${currentModule.lessons.indexOf(currentLesson)}`;
            
            if (!userProgress.lessonsCompleted.includes(lessonKey)) {
                userProgress.lessonsCompleted.push(lessonKey);
                userProgress.challengesWon++;
                
                // Check for first lesson achievement
                if (userProgress.lessonsCompleted.length === 1) {
                    unlockAchievement('First Steps');
                }
            }

            // Update module progress
            const completedInModule = userProgress.lessonsCompleted.filter(l => l.startsWith(currentModule.id)).length;
            const totalInModule = currentModule.lessons.length;
            userProgress.moduleProgress[currentModule.id] = Math.round((completedInModule / totalInModule) * 100);

            // Check for module completion achievements
            if (completedInModule === totalInModule) {
                userProgress.modulesCompleted++;
                if (currentModule.id === 'password-security') {
                    unlockAchievement('Password Master');
                } else if (currentModule.id === 'neural-hijacking') {
                    unlockAchievement('Neural Defender');
                }
            }

            updateAllScores();

            document.getElementById('quizContent').innerHTML = `
                <div class="question-card text-center">
                    <div style="font-size: 64px; margin-bottom: 20px;">🎉</div>
                    <h2>Lesson Complete!</h2>
                    <div class="score-display" style="font-size: 36px; margin: 20px 0;">
                        +${currentQuizScore} pts
                    </div>
                    <p style="color: var(--text-secondary); margin-bottom: 30px;">
                        You've mastered this topic! Keep learning to unlock more achievements.
                    </p>
                    <button class="btn-primary" onclick="backToModule()">Back to Module</button>
                </div>
            `;
        }

        // ==================== PHISHING QUIZ ====================
        function startPhishingQuiz() {
            currentPhishingIndex = 0;
            currentPhishingScore = 0;
            renderPhishingQuestion();
            // Ensure the correct section is active if navigating directly
            navigateTo('phishingQuiz'); 
        }

        function renderPhishingQuestion() {
            const scenario = gameData.phishingScenarios[currentPhishingIndex];
            const total = gameData.phishingScenarios.length;

            document.getElementById('phishingProgress').textContent = `Email ${currentPhishingIndex + 1} of ${total}`;
            document.getElementById('phishingScore').textContent = currentPhishingScore;

            document.getElementById('phishingContent').innerHTML = `
                <div class="email-container">
                    <div class="email-header">
                        <div class="email-field"><strong>From:</strong> ${scenario.from}</div>
                        <div class="email-field"><strong>Subject:</strong> ${scenario.subject}</div>
                    </div>
                    <div class="email-body">${scenario.body}</div>
                </div>

                <div class="red-flags-section">
                    <div class="red-flags-title">🚩 Potential Red Flags (Check all that apply):</div>
                    ${scenario.redFlags.map((flag, index) => `
                        <label class="checkbox-item">
                            <input type="checkbox" id="flag-${index}" value="${flag}" disabled>
                            <span>${flag}</span>
                        </label>
                    `).join('')}
                    ${!scenario.isPhishing ? '<label class="checkbox-item"><input type="checkbox" id="flag-none" value="none" disabled><span>No red flags detected</span></label>' : ''}
                </div>

                <div class="answer-buttons">
                    <button class="answer-btn" onclick="answerPhishing(false)" id="legitBtn">✓ Legitimate Email</button>
                    <button class="answer-btn" onclick="answerPhishing(true)" id="phishBtn">⚠️ Phishing Attempt</button>
                </div>

                <div id="phishingFeedback" class="hidden"></div>

                <div class="text-center mt-30">
                    <button class="btn-primary hidden" onclick="nextPhishingQuestion()" id="nextPhishBtn">Next Email</button>
                </div>
            `;
        }

        function answerPhishing(userSaysPhishing) {
            const scenario = gameData.phishingScenarios[currentPhishingIndex];
            const isCorrect = userSaysPhishing === scenario.isPhishing;

            if (isCorrect) {
                currentPhishingScore += 30;
                userProgress.phishingPoints += 30;
                userProgress.phishingCorrect++;
                userProgress.challengesWon++;

                // Check for phishing achievement
                if (userProgress.phishingCorrect >= 10) {
                    unlockAchievement('Phish Slayer');
                }
            }

            document.getElementById('legitBtn').disabled = true;
            document.getElementById('phishBtn').disabled = true;

            const feedbackDiv = document.getElementById('phishingFeedback');
            feedbackDiv.className = `feedback-box ${isCorrect ? 'correct' : 'incorrect'}`;
            feedbackDiv.innerHTML = `
                <h4>${isCorrect ? '✓ Correct!' : '✗ Incorrect'}</h4>
                <p><strong>${scenario.isPhishing ? 'This is a PHISHING email' : 'This is a LEGITIMATE email'}</strong></p>
                <p>${scenario.explanation}</p>
                ${scenario.redFlags.length > 0 ? `<p style="margin-top: 15px;"><strong>Red Flags:</strong></p><ul style="margin-left: 20px;">${scenario.redFlags.map(f => `<li>${f}</li>`).join('')}</ul>` : ''}
            `;
            feedbackDiv.classList.remove('hidden');

            document.getElementById('nextPhishBtn').classList.remove('hidden');
            updateAllScores();
        }

        function nextPhishingQuestion() {
            currentPhishingIndex++;

            if (currentPhishingIndex < gameData.phishingScenarios.length) {
                renderPhishingQuestion();
            } else {
                completePhishingQuiz();
            }
        }

        function completePhishingQuiz() {
            document.getElementById('phishingContent').innerHTML = `
                <div class="question-card text-center">
                    <div style="font-size: 64px; margin-bottom: 20px;">🎣</div>
                    <h2>Phishing Challenge Complete!</h2>
                    <div class="score-display" style="font-size: 36px; margin: 20px 0;">
                        +${currentPhishingScore} pts
                    </div>
                    <p style="color: var(--text-secondary); margin-bottom: 30px;">
                        You've sharpened your phishing detection skills! Score: ${currentPhishingScore} / ${gameData.phishingScenarios.length * 30}
                    </p>
                    <button class="btn-primary" onclick="navigateTo('dashboard')">Back to Dashboard</button>
                </div>
            `;
        }

        // ==================== PASSWORD STRENGTH CHECKER ====================
        function checkPasswordStrength() {
            const password = document.getElementById('passwordInput').value;
            const strengthFill = document.getElementById('strengthFill');
            const strengthLabel = document.getElementById('strengthLabel');
            const feedbackDiv = document.getElementById('passwordFeedback');

            if (!password) {
                strengthFill.className = 'strength-fill';
                strengthLabel.textContent = 'Enter a password to see its strength';
                strengthLabel.style.color = 'var(--text-dim)';
                feedbackDiv.innerHTML = '';
                return;
            }

            let strength = 0;
            const feedback = [];

            // Length check
            if (password.length >= 16) {
                strength += 30;
                feedback.push({ icon: '✓', text: 'Good length (16+ characters)', color: 'var(--green)' });
            } else if (password.length >= 12) {
                strength += 20;
                feedback.push({ icon: '⚠️', text: 'Moderate length (12-15 characters)', color: 'var(--yellow)' });
            } else {
                feedback.push({ icon: '✗', text: 'Too short (less than 12 characters)', color: 'var(--red)' });
            }

            // Character variety
            if (/[a-z]/.test(password) && /[A-Z]/.test(password)) {
                strength += 20;
                feedback.push({ icon: '✓', text: 'Contains uppercase and lowercase', color: 'var(--green)' });
            } else {
                feedback.push({ icon: '✗', text: 'Missing uppercase or lowercase', color: 'var(--red)' });
            }

            if (/[0-9]/.test(password)) {
                strength += 15;
                feedback.push({ icon: '✓', text: 'Contains numbers', color: 'var(--green)' });
            } else {
                feedback.push({ icon: '✗', text: 'No numbers found', color: 'var(--red)' });
            }

            if (/[^a-zA-Z0-9]/.test(password)) {
                strength += 15;
                feedback.push({ icon: '✓', text: 'Contains special characters', color: 'var(--green)' });
            } else {
                feedback.push({ icon: '✗', text: 'No special characters', color: 'var(--red)' });
            }

            // Common words check (simplified)
            const commonWords = ['password', 'admin', '123456', 'qwerty', 'letmein'];
            const hasCommon = commonWords.some(word => password.toLowerCase().includes(word));
            if (!hasCommon) {
                strength += 20;
                feedback.push({ icon: '✓', text: 'No common words detected', color: 'var(--green)' });
            } else {
                feedback.push({ icon: '✗', text: 'Contains common words', color: 'var(--red)' });
            }

            // Update strength meter
            if (strength < 40) {
                strengthFill.className = 'strength-fill strength-weak';
                strengthLabel.textContent = 'Weak Password';
                strengthLabel.style.color = 'var(--red)';
            } else if (strength < 70) {
                strengthFill.className = 'strength-fill strength-medium';
                strengthLabel.textContent = 'Medium Password';
                strengthLabel.style.color = 'var(--yellow)';
            } else {
                strengthFill.className = 'strength-fill strength-strong';
                strengthLabel.textContent = 'Strong Password!';
                strengthLabel.style.color = 'var(--green)';
            }

            // Render feedback
            feedbackDiv.innerHTML = `
                <h4 style="margin-bottom: 15px;">Password Analysis:</h4>
                ${feedback.map(f => `
                    <div class="feedback-item" style="color: ${f.color};">
                        <span>${f.icon}</span>
                        <span>${f.text}</span>
                    </div>
                `).join('')}
            `;
        }

        function completePasswordChallenge() {
            const password = document.getElementById('passwordInput').value;
            // Simplified logic: user gets points just for trying, but a real app would check if strength is 'Strong'
            if (!password) {
                alert('Please enter a password first!');
                return;
            }

            userProgress.passwordPoints += 50;
            userProgress.challengesWon++;
            updateAllScores();

            showToast('Challenge Complete!', 'You earned +50 points!', '🔐');
            setTimeout(() => navigateTo('dashboard'), 2000);
        }

        // ==================== ACHIEVEMENTS ====================
        function renderAchievements() {
            const achievementsGrid = document.getElementById('achievementsGrid');
            
            achievementsGrid.innerHTML = gameData.achievements.map(achievement => {
                const unlocked = userProgress.unlockedAchievements.includes(achievement.name);
                let progress = 0;
                let totalReq = achievement.requirement;

                // Calculate progress
                if (!unlocked) {
                    if (achievement.type === 'lessons') progress = userProgress.lessonsCompleted.length;
                    else if (achievement.type === 'phishing') progress = userProgress.phishingCorrect;
                    else if (achievement.type === 'points') progress = userProgress.totalScore;
                    else if (achievement.type === 'streak') progress = userProgress.currentStreak;
                    else if (achievement.type === 'password-module') progress = userProgress.lessonsCompleted.filter(l => l.startsWith('password-security')).length;
                    else if (achievement.type === 'neural-module') progress = userProgress.lessonsCompleted.filter(l => l.startsWith('neural-hijacking')).length;
                }

                return `
                    <div class="achievement-card ${unlocked ? 'unlocked' : 'locked'}">
                        <div class="achievement-icon">${achievement.icon}</div>
                        <div class="achievement-name">${achievement.name}</div>
                        <div class="achievement-desc">${achievement.description}</div>
                        <div class="achievement-points">+${achievement.points} pts</div>
                        ${!unlocked ? `
                            <div class="achievement-progress">
                                <div class="progress-bar" style="margin-top: 10px;">
                                    <div class="progress-fill" style="width: ${Math.min((progress / totalReq) * 100, 100)}%;"></div>
                                </div>
                                <div style="margin-top: 5px;">${progress} / ${totalReq}</div>
                            </div>
                        ` : '<div style="margin-top: 10px; color: var(--green); font-weight: 600;">✓ Unlocked</div>'}
                    </div>
                `;
            }).join('');

            document.getElementById('totalAchievementPoints').textContent = userProgress.achievementPoints + ' pts';
        }

        function unlockAchievement(name) {
            if (userProgress.unlockedAchievements.includes(name)) return;

            const achievement = gameData.achievements.find(a => a.name === name);
            if (!achievement) return;

            userProgress.unlockedAchievements.push(name);
            userProgress.achievementPoints += achievement.points;
            updateAllScores();

            showToast('Achievement Unlocked!', `${achievement.name} (+${achievement.points} pts)`, achievement.icon);
        }

        // ==================== LEADERBOARD ====================
        function renderLeaderboard() {
            const leaderboardList = document.getElementById('leaderboardList');
            const currentUserScore = userProgress.totalScore;
            const currentUserBadges = userProgress.unlockedAchievements.length;

            // Add current user to leaderboard
            const fullLeaderboard = [...gameData.leaderboard];
            
            // Remove 'You' if already in the list to update score/rank
            const existingUserIndex = fullLeaderboard.findIndex(u => u.username === 'You');
            if (existingUserIndex !== -1) {
                fullLeaderboard.splice(existingUserIndex, 1);
            }

            // Insert new user data based on score
            const newUserEntry = {
                username: 'You',
                score: currentUserScore,
                badges: currentUserBadges,
                isCurrentUser: true
            };
            
            let inserted = false;
            for (let i = 0; i < fullLeaderboard.length; i++) {
                if (currentUserScore >= fullLeaderboard[i].score) {
                    fullLeaderboard.splice(i, 0, newUserEntry);
                    inserted = true;
                    break;
                }
            }
            if (!inserted && currentUserScore > 0) {
                fullLeaderboard.push(newUserEntry);
            }

            // Update ranks and limit to top 10
            fullLeaderboard.forEach((user, index) => {
                user.rank = index + 1;
            });

            leaderboardList.innerHTML = fullLeaderboard.slice(0, 10).map(user => `
                <div class="leaderboard-item ${user.isCurrentUser ? 'current-user' : ''}">
                    <div class="rank-number ${user.rank <= 3 ? 'top3' : ''}">
                        ${user.rank <= 3 && user.isCurrentUser ? ['🥇', '🥈', '🥉'][user.rank - 1] : user.rank <= 3 ? ['🥇', '🥈', '🥉'][user.rank - 1] : '#' + user.rank}
                    </div>
                    <div class="user-info">
                        <div class="username">${user.username}</div>
                        <div class="user-stats">${user.badges} badges earned</div>
                    </div>
                    <div class="user-score">${user.score}</div>
                </div>
            `).join('');
        }

        function switchLeaderboard(period) {
            document.querySelectorAll('.tab-btn').forEach(btn => btn.classList.remove('active'));
            event.target.classList.add('active');
            // In a real app, this would fetch different data
            renderLeaderboard(); // Re-render with existing data for visual feedback
        }

        // ==================== SCORE MANAGEMENT ====================
        function updateAllScores() {
            userProgress.totalScore = userProgress.passwordPoints + userProgress.phishingPoints + userProgress.achievementPoints;

            // Update header
            document.getElementById('headerScoreValue').textContent = userProgress.totalScore;

            // Update dashboard
            document.getElementById('totalScore').textContent = userProgress.totalScore;
            document.getElementById('passwordPoints').textContent = userProgress.passwordPoints + ' pts';
            document.getElementById('phishingPoints').textContent = userProgress.phishingPoints + ' pts';
            document.getElementById('achievementPoints').textContent = userProgress.achievementPoints + ' pts';
            
            document.getElementById('modulesCompleted').textContent = userProgress.modulesCompleted;
            document.getElementById('challengesWon').textContent = userProgress.challengesWon;
            document.getElementById('currentStreak').textContent = userProgress.currentStreak;

            // Update level
            updateUserLevel();

            // Check for points achievement
            if (userProgress.totalScore >= 1000) {
                unlockAchievement('Security Champion');
            }

            // Re-render dashboard elements that rely on updated scores/progress
            if (document.getElementById('dashboard').classList.contains('active')) {
                renderRecommendedModule();
                renderAllModules();
                renderChallenges();
            }

            // Re-render other views if they are active
            if (document.getElementById('achievements').classList.contains('active')) renderAchievements();
            if (document.getElementById('leaderboard').classList.contains('active')) renderLeaderboard();
        }

        function updateUserLevel() {
            const score = userProgress.totalScore;
            let level = 'Novice';
            let progress = 0;
            let description = 'Complete more challenges to rank up!';

            if (score < 500) {
                level = 'Novice';
                progress = (score / 500) * 100;
                description = `${500 - score} points to Expert`;
            } else if (score < 1500) {
                level = 'Expert';
                progress = ((score - 500) / 1000) * 100;
                description = `${1500 - score} points to Master Defender`;
            } else {
                level = 'Master Defender';
                progress = 100;
                description = 'Maximum level reached! 🏆';
            }

            document.getElementById('userLevel').textContent = level;
            document.getElementById('levelProgress').style.width = progress + '%';
            document.getElementById('levelDescription').textContent = description;
        }

        // ==================== TOAST NOTIFICATIONS ====================
        function showToast(title, message, icon = '🏆') {
            const toast = document.getElementById('toast');
            document.getElementById('toastIcon').textContent = icon;
            document.getElementById('toastTitle').textContent = title;
            document.getElementById('toastMessage').textContent = message;

            toast.classList.add('show');
            setTimeout(() => {
                toast.classList.remove('show');
            }, 3000);
        }

        // ==================== BREACH THEORY MODAL ====================
        function showBreachModal(force = false) {
            const modal = document.getElementById('breachModal');
            const modalContent = document.getElementById('breachModalContent');
            const module = gameData.modules.find(m => m.id === 'id-password-breaches');
            if (!module) return;

            modalContent.innerHTML = `
                <h2>${module.icon} ${module.name}</h2>
                <p>${module.story}</p>
                <div style="margin-top:18px; display:flex; gap:12px; justify-content:flex-end;">
                    <button class="btn-secondary" onclick="closeBreachModal()">Close</button>
                    <button class="btn-primary" onclick="openModule('id-password-breaches'); closeBreachModal()">Learn More</button>
                </div>
            `;

            // Show only if forced or not seen before
            const seen = localStorage.getItem('seenBreachModal');
            if (force || !seen) {
                modal.classList.add('show-modal');
                localStorage.setItem('seenBreachModal', '1');
            }
        }

        function closeBreachModal() {
            const modal = document.getElementById('breachModal');
            modal.classList.remove('show-modal');
        }

        // ==================== THREAT MODAL ====================
        function showThreatModal(threat) {
            const modal = document.getElementById('threatModal');
            const content = document.getElementById('threatModalContent');

            content.innerHTML = `
                <h2>${threat.icon} ${threat.name}</h2>
                <p>${threat.description}</p>
                <div style="margin-top:12px; color: var(--text-secondary);">More details and mitigation steps:</div>
                <ul style="margin-top:10px; color: var(--text-secondary);">
                    <li>Understand common vectors: data leaks, social engineering, credential reuse.</li>
                    <li>Use unique passwords and a password manager.</li>
                    <li>Enable multi-factor authentication (MFA) wherever possible.</li>
                    <li>Monitor accounts for suspicious activity and change passwords after breaches.</li>
                </ul>
                <div style="margin-top:18px; display:flex; gap:12px; justify-content:flex-end;">
                    <button class="btn-secondary" onclick="closeThreatModal()">Close</button>
                    <button class="btn-primary" onclick="navigateTo('dashboard'); closeThreatModal()">Go to Dashboard</button>
                </div>
            `;

            modal.classList.add('show-modal');
        }

        function closeThreatModal() {
            const modal = document.getElementById('threatModal');
            modal.classList.remove('show-modal');
        }

        // ==================== START APP ====================
        window.addEventListener('DOMContentLoaded', () => {
            init();
            // Auto-show breach theory modal on first load (or force by changing argument)
            showBreachModal(false);
        });