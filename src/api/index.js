const apiMap = require('./map')
const env = process.env ? process.env.NODE_ENV : 'production'
const host = process.env.DEV_HOST || 'localhost'
const devPort = process.env.DEV_PORT || '8000'
const devUrl = `http://${host}:${devPort}`

const serverUrl = 'http://walk.zjutjh.com'

/**
 * get API url by API name
 * @return {string}
 */
export default function API (name, params = {}, ext = {}) {
    const apiPath = apiMap[name]
    if (apiPath === undefined) {
        throw new Error('Cannot find a mock API path.')
    }
    const prefix = env === 'development' ? `${devUrl}` : serverUrl
    const postfix = ext.postfix || ''
    let url = env === 'development' ? `${prefix}${apiPath}${postfix}` : `${prefix}${apiPath}${postfix}`
    Object.keys(params).forEach((key) => {
        url = url.replace(new RegExp(`{${key}}`, 'g'), params[key])
    })

    return url
}