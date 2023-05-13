async function queryServers(serverName, q) {
    let firstUrl = "/" + serverName + "?q=" + q
    let secondUrl = "/" + serverName + "_backup?q=" + q
    return await Promise.race([getJSON(firstUrl), getJSON(secondUrl)]).then((value) => {
        return value
    });
}
async function gougleSearch(query) {
    let promise1 = new Promise((resolve, reject) => {
        setTimeout(reject, 80, new Error('timeout'))
    })
    let result = {}
    result["web"] = await Promise.race([queryServers('web', query), promise1])
    result["image"] = await Promise.race([queryServers('image', query), promise1])
    if (result["image"] == '/image?q=phr3phsrmq') {
        result["image"] = '/image_backup?q=phr3phsrmq'
    }
    result["video"] = await Promise.race([queryServers('video', query), promise1])
    return result
}