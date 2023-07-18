function logDeviceOrientationInfo(event) {
  const orientationInfoElement = document.getElementById('orientationInfo');
  orientationInfoElement.innerHTML = `
    <strong>Device Orientation Info:</strong><br>
    - Alpha: ${event.alpha}<br>
    - Beta: ${event.beta}<br>
    - Gamma: ${event.gamma}<br>
    - Absolute: ${event.absolute}
  `;
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

const requestButton = document.getElementById('requestButton');
requestButton.addEventListener('touchstart', () => {
  requestAccess();
});
