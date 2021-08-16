const Place = require("../models/place")
const {Router} = require("express")
const router = Router()

const placeSeed = [
    {
        name: "Mt. Everest",
        img: "https://media.gq.com/photos/5dcaf2db81b355000904c757/master/pass/mount-everest-gq-men-of-the-year-2019-lede.jpg",
        description: "This is a Mountain",
      },
      {
        name: "Lake Eola",
        img: "https://a.cdn-hotels.com/gdcs/production142/d1678/02312c78-cd46-4e43-b6c6-d174700968a8.jpg",
        description: "This is a Lake",
      },
      {
        name: "Mall Of America",
        img: "https://www.visittheusa.com/sites/default/files/styles/hero_l_x2/public/images/hero_media_image/2016-11/IMG_7491_0.jpg?itok=lrDxDud3",
        description: "This is a Mall",
      }
]

router.get("/seed", async (req,res) => {
    try{
        await Place.remove({})
        await Place.create(placeSeed)
        const places = await Place.find({})
        res.json(places)
    } catch(error) {
        res.status(400).json(error)
    }
})

// CRUD ROUTES
// index
router.get("/", async(req,res) => {
    try{
        const places = await Place.find({})
        res.json(places)
    } catch(err) {
        res.status(400).json(err)
    }
})

// create
router.post("/", async(req,res) => {
    try{
        const newPlace = await Place.create(req.body)
        res.json(newPlace)
    } catch(err) {
        res.status(400).json(err)
    }
})
// update
router.put("/:id", async(req,res) => {
    try{
        const updatedPlace = await Place.findByIdAndUpdate(req.params.id, req.body, {new: true})
        res.json(updatedPlace)
    } catch(err) {
        res.status(400).json(err)
    }
})
// destroy
router.delete("/:id", async(req,res) => {
    try{
        const deletedPlace = await Place.findByIdAndDelete(req.params.id)
        res.json(deletedPlace)
    } catch(err) {
        res.status(400).json(err)
    }
})

module.exports = router