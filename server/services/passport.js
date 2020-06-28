const passport = require('passport')
const GoogleStrategy = require('passport-google-oauth20').Strategy
const mongoose = require('mongoose')

const keys = require('../config/keys')

const Users = mongoose.model('users')

// console.developers.google.com
passport.use(new GoogleStrategy({
    clientID: keys.googleClientId,
    clientSecret: keys.googleClientSecret,
    callbackURL: '/auth/google/callback'
}, (accessToken, refreshToken, profile, done) => {
    Users.findOne({ googleId: profile.id }).then((existingUser) => {
        if (existingUser) {
            // We already have that record in profile
            done(null, existingUser)
        } else {
            new Users({ googleId: profile.id })
                .save()
                .then(user => done(null, user))
        }
    })

}))
