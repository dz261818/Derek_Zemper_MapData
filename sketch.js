// 2021 Best Suburbs to Live in America

const key = 'pk.eyJ1IjoiZHoyNjE4MTgiLCJhIjoiY2ttMHN2dnZhMThueTJvcGtsODh4NW91bCJ9.3aoTEefj1wucdskSB7_NtQ';

const options = {
  lat: 38.822591,
  lng: -97.350418,
  zoom: 2.9,
  style: 'mapbox://styles/dz261818/ckmb5pgs15ukg17m8vz6uhufi', 
  pitch: 0,
  
}

const mappa = new Mappa('MapboxGL', key);
let myMap;
let canvas;

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  myMap = mappa.tileMap(options);
  myMap.overlay(canvas);
  suburbs = loadTable('BestSuburbsFile.csv', 'csv', 'header');

 


}

function draw() {
  clear();
  
  noFill();
  stroke(255);
  strokeWeight(3);
  //zoom level variable
  const zoom = myMap.zoom();
  const chesterbrook = myMap.latLngToPixel(40.07572179,-75.45937146);

  if(dist(chesterbrook.x,chesterbrook.y,mouseX,mouseY)<100){
    textSize(32);
    noFill();


    
    fill(0, 100);
  }else{
    fill(255,100);
  }
  
  for(let i = 0; i < suburbs.getRowCount();i++){
    const latitude = Number(suburbs.getString(i, 'reclat'));
    const longitude = Number(suburbs.getString(i, 'reclong'));
    const pos = myMap.latLngToPixel(latitude, longitude);
    
    let place = suburbs.getString(i,'name');
    fill (0, 200);
    

    ellipse (pos.x, pos.y, 20, 20); 
   if(dist(pos.x, pos.y, mouseX, mouseY) <10){
     textSize(20)
     text(place, pos.x, pos.y);
   }
  }
  
  print(zoom);
}

$(window).bind('resize', function(e)
{
  if (window.RT) clearTimeout(window.RT);
  window.RT = setTimeout(function()
  {
    this.location.reload(false); /* false to get page from cache */
  }, 200);
});







