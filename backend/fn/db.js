var mysql = require('mysql');

exports.load = sql => {
    console.log("load");
    return new Promise((resolve, reject) => {
        var connection = mysql.createConnection({
            host: '27.74.255.96',
            user: 'root',
            password: 'RAPtor@1234',
            database: 'meu_shop'
        });

        //connect to db
        connection.connect();

        connection.query(sql, function(error, rows) {
            if (error) {
                console.log("error");
            	reject(error);
            } else {
                console.log("success");
            	resolve(rows);
            }

            connection.end();
        });

    });
}

exports.save = sql => {
    return new Promise((resolve, reject) => {
        var connection = mysql.createConnection({
            host: '27.74.255.96',
            user: 'root',
            password: 'RAPtor@1234',
            database: 'meu_shop'
        });

        connection.connect();

        connection.query(sql, function(error, value) {
            if (error) {
                reject(error);
            } else {
                resolve(value);
            }

            connection.end();
        });
    });
}
