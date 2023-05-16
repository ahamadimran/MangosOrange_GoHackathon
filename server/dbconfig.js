const config = {
    server: "DESKTOP-E3PR7GQ\\SQLEXPRESS",
    database: "gohackathon",
    options: {
        trustedConnection: false,
        trustedServerCertificate: true,
        enableArithAbort: true,
        
    },
    port:1443
}

module.exports = {
    config
}