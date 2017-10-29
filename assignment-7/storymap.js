// storymap_data can be an URL or a Javascript object
//var storymap_data = '//media.knightlab.com/StoryMapJS/demo/demo.json';

var storymap_data = {

  storymap: {
    slides: [{
      type: "overview",
      date: "2000-2017",
      text: {
        headline: "My schools",
        text: "<p>In the following maps, I will show the schools where I was educated and grew up.</p>"
      },
      media: {
        url: "http://www.kyoto-u.ac.jp/static/ja/issue/mm/jitsuha/2012/images/130222/01.jpg",
        credit: "7-24",
        caption: "My education"
      }
    }, {
      date: "2000-2005",
      text: {
        headline: "My primary school",
        text: "<p> It is an experience filled with happiness as I played for five years when I was a primary school student.</p>"
      },
      location: {
        name: "Yuan Ding primary school",
        icon: "https://maps.gstatic.com/intl/en_us/mapfiles/ms/micons/blue-pushpin.png",
        lat: 45.3021372,
        lon: 130.9580757,
        zoom: 16,
        line: true
      },
      media: {
        url: "http://www.5068.com/uploads/allimg/130814/1350204026-0.jpg",
        type: 		"image",
        credit: "7-12",
        caption: "Yuan Ding."
      }
    }, {
      date: "2005-2009",
      text: {
        headline: "My middle school",
        text: "<p>Established in 1947, it is one of the best middle schools in HeiLongjiang province. And there I began to study.</p> "
      },
      location: {
        name: "Shuliang Middle School",
        lat: 45,
        lon: 130,
        zoom: 16,
        line: true
      },
      media: {
        url: "http://training.teacher.com.cn/information/heilongjiang/hyxx/xxjj/images/jxshuliang1.gif",
        credit: "12-16",
        caption: " Shuliang."
      }
    },
 {date: "2009-2013",
      text: {
        headline: "My High school",
        text: "<p>Established in 1952, it is one of the best high schools in HeiLongjiang province where I studied hard and with the help of teachers there I went to my dream university.</p> "
      },
      location: {
        name: "Ji Xi No.1 High School",
        lat: 45,
        lon: 130,
        zoom: 16,
        line: true
      },
      media: {
        url: "http://photocdn.sohu.com/20120817/Img350893704.jpg",
        credit: "16-19",
        caption: "Yi Zhong."
      }
    },
{date: "2013-2017",
      text: {
        headline: "My University",
        text: "<p>Jilin University is a leading national research university under the direct jurisdiction of China's Ministry of Education.It taught me how to study as well as how to live and love.</p> "
      },
      location: {
        name: "Jilin University",
        lat: 43.8703638,
        lon: 125.3076073,
        zoom: 16,
        line: true
      },
      media: {
        url: "http://www.sinaimg.cn/dy/slidenews/11_img/2009_39/271_38595_756561.jpg",
        credit: "19-23",
        caption: "JLU."
      }
    },

{date: "2017-2018",
      text: {
        headline: "My University",
        text: "<p>The Chinese University of Hong Kong (CUHK) is a top Hong Kong university with strong research emphasis.The environment here is pretty good. I hope I could utilize the time here well.</p> "
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
        text: "<p>There are many possibilities,hhhhhhhh</p> "
      },
      location: {
        name: "Who knows",
        lat: 22.4166899,
        lon: 114.1986787,
        zoom: 16,
        line: true
      },
      media: {
        url: "http://attach.bbs.miui.com/forum/201405/22/122100lat7hwm1h1hez5rh.gif",
        
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