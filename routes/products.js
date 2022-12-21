const request = require('request-promise')
const router = require('express').Router()

// PRIVATE access
// url generator
const API_KEY = process.env.API_KEY || 'Nothing here will cause you error'
const urlGenerator = (key) => `http://api.scraperapi.com?api_key=${key}&autoparse=true`

// @GET Method
// PUBLIC access
// mounted at - "/products/product_id"

router.get("/:productID", async (req, res) => {
    const { productID } = req.params
    const { key } = req.query

    try {

        const answer = await request(`${urlGenerator(key)}&url=https://www.amazon.com/dp/${productID}`)
        res.status(200).json(JSON.parse(answer))

    } catch (err) {

        res.status(400).json({"Error": "Ooops! Eye Eye Eye :( something bad happened!"})
        console.error(err)

    }
})

// @GET Method
// PUBLIC access
// mounted at - "/products/product_id/reviews"

router.get("/:productID/reviews", async (req, res) => {
    const { productID } = req.params
    const { key } = req.query

    try {

        const answer = await request(`${urlGenerator(key)}&url=https://www.amazon.com/product-reviews/${productID}`)
        res.status(200).json(JSON.parse(answer))

    } catch (err) {

        res.status(400).json({"Error": "Ooops! Eye Eye Eye :( something bad happened!"})
        console.error(err)
            
    }
})

// @GET Method
// PUBLIC access
// mounted at - "/products/product_id/offers"

router.get("/:productID/offers", async (req, res) => {
    const { productID } = req.params
    const { key } = req.query

    try {

        const answer = await request(`${urlGenerator(key)}&url=https://www.amazon.com/gp/offer-listing/${productID}`)
        res.status(200).json(JSON.parse(answer))

    } catch (err) {

        res.status(400).json({"Error": "Ooops! Eye Eye Eye :( something bad happened!"})
        console.error(err)
            
    }
})

// @GET Method
// PUBLIC access
// mounted at - "/products/product_id?k=product_name"

router.get("/search/:word", async (req, res) => {
    const { word } = req.params
    const { key } = req.query

    try {

        const answer = await request(`${urlGenerator(key)}&url=https://www.amazon.com/s?k=${word}`)
        res.status(200).json(JSON.parse(answer))

    } catch (err) {

        res.status(400).json({"Error": "Ooops! Eye Eye Eye :( something bad happened!"})
        console.error(err)

    }
})

module.exports = router