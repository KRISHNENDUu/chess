const localVideo = document.getElementById('localVideo');
const remoteVideo = document.getElementById('remoteVideo');

let localStream, peerConnection;
const config = {
    iceServers: [{ urls: 'stun:stun.l.google.com:19302' }]
};

// 1. Get local media stream
navigator.mediaDevices.getUserMedia({ video: true, audio: true })
    .then(stream => {
        localStream = stream;
        localVideo.srcObject = stream;
    })
    .catch(err => console.error('Error accessing media devices.', err));
