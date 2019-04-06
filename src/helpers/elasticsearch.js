
/**
 * Gets the elasticsearch port in the correct format
 *
 * @param {string | number} port
 * @returns {string}
 */
function getPort(port) {
    if (parseInt(port) && port > 0) {
        return `:${port}`
    }
    return ''
}

exports.getPort = getPort
