const sql = require('mssql')

var config = {
    user: 'svc',
    password: 'Blf01!2',
    server: 'SDYRNDAPETERSON',
    database: 'inData'
};


module.exports.exportToStudio = (event, context, callback) => {
    sql.connect(config, function(err) {
        if (err) console.log(err);

        var request = new sql.Request();

        request.query('select top 1000 * from dbo.IVR_Source', (err, result) => {
            console.log(result);
            sql.close();
        });
    });



    let data = {};
    data = JSON.parse(event.body);
    console.log(data);
    const response = {
        statusCode: 200,
        body: JSON.stringify({
            message: "Success",
        }),
    };

    callback(null, response);

}