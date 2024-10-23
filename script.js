// Select all background video layers for opacity manipulation
const backgroundLayers = document.querySelectorAll('.background-layer');

// Function to set random opacity for each background layer
function cycleBackgroundOpacity() {
    backgroundLayers.forEach(layer => {
        const randomOpacity = Math.random() * (0.5 - 0.2) + 0.2; // Random opacity between 0.2 and 0.5
        layer.style.transition = 'opacity 6s ease'; // Smooth transition
        layer.style.opacity = randomOpacity;
    });
}

// Set interval to adjust background opacity every 10 seconds
setInterval(cycleBackgroundOpacity, 10000);

// Main Mouth Data Object
const mouthData = {
    theme: "Mouth as a Symbol of Emotion and Communication",
    description: "Explores the complex layers of expression, desire, and control embodied in the mouth.",

    // Basic States of the Mouth
    states: {
        openness: false,
        tensionLevel: 5,
        dryness: "slight",
        salivaLevel: "normal",
        fatigueLevel: 3,
    },

    // Sensory Functions with taste sensitivity
    sensoryFunctions: {
        tasteSensitivity: {
            sweet: 8,
            sour: 7,
            bitter: 6,
            salty: 5,
            umami: 9,
        },
        responseIntensity(word) {
            return this.tasteSensitivity[word] || 0;
        },
    },

    // Array of Emotions with different characteristics
    emotions: [
        {
            type: "smile",
            intensity: 7,
            meanings: ["happiness", "politeness", "masking true feelings"],
            visibleFeatures: { teeth: true, eyesInvolvement: "optional" },
        },
        {
            type: "grimace",
            intensity: 8,
            meanings: ["pain", "disgust", "fear"],
            visibleFeatures: { teeth: true, lipTightness: "firm", jawClench: true },
        },
        {
            type: "purse",
            intensity: 4,
            meanings: ["disapproval", "contemplation"],
            visibleFeatures: { lipTightness: 7, teethVisibility: false },
        },
        {
            type: "gasp",
            intensity: 9,
            meanings: ["shock", "awe", "disbelief"],
            visibleFeatures: { lips: "rounded", teeth: true, eyesWide: true },
        },
        {
            type: "smirk",
            intensity: 6,
            meanings: ["sarcasm", "confidence", "mocking"],
            visibleFeatures: { lipLift: "one side", eyesInvolvement: "minimal" },
        },
    ],

    // Anatomy details for the mouth
    anatomy: {
        lips: {
            texture: "soft",
            actions: [
                { expression: "curl", meaning: "disapproval" },
                { expression: "smile", meaning: "warmth or politeness" },
            ],
        },
        teeth: [
            { name: "incisors", function: "cutting", symbolicMeaning: "sharp remarks" },
            { name: "canines", function: "tearing", symbolicMeaning: "aggression" },
            { name: "molars", function: "grinding", symbolicMeaning: "resilience" },
        ],
        tongue: { length: 10, flexibility: 7, functions: ["taste", "speech"] },
    },

    // Symbolism and Expressiveness
    symbolism: {
        concealment: {
            hiddenDesires: true,
            interpretations: ["restrained speech", "unspoken feelings"],
            gestures: [{ gesture: "lip biting", meaning: "nervousness" }],
        },
        expressiveness: {
            spontaneous: { laughter: "joy", cry: "vulnerability", shout: "anger" },
        },
    },

    // Actions for mouth behavior
    actions: {
        expressEmotion(emotionType) {
            const emotion = mouthData.emotions.find(e => e.type === emotionType);
            return emotion
                ? `The mouth expresses ${emotion.type} with an intensity of ${emotion.intensity}. Associated meanings: ${emotion.meanings.join(", ")}.`
                : "Emotion not found.";
        },
        tasteReaction(taste) {
            const sensitivity = mouthData.sensoryFunctions.tasteSensitivity[taste];
            return sensitivity
                ? `The mouth reacts to ${taste} with a sensitivity level of ${sensitivity}.`
                : "Unrecognized taste.";
        },
    },
};

// Functions to display data on the page
function loadTheme() {
    document.getElementById("themeTitle").innerText = mouthData.theme;
    document.getElementById("description").innerText = mouthData.description;
}

function displaySymbolism() {
    const symbolismContent = `
        <strong>Concealment:</strong> ${mouthData.symbolism.concealment.interpretations.join(", ")}<br>
        <strong>Expressiveness:</strong> Laughter represents ${mouthData.symbolism.expressiveness.spontaneous.laughter}
    `;
    document.getElementById("symbolismContent").innerHTML = symbolismContent;
}

function displayRandomEmotion() {
    const randomEmotion = mouthData.emotions[Math.floor(Math.random() * mouthData.emotions.length)];
    const emotionDetails = `
        <strong>${randomEmotion.type.toUpperCase()}</strong><br>
        Intensity: ${randomEmotion.intensity}<br>
        Meanings: ${randomEmotion.meanings.join(", ")}<br>
        Visible Features: ${Object.entries(randomEmotion.visibleFeatures).map(([key, value]) => `${key}: ${value}`).join(", ")}
    `;
    document.getElementById("emotionDetails").innerHTML = emotionDetails;
}

function displayAnatomy() {
    const anatomyContent = `
        <strong>Lips:</strong> Actions - ${mouthData.anatomy.lips.actions.map(action => action.expression).join(", ")}<br>
        <strong>Teeth:</strong> ${mouthData.anatomy.teeth.map(t => `${t.name} (${t.function})`).join(", ")}<br>
        <strong>Tongue:</strong> Functions - ${mouthData.anatomy.tongue.functions.join(", ")}
    `;
    document.getElementById("anatomyDetails").innerHTML = anatomyContent;
}

// Initialize page content on load
document.addEventListener("DOMContentLoaded", () => {
    loadTheme();
    displaySymbolism();
    displayAnatomy();
    document.getElementById("randomEmotionButton").addEventListener("click", displayRandomEmotion);
});
