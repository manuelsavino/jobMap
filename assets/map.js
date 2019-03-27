var map;
var center = { lat: 37.0902, lng: -95.7129 };
let locations = [
  {
    location: { lat: 37.0902, lng: -95.7129 },
    name: "Self Storage Multi Story | Kansas",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minus, repellendus!",
    pics: [`kansas1.jpg`, `kansas2.jpg`, `kansas3.jpg`]
  },
  {
    location: { lat: 25.7617, lng: -80.1918 },
    name: "Hallway System | Miami, Fl",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam volutpat rutrum lacus, at condimentum lectus.",
    pics: [`miami1.jpg`, `miami2.jpg`]
  },
  {
    location: { lat: 28.5383, lng: -81.3792 },
    name: "Hallway System | Orlando, Fl",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum minus enim inventore maiores neque quia fugit eum cupiditate sint fuga.",
    pics: [`orlando1.jpg`]
  },
  {
    location: { lat: 47.6062, lng: -122.3321 },
    name: "Single Story | Seattle, Washington",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam volutpat rutrum lacus, at condimentum lectus.",
    pics: [`seattle1.jpg`, `seattle2.jpg`, `seattle3.jpg`]
  }
];

var mapOptions = {
  zoom: 4,
  center: center,
  disableDefaultUI: true,
  gestureHandling: "greedy",
  styles: [
    {
      featureType: "all",
      elementType: "labels",
      stylers: [
        {
          visibility: "on"
        }
      ]
    },
    {
      featureType: "all",
      elementType: "labels.text.fill",
      stylers: [
        {
          saturation: 36
        },
        {
          color: "#000000"
        },
        {
          lightness: 40
        }
      ]
    },
    {
      featureType: "all",
      elementType: "labels.text.stroke",
      stylers: [
        {
          visibility: "on"
        },
        {
          color: "#000000"
        },
        {
          lightness: 16
        }
      ]
    },
    {
      featureType: "all",
      elementType: "labels.icon",
      stylers: [
        {
          visibility: "off"
        }
      ]
    },
    {
      featureType: "administrative",
      elementType: "geometry.fill",
      stylers: [
        {
          color: "#000000"
        },
        {
          lightness: 20
        }
      ]
    },
    {
      featureType: "administrative",
      elementType: "geometry.stroke",
      stylers: [
        {
          color: "#000000"
        },
        {
          lightness: 17
        },
        {
          weight: 1.2
        }
      ]
    },
    {
      featureType: "administrative.country",
      elementType: "geometry.fill",
      stylers: [
        {
          visibility: "on"
        },
        {
          color: "#ff9494"
        }
      ]
    },
    {
      featureType: "administrative.country",
      elementType: "geometry.stroke",
      stylers: [
        {
          visibility: "on"
        },
        {
          color: "#F7EE24"
        }
      ]
    },
    {
      featureType: "administrative.country",
      elementType: "labels.text",
      stylers: [
        {
          visibility: "off"
        }
      ]
    },
    {
      featureType: "administrative.country",
      elementType: "labels.text.fill",
      stylers: [
        {
          color: "#F7EE24"
        },
        {
          visibility: "off"
        }
      ]
    },
    {
      featureType: "administrative.province",
      elementType: "geometry.stroke",
      stylers: [
        {
          visibility: "on"
        },
        {
          color: "#F7EE24"
        }
      ]
    },
    {
      featureType: "administrative.province",
      elementType: "labels.text",
      stylers: [
        {
          visibility: "on"
        }
      ]
    },
    {
      featureType: "administrative.province",
      elementType: "labels.text.fill",
      stylers: [
        {
          visibility: "on"
        },
        {
          color: "#F7EE24"
        }
      ]
    },
    {
      featureType: "administrative.locality",
      elementType: "labels.text.fill",
      stylers: [
        {
          color: "#c4c4c4"
        }
      ]
    },
    {
      featureType: "administrative.neighborhood",
      elementType: "labels.text.fill",
      stylers: [
        {
          color: "#e5c163"
        }
      ]
    },
    {
      featureType: "landscape",
      elementType: "geometry",
      stylers: [
        {
          color: "#000000"
        },
        {
          lightness: 20
        }
      ]
    },
    {
      featureType: "poi",
      elementType: "geometry",
      stylers: [
        {
          color: "#000000"
        },
        {
          lightness: 21
        },
        {
          visibility: "on"
        }
      ]
    },
    {
      featureType: "poi.business",
      elementType: "geometry",
      stylers: [
        {
          visibility: "on"
        }
      ]
    },
    {
      featureType: "road.highway",
      elementType: "geometry.fill",
      stylers: [
        {
          color: "#e5c163"
        },
        {
          lightness: "0"
        }
      ]
    },
    {
      featureType: "road.highway",
      elementType: "geometry.stroke",
      stylers: [
        {
          visibility: "off"
        }
      ]
    },
    {
      featureType: "road.highway",
      elementType: "labels.text.fill",
      stylers: [
        {
          color: "#ffffff"
        }
      ]
    },
    {
      featureType: "road.highway",
      elementType: "labels.text.stroke",
      stylers: [
        {
          color: "#e5c163"
        }
      ]
    },
    {
      featureType: "road.arterial",
      elementType: "geometry",
      stylers: [
        {
          color: "#000000"
        },
        {
          lightness: 18
        }
      ]
    },
    {
      featureType: "road.arterial",
      elementType: "geometry.fill",
      stylers: [
        {
          color: "#575757"
        }
      ]
    },
    {
      featureType: "road.arterial",
      elementType: "labels.text.fill",
      stylers: [
        {
          color: "#ffffff"
        }
      ]
    },
    {
      featureType: "road.arterial",
      elementType: "labels.text.stroke",
      stylers: [
        {
          color: "#2c2c2c"
        }
      ]
    },
    {
      featureType: "road.local",
      elementType: "geometry",
      stylers: [
        {
          color: "#000000"
        },
        {
          lightness: 16
        }
      ]
    },
    {
      featureType: "road.local",
      elementType: "labels.text.fill",
      stylers: [
        {
          color: "#999999"
        }
      ]
    },
    {
      featureType: "transit",
      elementType: "geometry",
      stylers: [
        {
          color: "#000000"
        },
        {
          lightness: 19
        }
      ]
    },
    {
      featureType: "water",
      elementType: "geometry",
      stylers: [
        {
          color: "#000000"
        },
        {
          lightness: 17
        }
      ]
    }
  ]
};
function initMap() {
  map = new google.maps.Map(document.getElementById("map"), mapOptions);

  function createInfoWindows(name, description, pics) {
    // console.log(pics);
    return (this[name] = new google.maps.InfoWindow({
      content: getContent(name, description, pics)
    }));
  }

  function createMarkers(location, title, name) {
    this[name] = new google.maps.Marker({
      position: location,
      map: map,
      animation: google.maps.Animation.DROP,
      icon: "./assets/flag.png",
      title: title
    });
    return this[name];
  }

  const windows = locations.map(each => {
    return createInfoWindows(each.name, each.description, each.pics);
  });

  setTimeout(() => {
    let all = locations.map(one => {
      return createMarkers(one.location, one.name, one.name);
    });

    all.map((each, i) => {
      return each.addListener("click", function() {
        for (var j = 0; j < windows.length; j++) {
          windows[j].close();
        }
        windows[i].open(map, each);
      });
    });
  }, 1500);

  google.maps.event.addListener(map, "click", function(event) {
    for (var i = 0; i < windows.length; i++) {
      windows[i].close();
    }
  });
}

function getContent(name, description, pics) {
  let img = pics.map(pic => {
    return `<img class="image" src="./assets/${pic}">`;
  });

  var contentString = `<div id="content">
    <div id="siteNotice">
    </div>
    <h1 id="firstHeading" class="firstHeading">${name}</h1>
    <div id="bodyContent">
    <p>${description}</p>
    <div>
      ${img
        .toString()
        .split(",")
        .join("")}
    </div>
    </div>
    </div>`;
  return contentString;
}
