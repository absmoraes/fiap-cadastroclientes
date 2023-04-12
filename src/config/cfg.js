const cfg = () => {
    return {
        jwt_secret: "V$CoD#",
        jwt_expires: "id",
        salt: 60 * 60 * 2,
        db: "mongodb+srv://TrabalhoFiap:qWcEVKNHFT5ijNMd@cluster0.8uwyqtv.mongodb.net/cliente?retryWrites=true&w=majority"
    }
}

module.exports = cfg();