import models from "../models"

export default {
    login: async (_req, res, next) => {
        try {
            return res.status(200).json({ message: "Manage Login Logic here", status: 200 })
        } catch (err) {
            return next(new models.HttpError(err + "", 500))
        }
    }
}