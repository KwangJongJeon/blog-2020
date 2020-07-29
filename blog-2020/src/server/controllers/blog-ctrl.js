const Blog = require('../models/blog-model')

let createContent = (req, res) => {
    const body = req.body

    if(!body) {
        return res.status(400).json({
            success: false,
            error: 'You mush provide a movie',
        })
    }

    const blog = new Blog(body);

    if (!blog) {
        return res.status(400).json({ success: false, error: true })
    }

    blog
        .save()
        .then(() => {
            return res.status(201).json({
                success: true,
                id: blog._id,
                message: 'Content Created!',
            })
        })
        .catch(error => {
            return res.status(400).json({
                error,
                message: 'Content not created!',
            })
        })
}

let updateContent = async (req, res) => {
    const body = req.body

    if(!body) {
        return res.status(400).json({
            success: false,
            error: 'You must provide a body to update',
        })
    }

    Blog.findOne({ _id: req.params.id }, (err, content) => {
        if(err) {
            return res.status(404).json({
                err,
                message: 'Content not found!',
            })
        }

        content.name = body.name;
        content.time = body.time;
        content.rating = body.rating;
        content
            .save()
            .then(() => {
                return res.status(200).json({
                    success: true,
                    id: content._id,
                    message: 'Blog updated!',
                })
            })
            .catch(error => {
                return res.status(404).json({
                    error,
                    message: 'Content not updated!',
                })
            })
    })
}

let deleteContent = async (req, res) => {
    await Blog.findOneAndDelete({ _id: req.params.id }, (err, content) => {
        if(err) {
            return res.status(400).json({ success: false, error: err })
        }
        if(!content) {
            return res
                .status(404)
                .json({ success: false, error: `Content not found` })
        }

        return res.status(200).json({ success: true, data: content })
    }).catch(err => console.log(err))
}

let getContentById = async (req, res) => {
    await Blog.findOne({ _id: req.params.id }, ( err, content ) => {
        if(err) {
            return res.status(400).json({ success: false, error: err })
        }

        if(!content) {
            return res
                .status(404)
                .json({ success: false, error: `Content not found` })
        }
        return res.status(200).json({ success: true, data: content})
    }).catch(err => console.log(err));
}

let getContents = async (req, res) => {
    await Blog.find({}, (err, contents) => {
        if(err) {
            return res.status(400).json;
        }

        if(!contents.length) {
            return res
                .status(404)
                .json({ success: false, error: `Contents not found`});
        }
        return res.status(200).json({ success: true, data: contents});
    }).catch(err => console.log(err));
}

module.exports = {
    createContent,
    updateContent,
    deleteContent,
    getContentById,
    getContents
}

