const express = require('express');
const { getData, postCSV } = require('../controllers/csvController');

const multer = require('multer');
const csv = require('fast-csv');
const fs = require('fs');

const router = express.Router();

// Set global directory
global.__basedir = __dirname;

// Multer Upload Storage
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, __basedir + '/uploads/')
    },
    filename: (req, file, cb) => {
        cb(null, file.fieldname + "-" + Date.now() + "-" + file.originalname)
    }
});

// Filter for CSV file
const csvFilter = (req, file, cb) => {
    if (file.mimetype.includes("csv")) {
        cb(null, true);
    } else {
        cb("Please upload only csv file.", false);
    }
};
const upload = multer({ storage: storage, fileFilter: csvFilter });

router.get('/', getData);
router.post('/', upload.single("file"), postCSV);

module.exports = router;