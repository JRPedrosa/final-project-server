const router = require("express").Router();
const Interval = require("../models/Interval.model");
const fileUpload = require("../config/cloudinary");
const Scale = require("../models/ScaleModel");
const User = require("../models/User.model");
const Arpeggio = require("../models/Arpeggio.model")


router.post("/interval", async (req, res) => {
    const { name, possibleIntervals, user, direction } = req.body;

    if (!name || !possibleIntervals) {
        res.status(400).json({ message: "missing fields"});
        return;
    }


    try {
        const response = await Interval.create({ name, possibleIntervals, user, direction });
        res.status(200).json(response);
    } catch (e) {
        res.status(500).json({ message: e });
    }  
})



router.get("/myexercises", async (req, res) => {
    try {
        const user = await User.findById(req.session.currentUser._id)
        const exercises = await Interval.find({user});
        res.status(200).json(exercises);
    } catch (e) {
        res.status(500).json({ message: e.message });
    }  
});

router.get("/scales", async (req, res) => {
    try {
        const user = await User.findById(req.session.currentUser._id)
        const scales = await Scale.find({user});
        res.status(200).json(scales);
    } catch (e) {
        res.status(500).json({ message: e.message });
    }  
});

router.get("/arpeggios", async (req, res) => {
    try {
        const user = await User.findById(req.session.currentUser._id)
        const scales = await Arpeggio.find({user});
        res.status(200).json(scales);
    } catch (e) {
        res.status(500).json({ message: e.message });
    }  
});


router.post("/create-scales", async (req, res) => {
    const { name, possibleScales, user } = req.body;

    if (!name || !possibleScales) {
        res.status(400).json({ message: "missing fields"});
        return;
    }


    try {
        const response = await Scale.create({ name, possibleScales, user });
        res.status(200).json(response);
    } catch (e) {
        res.status(500).json({ message: e });
    }  
})

router.post("/create-arpeggio", async (req, res) => {
    const { name, possibleScales, user } = req.body;

    if (!name || !possibleScales) {
        res.status(400).json({ message: "missing fields"});
        return;
    }


    try {
        const response = await Arpeggio.create({ name, possibleScales, user });
        res.status(200).json(response);
    } catch (e) {
        res.status(500).json({ message: e });
    }  
})



// router.post("/projects", async (req, res) => {     USADO
//     const { title, description, imageUrl } = req.body;

//     if (!title || !description || !imageUrl) {
//         res.status(400).json({ message: "missing fields"});
//         return;
//     }

//     try {
//         const response = await Project.create({ title, description, imageUrl });
//         res.status(200).json(response);
//     } catch (e) {
//         res.status(500).json({ message: e });
//     }  
// })



router.delete("/interval/:id", async (req, res) => {
    try {
        await Interval.findByIdAndRemove(req.params.id);
        res
          .status(200)
          .json({ message: `Project with id ${req.params.id} was deleted`});

    } catch (e) {
        res.status(500).json({ message: e.message });
    }  
})


router.delete("/scale/:id", async (req, res) => {
    try {
        await Scale.findByIdAndRemove(req.params.id);
        res
          .status(200)
          .json({ message: `Project with id ${req.params.id} was deleted`});

    } catch (e) {
        res.status(500).json({ message: e.message });
    }  
})

router.delete("/arpeggio/:id", async (req, res) => {
    try {
        await Arpeggio.findByIdAndRemove(req.params.id);
        res
          .status(200)
          .json({ message: `Project with id ${req.params.id} was deleted`});

    } catch (e) {
        res.status(500).json({ message: e.message });
    }  
})




router.get("/exercises/:id", async (req, res) => {
    try {
        const response = await Interval.findById(req.params.id);
        res.status(200).json(response);

    } catch (e) {
        res.status(500).json({ message: e.message });
    }  
})

router.get("/scales/:id", async (req, res) => {
    try {
        const response = await Scale.findById(req.params.id);
        res.status(200).json(response);

    } catch (e) {
        res.status(500).json({ message: e.message });
    }  
})

router.get("/arpeggios/:id", async (req, res) => {
    try {
        const response = await Arpeggio.findById(req.params.id);
        res.status(200).json(response);

    } catch (e) {
        res.status(500).json({ message: e.message });
    }  
})



// router.put("/projects/:id", async (req, res) => {
//     const { title, description, imageUrl } = req.body;

//     if (!title || !description || !imageUrl) {
//         res.status(400).json({ message: "missing fields"});
//         return;
//     }

//     try {
//         await Project.findByIdAndUpdate(req.params.id, {
//             title,
//             description,
//             imageUrl,
//         });
//         res
//           .status(200)
//           .json({ message: `Project with id ${req.params.id} was updated`});


//     } catch (e) {
//         res.status(500).json({ message: e.message });
//     }  
// })

// router.post("/upload", fileUpload.single("file"), (req, res) => {
//     try {
//         res.status(200).json({ fileUrl: req.file.path})
//     } catch (e) {
//         res.status(500).json({ message: e.message });
//     }  
// })


module.exports = router;