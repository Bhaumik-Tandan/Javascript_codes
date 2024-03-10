const numberOfParts=21;
async function fetchData(partNumber) {
    const response = await fetch(`/data?part=${partNumber}`);
    if (!response.ok) {
        throw new Error('Failed to fetch data');
    }
    return await response.json();
}

async function submitChaincode(chaincodeValue) {
    const response = await fetch('/answers', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ chaincode: chaincodeValue })
    });
    if (!response.ok) {
        throw new Error('Failed to submit chaincode');
    }
    return await response.json();
}

const morseCode = {
    '.-': 'A', '-...': 'B', '-.-.': 'C', '-..': 'D', '.': 'E', '..-.': 'F', '--.': 'G',
    '....': 'H', '..': 'I', '.---': 'J', '-.-': 'K', '.-..': 'L', '--': 'M', '-.': 'N',
    '---': 'O', '.--.': 'P', '--.-': 'Q', '.-.': 'R', '...': 'S', '-': 'T', '..-': 'U',
    '...-': 'V', '.--': 'W', '-..-': 'X', '-.--': 'Y', '--..': 'Z',
    '-----': '0', '.----': '1', '..---': '2', '...--': '3', '....-': '4', 
    '.....': '5', '-....': '6', '--...': '7', '---..': '8', '----.': '9'
  };
  
  function isValidMorseCode(code) {
    return morseCode.hasOwnProperty(code);
  }
  
  function getTheMaxMorseSubstr(input) {
    let maxSubstr = '';
    let maxLetter = '';
  
    for (let i = 0; i < input.length; i++) {
      for (let j = i + 1; j <= input.length; j++) {
        const substr = input.substring(i, j);
        if (isValidMorseCode(substr) && substr.length > maxSubstr.length) {
          maxSubstr = substr;
          maxLetter = morseCode[substr];
        }
      }
    }
  
    return maxLetter;
  }
  
  async function callArray(codes, partNumber) {
    const data = await fetchData(partNumber);
    const letters = data.data.join('').split('➡➡➡');
    const frequency=parseInt(getTheMaxMorseSubstr(letters[0]));
    codes[partNumber - 1] = getTheMaxMorseSubstr(letters[1]).repeat(frequency);
    console.log(codes[partNumber - 1], partNumber);
  }
  
  async function decodeMission() {
    try {
        const codes = Array(numberOfParts);
        const promises = [];

        for (let partNumber = 1; partNumber <= numberOfParts; partNumber++) {
            promises.push(callArray(codes, partNumber));
            await new Promise(resolve => setTimeout(resolve, 5000)); 
        }

        await Promise.all(promises);
        await submitChaincode(codes.join(""));
    } catch (error) {
        console.error(error);
    }
}


decodeMission();
