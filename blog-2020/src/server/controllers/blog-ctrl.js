const Blog = require('../models/blog-model')

var express = require('express');
var router = express.Router();
var passport = require('passport');
var dotenv = require('dotenv');
var util = require('util');
var url = require('url');
var querystring = require('querystring');

let createContent = (req, res) => {
    const body = req.body

    if(!body) {
        return res.status(400).json({
            success: false,
            error: 'You must provide a content',
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

let loginCallback = function(req, res, next) {
    passport.authenticate('auth0', function(err, user, info) {
        if(err) { return next(err); }
        if(!user) { return res.redirect('/login'); }
        req.logIn(user, function(err) {
            if(err) { return next(err); }
            const returnTo = req.session.returnTo;
            delete req.session.returnTo;
            res.redirect(returnTo || '/user');
        });
    })(req, res, next);
}

let loginGetPassportAuth = passport.authenticate('auth0', passport.authenticate('auth0', {
    scope: 'openid email profile'
}));

let loginRedirect = function(req, res) {
    res.redirect('/');
}

let logout = (req, res) => {
    req.logout();

    var returnTo = req.protocol + '://' + req.hostname;
    var port = req.connection.localPort;
    if(port !== undefined && port !== 80 && port !== 443) {
        returnTO += ':' + port;
    }

    var logoutURL = new url.URL(
        util.format('https://%s/v2/logout', process.env.AUTH0_DOMAIN)
    );

    var searchString = querystring.stringify({
        client_id: process.env.AUTH0_CLIENT_ID,
        returnTo: returnTo,
    });
    logoutURL.search = searchString;

    res.redirect(logoutURL);
};

module.exports = {
    createContent,
    updateContent,
    deleteContent,
    getContentById,
    getContents,
    loginCallback,
    loginGetPassportAuth,
    loginRedirect,
    logout,
}

