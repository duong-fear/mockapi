const getEpoch = () => {
    return Number.parseInt((new Date()).getTime()/1000);
}

export {
    getEpoch,
}