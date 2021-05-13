function sPost(url, json, callback) {
  $.ajax({
        url: url,
        type: 'post',
        dataType: 'json',
        contentType: 'application/json',
        success: function (data) {
            callback(data);
        },
        data: JSON.stringify(json)
    });
}

function sGet(url, callback) {
  $.ajax({
        url: url,
        type: 'get',
        dataType: 'json',
        success: function (data) {
            callback(data);
        }
    });
}

function sDelete(url, json, callback){

  $.ajax({
        url: url,
        type: 'delete',
        dataType: 'json',
        contentType: 'application/json',
        success: function (data){
            callback(data);
        },

        data: JSON.stringify(json)

  });
}

