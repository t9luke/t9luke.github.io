function logDeviceOrientationInfo(event) {
  console.log('Device Orientation Info:');
  console.log(' - Alpha: ' + event.alpha);
  console.log(' - Beta: ' + event.beta);
  console.log(' - Gamma: ' + event.gamma);
  console.log(' - Absolute: ' + event.absolute);
}

function requestAccess() {
  if (typeof DeviceMotionEvent.requestPermission === 'function') {
    DeviceMotionEvent.requestPermission().then(permissionState => {
      if (permissionState === 'granted') {
        window.addEventListener('deviceorientation', logDeviceOrientationInfo);
      }
    }).catch(error => {
      console.error('Error requesting permission:', error);
    });
  } else {
    console.log('Device Orientation API not supported.');
  }
}

requestAccess();
