(function() {

  return {
    events: {
      'app.activated':'holdingPage',
      'click .get_gifs':'getGifs',
      'fetchGifs.done': 'processGifs',
      'fetchGifs.fail': 'processError',
    },

    getGifs: function() {
        this.ajax('fetchGifs');
    },

    holdingPage: function() {
        this.switchTo('holding_template');
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
        // random from 0-59: 60 images returned by imgur api:
        var random = Math.floor(Math.random() * 60);
        console.log('request succeeded');
        showThisOne = data.data[random];
        console.log('Size of ', random, ': ', showThisOne['size']);
        if (showThisOne['size'] === 0) {
            // Gif's gone from imgur, go around again:
            console.log('size 0 image encountered, go again');
            this.processGifs(data);
        }
        this.switchTo('gifs_template', showThisOne);
    },

    processError: function() {
        // process request failure
        console.log('request failed');
        this.switchTo('error_template');
    },
  };

}());
