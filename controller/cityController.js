const City = require('../model/city');


function getScore(real, coordinate) {
    var latitudeError = Math.abs(real.lat - coordinate.latitude) / 90;
    var longitudeError = Math.abs(real.long - coordinate.longitude) / 180;
    return 1 - ((latitudeError + longitudeError) / 2);
}

function GetSortOrder(prop) {  
    return function(a, b) {  
        if (a[prop] < b[prop]) {  
            return 1;  
        } else if (a[prop] > b[prop]) {  
            return -1;  
        }  
        return 0;  
    }  
} 

exports.getCity = async (req, res) => {
    var query = req.query.q;
    const coordinates = {
        latitude: req.query.latitude,
        longitude: req.query.longitude
    }
    console.log(query + "\t" + coordinates.latitude + "\t" + coordinates.longitude);
    var cities = await City.find({
        "name": {
            $regex: query,
            $options: 'i'
        }
    });
    var filterCity = [];
    if (query && coordinates.latitude && coordinates.longitude) {
        filterCity = await cities.map((item) => {
            return {
                name: item.name,
                latitude: item.lat,
                longitude: item.long,
                score: Number(getScore(item, coordinates).toFixed(5))
            };
        });
        filterCity.sort(GetSortOrder("score"));
    } else {
        filterCity = await cities.map((item) => {
            return {
                name: item.name,
                latitude: item.lat,
                longitude: item.long,
            };
        });
    }
    res.status(200).json({
        suggestions: filterCity
    })
}