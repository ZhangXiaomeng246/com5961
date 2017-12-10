// storymap_data can be an URL or a Javascript object
//var storymap_data = '//media.knightlab.com/StoryMapJS/demo/demo.json';

var storymap_data = {

  storymap: {
    slides: [{
      type: "overview",
      date: "1994-2017",
      text: {
        headline: "From North To South ",
        text: "<p>My hometown is snowing, while I am here, warm with a bit missing.</p>"
      },
      media: {
        url: "22.jpg",
        credit: "north",
        caption: "north-south"
      }
    }, 

{date: "1994-2013",
      text: {
        headline: "My Hometown",
        text: "<p>I was born in Jixi, HeiLongjiang Province, I was also grow up there, it is not a big city, as even I am far from it, it still always went into my dream.</p> "
      },
      location: {
        name: "JiXi",
        lat: 45.30,
        lon: 130.91,
        zoom: 16,
        line: true
      },
      media: {
        url: "http://211.103.250.141/gylch/subsite/12255/12268/files_92853/39053.jpg",
        credit: "0-18",
        caption: "My Hometown"
      }
    },


{date: "2013-2017",
      text: {
        headline: "My University",
        text: "<p>It is located in Jilin Province, which is not far from my hometown, where I learned to live and love as well as improve myself in knowledge and emotion. And it is also a university I devote my youth and enthusiasm.</p> "
      },
      location: {
        name: "Jilin University",
        lat: 43.8703638,
        lon: 125.3076073,
        zoom: 16,
        line: true
      },
      media: {
        url: "111.jpg",
        credit: "19-23",
        caption: "JLU."
      }
    },

{date: "2017-2018",
      text: {
        headline: "My University",
        text: "<p>Life is not easy  here, but studying here is still a fortunate thing, as I could experience more fresh knowledge and culture. Meanwhile, I had to admit, I love hee, the sunshine the blue sky and the high efficency.</p> "
      },
      location: {
        name: "Chinese University of Hongkong",
        lat: 22.4166899,
        lon: 114.1986787,
        zoom: 16,
        line: true
      },
      media: {
        url: "http://pic.bkcimg.com/uploads/image/201709/12/1505244354145067.jpg",
        credit: "23-24",
        caption: "CUHK"
      }
    },
{date: "2018",
      text: {
        headline: "To be continued.",
        text: "<p>From North to Sorth, this girl is growing up gradually, and she always believes in 'Sun will shine'.</p> "
      },
      location: {
        name: "My Love",
        lat: 22.4166899,
        lon: 114.1986787,
        zoom: 16,
        line: true
      },
      media: {
        url: "33.jpg"
      }
    },

    ]
  }
}

// certain settings must be passed within a separate options object
var storymap_options = {
  language: 'en', // required; two-letter ISO language code
  map_type: 'osm:standard',          // required
  // map_type: 'zoomify',
  map_as_image: false, // required
  calculate_zoom: true,
  map_subdomains: '01234', // optional
};

var storymap = new VCO.StoryMap('mapdiv', storymap_data, storymap_options);
window.onresize = function(event) {
  storymap.updateDisplay(); // this isn't automatic
}