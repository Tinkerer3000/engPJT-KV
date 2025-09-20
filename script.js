let gameState = {
    currentStep: 1,
    history: [],
    topic: null,
    debateStance: null, // 'for' or 'against'
    selections: {
        words: new Set(),
        sentences: new Set(),
        paragraphs: new Set()
    }
};

const gameContainer = document.getElementById('game-container');

// Utility to shuffle arrays
const shuffle = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
};

// --- RENDERING FUNCTIONS ---

function renderStep() {
    gameContainer.innerHTML = '';
    const card = document.createElement('div');
    card.className = 'step-card bg-white';

    switch (gameState.currentStep) {
        case 1: card.innerHTML = renderStep1(); break;
        case 2: card.innerHTML = renderStep2(); break;
        case 3: card.innerHTML = renderStep3(); break;
        case 4: card.innerHTML = renderStep4(); break;
        case 5: card.innerHTML = renderStep5(); break;
        case 6: card.innerHTML = renderStep6(); break;
        case 7: card.innerHTML = renderStep7(); break;
    }
    gameContainer.appendChild(card);
}

function renderHeader(step, title, subtitle) {
    const backButton = step > 1 ? `<button onclick="goBack()" class="absolute top-4 left-4 text-blue-600 hover:underline">&larr; Back</button>` : '';
    return `
        <div class="relative mb-6 text-center">
            ${backButton}
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
     if (gameState.topic.type === 'Debate') {
        return renderHeader(2, 'Choose Your Stance', `You've selected a debate topic. Do you want to argue FOR or AGAINST the motion?`) +
        `<div class="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
            <button onclick="selectDebateStance('for')" class="option-btn p-4 border-2 rounded-lg text-lg font-semibold hover:border-green-500 hover:bg-green-50">FOR the Motion</button>
            <button onclick="selectDebateStance('against')" class="option-btn p-4 border-2 rounded-lg text-lg font-semibold hover:border-red-500 hover:bg-red-50">AGAINST the Motion</button>
        </div>`;
    }
    
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
        <button onclick="identifyFormat(${index}, this)" class="option-btn h-full flex flex-col p-4 border-2 rounded-lg hover:border-blue-500 hover:bg-blue-50 text-left">
            <h3 class="font-bold text-lg mb-2 text-center">${opt.title}</h3>
            <div class="text-sm text-gray-600 leading-relaxed text-center">${opt.content}</div>
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
            contentSource = gameData.content[gameState.topic.id][gameState.debateStance];
        }
    } else {
        contentSource = gameData.content[gameState.topic.id];
    }
    
    const allItems = shuffle([...contentSource[items].relevant, ...contentSource[items].irrelevant]);
    const itemElements = allItems.map(item => `
        <button data-value="${item}" onclick="toggleSelection(this, '${items}')" class="option-btn p-3 border-2 rounded-lg text-sm text-left break-words">
            ${item}
        </button>
    `).join('');


    return renderHeader(step, title, subtitle) +
           `<div class="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-3">${itemElements}</div>` +
           `<div class="mt-8 flex justify-center items-center gap-4">
                <button onclick="goBack()" class="px-8 py-3 bg-gray-300 text-gray-800 font-semibold rounded-lg shadow-md hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-300 focus:ring-opacity-75">
                    Back
                </button>
                <button onclick="${nextStepFnName}('${items}')" class="px-8 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75">
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
    const finalParagraphs = (gameState.topic.type === 'Debate' ? contentData[gameState.debateStance] : contentData).paragraphs.relevant;

    let titleText = '';
    if (gameState.topic.type === 'Article') {
        titleText = gameState.topic.text.match(/"([^"]+)"/)[1];
    } else if (gameState.topic.type === 'Report') {
         titleText = 'Tree Plantation Drive Organized by School';
    } else if (gameState.topic.type === 'Speech') {
        titleText = `Importance of Sports and Games in Student Life`;
    } else if (gameState.topic.type === 'Debate') {
        titleText = `"Online Education is Better than Traditional Schooling"`;
    }
    
    const finalContent = `
        <div class="prose max-w-none">
            <h2 class="text-3xl font-bold text-center mb-2">${titleText}</h2>
            ${gameState.topic.byline ? `<p class="text-center text-gray-600 italic mb-6">${gameState.topic.byline}</p>` : ''}
            ${finalParagraphs.map(p => `<p class="text-justify">${p}</p>`).join('')}
            ${gameState.topic.type === 'Speech' || gameState.topic.type === 'Debate' ? `<p class="font-bold mt-6">Thank you.</p>` : ''}
        </div>
    `;
    
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

function selectDebateStance(stance) {
    gameState.history.push(gameState.currentStep);
    gameState.debateStance = stance;
    gameState.currentStep = 3; // Skip type identification for debate, go to format
    renderStep();
}

function applyBlink(element, isCorrect) {
    const className = isCorrect ? 'blink-green' : 'blink-red';
    element.classList.add(className);
    setTimeout(() => element.classList.remove(className), 1000);
}

function identifyType(type, element) {
    const isCorrect = (type === gameState.topic.type);
    applyBlink(element, isCorrect);
    if (isCorrect) {
        setTimeout(() => {
            gameState.history.push(gameState.currentStep);
            gameState.currentStep = 3;
            renderStep();
        }, 1100);
    }
}

function identifyFormat(index, element) {
    const isCorrect = (index === gameData.formats[gameState.topic.type].correct);
    applyBlink(element, isCorrect);
    if (isCorrect) {
         setTimeout(() => {
            gameState.history.push(gameState.currentStep);
            gameState.currentStep = 4;
            renderStep();
        }, 1100);
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
}

function checkSelection(type) {
    let contentSource;
    if (gameState.topic.type === 'Debate') {
        if (type === 'words') {
            contentSource = gameData.content[gameState.topic.id];
        } else {
            contentSource = gameData.content[gameState.topic.id][gameState.debateStance];
        }
    } else {
        contentSource = gameData.content[gameState.topic.id];
    }
        
    const relevantItems = new Set(contentSource[type].relevant);
    const selectedItems = gameState.selections[type];
    let allCorrect = true;
    
    document.querySelectorAll(`[data-value]`).forEach(el => {
        const value = el.dataset.value;
        if (selectedItems.has(value)) { // If the user selected this item
            if (relevantItems.has(value)) { // And it's a correct item
                 el.className = 'option-btn p-3 border-2 rounded-lg text-sm text-left break-words bg-green-100 border-green-500';
            } else { // But it's an incorrect item
                el.className = 'option-btn p-3 border-2 rounded-lg text-sm text-left break-words bg-red-100 border-red-500';
                allCorrect = false;
            }
        } else { // If the user did NOT select this item
            if(relevantItems.has(value)) { // But they SHOULD have
               allCorrect = false;
            }
        }
    });
    
    if (selectedItems.size !== relevantItems.size) {
        allCorrect = false;
    }

    if(allCorrect) {
        setTimeout(() => {
            gameState.history.push(gameState.currentStep);
            gameState.currentStep++;
            gameState.selections[type].clear();
            renderStep();
        }, 1500);
    } else {
         // Optionally show an error message
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
        debateStance: null,
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
