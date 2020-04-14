
module.exports.chopResults = o => {
    let isHash = Object.prototype.toString.call(o) == '[object Object]'
    let hasResults = 'results' in o

    return ((isHash && hasResults) ? o.results : o)
}
