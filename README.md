# Node.js Express.js Server Responding Only to the Last Request After Delay

This repository demonstrates a common issue in Node.js Express.js servers where, when multiple requests are made before the first one completes (especially if it involves a delay), only the last request receives a response.  The earlier requests are effectively overwritten.

The `bug.js` file contains the problematic code. The `bugSolution.js` file provides a corrected version, illustrating how to handle multiple concurrent requests properly.

## Bug Description

The provided Express.js server simulates a 5-second delay before sending a response.  If you send multiple requests within that 5-second window, only the last request will receive a 'Hello World!' response; others will be ignored.

## Solution

The solution involves using techniques that allow the server to handle concurrent requests without overwriting responses.  The solution demonstrates the use of proper request handling to prevent the overwriting of earlier requests. 
