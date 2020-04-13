
module.exports = (resource, logicalId) => {
    if (logicalId.indexOf('Get') > -1) {
        return { destination: 'getMethods' }
    }

    if (logicalId.indexOf('Post') > -1) {
        return { destination: 'postMethods' }
    }

    if (logicalId.indexOf('Find') > -1) {
        return { destination: 'findMethods' }
    }

    if (logicalId.indexOf('Put') > -1) {
        return { destination: 'putMethods' }
    }

    if (logicalId.indexOf('Patch') > -1) {
        return { destination: 'patchMethods' }
    }

    if (logicalId.indexOf('Delete') > -1) {
        return { destination: 'deleteMethods' }
    }

  };