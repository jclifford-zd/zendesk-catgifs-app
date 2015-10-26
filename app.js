(function() {

  return {
    events: {
      'app.activated':'getGifs',
      'fetchGifs.done': 'processGifs',
      'fetchGifs.fail': 'processError',
    },

    getGifs: function() {
        this.ajax('fetchGifs');
    },

    requests: {
        fetchGifs: {
            url: 'https://api.imgur.com/3/gallery/r/CatGifs',
            type: 'GET',
            dataType: 'json',
            headers: {
                'Authorization': 'Client-ID 5113aab57a5e6c8'
            }
        }
    },

    processGifs: function(data) {
        // process and display a gif
        console.log('request succeeded');
    },

    processError: function() {
        // process request failure
        console.log('request failed');
    },
  };

}());
