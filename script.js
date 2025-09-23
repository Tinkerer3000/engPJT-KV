let gameState = {
    currentStep: 1,
    history: [],
    topic: null,
    selections: {
        words: new Set(),
        sentences: new Set(),
        paragraphs: new Set()
    }
};

const gameContainer = document.getElementById('game-container');
const toastContainer = document.getElementById('toast-container');

// Utility to shuffle arrays
const shuffle = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
};

// --- TOAST NOTIFICATION ---
function showToast(message, type = 'info') {
    const toast = document.createElement('div');
    toast.className = `toast toast-${type}`;
    toast.textContent = message;

    toastContainer.appendChild(toast);

    setTimeout(() => {
        toast.remove();
    }, 4000);
}


// --- RENDERING FUNCTIONS ---

function renderStep() {
    gameContainer.innerHTML = '';
    const card = document.createElement('div');
    card.className = 'step-card bg-white';

    let content = '';
    switch (gameState.currentStep) {
        case 1: content = renderStep1(); break;
        case 2: content = renderStep2(); break;
        case 3: content = renderStep3(); break;
        case 4: content = renderStep4(); break;
        case 5: content = renderStep5(); break;
        case 6: content = renderStep6(); break;
        case 7: content = renderStep7(); break;
    }

    const progressBar = renderProgressBar();
    const topicDisplay = gameState.topic ? renderTopicDisplay() : '';
    card.innerHTML = progressBar + topicDisplay + content;

    gameContainer.appendChild(card);
}

function renderProgressBar() {
    let segments = '';
    for (let i = 1; i <= 7; i++) {
        segments += `<div class="progress-segment ${i <= gameState.currentStep ? 'active' : ''}"></div>`;
    }
    return `<div class="progress-bar">${segments}</div>`;
}

function renderTopicDisplay() {
    return `<div class="topic-display">${gameState.topic.text}</div>`;
}


function renderHeader(step, title, subtitle) {
    const backButton = step > 1 ? `<button onclick="goBack()" class="absolute top-4 left-4 text-blue-600 hover:underline">&larr; Back</button>` : '';
    const mainMenuButton = step > 1 ? `<button onclick="restartGame()" class="absolute top-4 right-4 text-blue-600 hover:underline">Main Menu</button>` : '';
    return `
        <div class="relative mb-6 text-center">
            ${backButton}
            ${mainMenuButton}
            <p class="text-sm font-semibold text-blue-600">STEP ${step}</p>
            <h2 class="text-2xl font-bold text-gray-800 mt-1">${title}</h2>
            <p class="text-gray-500 mt-2">${subtitle}</p>
        </div>`;
}

function renderStep1() {
    const topicButtons = gameData.topics.map(topic => 
        `<button onclick="selectTopic(${topic.id})" class="option-btn w-full text-left p-4 border-2 border-gray-200 rounded-lg hover:border-blue-500 hover:bg-blue-50 focus:outline-none">
            ${topic.text}
        </button>`
    ).join('');

    return renderHeader(1, 'Select a Topic', 'Choose one of the following writing prompts to begin.') +
           `<div class="space-y-4">${topicButtons}</div>`;
}

function renderStep2() {
    const types = shuffle(['Article', 'Report', 'Speech', 'Debate']);
    const typeButtons = types.map(type => 
        `<button onclick="identifyType('${type}', this)" class="option-btn p-4 border-2 rounded-lg text-lg font-semibold hover:border-blue-500 hover:bg-blue-50">${type}</button>`
    ).join('');

    return renderHeader(2, 'Identify the Writing Type', `Based on the topic you selected, what type of writing is it?`) +
           `<p class="my-4 p-4 bg-gray-100 border-l-4 border-gray-300 text-gray-700 rounded-r-lg">"${gameState.topic.text}"</p>` +
           `<div class="grid grid-cols-1 sm:grid-cols-2 gap-4">${typeButtons}</div>`;
}

function renderStep3() {
    const formatData = gameData.formats[gameState.topic.type];
    const formatOptions = formatData.options.map((opt, index) => `
        <button onclick="identifyFormat(${index}, this)" class="option-btn h-full flex flex-col p-4 text-left">
            <div class="text-sm leading-relaxed text-center">${opt.content}</div>
        </button>
    `).join('');

    return renderHeader(3, 'Select the Correct Format', `Which of these represents the correct format for a/an ${gameState.topic.type}?`) +
           `<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">${formatOptions}</div>`;
}

