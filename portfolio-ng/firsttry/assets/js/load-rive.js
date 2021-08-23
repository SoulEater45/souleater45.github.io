function loadRive() {
  new rive.Rive({
      src: 'rive/earth.riv',
      // src: 'https://cdn.rive.app/animations/off_road_car_v7.riv',
      canvas: document.getElementById('canvas'),
      layout: new rive.Layout({fit: 'contain', alignment: 'center'}),
      autoplay: true,
    });
}