document.addEventListener('DOMContentLoaded', () => {
    // Navigation
    const screens = {
        landing: document.getElementById('landing'),
        tab1: document.getElementById('tab1'),
        tab2: document.getElementById('tab2'),
        tab3: document.getElementById('tab3')
    };

    function showScreen(screenName) {
        Object.values(screens).forEach(screen => {
            screen.classList.remove('active');
            setTimeout(() => {
                if (!screen.classList.contains('active')) {
                    screen.classList.add('hidden');
                }
            }, 1000); // match transition duration
        });
        
        screens[screenName].classList.remove('hidden');
        // small delay to allow display:block to apply before opacity transition
        setTimeout(() => {
            screens[screenName].classList.add('active');
        }, 50);
    }

    // --- Part 1: Landing Page Prank ---
    const runawayBtn = document.getElementById('runaway-btn');
    const landingMsg = document.getElementById('landing-msg');
    let hoverCount = 0;
    const messages = [
        "Yah, telat. Refleknya diperbaiki dong.",
        "Masa gitu aja nggak kena? Lemah!",
        "Duh, niat mau liat web apa mau main kejar-kejaran?",
        "Ayo dong, masa kalah sama tombol?",
        "Satu kali lagi deh, janji nggak kabur."
    ];

    // Center button initially
    const centerButton = () => {
        runawayBtn.style.left = `calc(50% - ${runawayBtn.offsetWidth / 2}px)`;
        runawayBtn.style.top = `calc(50% - ${runawayBtn.offsetHeight / 2}px)`;
    };
    
    // Call after a short delay to ensure layout is done
    setTimeout(centerButton, 100);
    window.addEventListener('resize', () => {
        if (hoverCount === 0 || hoverCount > 5) {
            centerButton();
        }
    });

    const moveButton = () => {
        if (hoverCount < 5) {
            const maxX = window.innerWidth - runawayBtn.offsetWidth - 20;
            const maxY = window.innerHeight - runawayBtn.offsetHeight - 20;
            
            const randomX = Math.max(20, Math.floor(Math.random() * maxX));
            const randomY = Math.max(20, Math.floor(Math.random() * maxY));
            
            runawayBtn.style.left = `${randomX}px`;
            runawayBtn.style.top = `${randomY}px`;
            
            landingMsg.textContent = messages[hoverCount];
            hoverCount++;
        } else if (hoverCount === 5) {
            landingMsg.textContent = "Iya deh, ampun. Klik nih.";
            centerButton();
            hoverCount++;
        }
    };

    // Use both mouseover and touchstart for mobile support
    runawayBtn.addEventListener('mouseover', () => {
        if (hoverCount < 5) moveButton();
    });
    runawayBtn.addEventListener('touchstart', (e) => {
        if (hoverCount < 5) {
            e.preventDefault(); // Prevent click if it moves
            moveButton();
        }
    });

    runawayBtn.addEventListener('click', () => {
        if (hoverCount >= 5) {
            showScreen('tab1');
        } else {
            // In case they somehow click it before 5 hovers
            moveButton();
        }
    });

    // --- Part 2: Tab 1 ---
    const toTab2Btn = document.getElementById('to-tab2-btn');
    toTab2Btn.addEventListener('click', () => {
        showScreen('tab2');
    });

    // --- Part 3: Tab 2 Nyeleneh Logic ---
    const nyelenehBtn = document.getElementById('nyeleneh-btn');
    const nyelenehText = document.getElementById('nyeleneh-text');
    let nyelenehClicks = 0;

    nyelenehBtn.addEventListener('click', () => {
        nyelenehClicks++;
        
        switch(nyelenehClicks) {
            case 1:
                nyelenehText.classList.add('rainbow-text');
                nyelenehText.textContent = "Eitss, mulai berwarna ya? Kayak hidup kamu yang penuh drama tapi kurang asmara. Canda drama.";
                break;
            case 2:
                nyelenehText.textContent = "Tapi boong, kamu itu sebenernya jelmaan seblak level 10: kalau nggak ada dicariin, kalau ada malah bikin pening.";
                break;
            case 3:
                nyelenehText.textContent = "Udahlah, jangan dibaca terus. Muka kamu di galeri sebelah lebih abstrak soalnya. Siap melihat kenyataan?";
                nyelenehBtn.textContent = "Siap (Beneran)";
                break;
            case 4:
                showScreen('tab3');
                startPolaroidStream();
                break;
        }
    });

    // --- Part 4: Tab 3 Polaroid Stream ---
    const polaroidContainer = document.getElementById('polaroid-container');
    const modal = document.getElementById('polaroid-modal');
    const modalImg = document.getElementById('modal-img');
    const closeModalBtn = document.getElementById('close-modal-btn');
    
    // Use provided images
    const polaroidImages = [
        "aset/foto/Cuplikan layar 2026-03-10 051033.png", "aset/foto/Cuplikan layar 2026-03-10 051030.png", 
        "aset/foto/Cuplikan layar 2026-03-10 051024.png", "aset/foto/Cuplikan layar 2026-03-10 051015.png",
        "aset/foto/Cuplikan layar 2026-03-10 051006.png", "aset/foto/Cuplikan layar 2026-03-10 051002.png", 
        "aset/foto/Cuplikan layar 2026-03-10 050957.png", "aset/foto/Cuplikan layar 2026-03-10 050947.png",
        "aset/foto/Cuplikan layar 2026-03-10 050911.png", "aset/foto/Cuplikan layar 2026-03-10 050907.png",
        "aset/foto/Cuplikan layar 2026-03-10 050849.png", "aset/foto/Cuplikan layar 2026-03-10 050846.png", 
        "aset/foto/Cuplikan layar 2026-03-10 050831.png", "aset/foto/Cuplikan layar 2026-03-10 050408.png",
        "aset/foto/Cuplikan layar 2026-03-10 050322.png", "aset/foto/Cuplikan layar 2026-03-10 050315.png", 
        "aset/foto/Cuplikan layar 2026-03-10 050308.png", "aset/foto/Cuplikan layar 2026-03-10 050259.png",
        "aset/foto/Cuplikan layar 2026-03-10 050254.png", "aset/foto/Cuplikan layar 2026-03-10 050237.png",
        "aset/foto/Cuplikan layar 2026-03-10 050231.png", "aset/foto/Cuplikan layar 2026-03-10 050223.png", 
        "aset/foto/Cuplikan layar 2026-03-10 050217.png", "aset/foto/Cuplikan layar 2026-03-10 050212.png",
        "aset/foto/Cuplikan layar 2026-03-10 050206.png", "aset/foto/Cuplikan layar 2026-03-10 050201.png", 
        "aset/foto/Cuplikan layar 2026-03-10 050125.png", "aset/foto/Cuplikan layar 2026-03-10 050118.png",
        "aset/foto/Cuplikan layar 2026-03-10 050059.png", "aset/foto/Cuplikan layar 2026-03-10 050052.png",
        "aset/foto/Cuplikan layar 2026-03-10 050026.png", "aset/foto/Cuplikan layar 2026-03-10 050014.png", 
        "aset/foto/Cuplikan layar 2026-03-10 045957.png", "aset/foto/Cuplikan layar 2026-03-10 045941.png",
        "aset/foto/Cuplikan layar 2026-03-10 045910.png", "aset/foto/Cuplikan layar 2026-03-10 045834.png", 
        "aset/foto/Cuplikan layar 2026-03-10 045820.png", "aset/foto/Cuplikan layar 2026-03-10 045805.png",
        "aset/foto/Cuplikan layar 2026-03-10 045713.png", "aset/foto/Cuplikan layar 2026-03-10 045537.png",
        "aset/foto/Cuplikan layar 2026-03-10 045515.png", "aset/foto/Cuplikan layar 2026-03-10 045432.png", 
        "aset/foto/Cuplikan layar 2026-03-10 045425.png", "aset/foto/Cuplikan layar 2026-03-10 045412.png",
        "aset/foto/Cuplikan layar 2026-03-10 045215.png", "aset/foto/Cuplikan layar 2026-03-10 045153.png", 
        "aset/foto/Cuplikan layar 2026-03-10 045143.png", "aset/foto/Cuplikan layar 2026-03-10 045039.png",
        "aset/foto/Cuplikan layar 2026-03-10 045002.png", "aset/foto/Cuplikan layar 2026-03-10 044958.png",
        "aset/foto/Cuplikan layar 2026-03-10 044943.png", "aset/foto/Cuplikan layar 2026-03-10 044936.png", 
        "aset/foto/Cuplikan layar 2026-03-10 044859.png", "aset/foto/Cuplikan layar 2026-03-10 043406.png"
    ];
    
    let streamInterval;
    let isModalOpen = false;
    let modalTimeout;
    let originalImgSrc = "";
    let currentPhotoIndex = 0;

    const mockingSentences = [
        "Lama banget liatnya, naksir ya?",
        "Cukup liatnya, nanti naksir beneran loh!",
        "Ekspresi ini nggak akan berubah meski kamu liatin sejam.",
        "Awas, fotonya bisa bosen diliatin terus!",
        "Ciee, nostalgia ya? Sampai lupa klik silang."
    ];

    function createPolaroid() {
        if (isModalOpen) return; // Optional: pause spawning when modal is open

        const polaroid = document.createElement('div');
        polaroid.className = 'polaroid';
        
        const img = document.createElement('img');
        img.src = polaroidImages[currentPhotoIndex];
        polaroid.appendChild(img);

        currentPhotoIndex = (currentPhotoIndex + 1) % polaroidImages.length;

        // Random starting edge (0: top, 1: right, 2: bottom, 3: left)
        const edge = Math.floor(Math.random() * 4);
        let startX, startY, endX, endY;
        
        const size = 250; // approx max dimension
        
        switch(edge) {
            case 0: // Top
                startX = Math.random() * window.innerWidth;
                startY = -size;
                endX = startX + (Math.random() * 400 - 200);
                endY = window.innerHeight + size;
                break;
            case 1: // Right
                startX = window.innerWidth + size;
                startY = Math.random() * window.innerHeight;
                endX = -size;
                endY = startY + (Math.random() * 400 - 200);
                break;
            case 2: // Bottom
                startX = Math.random() * window.innerWidth;
                startY = window.innerHeight + size;
                endX = startX + (Math.random() * 400 - 200);
                endY = -size;
                break;
            case 3: // Left
                startX = -size;
                startY = Math.random() * window.innerHeight;
                endX = window.innerWidth + size;
                endY = startY + (Math.random() * 400 - 200);
                break;
        }

        polaroid.style.left = `${startX}px`;
        polaroid.style.top = `${startY}px`;
        
        // Random rotation
        const rotation = Math.random() * 60 - 30;
        polaroid.style.transform = `rotate(${rotation}deg)`;

        polaroidContainer.appendChild(polaroid);

        // Animate
        const duration = 10000 + Math.random() * 10000; // 10-20 seconds
        const startTime = performance.now();

        function animate(currentTime) {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            
            const currentX = startX + (endX - startX) * progress;
            const currentY = startY + (endY - startY) * progress;
            
            polaroid.style.left = `${currentX}px`;
            polaroid.style.top = `${currentY}px`;
            
            if (progress < 1) {
                requestAnimationFrame(animate);
            } else {
                polaroid.remove();
            }
        }
        
        requestAnimationFrame(animate);

        // Click event
        polaroid.addEventListener('click', (e) => {
            if (isModalOpen) {
                e.stopPropagation();
                e.preventDefault();
                return; // Prevent opening another if one is already open and disable interaction
            }
            originalImgSrc = img.src;
            modalImg.src = img.src;
            modal.classList.add('active');
            polaroidContainer.classList.add('modal-open');
            isModalOpen = true;
            
            // Set timeout for mocking image
            modalTimeout = setTimeout(() => {
                if (isModalOpen) {
                    const randomSentence = mockingSentences[Math.floor(Math.random() * mockingSentences.length)];
                    const textOverlay = document.createElement('div');
                    textOverlay.id = 'mocking-text';
                    textOverlay.style.position = 'absolute';
                    textOverlay.style.top = '50%';
                    textOverlay.style.left = '50%';
                    textOverlay.style.transform = 'translate(-50%, -50%)';
                    textOverlay.style.color = 'white';
                    textOverlay.style.fontSize = '2rem';
                    textOverlay.style.fontWeight = 'bold';
                    textOverlay.style.textShadow = '2px 2px 4px black, -2px -2px 4px black, 2px -2px 4px black, -2px 2px 4px black';
                    textOverlay.style.textAlign = 'center';
                    textOverlay.style.pointerEvents = 'none';
                    textOverlay.style.background = 'rgba(0, 0, 0, 0.5)';
                    textOverlay.style.padding = '10px 20px';
                    textOverlay.style.borderRadius = '10px';
                    textOverlay.style.width = '80%';
                    textOverlay.innerText = randomSentence;
                    
                    if(!document.getElementById('mocking-text')) {
                        document.querySelector('.modal-content').appendChild(textOverlay);
                    }
                }
            }, 5000);
        });
    }

    function startPolaroidStream() {
        // Spawn initial batch
        for(let i=0; i<15; i++) {
            setTimeout(createPolaroid, Math.random() * 2000);
        }
        // Continue spawning
        streamInterval = setInterval(createPolaroid, 1000);
    }

    closeModalBtn.addEventListener('click', (e) => {
        e.stopPropagation(); // Prevent event bubbling
        closeModal();
    });

    function closeModal() {
        modal.classList.remove('active');
        polaroidContainer.classList.remove('modal-open');
        isModalOpen = false;
        clearTimeout(modalTimeout);
        const mockingText = document.getElementById('mocking-text');
        if (mockingText) {
            mockingText.remove();
        }
    }
});