function renderSelectionStep(step, title, subtitle, items, requiredCount, nextStepFnName) {
    let contentSource;
    if (gameState.topic.type === 'Debate') {
        if (items === 'words') {
            contentSource = gameData.content[gameState.topic.id];
        } else {
            contentSource = gameData.content[gameState.topic.id];
        }
    } else {
        contentSource = gameData.content[gameState.topic.id];
    }
    
    const allItems = shuffle([...contentSource[items].relevant, ...contentSource[items].irrelevant]);
    const itemElements = allItems.map(item => `
        <button data-value="${item}" onclick="toggleSelection(this, '${items}')" class="option-btn p-3 text-sm text-left break-words">
            ${item}
        </button>
    `).join('');


    return renderHeader(step, title, subtitle) +
           `<div class="selection-counter" id="selection-counter">0/${getRequiredCount(items)} selected</div>` +
           `<div class="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-3">${itemElements}</div>` +
           `<div class="mt-8 flex justify-center items-center gap-4">
                <button onclick="goBack()" class="px-8 py-3 bg-gray-200 text-gray-900 font-semibold border-2 border-gray-300 rounded-lg hover:bg-gray-300">
                    Back
                </button>
                <button onclick="${nextStepFnName}('${items}')" class="px-8 py-3 bg-black text-white font-semibold border-2 border-black rounded-lg hover:opacity-90">
                    Check Answers
                </button>
            </div>`;
}

function renderStep4() {
    return renderSelectionStep(4, 'Choose Relevant Words', `Select the 10 most relevant words for your topic from the list below.`, 'words', 10, 'checkSelection');
}

function renderStep5() {
    return renderSelectionStep(5, 'Choose Relevant Sentences', `Select the 10 most relevant sentences for your topic.`, 'sentences', 10, 'checkSelection');
}

function renderStep6() {
    return renderSelectionStep(6, 'Choose Relevant Paragraphs', `Select the 3 paragraphs that form the body of your text.`, 'paragraphs', 3, 'checkSelection');
}

function renderStep7() {
    const contentData = gameData.content[gameState.topic.id];
    const finalParagraphs = contentData.paragraphs.relevant;
    let finalContent = '';

    switch (gameState.topic.id) {
        case 1: // Media Literacy
            finalContent = `
                <div class="prose max-w-none">
                    <h2 class="text-3xl font-bold text-center mb-2">Media Literacy: A Survival Skill in the Digital Age</h2>
                    <p class="text-center text-gray-600 italic mb-6">By ARJUN</p>
                    ${finalParagraphs.map(p => `<p class="text-justify">${p}</p>`).join('')}
                </div>`;
            break;
        case 2: // Tree Plantation
            finalContent = `
                <div class="prose max-w-none">
                    <h2 class="text-3xl font-bold text-center mb-2">Tree Plantation Drive</h2>
                    <p class="text-center text-gray-600 italic mb-6">BY ARJUN, CULTURAL SECRETARY OF DE NOBILI SCHOOL</p>
                    <p class="text-justify">A Tree Plantation Drive was organized at De Nobili School, Mumbai on 2nd September under Mission:Eco Club which was hosted by the students of Classes XI and XII under the guidance of their Biology teacher, and Mr. JP Sharma, the Chairman of the Mumbai Corporation attended it as the Chief Guest.</p>
                    ${finalParagraphs.map(p => `<p class="text-justify">${p}</p>`).join('')}
                </div>`;
            break;
        case 3: // Sports and Games
            finalContent = `
                <div class="prose max-w-none">
                     <p class="text-justify">Good morning to all. I am Arjun of Class XI from De Nobili School, and I stand before you today to deliver a speech on "Importance of Sports and Games in Student Life".</p>
                    ${finalParagraphs.map(p => `<p class="text-justify">${p}</p>`).join('')}
                    <p class="text-justify">I Hope you have found my speech relevant and convincing. Thank you.</p>
                </div>`;
            break;
        case 4: // Online Education
            finalContent = `
                <div class="prose max-w-none">
                    <p class="text-justify">Good morning to the respected panel of judges and audience, I, Arjun of Class XI from De Nobili School, Mumbai stand before you to speak in favour of the motion 'Online Education is Better than Traditional Schooling'.</p>
                    ${finalParagraphs.map(p => `<p class="text-justify">${p}</p>`).join('')}
                    <p class="text-justify">I hope I could convince you of my viewpoint. Thank you.</p>
                </div>`;
            break;
        case 5: // Fast Food
            finalContent = `
                <div class="prose max-w-none">
                    <h2 class="text-3xl font-bold text-center mb-2">Impact of Fast Food on Teenagers' Health</h2>
                    <p class="text-center text-gray-600 italic mb-6">BY ARJUN</p>
                    ${finalParagraphs.map(p => `<p class="text-justify">${p}</p>`).join('')}
                </div>`;
            break;
    }
    
    return renderHeader(7, 'Your Final Piece', 'Congratulations! You have successfully constructed the text.') +
           `<div class="p-6 bg-gray-50 rounded-lg border">${finalContent}</div>` +
           `<div class="mt-8 text-center">
                <button onclick="restartGame()" class="px-8 py-3 bg-green-600 text-white font-semibold rounded-lg shadow-md hover:bg-green-700 focus:outline-none">
                    Start a New Topic
                </button>
           </div>`;
}


