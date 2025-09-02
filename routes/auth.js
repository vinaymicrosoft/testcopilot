'use strict';

const express = require('express');
const router = express.Router();

// Mock database for demonstration purposes
let users = [];

// Registration endpoint
router.post('/register', (req, res) => {
    const { username, password } = req.body;
    // Check if user already exists
    const existingUser = users.find(user => user.username === username);
    if (existingUser) {
        return res.status(400).json({ message: 'User already exists' });
    }
    // Create new user
    users.push({ username, password });
    return res.status(201).json({ message: 'User registered successfully' });
});

// Login endpoint
router.post('/login', (req, res) => {
    const { username, password } = req.body;
    const user = users.find(user => user.username === username && user.password === password);
    if (!user) {
        return res.status(401).json({ message: 'Invalid credentials' });
    }
    return res.status(200).json({ message: 'Login successful' });
});

module.exports = router;
