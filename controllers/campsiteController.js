import campsite from "../models/campsite.js"


export const createCampsite = async (req,res,next) => {
    const newCampsite = new campsite(req.body)

    try{
        const savedCampsite = await newCampsite.save()
        res.status(200).json(savedCampsite)
    }catch(err){
        next(err)
    }
}
export const updateCampsite = async (req,res,next) => {
    try{
        const updatedCampsite = await campsite.findByIdAndUpdate(req.params.id, {$set: req.body}, {new:true})
        res.status(200).json(updatedCampsite)
    }catch(err){
        next(err)
    }
}
export const deleteCampsite = async (req,res,next) => {
    try{
        await campsite.findByIdAndDelete(req.params.id)
        res.status(200).json("campsite deleted")
    }catch(err){
        next(err)
    }
}
export const getCampsite = async (req,res,next) => {
    try{
        const getCampsite = await campsite.findById(req.params.id)
        res.status(200).json(getCampsite)
    }catch(err){
        next(err)
    }

}
export const getAllCampsites = async (req,res,next) => {
    try{
        const allCampsites = await campsite.find()
        res.status(200).json(allCampsites)
    }catch(err){
        next(err)
    }

}