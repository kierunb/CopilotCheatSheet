// q: How to cook a beef stew?
// a: Ingredients: beef, carrots, potatoes, onion, garlic, tomato paste, beef broth, salt, pepper, thyme, bay leaves. Instructions: 1. Cut beef into cubes. 2. Season beef with salt and pepper. 3. Brown beef in a pot. 4. Add onions and garlic. 5. Add tomato paste and cook until it darkens. 6. Add beef broth, thyme, and bay leaves. 7. Simmer for 1 hour. 8. Add carrots and potatoes. 9. Simmer for another 30 minutes. 10. Season with salt and pepper to taste. 11. Serve hot.

function calculateDate(begin, end) {
  return end - begin;
}

function addNumbers(a, b) {
  return a + b;
}

function sortArray(arr) {
    return arr.slice().sort((a, b) => a - b);
}

// create regex to match a string that starts with a number and ends with a letter
function matchString(str) {
  return str.match(/^\d.*[a-zA-Z]$/) && str.length > 0;
  return str.match(/^\d.*[a-zA-Z]$/);
}

// create a test for the function matchString
function testMatchString() {
  const testCases = [
    { input: '1a', expected: ['1a'] },
    { input: '1a2b', expected: ['1a2b'] },
    { input: 'a1', expected: null },
    { input: 'a1b', expected: null },
    { input: '1', expected: null },
    { input: 'a', expected: null },
  ];

  testCases.forEach(testCase => {
    const result = matchString(testCase.input);
    console.log(result);
    console.log(result === testCase.expected);
  });
}

// generate function to reverse a string



