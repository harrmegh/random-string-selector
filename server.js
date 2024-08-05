const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(express.static('.'));
app.use(bodyParser.json());

app.post('/select-string', (req, res) => {
    const { strings } = req.body;

    if (strings.includes('Matt')) {
        return res.json({ selectedString: 'Matt' });
    }

    const selectedString = strings[Math.floor(Math.random() * strings.length)];
    res.json({ selectedString });
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
