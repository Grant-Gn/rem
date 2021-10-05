function searchPlacesinArray(gazetteer, streets) {
  const indexes = []
  return gazetteer.names.filter(function (gazetteerItem) {
    const streetFoundIndex = streets.findIndex(function (street) {
      return street.match(gazetteerItem.name)
    })
    if (streetFoundIndex !== -1 && !indexes.includes(streetFoundIndex)) {
      indexes.push(streetFoundIndex)
      return true
    } else {
      return false
    }
  })
}

function displayMap() {
  const osmUrl = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
  const osmAttrib =
    'Map data &copy; <a href="https://openstreetmap.org">OpenStreetMap</a> contributors'
  const osm = new L.TileLayer(osmUrl, {
    minZoom: 12,
    maxZoom: 30,
    attribution: osmAttrib
  })
  myMap = new L.Map('map')
  myMap.setView(new L.LatLng(51.50853, -0.12574), 6)
  myMap.addLayer(osm)
  return myMap
}

async function loadJSON(url) {
  const promise = await fetch(url)
  const json = await promise.json()
  return json
}

function clearShapeFileFromMap(myMap, shapeFile) {
  if (shapeFile) {
    myMap.removeLayer(shapeFile)
  }
}

function clearOverlayFromMap(myMap, overlay) {
  if (overlay) {
    myMap.removeLayer(overlay)
  }
}

function showOverlayToMap(myMap) {
  const overlayUrl = './image.jpg'
  const overlaySW = new L.LatLng(51.504355, -0.124062)
  const overlayNE = new L.LatLng(51.516268, -0.083468)
  const overlbouds = [overlaySW, overlayNE]
  const overlayOptions = {
    opacity: 0.5,
    attribution: 'Agas map'
  }
  const overlay = L.imageOverlay(overlayUrl, overlbouds, overlayOptions)
  overlay.addTo(myMap)
  return overlay
}

document.addEventListener('DOMContentLoaded', async function () {
  const form = document.getElementById('form-load-zip')
  const input = document.getElementById('file-input')
  const clearMapBtn = document.getElementById('clear-map-button')
  const toggleOverlayBtn = document.getElementById('toggle-overlay-button')
  const filterDataBtn = document.getElementById('filter-data-button')
  let currentShapeFile = null
  let currentOverlay = null
  let currentLayers = []
  const myMap = displayMap()

  const jsonData = await Promise.all([
    loadJSON('./data.json'),
    loadJSON('./gazetteer.json')
  ])

  const streets = jsonData[0].streets
  const gazetteer = jsonData[1]

  const defStreets = searchPlacesinArray(gazetteer, streets)

  form.addEventListener('submit', function (event) {
    event.preventDefault()
    const file = input.files[0]
    const fileReader = new FileReader()
    fileReader.onload = function receiveBinary() {
      currentShapeFile = new L.Shapefile(fileReader.result)
      currentShapeFile.addTo(myMap)
    }
    fileReader.readAsArrayBuffer(file)
  })

  clearMapBtn.addEventListener('click', function () {
    clearShapeFileFromMap(myMap, currentShapeFile)
    currentShapeFile = null
  })

  toggleOverlayBtn.addEventListener('click', function () {
    // if (!currentOverlay) {
    //   currentOverlay = showOverlayToMap(myMap)
    // } else {
    //   clearOverlayFromMap(myMap, currentOverlay)
    //   currentOverlay = null
    // }
    console.log(currentLayers)
    for (const layer of currentLayers) {
      myMap.removeLayer(layer)
    }
  })

  filterDataBtn.addEventListener('click', function () {
    const filteredLayers = currentLayers.filter(function (layer) {
      return defStreets.some(function (streetInfo) {
        return streetInfo.title.match(layer.feature.properties.standard_1)
      })
    })
    for (const layer of filteredLayers) {
      layer.addTo(myMap)
    }
  })
})

// var bibu = "Clare Street"
// function filterData() {
//     for ( var item=58; item < (Object.keys(shapefile._layers).length);item++ ) {
//         if (shapefile._layers[item]) {
//             console.log('b');
//             for (var idem=0; idem < Object.keys(results).length;idem++) {
//                 if (shapefile._layers[item].feature.properties.standard_1 == results[idem][2]) {
//                     shapefile._layers[item].addTo(myMap);
//                     console.log(bibu);
//         } }
//         }
//     }
// }
