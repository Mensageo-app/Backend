'use strict'

const m = require('../models/CategoryType')
const a = require('../lambda')


module.exports.get = async (e) => a.get(e, m)
module.exports.list = async (e) => a.list(e, m)
module.exports.post = async (e) => a.post(e, m)
module.exports.patch = async (e) => a.patch(e, m)
module.exports.delete = async (e) => a.delete(e, m)