// --- LOGIC FUNCTIONS ---
function selectTopic(id) {
    gameState.history.push(gameState.currentStep);
    gameState.topic = gameData.topics.find(t => t.id === id);
    gameState.currentStep = 2;
    renderStep();
}

function identifyType(type, element) {
    const isCorrect = (type === gameState.topic.type);
    if (isCorrect) {
        element.classList.add('card-correct');
        setTimeout(() => {
            gameState.history.push(gameState.currentStep);
            gameState.currentStep = 3;
            renderStep();
        }, 700);
    } else {
        element.classList.add('card-incorrect');
        setTimeout(() => {
            document.querySelectorAll('.option-btn').forEach(btn => {
                btn.classList.remove('card-incorrect', 'card-correct');
            });
        }, 600);
    }
}

function identifyFormat(index, element) {
    const isCorrect = (index === gameData.formats[gameState.topic.type].correct);
    if (isCorrect) {
        element.classList.add('card-correct');
        setTimeout(() => {
            gameState.history.push(gameState.currentStep);
            gameState.currentStep = 4;
            renderStep();
        }, 700);
    } else {
        element.classList.add('card-incorrect');
        setTimeout(() => {
            document.querySelectorAll('.option-btn').forEach(btn => {
                btn.classList.remove('card-incorrect', 'card-correct');
            });
        }, 600);
    }
}

function getRequiredCount(type) {
    switch (type) {
        case 'words':
        case 'sentences':
            return 10;
        case 'paragraphs':
            return 3;
        default:
            return 0;
    }
}

function toggleSelection(element, type) {
    const value = element.dataset.value;
    if (gameState.selections[type].has(value)) {
        gameState.selections[type].delete(value);
        element.classList.remove('selected');
    } else {
        gameState.selections[type].add(value);
        element.classList.add('selected');
    }
    
    // Update counter
    const counter = document.getElementById('selection-counter');
    if (counter) {
        counter.textContent = `${gameState.selections[type].size}/${getRequiredCount(type)} selected`;
    }
}

function checkSelection(type) {
    const requiredCount = getRequiredCount(type);
    const selectedItems = gameState.selections[type];

    if (selectedItems.size !== requiredCount) {
        const diff = requiredCount - selectedItems.size;
        if (diff > 0) {
            showToast(`Please select ${diff} more item(s).`, 'error');
        } else {
            showToast(`You have selected ${-diff} too many item(s). Please select only ${requiredCount}.`, 'error');
        }
        return;
    }

    let contentSource = gameData.content[gameState.topic.id];
        
    const relevantItems = new Set(contentSource[type].relevant);
    
    let allCorrect = true;
    let correctCount = 0;
    selectedItems.forEach(item => {
        if(relevantItems.has(item)) {
            correctCount++;
        }
    });

    if (correctCount !== requiredCount) {
        allCorrect = false;
    }
    
    document.querySelectorAll(`[data-value]`).forEach(el => {
        const value = el.dataset.value;
        if (selectedItems.has(value)) { // If the user selected this item
            if (relevantItems.has(value)) { // And it's a correct item
                // Don't reveal correct answers unless all are correct
            } else { // But it's an incorrect item
                allCorrect = false;
            }
        }
    });

    if(allCorrect) {
        document.querySelectorAll(`[data-value]`).forEach(el => {
            if (relevantItems.has(el.dataset.value)) {
                el.classList.add('card-correct');
            }
        });
        setTimeout(() => {
            gameState.history.push(gameState.currentStep);
            gameState.currentStep++;
            gameState.selections[type].clear();
            renderStep();
        }, 1500);
    } else {
         showToast('Some of your choices are incorrect. Please review your selections.', 'warning');
    }
}

function goBack() {
    if (gameState.history.length > 0) {
        gameState.currentStep = gameState.history.pop();
        renderStep();
    }
}

function restartGame() {
    gameState = {
        currentStep: 1,
        history: [],
        topic: null,
        selections: {
            words: new Set(),
            sentences: new Set(),
            paragraphs: new Set()
        }
    };
    renderStep();
}

// Initial render
renderStep();
