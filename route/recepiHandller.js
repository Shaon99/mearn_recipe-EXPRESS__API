const express = require('express');
const mongoose = require('mongoose');
const pictureUpload = require('../middleware/pictureUpload');

const recepiSchema = require('../schema/recepiSchema');

const router = express.Router();

const Recepi = new mongoose.model('Recepi', recepiSchema)

router.get('/', async (req, res) => {
    await Recepi.find()
        .exec((err, data) => {
            if (err) {
                res.status(500).json({
                    error: "There is a server side error"
                })
            } else {
                res.status(200).json({
                    result: data,
                    message: "success"
                })
            }
        });
})


router.get('/bitcoin', async (req, res) => {
    await Recepi.find({category:'bitcoin'})
        .exec((err, data) => {
            if (err) {
                res.status(500).json({
                    error: "There is a server side error"
                })
            } else {
                res.status(200).json({
                    result: data,
                    message: "success"
                })
            }
        });
})



router.post('/', pictureUpload, async (req, res) => {

    let newRecepi
    if (req.files) {
        newRecepi = new Recepi({
            ...req.body,
            image: req.files[0].filename,
        })
    } else {
        newRecepi = new Recepi({
            ...req.body,
        })
    }
    // save recepi or send error
    await newRecepi.save((err) => {
        if (err) {
            res.status(500).json({
                error: "There is a server side error"
            })
        } else {
            res.status(200).json({
                message: "Recepi inserted successfully"
            })
        }
    });
})



module.exports = router;